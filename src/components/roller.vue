<template>
  <motion :value="offset" spring="wobbly">
    <template scope="props">
      <div :style="{ transform: `translateX(${props.value}%)` }" :class="classes">

        <nav>
          <btn @click.native="close" class="close has-icon backgroundless">
            <chevron-left-icon></chevron-left-icon>
          </btn>
        </nav>

        <transition name="fade">
          <div v-if="show && show.character" class="roller-content">
            <h2>Roll {{ resistance }} Stress <small>For {{ name }}</small></h2>

            <div class="dice">
              <div class="d1">
                <div :class="d1Classes">
                  <btn class="backgroundless" @click.native="roll(1)" :disabled="rolling && rolling !== 'd1'">
                    {{ d1.result === null ? '1' : d1.result }}
                  </btn>
                </div>
              </div>
              <div class="d3">
                <div :class="d3Classes">
                  <btn class="backgroundless" @click.native="roll(3)" :disabled="rolling && rolling !== 'd3'">
                    {{ d3.result === null ? 'd3' : d3.result }}
                  </btn>
                </div>
              </div>
              <div class="d6">
                <div :class="d6Classes">
                  <btn class="backgroundless" @click.native="roll(6)" :disabled="rolling && rolling !== 'd6'">
                    {{ d6.result === null ? 'd6' : d6.result }}
                  </btn>
                </div>
              </div>
              <div class="d8">
                <div :class="d8Classes">
                  <btn class="backgroundless" @click.native="roll(8)" :disabled="rolling && rolling !== 'd8'">
                    {{ d8.result === null ? 'd8' : d8.result }}
                  </btn>
                </div>
              </div>
            </div>

            <transition name="fade">
              <div class="fallout" v-if="falloutOccurred">
                <h3>
                  <icon id="fallout"></icon>
                  <span>Fallout</span>
                  <icon id="fallout" reversed></icon>
                </h3>

                <div class="fallout-roll-result">
                  <p><span>Threshold: {{ stress - freeSlots }}</span> = <span>Stress: {{ stress }}</span> &minus; <span>Free Slots: {{ freeSlots }}</span></p>
                  <p><span>Fallout Roll Result: {{ falloutRollResult }}</span></p>
                </div>
              </div>
            </transition>

            <nav class="actions">
              <btn class="secondary" :disabled="!result" @click.native="reset">Reset</btn>
              <btn :disabled="!result">Apply Results</btn>
            </nav>

          </div>
        </transition>

      </div>
    </template>
  </motion>
</template>

<script>
  import { Motion } from 'vue-motion';
  import { ChevronLeftIcon, XIcon } from 'vue-feather-icons';
  import Icon from './icon.vue';

  export default {
    props: ['show'],

    components: {
      ChevronLeftIcon,
      Icon,
      motion: Motion,
      XIcon,
    },

    data() {
      return {
        offset: 100,
        d1: { flipped: false, result: null },
        d3: { flipped: false, result: null },
        d6: { flipped: false, result: null },
        d8: { flipped: false, result: null },
        result: null,
        falloutRollResult: null,
        falloutOccurred: null,
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
        this.d1 = { flipped: false, result: null };
        this.d3 = { flipped: false, result: null };
        this.d6 = { flipped: false, result: null };
        this.d8 = { flipped: false, result: null };
        this.result = null;
        this.falloutRollResult = null;
        this.falloutOccurred = null;
        this.rolling = false;
      },

      roll(die) {
        const name = 'd' + die;

        this[name].flipped = !this[name].flipped;
        this.rolling = name;

        setTimeout(() => {
          this[name].result = this.getRandomIntInclusive(1, die);
          this.result = this[name].result;
        }, 375);

        setTimeout(this.checkForFallout, 750);
      },

      checkForFallout() {
        this.falloutRollResult = this.getRandomIntInclusive(1, 10);

        if (this.falloutRollResult < this.stress - this.freeSlots) {
          this.falloutOccurred = true;
          document.body.classList.add('shake', 'shake-constant');

          setTimeout(() => {
            document.body.classList.remove('shake', 'shake-constant');
          }, 900);

        } else {
          this.falloutOccurred = false;
        }
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