import { Character } from './base_character.js'
import { CharacterTypes, defaultZombieDefence, defaultZombieAttack } from './consts.js'

export class Zombie extends Character {
    constructor(name) {
        super(name, CharacterTypes.ZOMBIE);
        this.defence = defaultZombieDefence;
        this.attack = defaultZombieAttack;
    }
}