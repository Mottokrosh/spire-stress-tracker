const store = {
  json: '{"characters":[]}',
  data: {},

  load() {
    const d = localStorage.getItem('estresso') || this.json;
    this.data = JSON.parse(d);

    return this.data;
  },

  save() {
    this.json = JSON.stringify(this.data);
    localStorage.setItem('estresso', this.json);

    return this.data;
  },

  resistances: ['blood', 'mind', 'shadow', 'silver', 'reputation'],
};

export default store;
