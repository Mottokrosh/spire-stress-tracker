<template>
  <div :class="classes">
    <btn @click.native="$emit('close')" class="close">&times;</btn>
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

    watch: {
      show(active) {
        if (active) {
          document.body.classList.add('roller-open');
        } else {
          document.body.classList.remove('roller-open');
        }
      }
    },
  };
</script>