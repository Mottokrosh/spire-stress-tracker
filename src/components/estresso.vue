<template>
  <div class="estresso">

    <roller :show="showRoller" @close="showRoller = false"></roller>

    <header>
      <div class="column">
        <h1>Spire Stress Tracker</h1>
      </div>
    </header>

    <!-- <btn @click.native="showRoller = true">Open</btn> -->
    <ul class="characters">
      <li v-for="c in characters">
        <character :c="c" @stress="addStress" @delete="deleteCharacter"></character>
      </li>
    </ul>

    <form class="new-character">
      <div class="column">
        <h2>New Character</h2>

        <div class="input-row">
          <label for="new-character-name">Name</label>
          <input type="text"
            name="new-character-name"
            id="new-character-name"
            class="new-character-name"
            v-model="newCharacter.name"
            :placeholder="'e.g. ' + randomName()">
        </div>

        <h3>Free Slots</h3>

        <div class="input-row">
          <label for="resistance-blood">Blood</label>
          <counter-control id="resistance-blood" :value.sync="newCharacter.blood.freeSlots"></counter-control>
        </div>
        <div class="input-row">
          <label for="resistance-mind">Mind</label>
          <counter-control id="resistance-mind" :value.sync="newCharacter.mind.freeSlots"></counter-control>
        </div>
        <div class="input-row">
          <label for="resistance-shadow">Shadow</label>
          <counter-control id="resistance-shadow" :value.sync="newCharacter.shadow.freeSlots"></counter-control>
        </div>
        <div class="input-row">
          <label for="resistance-silver">Silver</label>
          <counter-control id="resistance-silver" :value.sync="newCharacter.silver.freeSlots"></counter-control>
        </div>
        <div class="input-row">
          <label for="resistance-reputation">Reputation</label>
          <counter-control id="resistance-reputation" :value.sync="newCharacter.reputation.freeSlots"></counter-control>
        </div>

        <div class="input-row action-row">
          <btn class="tilded" @click.native="addCharacter">Add</btn>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
  import Axios from 'axios';
  import Character from './character.vue';
  import CounterControl from './counter-control.vue';
  import Roller from './roller.vue';
  import Store from '../store';

  const characterSchema = {
    name: '',
    blood: { freeSlots: 0, stress: 0 },
    mind: { freeSlots: 0, stress: 0 },
    shadow: { freeSlots: 0, stress: 0 },
    silver: { freeSlots: 0, stress: 0 },
    reputation: { freeSlots: 0, stress: 0 },
  };

  export default {
    data() {
      return {
        store: Store,
        characters: [],
        showRoller: false,
        newCharacter: Object.assign({}, characterSchema),
        names: null,
      };
    },

    components: {
      Character,
      CounterControl,
      Roller,
    },

    methods: {
      addCharacter() {
        this.characters.push(this.newCharacter);
        this.newCharacter = Object.assign({}, characterSchema);
        this.store.save();
      },

      deleteCharacter(character) {
        this.characters.splice(this.characters.indexOf(character), 1);
        this.store.save();
      },

      getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      },

      randomName() {
        if (!this.names) return;
        return this.names[this.getRandomInt(0, this.names.length - 1)];
      },

      addStress(options) {
        const {character, resistance} = options;
        this.showRoller = options;
      }
    },

    created() {
      this.store.load();
      this.characters = this.store.data.characters;

      Axios.get('data/drow_names.json')
        .then(response => {
          this.names = response.data.female;
        });
    }
  };
</script>
