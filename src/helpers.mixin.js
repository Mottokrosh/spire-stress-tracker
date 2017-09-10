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

    addStress(character, resistance) {
      let unusedFreeSlots = character.stress[resistance]
        .filter(r => r.type === 'slot' && r.used === false);

      let unusedArmour = resistance === 'blood'
        ? character.stress.blood.filter(r => r.type === 'armour' && r.used === false)
        : 0;

      if (unusedFreeSlots.length) {
        unusedFreeSlots[0].used = true;
      } else if (unusedArmour.length) {
        unusedArmour[0].used = true;
      } else {
        character.stress[resistance].push({ type: 'stress', used: true });
      }
    },

    removeStress(character, resistance) {
      let stressList = character.stress[resistance];

      let stressSlots = stressList
        .filter(r => r.type === 'stress');

      let usedArmour = resistance === 'blood'
        ? character.stress.blood.filter(r => r.type === 'armour' && r.used === true)
        : 0;

      let usedFreeSlots = stressList
        .filter(r => r.type === 'slot' && r.used === true);

      if (stressSlots.length) {
        stressList.splice(stressList.length - 1, 1);
      } else if (usedArmour.length) {
        usedArmour[usedArmour.length - 1].used = false;
      } else if (usedFreeSlots.length) {
        usedFreeSlots[usedFreeSlots.length - 1].used = false;
      }
    },

    calculateTotalStress(character) {
      if (!character) {
        return 0;
      }

      let total = 0;
      Object.keys(character.stress).forEach((resistance) => {
        total += character.stress[resistance].filter(r => r.type === 'stress').length;
      });

      return total;
    },
  },
};
