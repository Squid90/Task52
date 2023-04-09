import Character from '../game';

const playerExample = {
  name: 'Legolas', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
};
const playerNewLevel = {
  name: 'Legolas', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30,
};
const playerDamaged = {
  name: 'Legolas', type: 'Bowman', health: 62.5, level: 1, attack: 25, defence: 25,
};

// eslint-disable-next-line
test('check Caracter', () => {
  const player = new Character('Legolas', 'Bowman');
  // eslint-disable-next-line
  expect(player).toEqual(playerExample);
});

// eslint-disable-next-line
test('check damage', () => {
  const player = new Character('Legolas', 'Bowman');
  player.damage(50);
  // eslint-disable-next-line
  expect(player).toEqual(playerDamaged);
});

// eslint-disable-next-line
test('check levelUp', () => {
  const player = new Character('Legolas', 'Bowman');
  player.levelUp();
  // eslint-disable-next-line
  expect(player).toEqual(playerNewLevel);
});
