<template>
  <div :class="'die-container d' + sides">
    <brutal v-if="brutal" v-model="localBrutal"></brutal>
    <div :class="classes">
      <btn class="backgroundless" @click.native="roll" :disabled="rolling">
        {{ result === null ? 'd' + this.sides : result }}
      </btn>
    </div>
  </div>
</template>

<script>
  import Helpers from '../helpers.mixin';
  import Brutal from './brutal.vue';
  import Btn from './btn.vue';

  export default {
    props: {
      brutal: {
        type: Number,
        default: 0,
      },
      sides: {
        type: Number,
        default: 6,
      },
    },

    components: {
      Brutal,
      Btn,
    },

    mixins: [Helpers],

    data() {
      return {
        flipped: false,
        disabled: false,
        rolling: false,
        result: null,
        localBrutal: this.brutal,
      };
    },

    computed: {
      classes() {
        return {
          die: true,
          flipped: this.flipped,
          disabled: this.rolling,
        };
      },
    },

    methods: {
      roll() {
        const name = 'd' + this.sides;

        this.flipped = !this.flipped;
        this.rolling = true;

        setTimeout(() => {
          let results = [];

          for (let i = 0; i <= this.brutal; i++) {
            let r = this.getRandomIntInclusive(1, this.sides);
            results.push(r);
          }

          this.result = Math.max.apply(Math, results);
          this.rolling = false;
        }, 375);
      },
    },
  };
</script>