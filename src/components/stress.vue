<template>
  <div class="stress-in-resistance flex-container flex-wrap" ref="slots">
    <template v-for="s in list">
      <circle-icon v-if="s.type === 'slot'" :class="{ slot: true, 'free-slot': true, used: s.used }"></circle-icon>

      <shield-icon v-if="s.type === 'armour'" :class="{ slot: true, 'armour-slot': true, used: s.used }"></shield-icon>

      <circle-icon v-if="s.type === 'stress'" :class="{ slot: true, 'regular-slot': true, used: s.used }"></circle-icon>
    </template>
  </div>
</template>

<script>
  import { CircleIcon, ShieldIcon } from 'vue-feather-icons';

  export default {
    props: {
      list: Array,
    },

    components: {
      CircleIcon,
      ShieldIcon,
    },
  };
</script>