export default class Character {
  constructor(name, type) {
    try {
      if (name.length < 2 || name.length > 10) {
        throw new Error('Имя указано неверно');
      }
      this.name = name;
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
    }

    try {
      const arrType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (!arrType.includes(type)) {
        throw new Error('Тип указан неверно');
      }
      this.type = type;
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
    }

    this.health = 100;
    this.level = 1;

    switch (type) {
      case 'Bowman':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Swordsman':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Magician':
        this.attack = 10;
        this.defence = 40;
        break;
      case 'Undead':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Zombie':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Daemon':
        this.attack = 10;
        this.defence = 40;
        break;
      default:
        break;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }

  levelUp() {
    try {
      if (this.health <= 0) {
        throw new Error('Нельзя повысить уровень умершего');
      }
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
    }
  }
}

// eslint-disable-next-line
const player1 = new Character('Legolas', 'Bowman');
// eslint-disable-next-line
const player2 = new Character('Aragorn', 'Swordsman');
// eslint-disable-next-line
const player3 = new Character('Gandalf', 'Magician');
// eslint-disable-next-line
const player4 = new Character('Karl', 'Daemon');
// eslint-disable-next-line
const player5 = new Character('Freddy', 'Undead');
// eslint-disable-next-line
const player6 = new Character('Bob', 'Zombie');
