<template>
  <motion :value="offset" spring="wobbly">
    <template scope="props">
      <div :style="{ transform: `translateX(${props.value}%)` }" :class="classes">
        <btn @click.native="$emit('close')" class="close">&times;</btn>
        <div class="roller-content">
          <p><strong>{{ name }} / {{ resistance }}</strong></p>

          <div class="dice">
            <div class="one"></div>
            <div class="d3"></div>
            <div class="d6"></div>
            <div class="d8"></div>
          </div>

          <p>Multiple dice rollers here (1, d3, d6, d8).</p>
          <p>Underneath each roller a "Brutal &times; 0" button perhaps, which you can click before rolling to add Brutal multipliers.</p>
          <p>If fallout occurs, shake screen (and perhaps buzz phone in mobile app version), and show a random appropriate fallout, with option to choose another. Also potential fallout splitting/combining.</p>
        </div>
      </div>
    </template>
  </motion>
</template>

<script>
  import { Motion } from 'vue-motion';
  import Icon from './icon.vue';

  export default {
    props: ['show'],

    components: {
      motion: Motion,
      Icon,
    },

    data() {
      return {
        offset: 100,
      };
    },

    computed: {
      character() {
        return this.show && this.show.character ? this.show.character : '';
      },

      resistance() {
        return this.show && this.show.resistance ? this.show.resistance : '';
      },

      name() {
        return this.character ? this.character.name : '';
      },

      classes() {
        return {
          roller: true,
          open: this.show,
        };
      },
    },

    watch: {
      show(active) {
        if (active) {
          document.body.classList.add('roller-open');
          this.offset = 0;
        } else {
          document.body.classList.remove('roller-open');
          this.offset = 100;
        }
      }
    },
  };
</script>