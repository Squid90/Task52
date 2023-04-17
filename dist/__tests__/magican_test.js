const _magician = _interopRequireDefault(require('../magician'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Проерка создания персонажа с типом Magician', () => {
  const magician = new _magician.default('Gandalf', 'Magician');
  const expected = {
    name: 'Gandalf',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(magician).toEqual(expected);
});

test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const magician = new _magician.default('Gandalf_very_long', 'Magician');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const magician = new _magician.default('G', 'Magician');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const magician = new _magician.default('Gandalf', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проверка нанесения урона 50 очков', () => {
  const magician = new _magician.default('Gandalf', 'Magician');
  const magicianDamaged = {
    name: 'Gandalf',
    type: 'Magician',
    health: 70,
    level: 1,
    attack: 10,
    defence: 40,
  };
  magician.damage(50);

  expect(magician).toEqual(magicianDamaged);
});

test('Проверка повышения уровня', () => {
  const magician = new _magician.default('Gandalf', 'Magician');
  const magicianNewLevel = {
    name: 'Gandalf',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  magician.levelUp();

  expect(magician).toEqual(magicianNewLevel);
});

test('Проерка повышения уровня при отрицательном здоровье', () => {
  try {
    const magician = new _magician.default('Gandalf', 'Magician');
    magician.damage(5000);
    magician.levelUp();
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка нанесения урона при отрицательном здоровье', () => {
  try {
    const magician = new _magician.default('Gandalf', 'Magician');
    magician.damage(5000);
    magician.damage(10);
  } catch (err) {
    expect(err).not.toBeNull();
  }
});
