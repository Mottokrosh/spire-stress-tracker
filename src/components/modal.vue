<template>
  <transition name="fade">
    <div v-if="show" :class="classes" role="document" @click.self="close">
      <header>
        <h2>{{ title }}</h2>
      </header>
      <div class="main">
        <slot></slot>
      </div>
      <footer>
        <btn v-for="b in buttons" @click.native="$emit(slugify(b))">{{ b }}</btn>
      </footer>
    </div>
  </transition>
</template>

<script>
  import focusTrap from 'focus-trap';

  export default {
    props: {
      show: {
        required: true,
      },
      title: String,
      buttons: Array,
    },

    data() {
      return {
        header: this.$el.querySelector('header'),
        footer: this.$el.querySelector('footer'),
        trap: null,
      };
    },

    computed: {
      classes() {
        return {
          'modal': true,
          'modal-open': this.show,
        };
      },
    },

    methods: {
      handleScroll() {
        if (this.footer && this.$el.offsetHeight + this.$el.scrollTop < this.$el.scrollHeight) {
          this.footer.classList.add('footer-shadow');
        } else if (this.footer) {
          this.footer.classList.remove('footer-shadow');
        }

        if (this.header && this.$el.scrollTop > 0) {
          this.header.classList.add('header-shadow');
        } else if (this.header) {
          this.header.classList.remove('header-shadow');
        }
      },

      close() {
        document.body.style.overflow = 'auto';
        this.$emit('close');
      },

      onKeyup($event) {
        if ($event.keyCode === 27 && this.show) {
          this.close();
        }
      },

      startFocusTrap() {
        this.trap = focusTrap(this.$el, {
          initialFocus: this.footer.querySelector('button'),
        });

        this.trap.activate();
      },

      stopFocusTrap() {
        if (!this.trap) return;

        this.trap.deactivate();
        this.trap = null;
      },

      slugify(value) {
        value = value.replace(/^\s+|\s+$/g, ''); // trim
        value = value.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
        var to   = "aaaaaeeeeeiiiiooooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
          value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        value = value.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
          .replace(/\s+/g, '-') // collapse whitespace and replace by -
          .replace(/-+/g, '-'); // collapse dashes

        return value;
      },
    },

    watch: {
      show: {
        handler(active) {
          if (active) {
            document.body.style.overflow = 'hidden';

            this.$nextTick(() => {
              if (this.$el) {
                this.$el.onscroll = this.handleScroll;
                this.handleScroll();
              }

              this.startFocusTrap();
            });
          } else {
            document.body.style.overflow = 'auto';
            this.stopFocusTrap();
          }
        },
        deep: true,
      },
    },

    mounted() {
      document.addEventListener('keyup', this.onKeyup);
    },

    beforeDestroy() {
      document.removeEventListener('keyup', this.onKeyup);
      this.stopFocusTrap();
    },
  };
</script>