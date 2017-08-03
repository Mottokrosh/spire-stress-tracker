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
        <label for="resistance-blood">Blood</label>
        <counter-control id="resistance-blood" @change="(val) => { newCharacter.resistances.blood = val }"></counter-control>
      </div>
      <div class="input-row">
        <label for="resistance-mind">Mind</label>
        <counter-control id="resistance-mind" @change="(val) => { newCharacter.resistances.mind = val }"></counter-control>
      </div>
      <div class="input-row">
        <label for="resistance-shadow">Shadow</label>
        <counter-control id="resistance-shadow" @change="(val) => { newCharacter.resistances.shadow = val }"></counter-control>
      </div>
      <div class="input-row">
        <label for="resistance-silver">Silver</label>
        <counter-control id="resistance-silver" @change="(val) => { newCharacter.resistances.silver = val }"></counter-control>
      </div>
      <div class="input-row">
        <label for="resistance-reputation">Reputation</label>
        <counter-control id="resistance-reputation" @change="(val) => { newCharacter.resistances.reputation = val }"></counter-control>
      </div>
      <div class="input-row">
        <btn>Add</btn>
      </div>
    </form>

  </div>
</template>

<script>
  import CounterControl from './counter-control.vue';
  import Roller from './roller.vue';
  import Store from '../store';

  export default {
    data() {
      return {
        store: Store.load(),
        showRoller: false,
        newCharacter: {
          name: '',
          resistances: {
            blood: 0,
            mind: 0,
            shadow: 0,
            silver: 0,
            reputation: 0,
          },
        },
      };
    },

    components: {
      CounterControl,
      Roller,
    },
  };
</script>