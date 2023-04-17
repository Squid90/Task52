const _daemon = _interopRequireDefault(require('../daemon'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Проерка создания персонажа с типом Daemon', () => {
  const daemon = new _daemon.default('Karl', 'Daemon');
  const expected = {
    name: 'Karl',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(daemon).toEqual(expected);
});

test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const daemon = new _daemon.default('Karl_very_long', 'Daemon');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const daemon = new _daemon.default('K', 'Daemon');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const daemon = new _daemon.default('Karl', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проверка нанесения урона 50 очков', () => {
  const daemon = new _daemon.default('Karl', 'Daemon');
  const daemonDamaged = {
    name: 'Karl',
    type: 'Daemon',
    health: 70,
    level: 1,
    attack: 10,
    defence: 40,
  };
  daemon.damage(50);

  expect(daemon).toEqual(daemonDamaged);
});

test('Проверка повышения уровня', () => {
  const daemon = new _daemon.default('Karl', 'Daemon');
  const daemonNewLevel = {
    name: 'Karl',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  daemon.levelUp();

  expect(daemon).toEqual(daemonNewLevel);
});

test('Проерка повышения уровня при отрицательном здоровье', () => {
  try {
    const daemon = new _daemon.default('Karl', 'Daemon');
    daemon.damage(5000);
    daemon.levelUp();
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка нанесения урона при отрицательном здоровье', () => {
  try {
    const daemon = new _daemon.default('Karl', 'Daemon');
    daemon.damage(5000);
    daemon.damage(10);
  } catch (err) {
    expect(err).not.toBeNull();
  }
});
