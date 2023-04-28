import Daemon from '../daemon';

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

  expect(daemon).toEqual(expected);
});

test('Проерка создания персонажа c именем больше 10 символов', () => {
  expect(() => new Daemon('Karl_very_long', 'Daemon').toThrow());
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  expect(() => new Daemon('K', 'Daemon').toThrow());
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  expect(() => new Daemon('Karl', 'Dwarf').toThrow());
});

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

  expect(daemon).toEqual(daemonDamaged);
});

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

  expect(daemon).toEqual(daemonNewLevel);
});

test('Проерка повышения уровня при отрицательном здоровье', () => {
  const daemon = new Daemon('Karl', 'Daemon');
  daemon.damage(5000);

  expect(() => daemon.levelUp().toThrow());
});

test('Проерка нанесения урона при отрицательном здоровье', () => {
  const daemon = new Daemon('Karl', 'Daemon');
  daemon.damage(5000);

  expect(() => daemon.damage(10).toThrow());
});
