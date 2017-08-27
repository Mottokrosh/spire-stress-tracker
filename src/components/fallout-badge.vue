<template>
  <tag v-if="value" @remove="$emit('remove')">
    <span class="fallout">{{ value }}</span>
    <span v-if="full" class="resistance">{{ fallout.resistance }}</span>
  </tag>
</template>

<script>
  import Tag from './tag.vue';

  export default {
    props: {
      allFallout: Array,
      falloutId: Number,
      resistance: String,
      full: Boolean,
    },

    components: {
      Tag,
    },

    computed: {
      fallout() {
        return this.allFallout && this.allFallout.find(f => f.id === this.falloutId);
      },

      value() {
        if (!this.resistance) {
          return this.fallout && this.fallout.name;
        }

        return this.fallout && this.fallout.resistance === this.resistance
          ? this.fallout.name
          : null;
      },
    },
  }
</script>