<template>
  <div class="estresso">

    <roller
      :options="rollerOptions"
      :fallout="allFallout"
      @close="rollerOptions = null"
      @update="updateCharacter"
    ></roller>

    <editor
      :character="characterToEdit"
      :clear="stressToClear"
      :fallout="allFallout"
      @close="characterToEdit = null"
      @apply="replaceCharacter"
    ></editor>

    <header>
      <div class="column">
        <h1>Spire Stress Tracker</h1>
      </div>
    </header>

    <transition-group name="fade" tag="ul" class="characters">
      <li v-for="(c, index) in characters" :key="index">
        <character
          :c="c"
          :all-fallout="allFallout"
          @stress="addStress"
          @edit="editCharacter"
          @delete="deleteCharacter"
          @remove-fallout="removeFallout"
        ></character>
      </li>
    </transition-group>

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
          <btn class="with-icon" @click.native="addCharacter"><user-plus-icon></user-plus-icon> Add</btn>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
  import Axios from 'axios';
  import { UserPlusIcon } from 'vue-feather-icons';
  import Helpers from '../helpers.mixin';
  import Character from './character.vue';
  import CounterControl from './counter-control.vue';
  import Roller from './roller.vue';
  import Editor from './editor.vue';
  import Store from '../store';

  const characterSchema = {
    name: '',
    blood: { freeSlots: 0, stress: 0 },
    mind: { freeSlots: 0, stress: 0 },
    shadow: { freeSlots: 0, stress: 0 },
    silver: { freeSlots: 0, stress: 0 },
    reputation: { freeSlots: 0, stress: 0 },
    fallout: [],
  };

  export default {
    mixins: [Helpers],

    data() {
      return {
        store: Store,
        resistances: Store.resistances,
        characters: [],
        rollerOptions: null,
        characterToEdit: null,
        stressToClear: null,
        newCharacter: Object.assign({}, characterSchema),
        names: null,
        allFallout: null,
      };
    },

    components: {
      Character,
      CounterControl,
      Editor,
      Roller,
      UserPlusIcon,
    },

    methods: {
      addCharacter() {
        const char = this.clone(this.newCharacter);
        this.resistances.forEach((res) => {
          if (char[res].freeSlots) {
            char[res].stress -= char[res].freeSlots;
          }
        });
        this.newCharacter = Object.assign({}, characterSchema);
        this.characters.push(char);
        this.store.save();
      },

      deleteCharacter(character) {
        this.characters.splice(this.characters.indexOf(character), 1);
        this.store.save();
      },

      updateCharacter(result) {
        const c = this.characters[this.characters.indexOf(result.character)];
        c[result.resistance].stress = result.stress;
        c.fallout = result.fallout;
        this.store.save();

        if (result.clear) {
          this.stressToClear = result.clear;
          this.characterToEdit = c;
        }
      },

      replaceCharacter(newCharacter, oldCharacter) {
        const index = this.characters.indexOf(oldCharacter);
        this.characters[index] = newCharacter;
        this.characterToEdit = null;
        this.stressToClear = null;
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
        this.rollerOptions = options;
      },

      editCharacter(c) {
        this.characterToEdit = c;
      },

      removeFallout(character, falloutId) {
        const index = character.fallout.indexOf(falloutId);
        if (index !== -1) {
          character.fallout.splice(index, 1);
          this.store.save();
        }
      },
    },

    created() {
      this.store.load();
      this.characters = this.store.data.characters;

      Axios.get('data/names.json')
        .then(response => {
          this.names = response.data;
        });

      Axios.get('data/fallout.json')
        .then(response => {
          this.allFallout = response.data;
        });
    }
  };
</script>
