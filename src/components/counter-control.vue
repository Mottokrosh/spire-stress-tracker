<template>
  <div class="button-group counter-control">
    <btn @click.native="decrement" class="secondary shadowless has-icon"><minus-icon></minus-icon></btn>
    <input type="text" pattern="[0-9]" :value="localValue" @input="updateValue($event.target.value)">
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

        this.$emit('input', this.localValue);
      },

      increment() {
        this.localValue++;

        if (this.max && this.localValue > this.max) {
          this.localValue = this.max;
        }

        this.$emit('input', this.localValue);
      },

      updateValue(val) {
        this.localValue = parseInt(val, 10);
        this.$emit('input', this.localValue);
      },
    },

    watch: {
      value(newVal) {
        this.localValue = newVal;
      }
    },
  };
</script>