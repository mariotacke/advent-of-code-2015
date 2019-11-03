const spells = require('./spells');

const ENABLE_DEBUG = false;

const log = function () {
  if (ENABLE_DEBUG) {
    console.log(...arguments);
  }
};

const copy = (state) => JSON.parse(JSON.stringify(state));

let lowest = Infinity;

const getManaSpent = (state) => {
  return state.spellCasts.reduce((totalCost, spellId) => totalCost + spells[spellId].cost, 0);
};

const checkGame = (state) => {
  if (state.player.hp <= 0) {
    log('The player died, and the boss wins.');
    state.isGameOver = true;
    state.isFailure = true;
  } else if (state.boss.hp <= 0) {
    log('The boss died, and the player wins.');
    const cost = getManaSpent(state);

    if (cost < lowest) {
      lowest = cost;
    }

    state.isGameOver = true;
    state.isSuccess = true;
  }

  return state;
};

const toggleTurn = (state) => {
  state.isPlayerTurn = !state.isPlayerTurn;

  return state;
};

const stopGame = (state) => {
  log('Could not afford spell or spell was already active.');

  state.isGameOver = true;
  state.isFailure = true;

  return state;
};

const print = (state) => {
  state.isPlayerTurn
    ? log('\n-- Player turn --')
    : log('\n-- Boss turn --');

  log(`- Player has ${state.player.hp} hit points, ${state.player.armor} armor, ${state.player.mana} mana`);
  log(`- Boss has ${state.boss.hp} hit points`);

  return state;
};

const applyShield = (state) => {
  const effect = state.effects.shield;

  if (effect) {
    effect.timer--;
    log(`Shield's timer is now ${effect.timer}.`);

    if (effect.timer === 0) {
      log(`Shield wears off, decreasing armor by ${effect.armorWhileActive}.`);
      state.player.armor -= effect.armorWhileActive;
      delete state.effects.shield;
    }
  }

  return state;
};

const applyRecharge = (state) => {
  const effect = state.effects.recharge;

  if (effect) {
    effect.timer--;
    state.player.mana += effect.manaOverTime;
    log(`Recharge provides ${effect.manaOverTime} mana; its timer is now ${effect.timer}.`);

    if (effect.timer === 0) {
      log('Recharge wears off.');
      delete state.effects.recharge;
    }
  }

  return state;
};

const applyPoison = (state) => {
  const effect = state.effects.poison;

  if (effect) {
    effect.timer--;
    state.boss.hp -= effect.damageOverTime;
    log(`Poison deals ${effect.damageOverTime} damage; its timer is now ${effect.timer}.`);

    if (effect.timer === 0) {
      log('Poison wears off.');
      delete state.effects.poison;
    }
  }

  return state;
};

const applyEffects = (state) => applyPoison(applyRecharge(applyShield(print(copy(state)))));

const castMagicMissile = (state) => {
  const nextState = checkGame(applyEffects(state));

  if (nextState.isGameOver) {
    return nextState;
  }

  const spell = spells.magicMissile;

  if (nextState.player.mana >= spell.cost) {
    log(`Player casts ${spell.name}, dealing ${spell.damage} damage.`);
    nextState.player.mana -= spell.cost;
    nextState.spellCasts.push('magicMissile');
    nextState.boss.hp -= spell.damage;
  }

  return checkGame(toggleTurn(nextState));
};

const castDrain = (state) => {
  const nextState = checkGame(applyEffects(state));

  if (nextState.isGameOver) {
    return nextState;
  }

  const spell = spells.drain;

  if (nextState.player.mana >= spell.cost) {
    log(`Player casts ${spell.name}, dealing ${spell.damage} damage, and healing ${spell.heals} hit points.`);
    nextState.player.mana -= spell.cost;
    nextState.spellCasts.push('drain');
    nextState.boss.hp -= spell.damage;
    nextState.player.hp += spell.heals;
  }

  return checkGame(toggleTurn(nextState));
};

const castShield = (state) => {
  const nextState = checkGame(applyEffects(state));

  if (nextState.isGameOver) {
    return nextState;
  }

  const spell = spells.shield;

  if (!nextState.effects.shield && nextState.player.mana >= spell.cost) {
    log(`Player casts ${spell.name}, increasing armor by ${spell.armorWhileActive}.`);
    nextState.player.mana -= spell.cost;
    nextState.spellCasts.push('shield');
    nextState.effects.shield = Object.assign({}, spell, { timer: spell.lasts });
    nextState.player.armor = spell.armorWhileActive;
  } else {
    return checkGame(stopGame(nextState));
  }

  return checkGame(toggleTurn(nextState));
};

const castPoison = (state) => {
  const nextState = checkGame(applyEffects(state));

  if (nextState.isGameOver) {
    return nextState;
  }

  const spell = spells.poison;

  if (!nextState.effects.poison && nextState.player.mana >= spell.cost) {
    log(`Player casts ${spell.name}.`);
    nextState.player.mana -= spell.cost;
    nextState.spellCasts.push('poison');
    nextState.effects.poison = Object.assign({}, spell, { timer: spell.lasts });
  } else {
    return checkGame(stopGame(nextState));
  }

  return checkGame(toggleTurn(nextState));
};

const castRecharge = (state) => {
  const nextState = checkGame(applyEffects(state));

  if (nextState.isGameOver) {
    return nextState;
  }

  const spell = spells.recharge;

  if (!nextState.effects.recharge && nextState.player.mana >= spell.cost) {
    log(`Player casts ${spell.name}.`);
    nextState.player.mana -= spell.cost;
    nextState.spellCasts.push('recharge');
    nextState.effects.recharge = Object.assign({}, spell, { timer: spell.lasts });
  } else {
    return checkGame(stopGame(nextState));
  }

  return checkGame(toggleTurn(nextState));
};

const bossAttack = (state) => {
  const nextState = checkGame(applyEffects(state));

  if (nextState.isGameOver) {
    return nextState;
  }

  const damage = Math.max(nextState.boss.damage - nextState.player.armor, 1);

  nextState.player.armor > 0
    ? log(`Boss attacks for ${nextState.boss.damage} - ${nextState.player.armor} = ${damage} damage!`)
    : log(`Boss attacks for ${damage} damage!`);

  nextState.player.hp -= damage;

  return checkGame(toggleTurn(nextState));
};

const permute = (state, winningGames = []) => {
  if (getManaSpent(state) > lowest) {
    return winningGames;
  }

  const nextStates = [
    bossAttack(castMagicMissile(state)),
    bossAttack(castDrain(state)),
    bossAttack(castShield(state)),
    bossAttack(castPoison(state)),
    bossAttack(castRecharge(state)),
  ];

  const activeGames = nextStates.filter((game) => !game.isGameOver && !game.isFailure);

  winningGames = nextStates.filter((game) => game.isGameOver && game.isSuccess);

  for (let i = 0; i < activeGames.length; i++) {
    winningGames = [
      ...winningGames,
      ...permute(activeGames[i], winningGames),
    ];
  }

  return winningGames;
};

module.exports = (input, player = { hp: 50, mana: 500 }) => {
  const boss = {
    hp: parseInt(input.match(/Hit Points: (\d+)/m)[1]),
    damage: parseInt(input.match(/Damage: (\d+)/m)[1]),
  };

  const initialState = {
    isGameOver: false,
    isPlayerTurn: true,
    isFailure: false,
    isSuccess: false,
    boss: {
      hp: boss.hp,
      damage: boss.damage,
    },
    player: {
      hp: player.hp,
      mana: player.mana,
      armor: 0,
    },
    spellCasts: [],
    effects: {},
  };

  const states = permute(initialState);

  return states
    .map((state) => state.spellCasts.reduce((totalCost, spellId) => totalCost + spells[spellId].cost, 0))
    .sort((a, b) => a - b)[0];
};
