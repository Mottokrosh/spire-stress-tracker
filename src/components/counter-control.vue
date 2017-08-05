<template>
  <div class="button-group counter-control">
    <btn @click.native="decrement" class="secondary">-</btn>
    <input type="number" v-model="value">
    <btn @click.native="increment" class="secondary">+</btn>
  </div>
</template>

<script>
  import Btn from './btn.vue';

  export default {
    props: {
      initial: Number,
      max: Number,
    },

    data() {
      return {
        value: this.initial || 0,
      };
    },

    components: {
      Btn,
    },

    methods: {
      decrement() {
        this.value--;

        if (this.value < 0) {
          this.value = 0;
        }

        this.$emit('change', this.value);
      },

      increment() {
        this.value++;

        if (this.max && this.value > this.max) {
          this.value = this.max;
        }

        this.$emit('change', this.value);
      },
    },
  };
</script>