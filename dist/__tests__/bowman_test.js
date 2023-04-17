const _bowman = _interopRequireDefault(require('../bowman'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Проерка корректного создания персонажа с типом Bowman', () => {
  const bowman = new _bowman.default('Legolas', 'Bowman');
  const expected = {
    name: 'Legolas',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(bowman).toEqual(expected);
});

test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const bowman = new _bowman.default('Legolas_very_long', 'Bowman');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const bowman = new _bowman.default('L', 'Bowman');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const bowman = new _bowman.default('Legolas', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проверка нанесения урона 50 очков', () => {
  const bowman = new _bowman.default('Legolas', 'Bowman');
  const bowmanDamaged = {
    name: 'Legolas',
    type: 'Bowman',
    health: 62.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  bowman.damage(50);

  expect(bowman).toEqual(bowmanDamaged);
});

test('Проверка повышения уровня', () => {
  const bowman = new _bowman.default('Legolas', 'Bowman');
  const bowmanNewLevel = {
    name: 'Legolas',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  bowman.levelUp();

  expect(bowman).toEqual(bowmanNewLevel);
});

test('Проерка повышения уровня при отрицательном здоровье', () => {
  try {
    const bowman = new _bowman.default('Legolas', 'Bowman');
    bowman.damage(5000);
    bowman.levelUp();
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка нанесения урона при отрицательном здоровье', () => {
  try {
    const bowman = new _bowman.default('Legolas', 'Bowman');
    bowman.damage(5000);
    bowman.damage(10);
  } catch (err) {
    expect(err).not.toBeNull();
  }
});
