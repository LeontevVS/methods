import { Character } from './base_character.js'
import { CharacterTypes, defaultSwordsmanDefence, defaultSwordsmanAttack } from './consts.js'

export class Swordsman extends Character {
    constructor(name) {
        super(name, CharacterTypes.SWORDSMAN);
        this.defence = defaultSwordsmanDefence;
        this.attack = defaultSwordsmanAttack;
    }
}