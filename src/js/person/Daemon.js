import MathChr from '../MathChr';

export default class Daemon extends MathChr {
  constructor(name) {
    super(name, 'Daemon', 10);
    this.defence = 40;
  }
}
