const spells = {
  magicMissile: {
    name: 'Magic Missile',
    cost: 53,
    damage: 4,
  },
  drain: {
    name: 'Drain',
    cost: 73,
    damage: 2,
    heals: 2,
  },
  shield: {
    name: 'Shield',
    cost: 113,
    lasts: 6,
    armorWhileActive: 7,
  },
  poison: {
    name: 'Poison',
    cost: 173,
    lasts: 6,
    damageOverTime: 3,
  },
  recharge: {
    name: 'Recharge',
    cost: 229,
    lasts: 5,
    manaOverTime: 101,
  },
};

module.exports = spells;
