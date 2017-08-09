<template>
  <motion :value="offset" spring="wobbly">
    <template scope="props">
      <div :style="{ transform: `translateX(${props.value}%)` }" :class="classes">
        <nav>
          <btn @click.native="$emit('close')" class="close has-icon backgroundless">
            <chevron-left-icon></chevron-left-icon>
          </btn>
        </nav>
        <div class="roller-content">
          <h2>Roll {{ resistance }} Stress <small>For {{ name }}</small></h2>
          <div class="dice">
            <div class="d1">
              <div :class="d1Classes">
                <btn class="backgroundless" @click.native="roll(1)">1</btn>
              </div>
            </div>
            <div class="d3">
              <div :class="d3Classes">
                <btn class="backgroundless" @click.native="roll(3)">d3</btn>
              </div>
            </div>
            <div class="d6">
              <div :class="d6Classes">
                <btn class="backgroundless" @click.native="roll(6)">d6</btn>
              </div>
            </div>
            <div class="d8">
              <div :class="d8Classes">
                <btn class="backgroundless" @click.native="roll(8)">d8</btn>
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
        d1: { flipped: false },
        d3: { flipped: false },
        d6: { flipped: false },
        d8: { flipped: false },
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
      roll(die) {
        this['d' + die].flipped = !this['d' + die].flipped;
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