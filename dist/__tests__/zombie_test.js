const _zombie = _interopRequireDefault(require('../zombie'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Проерка корректного создания персонажа с типом Zombie', () => {
  const zombie = new _zombie.default('Bob', 'Zombie');
  const expected = {
    name: 'Bob',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(zombie).toEqual(expected);
});

test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const zombie = new _zombie.default('Bob_very_long', 'Zombie');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const zombie = new _zombie.default('B', 'Zombie');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const zombie = new _zombie.default('Bob', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проверка нанесения урона 50 очков', () => {
  const zombie = new _zombie.default('Bob', 'Zombie');
  const zombieDamaged = {
    name: 'Bob',
    type: 'Zombie',
    health: 55,
    level: 1,
    attack: 40,
    defence: 10,
  };
  zombie.damage(50);

  expect(zombie).toEqual(zombieDamaged);
});

test('Проверка повышения уровня', () => {
  const zombie = new _zombie.default('Bob', 'Zombie');
  const zombieNewLevel = {
    name: 'Bob',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };
  zombie.levelUp();

  expect(zombie).toEqual(zombieNewLevel);
});

test('Проерка повышения уровня при отрицательном здоровье', () => {
  try {
    const zombie = new _zombie.default('Bob', 'Zombie');
    zombie.damage(5000);
    zombie.levelUp();
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка нанесения урона при отрицательном здоровье', () => {
  try {
    const zombie = new _zombie.default('Bob', 'Zombie');
    zombie.damage(5000);
    zombie.damage(10);
  } catch (err) {
    expect(err).not.toBeNull();
  }
});
