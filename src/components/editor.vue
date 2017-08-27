<template>
  <motion :value="offset" spring="wobbly">
    <template scope="props">
      <div :style="{ transform: `translateX(${props.value}%)` }" :class="classes">

        <div v-if="char" class="editor-content">
          <header class="flex-container">
            <h2>Edit {{ char.name }}</h2>
            <btn class="backgroundless has-icon" @click.native="close" ref="closeButton" aria-label="Close editor">
              <x-icon></x-icon>
            </btn>
          </header>

          <div v-if="clear" class="stress-clearing">
            <h4>Clear {{ clear }} stress</h4>
            <p>Cleared: {{ remainingToClear }} / {{ clear }}</p>
          </div>

          <form>
            <div class="column">

              <div class="input-row">
                <label for="character-name">Name</label>
                <input type="text"
                  name="character-name"
                  id="character-name"
                  class="character-name"
                  v-model="char.name"
                >
              </div>

              <h3>Stress</h3>

              <div class="clear-actions">
                <btn bright @click.native="layLow">Lay low</btn>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Resistance</th>
                    <th>Free Slots</th>
                    <th>Stress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Blood</td>
                    <td><counter-control v-model="char.blood.freeSlots"></counter-control></td>
                    <td><counter-control v-model="char.blood.stress" :min="-char.blood.freeSlots"></counter-control></td>
                  </tr>
                  <tr>
                    <td>Mind</td>
                    <td><counter-control v-model="char.mind.freeSlots"></counter-control></td>
                    <td><counter-control v-model="char.mind.stress" :min="-char.mind.freeSlots"></counter-control></td>
                  </tr>
                  <tr>
                    <td>Shadow</td>
                    <td><counter-control v-model="char.shadow.freeSlots"></counter-control></td>
                    <td><counter-control v-model="char.shadow.stress" :min="-char.shadow.freeSlots"></counter-control></td>
                  </tr>
                  <tr>
                    <td>Silver</td>
                    <td><counter-control v-model="char.silver.freeSlots"></counter-control></td>
                    <td><counter-control v-model="char.silver.stress" :min="-char.silver.freeSlots"></counter-control></td>
                  </tr>
                  <tr>
                    <td>Reputation</td>
                    <td><counter-control v-model="char.reputation.freeSlots"></counter-control></td>
                    <td><counter-control v-model="char.reputation.stress" :min="-char.reputation.freeSlots"></counter-control></td>
                  </tr>
                </tbody>
              </table>

              <h3>Fallout</h3>

              <div v-if="char.fallout.length" class="fallout">
                <fallout-badge v-for="falloutId in char.fallout" :key="falloutId"
                  :all-fallout="fallout"
                  :fallout-id="falloutId"
                  :full="true"
                  @remove="removeFallout(falloutId)"
                ></fallout-badge>
              </div>

              <div v-else>
                <em>No fallout.</em>
              </div>

            </div>
          </form>

          <nav class="actions">
            <btn class="secondary" @click.native="close">Cancel</btn>
            <btn @click.native="apply">Apply</btn>
          </nav>

        </div>

      </div>
    </template>
  </motion>
</template>

<script>
  import { Motion } from 'vue-motion';
  import { ChevronRightIcon, XIcon } from 'vue-feather-icons';
  import Store from '../store';
  import Helpers from '../helpers.mixin';
  import Btn from './btn.vue';
  import CounterControl from './counter-control.vue';
  import FalloutBadge from './fallout-badge.vue';
  import Icon from './icon.vue';

  export default {
    props: {
      character: Object,
      fallout: Array,
      clear: Number,
    },

    components: {
      Btn,
      ChevronRightIcon,
      CounterControl,
      FalloutBadge,
      Icon,
      Motion,
      XIcon,
    },

    mixins: [Helpers],

    data() {
      return {
        resistances: Store.resistances,
        offset: -100,
        characterCopy: null,
      };
    },

    computed: {
      classes() {
        return {
          'editor': true,
        };
      },

      char() {
        if (!this.character) {
          return null;
        }

        if (!this.characterCopy) {
          this.characterCopy = this.clone(this.character);
        }

        return this.characterCopy;
      },

      startingStress() {
        let total = 0;

        this.resistances.forEach((r) => {
          total += this.character[r].stress;
        });

        return total;
      },

      currentStress() {
        let total = 0;

        this.resistances.forEach((r) => {
          total += this.char[r].stress;
        });

        return total;
      },

      remainingToClear() {
        const cleared = this.startingStress - this.currentStress;

        if (cleared >= this.clear) {
          return this.clear;
        }

        return cleared;
      },
    },

    methods: {
      close() {
        setTimeout(this.reset, 250);
        this.$emit('close');
      },

      reset() {
        this.characterCopy = this.clone(this.character);
      },

      apply() {
        this.$emit('apply', this.char, this.character);
      },

      removeFallout(falloutId) {
        const index = this.char.fallout.indexOf(falloutId);
        if (index !== -1) {
          this.char.fallout.splice(index, 1);
        }
      },

      layLow() {
        this.resistances.forEach((r) => {
          this.char[r].stress = 0;// TODO
        });
      },

      getRandomIntInclusive(min, max) {
        const randomBuffer = new Uint32Array(1);

        window.crypto.getRandomValues(randomBuffer);

        let randomNumber = randomBuffer[0] / (0xffffffff + 1);

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(randomNumber * (max - min + 1)) + min;
      },
    },

    watch: {
      character(value) {
        if (value) {
          document.body.classList.add('editor-open');
          this.offset = 0;
        } else {
          document.body.classList.remove('editor-open');
          this.offset = -100;
        }
      },
    },

  };
</script>