import Vue from 'vue';
import Estresso from './components/estresso.vue';

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
