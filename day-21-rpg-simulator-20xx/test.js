const assert = require('assert');

const rpg = require('./rpg');

describe('Day 21: RPG Simulator 20XX', () => {
  it('should simulate fight', () => {
    const bossStats = {
      hp: 12,
      damage: 7,
      armor: 2,
    };

    const playerStats = { hp: 8 };

    const minimumGoldSpentToWin = rpg(bossStats, playerStats);

    assert.deepEqual(minimumGoldSpentToWin, 65);
  });
});
