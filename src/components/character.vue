<template>
  <div class="character">

    <header>
      <h2>{{ c.name }}</h2>
      <div class="total-stress" v-if="totalStress > 0" aria-label="Total stress"><span>{{ totalStress }}</span></div>
      <btn class="backgroundless has-icon" aria-label="Edit" @click.native="editCharacter"><edit-2-icon></edit-2-icon></btn>
      <btn class="backgroundless has-icon" aria-label="Delete" @click.native="deleteCharacter"><x-icon></x-icon></btn>
    </header>

    <p v-if="c.notes" class="notes">{{ c.notes }}</p>

    <div class="resistances">
      <div class="resistance" v-for="(stressList, resistance) in c.stress">
        <div>
          <h3>{{ ucfirst(resistance) }}</h3>
          <div>
            <stress :list="stressList"></stress>
          </div>
          <btn @click.native="addStress(resistance)" :class="stressButtonClasses(resistance)"><plus-icon></plus-icon></btn>
        </div>
        <div class="any-fallout">
          <fallout-badge v-for="falloutId in c.fallout" :key="falloutId"
            :all-fallout="allFallout"
            :fallout-id="falloutId"
            :resistance="resistance"
            @remove="removeFallout(falloutId)"
          ></fallout-badge>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { Edit2Icon, PlusIcon, XIcon } from 'vue-feather-icons';
  import Store from '../store';
  import Helpers from '../helpers.mixin';
  import FalloutBadge from './fallout-badge.vue';
  import Stress from './stress.vue';

  export default {
    props: {
      c: Object,
      allFallout: Array,
    },

    components: {
      Edit2Icon,
      FalloutBadge,
      PlusIcon,
      Stress,
      XIcon,
    },

    mixins: [Helpers],

    data() {
      return {
        resistances: Store.resistances,
      };
    },

    computed: {
      totalStress() {
        return this.calculateTotalStress(this.c);
      },
    },

    methods: {
      ucfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },

      addStress(resistance) {
        this.$emit('stress', { character: this.c, resistance: resistance });
      },

      editCharacter() {
        this.$emit('edit', this.c);
      },

      deleteCharacter() {
        if (window.confirm(`Delete ${this.c.name}?`)) {
          this.$emit('delete', this.c);
        }
      },

      removeFallout(falloutId) {
        const fallout = this.allFallout.find(f => f.id === falloutId);
        if (window.confirm(`Remove ${fallout.name}?`)) {
          this.$emit('remove-fallout', this.c, falloutId);
        }
      },

      hasFalloutIn(resistance) {
        if (!this.allFallout) return;

        return this.c.fallout.filter((falloutId) => {
          const f = this.allFallout.find(af => af.id === falloutId && af.resistance === resistance);
          return Boolean(f);
        }).length;
      },

      stressButtonClasses(resistance) {
        return {
          'shadowless': true,
          'has-icon': true,
          'bottom-left-rounded': this.hasFalloutIn(resistance),
        };
      },
    },
  };
</script>