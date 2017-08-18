<template>
  <select v-model="selected" class="brutal" aria-label="Brutal">
    <option value="0">&times; 0</option>
    <option value="1">&times; 1</option>
    <option value="2">&times; 2</option>
    <option value="3">&times; 3</option>
    <option value="4">&times; 4</option>
    <option value="5">&times; 5</option>
  </select>
</template>

<script>

  export default {
    props: ['value'],

    data() {
      return {
        selected: 0,
      };
    },

    watch: {
      selected(val) {
        this.$emit('input', val);
      }
    },
  };
</script>