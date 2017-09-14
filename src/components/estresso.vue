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
      @close="characterToEdit = null; clear = null"
      @apply="replaceCharacter"
    ></editor>

    <header>
      <div class="column">
        <h1>Spire Companion <small>Stress and Fallout Tracker</small></h1>
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

        <div class="input-row">
          <label for="new-character-notes">Notes</label>
          <input type="text"
            name="new-character-notes"
            id="new-character-notes"
            class="new-character-notes"
            v-model="newCharacter.notes"
            placeholder="e.g. class, mannerisms">
        </div>

        <h3>Free Slots</h3>

        <div class="input-row">
          <label for="resistance-blood">Blood</label>
          <counter-control id="resistance-blood" v-model="newCharacter.slots.blood"></counter-control>
        </div>
        <div class="input-row">
          <label for="resistance-mind">Mind</label>
          <counter-control id="resistance-mind" v-model="newCharacter.slots.mind"></counter-control>
        </div>
        <div class="input-row">
          <label for="resistance-shadow">Shadow</label>
          <counter-control id="resistance-shadow" v-model="newCharacter.slots.shadow"></counter-control>
        </div>
        <div class="input-row">
          <label for="resistance-silver">Silver</label>
          <counter-control id="resistance-silver" v-model="newCharacter.slots.silver"></counter-control>
        </div>
        <div class="input-row">
          <label for="resistance-reputation">Reputation</label>
          <counter-control id="resistance-reputation" v-model="newCharacter.slots.reputation"></counter-control>
        </div>

        <h3>Armour</h3>

        <div class="input-row">
          <label for="resistance-armour">Armour</label>
          <counter-control id="resistance-armour" v-model="newCharacter.armour"></counter-control>
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
    notes: '',
    stress: {
      blood: [],
      mind: [],
      shadow: [],
      silver: [],
      reputation: [],
    },
    slots: {
      blood: 0,
      mind: 0,
      shadow: 0,
      silver: 0,
      reputation: 0,
    },
    armour: 0,
    fallout: [],
  };

  const stressSchema = {
    type: 'slot', // slot|armour|stress
    used: false,
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
        newCharacter: this.clone(characterSchema),
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

        // for each free slot in a resistance, add a stress object
        Object.keys(char.slots).forEach((resistance) => {
          for (let i = 0; i < char.slots[resistance]; i++) {
            let stressObj = this.clone(stressSchema);
            char.stress[resistance].push(stressObj);
          }
        });

        // for each armout value, add an armour stress object to blood
        for (let i = 0; i < char.armour; i++) {
          let stressObj = this.clone(stressSchema);
          stressObj.type = 'armour';
          char.stress.blood.push(stressObj);
        }

        this.characters.push(char);
        this.store.save();
        this.newCharacter = this.clone(characterSchema);
      },

      deleteCharacter(character) {
        this.characters.splice(this.characters.indexOf(character), 1);
        this.store.save();
      },

      updateCharacter(result) {
        const c = this.characters[this.characters.indexOf(result.character)];
        c.stress = result.stress;
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
