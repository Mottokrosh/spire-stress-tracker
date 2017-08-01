import Vue from 'vue';
import Estresso from './components/estresso.vue';
import Btn from './components/btn.vue';

Vue.component('btn', Btn);

var app = {
  isWebView() {
    return document.location.protocol === 'file:';
  },

  initialize() {
    if (this.isWebView()) {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    } else {
      this.onDeviceReady();
    }
  },

  onDeviceReady() {
    new Vue({
      el: '#app',

      components: {
        Estresso,
      },
    });
  },
};

app.initialize();
