<template>
  <tag v-if="value" @remove="$emit('remove')">{{ value }}</tag>
</template>

<script>
  import Tag from './tag.vue';

  export default {
    props: {
      allFallout: Array,
      falloutId: Number,
      resistance: String,
    },

    components: {
      Tag,
    },

    data() {
      return {
        //
      };
    },

    computed: {
      fallout() {
        return this.allFallout && this.allFallout.find(f => f.id === this.falloutId);
      },

      value() {
        return this.fallout && this.fallout.resistance === this.resistance
          ? this.fallout.name
          : null;
      },
    },
  }
</script>