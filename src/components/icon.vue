<template>
  <svg :class="classes">
    <use :xlink:href="iconId"></use>
  </svg>
</template>

<script>
  export default {
    props: {
      id: String,
      button: Boolean,
      reversed: Boolean,
    },

    computed: {
      iconId() {
        return '#icon-' + this.id;
      },

      classes() {
        return {
          'icon': true,
          ['icon-' + this.id]: true,
          'icon-button': this.button,
          'reversed': this.reversed,
        };
      },
    },
  };
</script>