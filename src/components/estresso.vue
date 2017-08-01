<template>
  <div>
    <roller :show="showRoller" @close="showRoller = false"></roller>
    <btn @click.native="showRoller = true">Open</btn>
    <ul>
      <li v-for="c in store.characters">
        <h2>{{ c.name }}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
  import Roller from './roller.vue';
  import Store from '../store';

  export default {
    data() {
      return {
        store: Store.load(),
        showRoller: false,
      };
    },

    components: {
      Roller,
    },
  };
</script>