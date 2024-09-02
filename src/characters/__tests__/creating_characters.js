import { Character } from '../base_character'
import { Bowman } from '../bowman'
import { Swordsman } from '../swordsman'
import { Magician } from '../magician'
import { Daemon } from '../daemon'
import { Undead } from '../undead'
import { Zombie } from '../zombie'
import {
    CharacterTypes,
    defaultHealth,
    defaultLevel,
    defaultBowmanDefence,
    defaultSwordsmanDefence,
    defaultMagicianDefence,
    defaultDaemonDefence,
    defaultUndeadDefence,
    defaultZombieDefence,
    defaultBowmanAttack,
    defaultSwordsmanAttack,
    defaultMagicianAttack,
    defaultDaemonAttack,
    defaultUndeadAttack,
    defaultZombieAttack
} from '../consts'

test('test creating characters', () => {
    const bowman = new Bowman('bowman');
    const expected_bowman = {
        "name": "bowman",
        "type": CharacterTypes.BOWMAN,
        "health": defaultHealth,
        "level": defaultLevel,
        "attack": defaultBowmanAttack,
        "defence": defaultBowmanDefence,
    };
    expect(bowman).toEqual(expected_bowman);

    const swordsman = new Swordsman('swordsman');
    const expected_swordsman = {
        "name": "swordsman",
        "type": CharacterTypes.SWORDSMAN,
        "health": defaultHealth,
        "level": defaultLevel,
        "attack": defaultSwordsmanAttack,
        "defence": defaultSwordsmanDefence,
    };
    expect(swordsman).toEqual(expected_swordsman);

    const magician = new Magician('magician');
    const expected_magician = {
        "name": "magician",
        "type": CharacterTypes.MAGICIAN,
        "health": defaultHealth,
        "level": defaultLevel,
        "attack": defaultMagicianAttack,
        "defence": defaultMagicianDefence,
    };
    expect(magician).toEqual(expected_magician);

    const daemon = new Daemon('daemon');
    const expected_daemon = {
        "name": "daemon",
        "type": CharacterTypes.DAEMON,
        "health": defaultHealth,
        "level": defaultLevel,
        "attack": defaultDaemonAttack,
        "defence": defaultDaemonDefence,
    };
    expect(daemon).toEqual(expected_daemon);

    const undead = new Undead('undead');
    const expected_undead = {
        "name": "undead",
        "type": CharacterTypes.UNDEAD,
        "health": defaultHealth,
        "level": defaultLevel,
        "attack": defaultUndeadAttack,
        "defence": defaultUndeadDefence,
    };
    expect(undead).toEqual(expected_undead);

    const zombie = new Zombie('zombie');
    const expected_zombie = {
        "name": "zombie",
        "type": CharacterTypes.ZOMBIE,
        "health": defaultHealth,
        "level": defaultLevel,
        "attack": defaultZombieAttack,
        "defence": defaultZombieDefence,
    };
    expect(zombie).toEqual(expected_zombie);
});

test('test validateName', () => {
    const character = new Character('name', CharacterTypes.BOWMAN);
    const expected_character = {
        "name": "name",
        "type": CharacterTypes.BOWMAN,
        "health": defaultHealth,
        "level": defaultLevel,
        "attack": undefined,
        "defence": undefined,
    };
    expect(character).toEqual(expected_character);
    try {
        new Character('a', CharacterTypes.BOWMAN)
    } catch (e) {
        expect(e).toEqual(new Error('incorrect character name'));
    }
    try {
        new Character('too many letters', CharacterTypes.BOWMAN)
    } catch (e) {
        expect(e).toEqual(new Error('incorrect character name'));
    }
});

test('test validateType', () => {
    const character = new Character('name', CharacterTypes.BOWMAN);
    const expected_character = {
        "name": "name",
        "type": CharacterTypes.BOWMAN,
        "health": defaultHealth,
        "level": defaultLevel,
        "attack": undefined,
        "defence": undefined,
    };
    expect(character).toEqual(expected_character);
    try {
        new Character('name', 'some type');
    } catch (e) {
        expect(e).toEqual(new Error('incorrect character type'));
    }
});