<template>
  <select v-model="selected" class="small">
    <option value="0">Brutal &times; 0</option>
    <option value="1">Brutal &times; 1</option>
    <option value="2">Brutal &times; 2</option>
    <option value="3">Brutal &times; 3</option>
    <option value="4">Brutal &times; 4</option>
    <option value="5">Brutal &times; 5</option>
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