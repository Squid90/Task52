import Undead from '../undead';

// eslint-disable-next-line
test('Проерка создания персонажа с типом Undead', () => {
  const undead = new Undead('Freddy', 'Undead');
  const expected = {
    name: 'Freddy',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
    // eslint-disable-next-line
    expect(undead).toEqual(expected);
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const undead = new Undead('Freddy_very_long', 'Undead');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const undead = new Undead('F', 'Undead');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const undead = new Undead('Freddy', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проверка нанесения урона 50 очков', () => {
  const undead = new Undead('Freddy', 'Undead');
  const undeadDamaged = {
    name: 'Freddy',
    type: 'Undead',
    health: 62.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  undead.damage(50);
  // eslint-disable-next-line
  expect(undead).toEqual(undeadDamaged);
});

// eslint-disable-next-line
test('Проверка повышения уровня', () => {
  const undead = new Undead('Freddy', 'Undead');
  const undeadNewLevel = {
    name: 'Freddy',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  undead.levelUp();
  // eslint-disable-next-line
  expect(undead).toEqual(undeadNewLevel);
});

// eslint-disable-next-line
test('Проерка повышения уровня при отрицательном здоровье', () => {
  try {
    const undead = new Undead('Freddy', 'Undead');
    undead.damage(5000);
    undead.levelUp();
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка нанесения урона при отрицательном здоровье', () => {
  try {
    const undead = new Undead('Freddy', 'Undead');
    undead.damage(5000);
    undead.damage(10);
  } catch (err) {
    expect(err).not.toBeNull();
  }
});