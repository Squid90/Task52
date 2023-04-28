import Swordsman from '../swordsman';

test('Проерка создания персонажа с типом Swordsman', () => {
  const swordsman = new Swordsman('Aragorn', 'Swordsman');
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
  expect(() => new Swordsman('Aragorn_very_long', 'Swordsman').toThrow());
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  expect(() => new Swordsman('A', 'Swordsman').toThrow());
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  expect(() => new Swordsman('Aragorn', 'Dwarf').toThrow());
});

test('Проверка нанесения урона 50 очков', () => {
  const swordsman = new Swordsman('Aragorn', 'Swordsman');
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
  const swordsman = new Swordsman('Aragorn', 'Swordsman');
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
  const swordsman = new Swordsman('Aragorn', 'Swordsman');
  swordsman.damage(5000);

  expect(() => swordsman.levelUp().toThrow());
});

test('Проерка нанесения урона при отрицательном здоровье', () => {
  const swordsman = new Swordsman('Aragorn', 'Swordsman');
  swordsman.damage(5000);

  expect(() => swordsman.damage(10).toThrow());
});
