import Character from "./Character";
export default class Math_ extends Character {
  constructor(name, type, attack) {
    super(name, type);
    this.attack = attack;
    this.distance = 0;
    this.stoned;
  }
  get stoned() {
    return this._stoned;
  }
  set stoned(value) {
    this._stoned = value;
  }
  set attack(value) {
    this._attack = value;
  }
  get attack() {
    if (this.stoned) {
      return (
        this._attack -
        (this._attack / 100) * 10 * (this.distance - 1) -
        Math.log2(this.distance) * 5
      );
    } else {
      return this._attack - (this._attack / 100) * 10 * (this.distance - 1);
    }
  }
}
