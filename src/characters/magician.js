import { Character } from './base_character.js'
import { CharacterTypes, defaultMagicianDefence, defaultMagicianAttack } from './consts.js'

export class Magician extends Character {
    constructor(name) {
        super(name, CharacterTypes.MAGICIAN);
        this.defence = defaultMagicianDefence;
        this.attack = defaultMagicianAttack;
    }
}