import Undead from '../undead';

test('Проерка создания персонажа с типом Undead', () => {
  const undead = new Undead('Freddy', 'Undead');
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
  expect(() => new Undead('Freddy_very_long', 'Undead').toThrow());
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  expect(() => new Undead('F', 'Undead').toThrow());
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  expect(() => new Undead('Freddy', 'Dwarf').toThrow());
});

test('Проверка нанесения урона 50 очков', () => {
  const undead = new Undead('Freddy', 'Undead');
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
  const undead = new Undead('Freddy', 'Undead');
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
  const undead = new Undead('Freddy', 'Undead');
  undead.damage(5000);

  expect(() => undead.levelUp().toThrow());
});

test('Проерка нанесения урона при отрицательном здоровье', () => {
  const undead = new Undead('Freddy', 'Undead');
  undead.damage(5000);

  expect(() => undead.damage(10).toThrow());
});
