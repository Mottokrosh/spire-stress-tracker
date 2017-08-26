<template>
  <div class="character">

    <header>
      <h2>{{ c.name }}</h2>
      <btn class="backgroundless has-icon" aria-label="Delete" @click.native="deleteCharacter"><x-icon></x-icon></btn>
    </header>

    <div class="resistances">
      <div class="resistance" v-for="r in resistances">
        <div>
          <btn @click.native="adjust(r)" class="shadowless has-icon"><minus-icon></minus-icon></btn>
          <h3>{{ ucfirst(r) }}<small v-if="freeSlots(r)"> + {{ freeSlots(r) }}</small></h3>
          <div>
            <span>Stress</span>
            <strong>{{ c[r].stress }}</strong>
          </div>
          <btn @click.native="addStress(r)" class="shadowless has-icon"><plus-icon></plus-icon></btn>
        </div>
        <div class="any-fallout">
          <fallout-badge v-for="falloutId in c.fallout" :key="falloutId"
            :all-fallout="allFallout"
            :fallout-id="falloutId"
            :resistance="r"
            @remove="removeFallout(falloutId)"
          ></fallout-badge>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { MinusIcon, PlusIcon, XIcon } from 'vue-feather-icons';
  import FalloutBadge from './fallout-badge.vue';
  import Store from '../store';

  export default {
    props: {
      c: Object,
      allFallout: Array,
    },

    components: {
      FalloutBadge,
      MinusIcon,
      PlusIcon,
      XIcon,
    },

    data() {
      return {
        resistances: Store.resistances,
      };
    },

    methods: {
      ucfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },

      freeSlots(resistance) {
        return this.c[resistance].freeSlots || null;
      },

      addStress(resistance) {
        this.$emit('stress', { character: this.c, resistance: resistance });
      },

      adjust(resistance) {
        this.$emit('adjust', { character: this.c, resistance: resistance });
      },

      deleteCharacter() {
        if (window.confirm(`Delete ${this.c.name}?`)) {
          this.$emit('delete', this.c);
        }
      },

      removeFallout(falloutId) {
        const fallout = this.allFallout.find(f => f.id === falloutId);
        if (window.confirm(`Remove ${fallout.name}?`)) {
          console.log('emitting');
          this.$emit('remove-fallout', this.c, falloutId);
        }
      }
    },
  };
</script>