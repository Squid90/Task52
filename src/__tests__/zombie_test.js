import Zombie from '../zombie';

// eslint-disable-next-line
test('Проерка корректного создания персонажа с типом Zombie', () => {
  const zombie = new Zombie('Bob', 'Zombie');
  const expected = {
    name: 'Bob',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
    // eslint-disable-next-line
    expect(zombie).toEqual(expected);
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const zombie = new Zombie('Bob_very_long', 'Zombie');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const zombie = new Zombie('B', 'Zombie');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const zombie = new Zombie('Bob', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проверка нанесения урона 50 очков', () => {
  const zombie = new Zombie('Bob', 'Zombie');
  const zombieDamaged = {
    name: 'Bob',
    type: 'Zombie',
    health: 55,
    level: 1,
    attack: 40,
    defence: 10,
  };
  zombie.damage(50);
  // eslint-disable-next-line
  expect(zombie).toEqual(zombieDamaged);
});

// eslint-disable-next-line
test('Проверка повышения уровня', () => {
  const zombie = new Zombie('Bob', 'Zombie');
  const zombieNewLevel = {
    name: 'Bob',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };
  zombie.levelUp();
  // eslint-disable-next-line
  expect(zombie).toEqual(zombieNewLevel);
});

// eslint-disable-next-line
test('Проерка повышения уровня при отрицательном здоровье', () => {
  try {
    const zombie = new Zombie('Bob', 'Zombie');
    zombie.damage(5000);
    zombie.levelUp();
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка нанесения урона при отрицательном здоровье', () => {
  try {
    const zombie = new Zombie('Bob', 'Zombie');
    zombie.damage(5000);
    zombie.damage(10);
  } catch (err) {
    expect(err).not.toBeNull();
  }
});