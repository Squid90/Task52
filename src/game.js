export default class Character {
  constructor(name, type) {
    const arrType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя указано неверно');
    } else {
      this.name = name;
    }

    if (!arrType.includes(type)) {
      throw new Error('Тип указан неверно');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  damage(points) {
    if (this.health < 0) {
      throw new Error('Враг уже мертв');
    } else {
      this.health -= points * (1 - this.defence / 100);
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего');
    } else {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  }
}
