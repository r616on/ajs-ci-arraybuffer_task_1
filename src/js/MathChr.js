import Character from './Character';

export default class MathChr extends Character {
  constructor(name, type, attack) {
    super(name, type);
    this.attack = attack;
    this.distance = 0;
    this.stoned = false;
  }

  get stoned() {
    return this.inStoned;
  }

  set stoned(value) {
    this.inStoned = value;
  }

  set attack(value) {
    this.inAttack = value;
  }

  get attack() {
    if (this.distance < 1) {
      return this.inAttack;
    }
    if (this.stoned) {
      return (
        this.inAttack
        - (this.inAttack / 100) * 10 * (this.distance - 1)
        - Math.round(Math.log2(this.distance)) * 5
      );
    }
    return this.inAttack - (this.inAttack / 100) * 10 * (this.distance - 1);
  }
}
