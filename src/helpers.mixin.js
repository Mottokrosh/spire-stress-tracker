export default {
  methods: {
    clone(obj) {
      return JSON.parse(JSON.stringify(obj));
    },
  },
};
