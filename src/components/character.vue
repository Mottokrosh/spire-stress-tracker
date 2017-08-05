<template>
  <div class="character">

    <h2>{{ c.name }}</h2>

    <div class="resistances">
      <div class="resistance" v-for="r in resistances">
        <h3>{{ ucfirst(r) }}<small v-if="freeSlot(r)"> + {{ freeSlot(r) }}</small></h3>
        <div>
          <span>Stress</span>
          <strong>{{ c[r].stress }}</strong>
        </div>
        <btn @click.native="addStress(r)" class="shadowless">+</btn>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      c: Object,
    },

    data() {
      return {
        resistances: ['blood', 'mind', 'shadow', 'silver', 'reputation'],
      };
    },

    methods: {
      ucfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },

      freeSlot(resistance) {
        return this.c[resistance].freeSlots || null;
      },

      addStress(resistance) {
        this.$emit('stress', { character: this.c, resistance: resistance });
      },
    },
  };
</script>