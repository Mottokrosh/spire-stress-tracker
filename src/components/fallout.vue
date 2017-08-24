<template>
  <div :class="classes">
    <div class="details">
      <input type="checkbox" :id="slug" :checked="characterHasThis">
      <label :for="slug">{{ fallout.name }} <small>{{ fallout.resistance }}</small></label>
      <div class="severity">
        <icon id="drop" v-for="i in fallout.severity" :key="i"></icon>
      </div>
    </div>
    <btn class="shadowless has-icon" @click.native="$emit('show-details')"><icon id="eyeball"></icon></btn>
  </div>
</template>

<script>
  import Helpers from '../helpers.mixin';
  import Btn from './btn.vue';
  import Icon from './icon.vue';

  export default {
    props: {
      character: Object,
      details: Object,
    },

    components: {
      Btn,
      Icon,
    },

    data() {
      return {
        fallout: this.details,
      };
    },

    computed: {
      classes() {
        return {
          'fallout-item': true,
          ['fallout-id-' + this.fallout.id]: true,
          'possessed': this.characterHasThis,
        };
      },

      slug() {
        return this.slugify(this.fallout.id + '-' + this.fallout.name);
      },

      characterHasThis() {
        return this.character.fallout
          && this.character.fallout.indexOf(this.fallout.id) !== -1;
      },
    },

    mixins: [Helpers],
  };
</script>