<template>
  <motion :value="offset" spring="wobbly">
    <template scope="props">
      <div :style="{ transform: `translateX(${props.value}%)` }" :class="classes">
        <header>
          <h2>Roll {{ resistance }} Stress <small>For {{ name }}</small></h2>
          <btn @click.native="$emit('close')" class="close has-icon"><x-icon></x-icon></btn>
        </header>
        <div class="roller-content">
          <div class="dice">
            <div class="one">1</div>
            <div class="d3">d3</div>
            <div class="d6">d6</div>
            <div class="d8">d8</div>
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
  import { XIcon } from 'vue-feather-icons';

  export default {
    props: ['show'],

    components: {
      motion: Motion,
      XIcon,
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