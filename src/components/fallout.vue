<template>
  <div class="fallout-item">
    <div class="details">
      <input type="checkbox" :id="slug">
      <label :for="slug">{{ fallout.name }}</label>
      <div class="severity">
        <icon id="drop" v-for="i in severity" :key="i"></icon>
      </div>
    </div>
    <btn class="shadowless has-icon"><icon id="eye"></icon></btn>
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
      slug() {
        return this.slugify(this.fallout.id + '-' + this.fallout.name);
      },

      severity() {
        if (this.fallout.level === 'minor') {
          return 1;
        } else if (this.fallout.level === 'major') {
          return 2;
        } else {
          return 3;
        }
      },
    },

    mixins: [Helpers],
  };
</script>