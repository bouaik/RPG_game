import 'phaser';// eslint-disable-line
import logoImage from '../../build/assets/adventure.png';
import backgroundTiled from '../../build/assets/level/background-extruded.png';
import items from '../../build/assets/items.png';
import characters from '../../build/assets/characters.png';
import monsters from '../../build/assets/monsters.png';
import goldSound from '../../build/assets/audio/Pickup.wav';
import EnemyDeath from '../../build/assets/audio/EnemyDeath.wav';
import playerAttack from '../../build/assets/audio/PlayerAttack.wav';
import playerDamage from '../../build/assets/audio/PlayerDamage.wav';
import playerDeath from '../../build/assets/audio/PlayerDeath.wav';

const jsonMap = require('../../build/assets/level/forestland.json');

export default class BootScene extends Phaser.Scene { // eslint-disable-line
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo1', logoImage);
    this.load.image('background', backgroundTiled);
    this.loadSpriteSheets();
    this.loadAudio();
    this.loadTileMap();
  }

  loadSpriteSheets() {
    this.load.spritesheet('items', items, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('characters', characters, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('monsters', monsters, { frameWidth: 32, frameHeight: 32 });
  }

  loadAudio() {
    this.load.audio('goldSound', goldSound);
    this.load.audio('enemyDeath', EnemyDeath);
    this.load.audio('playerAttack', playerAttack);
    this.load.audio('playerDamage', playerDamage);
    this.load.audio('playerDeath', playerDeath);
  }

  loadTileMap() {
    this.load.tilemapTiledJSON('map', jsonMap);
  }

  create() {
    this.scene.start('Preloader');
  }
}