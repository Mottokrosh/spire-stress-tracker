<template>
  <motion :value="offset" spring="wobbly">
    <template scope="props">
      <div :style="{ transform: `translateX(${props.value}%)` }" :class="classes">

        <div class="adjuster-content">
          <h2>Adjuster <small>For Name</small></h2>

          <nav class="actions">
            <btn class="secondary">Button</btn>
            <btn>Button</btn>
          </nav>

        </div>

        <nav>
          <btn @click.native="close" class="close has-icon backgroundless">
            <chevron-right-icon></chevron-right-icon>
          </btn>
        </nav>

      </div>
    </template>
  </motion>
</template>

<script>
  import { Motion } from 'vue-motion';
  import { ChevronRightIcon, XIcon } from 'vue-feather-icons';
  import Store from '../store';
  import Helpers from '../helpers.mixin';
  import Icon from './icon.vue';

  export default {
    props: ['options'],

    components: {
      ChevronRightIcon,
      Icon,
      Motion,
      XIcon,
    },

    mixins: [Helpers],

    data() {
      return {
        resistances: Store.resistances,
        offset: -100,
      };
    },

    computed: {
      classes() {
        return {
          'adjuster': true,
        };
      },
    },

    methods: {
      close() {
        setTimeout(this.reset, 250);
        this.$emit('close');
      },

      reset() {
        //
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
      options(value) {
        if (value) {
          document.body.classList.add('adjuster-open');
          this.offset = 0;
        } else {
          document.body.classList.remove('adjuster-open');
          this.offset = -100;
        }
      },
    },

  };
</script>