import Bowman from '../bowman';

// eslint-disable-next-line
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
    // eslint-disable-next-line
    expect(bowman).toEqual(expected);
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const bowman = new Bowman('Legolas_very_long', 'Bowman');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const bowman = new Bowman('L', 'Bowman');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const bowman = new Bowman('Legolas', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
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
  // eslint-disable-next-line
  expect(bowman).toEqual(bowmanDamaged);
});

// eslint-disable-next-line
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
  // eslint-disable-next-line
  expect(bowman).toEqual(bowmanNewLevel);
});

// eslint-disable-next-line
test('Проерка повышения уровня при отрицательном здоровье', () => {
  try {
    const bowman = new Bowman('Legolas', 'Bowman');
    bowman.damage(5000);
    bowman.levelUp();
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка нанесения урона при отрицательном здоровье', () => {
  try {
    const bowman = new Bowman('Legolas', 'Bowman');
    bowman.damage(5000);
    bowman.damage(10);
  } catch (err) {
    expect(err).not.toBeNull();
  }
});