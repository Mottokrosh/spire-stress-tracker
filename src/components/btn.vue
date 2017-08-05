<template>
  <button :type="type" :class="classes">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    data() {
      return {
        type: 'button',
      };
    },

    computed: {
      classes() {
        return {
          btn: true,
        };
      },
    },
  };
</script>