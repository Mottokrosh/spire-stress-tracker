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

              <div class="input-row">
                <label for="character-notes">Notes</label>
                <input type="text"
                  name="character-notes"
                  id="character-notes"
                  class="character-notes"
                  v-model="char.notes"
                >
              </div>

              <h3>Stress</h3>

              <div class="clear-actions flex-container">
                <btn bright @click.native="layLow">Lay low</btn>
                <dice :sides="3"></dice>
                <dice :sides="6"></dice>
                <dice :sides="8"></dice>
              </div>
              <div class="clear-key"><span>Act/Refresh</span></div>

              <div class="panel stress-in-resistance editor-resistance">
                <header>Blood</header>
                <div class="body">

                  <div class="input-row">
                    <div>Free Slots</div>
                    <div class="flex-container flex-wrap flex-vertical-center">
                      <btn class="shadowless has-icon secondary" @click.native="removeSlot('blood', 'slot')">
                        <minus-icon></minus-icon>
                      </btn>
                      <circle-icon
                        v-for="(s, index) in slots('blood', 'slot')" :key="index"
                        :class="{ slot: true, 'free-slot': true, used: s.used }"
                      ></circle-icon>
                      <btn class="shadowless has-icon secondary" @click.native="addSlot('blood', 'slot')">
                        <plus-icon></plus-icon>
                      </btn>
                    </div>
                  </div>

                  <div class="input-row">
                    <div>Armour</div>
                    <div class="flex-container flex-wrap flex-vertical-center">
                      <btn class="shadowless has-icon secondary" @click.native="removeSlot('blood', 'armour')">
                        <minus-icon></minus-icon>
                      </btn>
                      <shield-icon
                        v-for="(s, index) in slots('blood', 'armour')" :key="index"
                        :class="{ slot: true, 'armour-slot': true, used: s.used }"
                      ></shield-icon>
                      <btn class="shadowless has-icon secondary" @click.native="addSlot('blood', 'armour')">
                        <plus-icon></plus-icon>
                      </btn>
                    </div>
                  </div>

                  <div class="input-row">
                    <div>Stress</div>
                    <div class="flex-container flex-wrap flex-vertical-center">
                      <circle-icon
                        v-for="(s, index) in slots('blood', 'stress')" :key="index"
                        :class="{ slot: true, 'stress-slot': true, used: s.used }"
                      ></circle-icon>
                    </div>
                  </div>

                  <div class="input-row footer">
                    <div>Adjust Stress</div>
                    <div class="flex-container flex-wrap">
                      <btn class="shadowless has-icon secondary" @click.native="removeStress(char, 'blood')">
                        <minus-icon></minus-icon>
                      </btn>
                      <btn class="shadowless has-icon secondary" @click.native="addStress(char, 'blood')">
                        <plus-icon></plus-icon>
                      </btn>
                    </div>
                  </div>
                </div>
              </div>

              <div class="panel stress-in-resistance editor-resistance">
                <header>Mind</header>
                <div class="body">

                  <div class="input-row">
                    <div>Free Slots</div>
                    <div class="flex-container flex-wrap flex-vertical-center">
                      <btn class="shadowless has-icon secondary" @click.native="removeSlot('mind', 'slot')">
                        <minus-icon></minus-icon>
                      </btn>
                      <circle-icon
                        v-for="(s, index) in slots('mind', 'slot')" :key="index"
                        :class="{ slot: true, 'free-slot': true, used: s.used }"
                      ></circle-icon>
                      <btn class="shadowless has-icon secondary" @click.native="addSlot('mind', 'slot')">
                        <plus-icon></plus-icon>
                      </btn>
                    </div>
                  </div>

                  <div class="input-row">
                    <div>Stress</div>
                    <div class="flex-container flex-wrap flex-vertical-center">
                      <circle-icon
                        v-for="(s, index) in slots('mind', 'stress')" :key="index"
                        :class="{ slot: true, 'stress-slot': true, used: s.used }"
                      ></circle-icon>
                    </div>
                  </div>

                  <div class="input-row footer">
                    <div>Adjust Stress</div>
                    <div class="flex-container flex-wrap">
                      <btn class="shadowless has-icon secondary" @click.native="removeStress(char, 'mind')">
                        <minus-icon></minus-icon>
                      </btn>
                      <btn class="shadowless has-icon secondary" @click.native="addStress(char, 'mind')">
                        <plus-icon></plus-icon>
                      </btn>
                    </div>
                  </div>
                </div>
              </div>

              <div class="panel stress-in-resistance editor-resistance">
                <header>Shadow</header>
                <div class="body">

                  <div class="input-row">
                    <div>Free Slots</div>
                    <div class="flex-container flex-wrap flex-vertical-center">
                      <btn class="shadowless has-icon secondary" @click.native="removeSlot('shadow', 'slot')">
                        <minus-icon></minus-icon>
                      </btn>
                      <circle-icon
                        v-for="(s, index) in slots('shadow', 'slot')" :key="index"
                        :class="{ slot: true, 'free-slot': true, used: s.used }"
                      ></circle-icon>
                      <btn class="shadowless has-icon secondary" @click.native="addSlot('shadow', 'slot')">
                        <plus-icon></plus-icon>
                      </btn>
                    </div>
                  </div>

                  <div class="input-row">
                    <div>Stress</div>
                    <div class="flex-container flex-wrap flex-vertical-center">
                      <circle-icon
                        v-for="(s, index) in slots('shadow', 'stress')" :key="index"
                        :class="{ slot: true, 'stress-slot': true, used: s.used }"
                      ></circle-icon>
                    </div>
                  </div>

                  <div class="input-row footer">
                    <div>Adjust Stress</div>
                    <div class="flex-container flex-wrap">
                      <btn class="shadowless has-icon secondary" @click.native="removeStress(char, 'shadow')">
                        <minus-icon></minus-icon>
                      </btn>
                      <btn class="shadowless has-icon secondary" @click.native="addStress(char, 'shadow')">
                        <plus-icon></plus-icon>
                      </btn>
                    </div>
                  </div>
                </div>
              </div>

              <div class="panel stress-in-resistance editor-resistance">
                <header>Silver</header>
                <div class="body">

                  <div class="input-row">
                    <div>Free Slots</div>
                    <div class="flex-container flex-wrap flex-vertical-center">
                      <btn class="shadowless has-icon secondary" @click.native="removeSlot('silver', 'slot')">
                        <minus-icon></minus-icon>
                      </btn>
                      <circle-icon
                        v-for="(s, index) in slots('silver', 'slot')" :key="index"
                        :class="{ slot: true, 'free-slot': true, used: s.used }"
                      ></circle-icon>
                      <btn class="shadowless has-icon secondary" @click.native="addSlot('silver', 'slot')">
                        <plus-icon></plus-icon>
                      </btn>
                    </div>
                  </div>

                  <div class="input-row">
                    <div>Stress</div>
                    <div class="flex-container flex-wrap flex-vertical-center">
                      <circle-icon
                        v-for="(s, index) in slots('silver', 'stress')" :key="index"
                        :class="{ slot: true, 'stress-slot': true, used: s.used }"
                      ></circle-icon>
                    </div>
                  </div>

                  <div class="input-row footer">
                    <div>Adjust Stress</div>
                    <div class="flex-container flex-wrap">
                      <btn class="shadowless has-icon secondary" @click.native="removeStress(char, 'silver')">
                        <minus-icon></minus-icon>
                      </btn>
                      <btn class="shadowless has-icon secondary" @click.native="addStress(char, 'silver')">
                        <plus-icon></plus-icon>
                      </btn>
                    </div>
                  </div>
                </div>
              </div>

              <div class="panel stress-in-resistance editor-resistance">
                <header>Reputation</header>
                <div class="body">

                  <div class="input-row">
                    <div>Free Slots</div>
                    <div class="flex-container flex-wrap flex-vertical-center">
                      <btn class="shadowless has-icon secondary" @click.native="removeSlot('reputation', 'slot')">
                        <minus-icon></minus-icon>
                      </btn>
                      <circle-icon
                        v-for="(s, index) in slots('reputation', 'slot')" :key="index"
                        :class="{ slot: true, 'free-slot': true, used: s.used }"
                      ></circle-icon>
                      <btn class="shadowless has-icon secondary" @click.native="addSlot('reputation', 'slot')">
                        <plus-icon></plus-icon>
                      </btn>
                    </div>
                  </div>

                  <div class="input-row">
                    <div>Stress</div>
                    <div class="flex-container flex-wrap flex-vertical-center">
                      <circle-icon
                        v-for="(s, index) in slots('reputation', 'stress')" :key="index"
                        :class="{ slot: true, 'stress-slot': true, used: s.used }"
                      ></circle-icon>
                    </div>
                  </div>

                  <div class="input-row footer">
                    <div>Adjust Stress</div>
                    <div class="flex-container flex-wrap">
                      <btn class="shadowless has-icon secondary" @click.native="removeStress(char, 'reputation')">
                        <minus-icon></minus-icon>
                      </btn>
                      <btn class="shadowless has-icon secondary" @click.native="addStress(char, 'reputation')">
                        <plus-icon></plus-icon>
                      </btn>
                    </div>
                  </div>
                </div>
              </div>

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
  import { ChevronRightIcon, CircleIcon, MinusIcon, PlusIcon, ShieldIcon, XIcon } from 'vue-feather-icons';
  import Store from '../store';
  import Helpers from '../helpers.mixin';
  import Btn from './btn.vue';
  import CounterControl from './counter-control.vue';
  import Dice from './dice.vue';
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
      CircleIcon,
      CounterControl,
      Dice,
      FalloutBadge,
      Icon,
      MinusIcon,
      Motion,
      PlusIcon,
      ShieldIcon,
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
        return this.calculateTotalStress(this.character);
      },

      currentStress() {
        return this.calculateTotalStress(this.char);
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
        this.characterCopy = null;
      },

      apply() {
        setTimeout(this.reset, 250);
        this.$emit('apply', this.char, this.character);
      },

      removeFallout(falloutId) {
        const index = this.char.fallout.indexOf(falloutId);
        if (index !== -1) {
          this.char.fallout.splice(index, 1);
        }
      },

      layLow() {
        Object.keys(this.char.stress).forEach((resistance) => {
          let stressList = this.char.stress[resistance];
          let i = stressList.length;
          while (i--) {
            let obj = stressList[i];
            if (obj.type === 'stress') {
              stressList.splice(i, 1);
            } else {
              obj.used = false;
            }
          }
        });
      },

      slots(resistance, slotType) {
        if (!this.char) {
          return [];
        }

        return this.char.stress[resistance].filter(r => r.type === slotType);
      },

      removeSlot(resistance, type) {
        const objs = this.char.stress[resistance].filter(r => r.type === type);

        if (objs.length === 0) {
          return;
        }

        const index = this.char.stress[resistance].indexOf(objs[0]);
        this.char.stress[resistance].splice(index, 1);
        this.char.slots[resistance]--;
      },

      addSlot(resistance, type) {
        const group = this.char.stress[resistance].filter (r => r.type === type);
        const index = this.char.stress[resistance].indexOf(group[group.length - 1]);
        this.char.stress[resistance].splice(index + 1, 0, { type: type, used: false });
        this.char.slots[resistance]++;
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