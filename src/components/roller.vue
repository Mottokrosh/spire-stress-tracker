<template>
  <div :class="classes">
    <btn @click.native="$emit('close')">&times;</btn>
    <div class="roller-content">
      <p>Once upon a midnight dreary...</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      show: Boolean,
    },

    computed: {
      classes() {
        return {
          roller: true,
          open: this.show,
        };
      },
    },
  };
</script>