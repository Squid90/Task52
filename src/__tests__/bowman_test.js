import Bowman from '../bowman';

test('Проерка корректного создания персонажа с типом Bowman', () => {
  const bowman = new Bowman('Legolas', 'Bowman');
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
  expect(() => new Bowman('Legolas_very_long', 'Bowman').toThrow());
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  expect(() => new Bowman('L', 'Bowman').toThrow());
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  expect(() => new Bowman('Legolas', 'Dwarf').toThrow());
});

test('Проверка нанесения урона 50 очков', () => {
  const bowman = new Bowman('Legolas', 'Bowman');
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
  const bowman = new Bowman('Legolas', 'Bowman');
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
  const bowman = new Bowman('Legolas', 'Bowman');
  bowman.damage(5000);
  expect(() => bowman.levelUp().toThrow());
});

test('Проерка нанесения урона при отрицательном здоровье', () => {
  const bowman = new Bowman('Legolas', 'Bowman');
  bowman.damage(5000);

  expect(() => bowman.damage(10).toThrow());
});
