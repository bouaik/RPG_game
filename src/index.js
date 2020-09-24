import 'phaser';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import UiScene from './Scenes/UiScene';
import InstructionScene from './Scenes/InstructionScene';
import CreditsScene from './Scenes/CreditsScene';
import GameOverScene from './Scenes/GameOverScene';
import LeaderBoardScene from './Scenes/LeaderBoardScene';
import Model from './Scenes/Model';

class Game extends Phaser.Game { // eslint-disable-line
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Score', LeaderBoardScene);
    this.scene.add('Instructions', InstructionScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Ui', UiScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();