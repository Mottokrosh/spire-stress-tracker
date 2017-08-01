<template>
  <div class="estresso">
    <roller :show="showRoller" @close="showRoller = false"></roller>
    <btn @click.native="showRoller = true">Open</btn>
    <ul>
      <li v-for="c in store.characters">
        <h2>{{ c.name }}</h2>
      </li>
    </ul>

    <form>
      <div class="input-row">
        <label for="new-character-name">Name</label>
        <input type="text" name="new-character-name" id="new-character-name" v-model="newCharacter.name">
      </div>
      <div class="input-row">
        <btn>Add</btn>
      </div>
    </form>
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
        newCharacter: {
          name: '',
          resistances: [],
        },
      };
    },

    components: {
      Roller,
    },
  };
</script>