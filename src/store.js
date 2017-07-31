const store = {
  data: '{}',

  load() {
    const d = localStorage.getItem('estresso') || this.data;
    this.data = JSON.parse(d);

    return this.data;
  },

  save(data) {
    this.data = JSON.stringify(data);
    localStorage.setItem('estresso', this.data);

    return this.data;
  },
};

export default store;
