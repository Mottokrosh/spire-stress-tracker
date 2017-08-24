<template>
  <div :class="classes">
    <div class="modal-backdrop" @click.self="close"></div>
    <div class="modal-content-wrapper">

      <motion :value="offset" spring="wobbly">
        <template scope="props">
          <div class="modal-body" :style="{ transform: `translateY(${props.value}%)` }">

            <div class="modal-content">
              <header ref="header">
                <h2>{{ title }} <small v-if="subTitle">{{ subTitle }}</small></h2>
                <btn class="backgroundless has-icon" @click.native="close" ref="closeButton" aria-label="Close modal">
                  <x-icon></x-icon>
                </btn>
              </header>
              <div class="main">
                <slot body></slot>
              </div>
              <footer ref="footer">
                <btn v-for="(b, index) in buttons" :key="index" @click.native="onButton(b)">{{ b }}</btn>
              </footer>
            </div>

          </div>
        </template>
      </motion>

    </div>
  </div>
</template>

<script>
  import focusTrap from 'focus-trap';
  import { Motion } from 'vue-motion';
  import { XIcon } from 'vue-feather-icons';
  import Helpers from '../helpers.mixin';

  export default {
    props: {
      show: {
        required: true,
      },
      title: String,
      subTitle: String,
      buttons: Array,
    },

    components: {
      Motion,
      XIcon,
    },

    mixins: [Helpers],

    data() {
      return {
        offset: -100,
        header: this.$refs.header,
        footer: this.$refs.footer,
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
        this.stopFocusTrap();
        this.offset = -100;
        setTimeout(() => { this.$emit('close'); }, 250);
      },

      onKeyup($event) {
        if ($event.keyCode === 27 && this.show) {
          this.close();
        }
      },

      startFocusTrap() {
        this.trap = focusTrap(this.$el, {
          fallbackFocus: this.$refs.closeButton,
        });

        this.trap.activate();
      },

      stopFocusTrap() {
        if (!this.trap) return;

        this.trap.deactivate();
        this.trap = null;
      },

      onButton(name) {
        const slugifiedName = this.slugify(name);
        if (slugifiedName === 'close') {
          this.close();
        } else {
          this.$emit(slugifiedName);
        }
      }
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

            this.offset = 0;
          } else {
            document.body.style.overflow = 'auto';
          }
        },
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