import Daemon from '../daemon';

// eslint-disable-next-line
test('Проерка создания персонажа с типом Daemon', () => {
  const daemon = new Daemon('Karl', 'Daemon');
  const expected = {
    name: 'Karl',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
    // eslint-disable-next-line
    expect(daemon).toEqual(expected);
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const daemon = new Daemon('Karl_very_long', 'Daemon');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const daemon = new Daemon('K', 'Daemon');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const daemon = new Daemon('Karl', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проверка нанесения урона 50 очков', () => {
  const daemon = new Daemon('Karl', 'Daemon');
  const daemonDamaged = {
    name: 'Karl',
    type: 'Daemon',
    health: 70,
    level: 1,
    attack: 10,
    defence: 40,
  };
  daemon.damage(50);
  // eslint-disable-next-line
  expect(daemon).toEqual(daemonDamaged);
});

// eslint-disable-next-line
test('Проверка повышения уровня', () => {
  const daemon = new Daemon('Karl', 'Daemon');
  const daemonNewLevel = {
    name: 'Karl',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  daemon.levelUp();
  // eslint-disable-next-line
  expect(daemon).toEqual(daemonNewLevel);
});

// eslint-disable-next-line
test('Проерка повышения уровня при отрицательном здоровье', () => {
  try {
    const daemon = new Daemon('Karl', 'Daemon');
    daemon.damage(5000);
    daemon.levelUp();
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка нанесения урона при отрицательном здоровье', () => {
  try {
    const daemon = new Daemon('Karl', 'Daemon');
    daemon.damage(5000);
    daemon.damage(10);
  } catch (err) {
    expect(err).not.toBeNull();
  }
});
