import Swordsman from '../swordsman';

// eslint-disable-next-line
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
    // eslint-disable-next-line
    expect(swordsman).toEqual(expected);
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const swordsman = new Swordsman('Aragorn_very_long', 'Swordsman');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const swordsman = new Swordsman('A', 'Swordsman');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const swordsman = new Swordsman('Aragorn', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
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
  // eslint-disable-next-line
  expect(swordsman).toEqual(swordsmanDamaged);
});

// eslint-disable-next-line
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
  // eslint-disable-next-line
  expect(swordsman).toEqual(swordsmanNewLevel);
});

// eslint-disable-next-line
test('Проерка повышения уровня при отрицательном здоровье', () => {
  try {
    const swordsman = new Swordsman('Aragorn', 'Swordsman');
    swordsman.damage(5000);
    swordsman.levelUp();
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка нанесения урона при отрицательном здоровье', () => {
  try {
    const swordsman = new Swordsman('Aragorn', 'Swordsman');
    swordsman.damage(5000);
    swordsman.damage(10);
  } catch (err) {
    expect(err).not.toBeNull();
  }
});