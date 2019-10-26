const shopInventory = require('./shop');

const wouldPlayerSurvive = (bossStats, playerStats) => {
  let bossHp = bossStats.hp;
  let playerHp = playerStats.hp;
  let isPlayersTurn = true;

  while (bossHp > 0 && playerHp > 0) {
    if (isPlayersTurn) {
      const damage = Math.max(playerStats.damage - bossStats.armor, 1);

      bossHp -= damage;
      // console.log(`The player deals ${damage} damage; the boss goes down to ${bossHp} hit points.`);
    } else {
      const damage = Math.max(bossStats.damage - playerStats.armor, 1);

      playerHp -= damage;
      // console.log(`The boss deals ${damage} damage; the player goes down to ${playerHp} hit points.`);
    }

    isPlayersTurn = !isPlayersTurn;
  }

  return playerHp > 0;
};

const getRingCombinations = () => {
  const combinations = [
    {
      cost: 0,
      damage: 0,
      armor: 0,
    },
  ];

  shopInventory.rings.forEach((item) => {
    shopInventory.rings
      .filter((otherItem) => otherItem.name !== item.name)
      .forEach((otherItem) => {
        const combination = {
          cost: item.cost + otherItem.cost,
          damage: item.damage + otherItem.damage,
          armor: item.armor + otherItem.armor,
        };

        const alreadyExists = combinations.find(({ cost, damage, armor }) => {
          return combination.cost === cost &&
            combination.damage === damage &&
            combination.armor === armor;
        });

        if (!alreadyExists) {
          combinations.push(combination);
        }
      });
  });

  return combinations;
};

const rpg = (bossStats, { hp }) => {
  const combinations = getRingCombinations()
    .reduce((combos, rings) => {
      shopInventory.weapons.forEach((weapon) => {
        shopInventory.armor.forEach((armor) => {
          const stats = {
            cost: rings.cost + weapon.cost + armor.cost,
            damage: rings.damage + weapon.damage,
            armor: rings.armor + armor.armor,
          };

          combos.push(stats);
        });
      });

      return combos;
    }, [])
    .sort((a, b) => b.cost - a.cost);

  for (let i = 0; i < combinations.length; i++) {
    const { cost, damage, armor } = combinations[i];

    const playerStats = {
      hp,
      damage,
      armor,
    };

    if (!wouldPlayerSurvive(bossStats, playerStats)) {
      return cost;
    }
  }

  return 0;
};

module.exports = rpg;
