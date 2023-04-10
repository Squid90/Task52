import Character from './game';

export default class Bowman extends Character {
  constructor(name, type = 'Bowman') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
