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

              <h3>Stress &amp; Free Slots</h3>

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
                    <td><counter-control :value.sync="char.blood.freeSlots"></counter-control></td>
                    <td><counter-control :value.sync="char.blood.stress"></counter-control></td>
                  </tr>
                  <tr>
                    <td>Mind</td>
                    <td><counter-control :value.sync="char.mind.freeSlots"></counter-control></td>
                    <td><counter-control :value.sync="char.mind.stress"></counter-control></td>
                  </tr>
                  <tr>
                    <td>Shadow</td>
                    <td><counter-control :value.sync="char.shadow.freeSlots"></counter-control></td>
                    <td><counter-control :value.sync="char.shadow.stress"></counter-control></td>
                  </tr>
                  <tr>
                    <td>Silver</td>
                    <td><counter-control :value.sync="char.silver.freeSlots"></counter-control></td>
                    <td><counter-control :value.sync="char.silver.stress"></counter-control></td>
                  </tr>
                  <tr>
                    <td>Reputation</td>
                    <td><counter-control :value.sync="char.reputation.freeSlots"></counter-control></td>
                    <td><counter-control :value.sync="char.reputation.stress"></counter-control></td>
                  </tr>
                </tbody>
              </table>

              <h3>Fallout</h3>

            </div>
          </form>

          <nav class="actions">
            <btn class="secondary">Button</btn>
            <btn>Button</btn>
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
  import CounterControl from './counter-control.vue';
  import Icon from './icon.vue';

  export default {
    props: {
      character: Object,
    },

    components: {
      ChevronRightIcon,
      CounterControl,
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
    },

    methods: {
      close() {
        setTimeout(this.reset, 250);
        this.$emit('close');
      },

      reset() {
        this.characterCopy = this.clone(this.character);
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