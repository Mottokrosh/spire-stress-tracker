<template>
  <span :class="classes">
    <span class="text"><slot></slot></span>
    <btn class="backgroundless has-icon" aria-label="Remove tag" @click.native="$emit('remove')"><x-icon></x-icon></btn>
  </span>
</template>

<script>
  import { XIcon } from 'vue-feather-icons';

  export default {
    components: {
      XIcon,
    },

    computed: {
      classes() {
        return {
          tag: true,
        };
      },
    },
  };
</script>