<template>
  <div :class="classes">
    <btn @click.native="$emit('close')" class="close">&times;</btn>
    <div class="roller-content">
      <p><strong>{{ name }} / {{ resistance }}</strong></p>
      <p>Multiple dice rollers here (1, d3, d6, d8).</p>
      <p>Underneath each roller a "Brutal &times; 0" button perhaps, which you can click before rolling to add Brutal multipliers.</p>
      <p>If fallout occurs, shake screen (and perhaps buzz phone in mobile app version), and show a random appropriate fallout, with option to choose another. Also potential fallout splitting/combining.</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['show'],

    computed: {
      character() {
        return this.show.character ? this.show.character : '';
      },

      resistance() {
        return this.show.resistance ? this.show.resistance : '';
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
        } else {
          document.body.classList.remove('roller-open');
        }
      }
    },
  };
</script>