import { CharacterTypes, defaultHealth, defaultLevel, minNameLength, maxNameLength } from './consts.js'

export class Character {
    constructor(name, type) {
        this.validateName(name);
        this.validateType(type);
        this.name = name;
        this.type = type;
        this.health = defaultHealth;
        this.level = defaultLevel;
        this.attack = undefined;
        this.defence = undefined;
    }

    validateName(name) {
        if (name.length < minNameLength || name.length > maxNameLength){
            throw new Error('incorrect character name');
        }
    }
    
    validateType(type) {
        if (!Object.values(CharacterTypes).includes(type)){
            throw new Error('incorrect character type');
        }
    }
}