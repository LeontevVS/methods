import { Bowman } from './characters/bowman'
import { Swordsman } from './characters/swordsman'
import { Magician } from './characters/magician'
import { Daemon } from './characters/daemon'
import { Undead } from './characters/undead'
import { Zombie } from './characters/zombie'

const c1 = new Bowman('c1');
const c2 = new Swordsman('c2');
const c3 = new Magician('c3');
const c4 = new Daemon('c4');
const c5 = new Undead('c5');
const c6 = new Zombie('c6');

for (let c of [c1, c2, c3, c4, c5, c6]) {
    console.log(c);
}