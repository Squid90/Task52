const _undead = _interopRequireDefault(require('../undead'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Проерка создания персонажа с типом Undead', () => {
  const undead = new _undead.default('Freddy', 'Undead');
  const expected = {
    name: 'Freddy',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(undead).toEqual(expected);
});

test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const undead = new _undead.default('Freddy_very_long', 'Undead');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const undead = new _undead.default('F', 'Undead');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const undead = new _undead.default('Freddy', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проверка нанесения урона 50 очков', () => {
  const undead = new _undead.default('Freddy', 'Undead');
  const undeadDamaged = {
    name: 'Freddy',
    type: 'Undead',
    health: 62.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  undead.damage(50);

  expect(undead).toEqual(undeadDamaged);
});

test('Проверка повышения уровня', () => {
  const undead = new _undead.default('Freddy', 'Undead');
  const undeadNewLevel = {
    name: 'Freddy',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  undead.levelUp();

  expect(undead).toEqual(undeadNewLevel);
});

test('Проерка повышения уровня при отрицательном здоровье', () => {
  try {
    const undead = new _undead.default('Freddy', 'Undead');
    undead.damage(5000);
    undead.levelUp();
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка нанесения урона при отрицательном здоровье', () => {
  try {
    const undead = new _undead.default('Freddy', 'Undead');
    undead.damage(5000);
    undead.damage(10);
  } catch (err) {
    expect(err).not.toBeNull();
  }
});
