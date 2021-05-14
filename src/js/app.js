import Magician from './person/Magician';
import Daemon from './person/Daemon';

// Bowman, Swordsman, Magician, Daemon, Undead, Zombie
const magician = new Magician('SWn');
const daemon = new Daemon('SWn');
console.log(magician, daemon);
magician.distance = 5;
// magician.stoned = true;
console.log(magician.attack);
console.log(magician);
