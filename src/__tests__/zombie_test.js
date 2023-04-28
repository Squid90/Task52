import Zombie from '../zombie';

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

  expect(zombie).toEqual(expected);
});

test('Проерка создания персонажа c именем больше 10 символов', () => {
  expect(() => new Zombie('Bob_very_long', 'Zombie').toThrow());
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  expect(() => new Zombie('B', 'Zombie').toThrow());
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  expect(() => new Zombie('Bob', 'Dwarf').toThrow());
});

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

  expect(zombie).toEqual(zombieDamaged);
});

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

  expect(zombie).toEqual(zombieNewLevel);
});

test('Проерка повышения уровня при отрицательном здоровье', () => {
  const zombie = new Zombie('Bob', 'Zombie');
  zombie.damage(5000);

  expect(() => zombie.levelUp().toThrow());
});

test('Проерка нанесения урона при отрицательном здоровье', () => {
  const zombie = new Zombie('Bob', 'Zombie');
  zombie.damage(5000);

  expect(() => zombie.damage(10).toThrow());
});
