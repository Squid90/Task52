import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';

const player1 = {
  name: 'Legolas', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
};
const player2 = {
  name: 'Aragorn', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
};
const player3 = {
  name: 'Gandalf', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
};
const player4 = {
  name: 'Karl', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
};
const player5 = {
  name: 'Freddy', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
};
const player6 = {
  name: 'Bob', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
};
const playerNewLevel = {
  name: 'Legolas', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30,
};
const playerDamaged = {
  name: 'Legolas', type: 'Bowman', health: 62.5, level: 1, attack: 25, defence: 25,
};

// eslint-disable-next-line
test('check player1', () => {
  const player = new Bowman('Legolas', 'Bowman');
  // eslint-disable-next-line
  expect(player).toEqual(player1);
});

// eslint-disable-next-line
test('check player2', () => {
  const player = new Swordsman('Aragorn', 'Swordsman');
  // eslint-disable-next-line
  expect(player).toEqual(player2);
});

// eslint-disable-next-line
test('check player3', () => {
  const player = new Magician('Gandalf', 'Magician');
  // eslint-disable-next-line
  expect(player).toEqual(player3);
});

// eslint-disable-next-line
test('check player4', () => {
  const player = new Daemon('Karl', 'Daemon');
  // eslint-disable-next-line
  expect(player).toEqual(player4);
});

// eslint-disable-next-line
test('check player5', () => {
  const player = new Undead('Freddy', 'Undead');
  // eslint-disable-next-line
  expect(player).toEqual(player5);
});

// eslint-disable-next-line
test('check player6', () => {
  const player = new Zombie('Bob', 'Zombie');
  // eslint-disable-next-line
  expect(player).toEqual(player6);
});

// eslint-disable-next-line
test('check damage', () => {
  const player = new Bowman('Legolas', 'Bowman');
  player.damage(50);
  // eslint-disable-next-line
  expect(player).toEqual(playerDamaged);
});

// eslint-disable-next-line
test('check levelUp', () => {
  const player = new Bowman('Legolas', 'Bowman');
  player.levelUp();
  // eslint-disable-next-line
  expect(player).toEqual(playerNewLevel);
});
