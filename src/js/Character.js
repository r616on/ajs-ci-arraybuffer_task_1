export default class Character {
  constructor(name, type, attack) {
    if (typeof name === "string") {
      if (name.length > 2 && name.length < 10) {
        this.name = name;
      } else {
        throw new Error("Длинна имени не верна");
      }
    } else {
      throw new Error("Неправильный тип данных");
    }
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = 0;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += (this.attack / 100) * 20;
      this.defence += (this.defence / 100) * 20;
    } else {
      throw new Error("Жизней меньше 0 невозможно увеличить уровень");
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error("Жизней  0 невозможно отнять больше");
    }
  }
}
