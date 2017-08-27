export default {
  methods: {
    clone(obj) {
      return JSON.parse(JSON.stringify(obj));
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

    getRandomIntInclusive(min, max) {
      const randomBuffer = new Uint32Array(1);

      window.crypto.getRandomValues(randomBuffer);

      let randomNumber = randomBuffer[0] / (0xffffffff + 1);

      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(randomNumber * (max - min + 1)) + min;
    },
  },
};
