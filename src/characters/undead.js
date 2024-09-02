import { Character } from './base_character.js'
import { CharacterTypes, defaultUndeadDefence, defaultUndeadAttack } from './consts.js'

export class Undead extends Character {
    constructor(name) {
        super(name, CharacterTypes.UNDEAD);
        this.defence = defaultUndeadDefence;
        this.attack = defaultUndeadAttack;
    }
}