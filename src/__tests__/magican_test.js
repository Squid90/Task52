import Magician from '../magician';

test('Проерка создания персонажа с типом Magician', () => {
  const magician = new Magician('Gandalf', 'Magician');
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
  expect(() => new Magician('Gandalf_very_long', 'Magician').toThrow());
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  expect(() => new Magician('G', 'Magician').toThrow());
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  expect(() => new Magician('Gandalf', 'Dwarf').toThrow());
});

test('Проверка нанесения урона 50 очков', () => {
  const magician = new Magician('Gandalf', 'Magician');
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
  const magician = new Magician('Gandalf', 'Magician');
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
  const magician = new Magician('Gandalf', 'Magician');
  magician.damage(5000);
  expect(() => magician.levelUp().toThrow());
});

test('Проерка нанесения урона при отрицательном здоровье', () => {
  const magician = new Magician('Gandalf', 'Magician');
  magician.damage(5000);

  expect(() => magician.damage(10).toThrow());
});
