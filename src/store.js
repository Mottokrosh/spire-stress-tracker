const store = {
  json: '{"characters":[{"name":"Nadege","blood":{"freeSlots":2,"stress":3},"mind":{"freeSlots":1,"stress":4},"shadow":{"freeSlots":0,"stress":0},"silver":{"freeSlots":0,"stress":7},"reputation":{"freeSlots":1,"stress":0}}]}', // some dummy starting data
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
};

export default store;
