<template>
  <div class="button-group counter-control">
    <btn @click.native="decrement" class="secondary shadowless has-icon"><minus-icon></minus-icon></btn>
    <input type="text" pattern="[0-9]" v-model="localValue">
    <btn @click.native="increment" class="secondary shadowless has-icon"><plus-icon></plus-icon></btn>
  </div>
</template>

<script>
  import Btn from './btn.vue';
  import { MinusIcon, PlusIcon } from 'vue-feather-icons';

  export default {
    props: {
      min: {
        type: Number,
        default: 0,
      },
      max: Number,
      value: Number,
    },

    data() {
      return {
        localValue: this.value,
      };
    },

    components: {
      Btn,
      MinusIcon,
      PlusIcon,
    },

    methods: {
      decrement() {
        this.localValue--;

        if (this.localValue < this.min) {
          this.localValue = this.min;
        }

        this.$emit('update:value', this.localValue);
      },

      increment() {
        this.localValue++;

        if (this.max && this.localValue > this.max) {
          this.localValue = this.max;
        }

        this.$emit('update:value', this.localValue);
      },
    },
  };
</script>