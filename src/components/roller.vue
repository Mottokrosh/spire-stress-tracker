<template>
  <motion :value="offset" spring="wobbly">
    <template scope="props">
      <div :style="{ transform: `translateX(${props.value}%)` }" :class="classes">
        <nav>
          <btn @click.native="close" class="close has-icon backgroundless">
            <chevron-left-icon></chevron-left-icon>
          </btn>
        </nav>
        <div class="roller-content">
          <h2>Roll {{ resistance }} Stress <small>For {{ name }}</small></h2>
          <div class="dice">
            <div class="d1">
              <div :class="d1Classes">
                <btn class="backgroundless" @click.native="roll(1)">{{ d1.result === null ? '1' : d1.result }}</btn>
              </div>
            </div>
            <div class="d3">
              <div :class="d3Classes">
                <btn class="backgroundless" @click.native="roll(3)">{{ d3.result === null ? 'd3' : d3.result }}</btn>
              </div>
            </div>
            <div class="d6">
              <div :class="d6Classes">
                <btn class="backgroundless" @click.native="roll(6)">{{ d6.result === null ? 'd6' : d6.result }}</btn>
              </div>
            </div>
            <div class="d8">
              <div :class="d8Classes">
                <btn class="backgroundless" @click.native="roll(8)">{{ d8.result === null ? 'd8' : d8.result }}</btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </motion>
</template>

<script>
  import { Motion } from 'vue-motion';
  import { ChevronLeftIcon, XIcon } from 'vue-feather-icons';

  export default {
    props: ['show'],

    components: {
      ChevronLeftIcon,
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
      };
    },

    computed: {
      character() {
        return this.show && this.show.character ? this.show.character : '';
      },

      resistance() {
        return this.show && this.show.resistance ? this.show.resistance : '';
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
        };
      },

      d3Classes() {
        return {
          die: true,
          flipped: this.d3.flipped,
        };
      },

      d6Classes() {
        return {
          die: true,
          flipped: this.d6.flipped,
        };
      },

      d8Classes() {
        return {
          die: true,
          flipped: this.d8.flipped,
        };
      },
    },

    methods: {
      close() {
        setTimeout(this.resetDice, 250);
        this.$emit('close');
      },

      resetDice() {
        this.d1 = { flipped: false, result: null };
        this.d3 = { flipped: false, result: null };
        this.d6 = { flipped: false, result: null };
        this.d8 = { flipped: false, result: null };
      },

      roll(die) {
        const name = 'd' + die;

        this[name].flipped = !this[name].flipped;

        setTimeout(() => {
          this[name].result = this.getRandomIntInclusive(1, die);
        }, 250);
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