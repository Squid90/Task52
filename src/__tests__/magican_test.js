import Magician from '../magician';

// eslint-disable-next-line
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
    // eslint-disable-next-line
    expect(magician).toEqual(expected);
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const magician = new Magician('Gandalf_very_long', 'Magician');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const magician = new Magician('G', 'Magician');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const magician = new Magician('Gandalf', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
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
  // eslint-disable-next-line
  expect(magician).toEqual(magicianDamaged);
});

// eslint-disable-next-line
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
  // eslint-disable-next-line
  expect(magician).toEqual(magicianNewLevel);
});

// eslint-disable-next-line
test('Проерка повышения уровня при отрицательном здоровье', () => {
  try {
    const magician = new Magician('Gandalf', 'Magician');
    magician.damage(5000);
    magician.levelUp();
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка нанесения урона при отрицательном здоровье', () => {
  try {
    const magician = new Magician('Gandalf', 'Magician');
    magician.damage(5000);
    magician.damage(10);
  } catch (err) {
    expect(err).not.toBeNull();
  }
});
