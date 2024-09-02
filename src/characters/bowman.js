import { Character } from './base_character.js'
import { CharacterTypes, defaultBowmanDefence, defaultBowmanAttack } from './consts.js'

export class Bowman extends Character {
    constructor(name) {
        super(name, CharacterTypes.BOWMAN);
        this.defence = defaultBowmanDefence;
        this.attack = defaultBowmanAttack;
    }
}