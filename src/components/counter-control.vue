<template>
  <div class="button-group counter-control">
    <btn @click.native="decrement" class="secondary shadowless">-</btn>
    <input type="text" pattern="[0-9]" v-model="localValue">
    <btn @click.native="increment" class="secondary shadowless">+</btn>
  </div>
</template>

<script>
  import Btn from './btn.vue';

  export default {
    props: {
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
    },

    methods: {
      decrement() {
        this.localValue--;

        if (this.localValue < 0) {
          this.localValue = 0;
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