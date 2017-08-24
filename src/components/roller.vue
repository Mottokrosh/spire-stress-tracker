<template>
  <motion :value="offset" spring="wobbly">
    <template scope="props">
      <div :style="{ transform: `translateX(${props.value}%)` }" :class="classes">

        <nav>
          <btn @click.native="close" class="close has-icon backgroundless">
            <chevron-left-icon></chevron-left-icon>
          </btn>
        </nav>

        <div v-if="options" class="roller-content">
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
            <span class="d10">{{ falloutRollResult }}</span> Fallout Roll Result. Total Stress: {{ totalStress }}.
          </div>

          <motion :value="falloutOffset" spring="wobbly">
            <template scope="props">
              <div class="fallout" :style="{ transform: `translateX(${props.value}%)` }">
                <h3>Fallout</h3>
                <h4>{{ falloutLevel }}</h4>
              </div>
            </template>
          </motion>

          <div v-if="falloutOccurred" class="fallout-items">
            <fallout v-for="(f, index) in falloutChoices" :key="index"
              :details="f"
              :character="character"
              @show-details="showModal = f"
              @tick="newFalloutAdd(f)"
              @untick="newFalloutRemove(f)"
            ></fallout>
          </div>

          <nav class="actions">
            <btn class="secondary" :disabled="!result" @click.native="reset">Reset</btn>
            <btn :disabled="!result" @click.native="apply">Apply Results</btn>
          </nav>

        </div>

        <modal :show="showModal" @close="showModal = false"
          :title="showModal.name"
          :sub-title="showModal.resistance"
          :buttons="['Close']"
        >
          <template scope="body">
            <p>{{ showModal.description }}</p>
            <div class="fallout-level">
              <icon id="drop" v-for="i in showModal.severity" :key="i"></icon>
              <span>{{ showModal.level }}</span>
            </div>
          </template>
        </modal>

      </div>
    </template>
  </motion>
</template>

<script>
  import { Motion } from 'vue-motion';
  import { ChevronLeftIcon, XIcon } from 'vue-feather-icons';
  import firstBy from 'thenby';
  import Store from '../store';
  import Helpers from '../helpers.mixin';
  import Brutal from './brutal.vue';
  import Icon from './icon.vue';
  import Fallout from './fallout.vue';
  import Modal from './modal.vue';

  export default {
    props: ['options', 'fallout'],

    components: {
      Brutal,
      ChevronLeftIcon,
      Fallout,
      Icon,
      Modal,
      Motion,
      XIcon,
    },

    mixins: [Helpers],

    data() {
      return {
        resistances: Store.resistances,
        offset: 100,
        showModal: false,
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
        totalStress: 0,
        newFallout: [],
        characterCopy: null,
      };
    },

    computed: {
      character() {
        if (!this.options) {
          return {};
        }

        if (!this.characterCopy) {
          this.characterCopy = this.clone(this.options.character);
        }

        return this.characterCopy;
      },

      resistance() {
        return this.options ? this.options.resistance : '';
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
          open: this.options,
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
        this.totalStress = 0;
        this.newFallout = this.character.fallout || [];
        this.characterCopy = this.options ? this.clone(this.options.character) : null;
      },

      roll(die) {
        if (this.result) return;

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

        let stressedResistances = [];

        this.character[this.resistance].stress += this.result;

        this.resistances.forEach((res) => {
          if (this.character[res].stress > 0) {
            this.totalStress += this.character[res].stress;
            stressedResistances.push(res);
          }
        });

        if (this.falloutRollResult < this.totalStress) {
          document.body.classList.add('shake', 'shake-constant');
          this.falloutOccurred = true;
          this.falloutOffset = 0;

          if (this.totalStress >= 2 && this.totalStress <= 4) {
            this.falloutLevel = 'minor';
            this.falloutChoices = this.fallout.filter((f) => {
              return f.level === 'minor'
                && stressedResistances.indexOf(f.resistance) !== -1;
            });

          } else if (this.totalStress >= 5 && this.totalStress <= 8) {
            this.falloutLevel = 'major';
            this.falloutChoices = this.fallout.filter((f) => {
              return (f.level === 'minor' || f.level === 'major')
                && stressedResistances.indexOf(f.resistance) !== -1;
            });

          } else if (this.totalStress >= 9) {
            this.falloutLevel = 'severe';
            this.falloutChoices = this.fallout.filter((f) => {
              return (f.level === 'major' || f.level === 'severe')
                && stressedResistances.indexOf(f.resistance) !== -1;
            });
          }

          // sort fallout by severity, descending
          this.falloutChoices.sort(
            firstBy('severity', -1)
              .thenBy('resistance')
              .thenBy('name')
          );

          // restrict suggestion to this level
          const falloutSuggestions = this.falloutChoices.filter(
            f => f.level === this.falloutLevel &&
            f.resistance === this.resistance
          );

          // pick one
          const falloutSuggestion = falloutSuggestions[this.getRandomIntInclusive(0, falloutSuggestions.length - 1)];
          this.$nextTick(() => {
            document.querySelector('.fallout-id-' + falloutSuggestion.id).classList.add('final-suggestion');                
          });

          setTimeout(() => {
            document.body.classList.remove('shake', 'shake-constant');
          }, 900);

        } else {
          this.falloutOccurred = false;
        }
      },

      newFalloutAdd(f) {
        if (this.newFallout.indexOf(f.id) === -1) {
          this.newFallout.push(f.id);
        }
      },

      newFalloutRemove(f) {
        const index = this.newFallout.indexOf(f.id);
        if (index !== -1) {
          this.newFallout.splice(index, 1);
        }
      },

      apply() {
        /*let newStress = this.stress + this.result;

        if (this.falloutOccurred) {
          if (this.falloutLevel === 'minor') {
            newStress = newStress - 3;
          } else if (this.falloutLevel === 'major') {
            newStress = newStress - 5;
          } else if (this.falloutLevel === 'severe') {
            newStress = newStress - 7;
          }
        }*/

        this.$emit('update', {
          character: this.options.character,
          resistance: this.resistance,
          stress: this.stress,
          fallout: this.newFallout,
        });

        this.close();
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

    created() {
      this.$watch('character.fallout', (val) => {
        this.newFallout = val || [];
      });
    },

    watch: {
      options(value) {
        if (value) {
          document.body.classList.add('roller-open');
          this.offset = 0;
        } else {
          document.body.classList.remove('roller-open');
          this.offset = 100;
        }
      },
    },
  };
</script>