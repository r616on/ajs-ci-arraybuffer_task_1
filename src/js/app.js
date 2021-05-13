import Bowerman from "./person/Bowerman";
import Swordsman from "./person/Swordsman";
import Magician from "./person/Magician";
import Daemon from "./person/Daemon";
import Zombie from "./person/Zombie";
import Undead from "./person/classUndead";
import Character from "./Character";

// Bowman, Swordsman, Magician, Daemon, Undead, Zombie
const magician = new Magician("SWn");
const daemon = new Daemon("SWn");
const zombie = new Zombie("SWn");
const undead = new Undead("SWn");
const ch = new Character("trololo");
console.log(magician, daemon, zombie, undead, ch);
magician.distance = 5;
//magician.stoned = true;
console.log(magician.attack);
console.log(magician);
