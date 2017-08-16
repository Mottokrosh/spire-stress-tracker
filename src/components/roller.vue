<template>
  <motion :value="offset" spring="wobbly">
    <template scope="props">
      <div :style="{ transform: `translateX(${props.value}%)` }" :class="classes">

        <nav>
          <btn @click.native="close" class="close has-icon backgroundless">
            <chevron-left-icon></chevron-left-icon>
          </btn>
        </nav>

        <div v-if="show && show.character" class="roller-content">
          <h2>Roll {{ resistance }} Stress <small>For {{ name }}</small></h2>

          <div class="dice">
            <div class="d1">
              <div class="brutal-placeholder"></div>
              <div :class="d1Classes">
                <btn class="backgroundless" @click.native="roll(1)" :disabled="rolling && rolling !== 'd1'">
                  {{ d1.result === null ? '1' : d1.result }}
                </btn>
              </div>
            </div>
            <div class="d3">
              <brutal v-model="d3.brutal"></brutal>
              <div :class="d3Classes">
                <btn class="backgroundless" @click.native="roll(3)" :disabled="rolling && rolling !== 'd3'">
                  {{ d3.result === null ? 'd3' : d3.result }}
                </btn>
              </div>
            </div>
            <div class="d6">
              <brutal v-model="d6.brutal"></brutal>
              <div :class="d6Classes">
                <btn class="backgroundless" @click.native="roll(6)" :disabled="rolling && rolling !== 'd6'">
                  {{ d6.result === null ? 'd6' : d6.result }}
                </btn>
              </div>
            </div>
            <div class="d8">
              <brutal v-model="d8.brutal"></brutal>
              <div :class="d8Classes">
                <btn class="backgroundless" @click.native="roll(8)" :disabled="rolling && rolling !== 'd8'">
                  {{ d8.result === null ? 'd8' : d8.result }}
                </btn>
              </div>
            </div>
          </div>

          <div :class="{ 'fallout-rolling': true, 'show': falloutRollResult }">
            <span class="d10">{{ falloutRollResult }}</span> Fallout Roll Result. Effective Stress: {{ stress - freeSlots + result }}.
          </div>

          <motion :value="falloutOffset" spring="wobbly">
            <template scope="props">
              <div class="fallout" :style="{ transform: `translateX(${props.value}%)` }">
                <h3>Fallout</h3>
                <h4>{{ falloutLevel }}</h4>
              </div>
            </template>
          </motion>

          <code style="margin-top: 1rem; display: block;"><pre style="overflow-x: auto;">{{ falloutChoices }}</pre></code>

          <nav class="actions">
            <btn class="secondary" :disabled="!result" @click.native="reset">Reset</btn>
            <btn :disabled="!result" @click.native="apply">Apply Results</btn>
          </nav>

        </div>

      </div>
    </template>
  </motion>
</template>

<script>
  import { Motion } from 'vue-motion';
  import { ChevronLeftIcon, XIcon } from 'vue-feather-icons';
  import Brutal from './brutal.vue';
  import Icon from './icon.vue';

  export default {
    props: ['show', 'fallout'],

    components: {
      Brutal,
      ChevronLeftIcon,
      Icon,
      motion: Motion,
      XIcon,
    },

    data() {
      return {
        offset: 100,
        falloutOffset: 100,
        d1: { flipped: false, result: null, brutal: 0 },
        d3: { flipped: false, result: null, brutal: 0 },
        d6: { flipped: false, result: null, brutal: 0 },
        d8: { flipped: false, result: null, brutal: 0 },
        result: null,
        falloutRollResult: null,
        falloutOccurred: null,
        falloutLevel: null,
        falloutChoices: null,
        rolling: null,
      };
    },

    computed: {
      character() {
        return this.show && this.show.character ? this.show.character : {};
      },

      resistance() {
        return this.show && this.show.resistance ? this.show.resistance : '';
      },

      stress() {
        return this.character && this.character[this.resistance] ? this.character[this.resistance].stress : 0;
      },

      freeSlots() {
        return this.character && this.character[this.resistance] ? this.character[this.resistance].freeSlots : 0;
      },

      name() {
        return this.character ? this.character.name : '';
      },

      classes() {
        return {
          roller: true,
          open: this.show,
        };
      },

      d1Classes() {
        return {
          die: true,
          flipped: this.d1.flipped,
          disabled: this.rolling && this.rolling !== 'd1',
        };
      },

      d3Classes() {
        return {
          die: true,
          flipped: this.d3.flipped,
          disabled: this.rolling && this.rolling !== 'd3',
        };
      },

      d6Classes() {
        return {
          die: true,
          flipped: this.d6.flipped,
          disabled: this.rolling && this.rolling !== 'd6',
        };
      },

      d8Classes() {
        return {
          die: true,
          flipped: this.d8.flipped,
          disabled: this.rolling && this.rolling !== 'd8',
        };
      },
    },

    methods: {
      close() {
        setTimeout(this.reset, 250);
        this.$emit('close');
      },

      reset() {
        this.d1 = { flipped: false, result: null, brutal: 0 };
        this.d3 = { flipped: false, result: null, brutal: 0 };
        this.d6 = { flipped: false, result: null, brutal: 0 };
        this.d8 = { flipped: false, result: null, brutal: 0 };
        this.result = null;
        this.falloutRollResult = null;
        this.falloutOccurred = null;
        this.falloutLevel = null;
        this.falloutChoices = null;
        this.falloutOffset = 100;
        this.rolling = false;
      },

      roll(die) {
        const name = 'd' + die;

        this[name].flipped = !this[name].flipped;
        this.rolling = name;

        setTimeout(() => {
          let results = [];

          for (let i = 0; i <= this[name].brutal; i++) {
            let r = this.getRandomIntInclusive(1, die);
            results.push(r);
          }

          this[name].result = Math.max.apply(Math, results);
          this.result = this[name].result;
        }, 375);

        setTimeout(this.checkForFallout, 750);
      },

      checkForFallout() {
        this.falloutRollResult = this.getRandomIntInclusive(1, 10);
        const applicableStress = (this.stress - this.freeSlots) + this.result;

        if (this.falloutRollResult < applicableStress) {
          document.body.classList.add('shake', 'shake-constant');
          this.falloutOccurred = true;
          this.falloutOffset = 0;

          if (applicableStress >= 2 && applicableStress <= 4) {
            this.falloutLevel = 'minor';
            this.falloutChoices = this.fallout.filter((f) => {
              return f.level === 'minor' && f.resistance === this.resistance;
            });
          } else if (applicableStress >= 5 && applicableStress <= 8) {
            this.falloutLevel = 'major';
            this.falloutChoices = this.fallout.filter((f) => {
              return f.level === 'major' && f.resistance === this.resistance;
            });
          } else if (applicableStress >= 9) {
            this.falloutLevel = 'severe';
            this.falloutChoices = this.fallout.filter((f) => {
              return f.level === 'severe' && f.resistance === this.resistance;
            });
          }

          setTimeout(() => {
            document.body.classList.remove('shake', 'shake-constant');
          }, 900);

        } else {
          this.falloutOccurred = false;
        }
      },

      apply() {
        // adjust stress
        // on fallout, remove some stress (3/5/7)
        // close
        window.alert('WIP');
      },

      getRandomIntInclusive(min, max) {
        const randomBuffer = new Uint32Array(1);

        window.crypto.getRandomValues(randomBuffer);

        let randomNumber = randomBuffer[0] / (0xffffffff + 1);

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(randomNumber * (max - min + 1)) + min;
      },
    },

    watch: {
      show(active) {
        if (active) {
          document.body.classList.add('roller-open');
          this.offset = 0;
        } else {
          document.body.classList.remove('roller-open');
          this.offset = 100;
        }
      }
    },
  };
</script>