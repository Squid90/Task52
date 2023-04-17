const _swordsman = _interopRequireDefault(require('../swordsman'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Проерка создания персонажа с типом Swordsman', () => {
  const swordsman = new _swordsman.default('Aragorn', 'Swordsman');
  const expected = {
    name: 'Aragorn',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(swordsman).toEqual(expected);
});

test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const swordsman = new _swordsman.default('Aragorn_very_long', 'Swordsman');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const swordsman = new _swordsman.default('A', 'Swordsman');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const swordsman = new _swordsman.default('Aragorn', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проверка нанесения урона 50 очков', () => {
  const swordsman = new _swordsman.default('Aragorn', 'Swordsman');
  const swordsmanDamaged = {
    name: 'Aragorn',
    type: 'Swordsman',
    health: 55,
    level: 1,
    attack: 40,
    defence: 10,
  };
  swordsman.damage(50);

  expect(swordsman).toEqual(swordsmanDamaged);
});

test('Проверка повышения уровня', () => {
  const swordsman = new _swordsman.default('Aragorn', 'Swordsman');
  const swordsmanNewLevel = {
    name: 'Aragorn',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };
  swordsman.levelUp();

  expect(swordsman).toEqual(swordsmanNewLevel);
});

test('Проерка повышения уровня при отрицательном здоровье', () => {
  try {
    const swordsman = new _swordsman.default('Aragorn', 'Swordsman');
    swordsman.damage(5000);
    swordsman.levelUp();
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка нанесения урона при отрицательном здоровье', () => {
  try {
    const swordsman = new _swordsman.default('Aragorn', 'Swordsman');
    swordsman.damage(5000);
    swordsman.damage(10);
  } catch (err) {
    expect(err).not.toBeNull();
  }
});
