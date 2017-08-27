<template>
  <button :type="type" :class="classes">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      bright: Boolean,
    },

    data() {
      return {
        type: 'button',
      };
    },

    computed: {
      classes() {
        return {
          'btn': true,
          'bright': this.bright,
        };
      },
    },
  };
</script>