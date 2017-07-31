<template>
  <div>
    <sidebar></sidebar>
    <ul>
      <li v-for="c in store.characters">
        <h2>{{ c.name }}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
  import Sidebar from './sidebar.vue';
  import Store from '../store';

  export default {
    data() {
      return {
        store: Store.load(),
      };
    },

    components: {
      Sidebar,
    },
  };
</script>