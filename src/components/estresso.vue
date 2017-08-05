<template>
  <div class="estresso">

    <roller :show="showRoller" @close="showRoller = false"></roller>

    <div class="column">
      <btn @click.native="showRoller = true">Open</btn>
      <ul>
        <li v-for="c in store.characters">
          <h2>{{ c.name }}</h2>
        </li>
      </ul>
    </div>

    <form class="new-character">
      <div class="column">
        <h2>New Character</h2>

        <div class="input-row">
          <label for="new-character-name">Name</label>
          <input type="text" name="new-character-name" id="new-character-name" class="new-character-name" v-model="newCharacter.name">
        </div>

        <h3>Free Slots</h3>

        <div class="input-row">
          <label for="resistance-blood">Blood</label>
          <counter-control id="resistance-blood" @change="(val) => { newCharacter.blood.freeSlots = val }"></counter-control>
        </div>
        <div class="input-row">
          <label for="resistance-mind">Mind</label>
          <counter-control id="resistance-mind" @change="(val) => { newCharacter.mind.freeSlots = val }"></counter-control>
        </div>
        <div class="input-row">
          <label for="resistance-shadow">Shadow</label>
          <counter-control id="resistance-shadow" @change="(val) => { newCharacter.shadow.freeSlots = val }"></counter-control>
        </div>
        <div class="input-row">
          <label for="resistance-silver">Silver</label>
          <counter-control id="resistance-silver" @change="(val) => { newCharacter.silver.freeSlots = val }"></counter-control>
        </div>
        <div class="input-row">
          <label for="resistance-reputation">Reputation</label>
          <counter-control id="resistance-reputation" @change="(val) => { newCharacter.reputation.freeSlots = val }"></counter-control>
        </div>

        <div class="input-row action-row">
          <btn class="tilded">Add</btn>
        </div>
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
          blood: { freeSlots: 0, stress: 0 },
          mind: { freeSlots: 0, stress: 0 },
          shadow: { freeSlots: 0, stress: 0 },
          silver: { freeSlots: 0, stress: 0 },
          reputation: { freeSlots: 0, stress: 0 },
        },
      };
    },

    components: {
      CounterControl,
      Roller,
    },
  };
</script>