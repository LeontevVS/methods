import {
    CharacterTypes,
    defaultHealth,
    defaultLevel,
    minNameLength,
    maxNameLength,
    defaultAttackRaise,
    defaultDefenceRaise
} from './consts.js'

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

    levelUp() {
        if (this.health <= 0) {
            throw new Error('can not level up to death character');
        }
        ++this.level;
        this.health = defaultHealth;
        this.attack *= defaultAttackRaise;
        this.defence *= defaultDefenceRaise;
    }

    damage(points) {
        if (this.health <= 0) {
            throw new Error('can not damage death character');
        }
        this.health -= points * (1 - this.defence / 100);
    }
}