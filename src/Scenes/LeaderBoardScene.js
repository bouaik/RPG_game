import Phaser from 'phaser';// eslint-disable-line
import Button from '../Objects/Button';
import Api from '../Objects/api';
/* eslint-disable no-undef */

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('Score');
  }

  create() {
    const image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bgImage');
    const scaleX = this.cameras.main.width / image.width;
    const scaleY = this.cameras.main.height / image.height;
    const scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(0);
    this.add.text(400, 100, 'LeaderBoard 🏆', {
      color: 'white',
      fontSize: '32px ',
    }).setOrigin(0.5, 0.5);

    Api.fetchScores().then((data) => {
      const { result } = data;
      const scoreStyle = {
        color: 'white',
        fontSize: '38px ',
      };

      result.sort((x, y) => y.score - x.score);
      const space = 40;
      for (let i = 0; i < 10; i += 1) {
        if (result[i] !== undefined) {
          this.add.text(260, 150 + (space * i),
            `${i + 1}. Name: ${result[i].user} ↔️ Score: ${result[i].score}`,
            scoreStyle);
        }
      }
    });

    this.menuButton = new Button(this, 700, 100, 'blueButton1', 'blueButton2', 'Restart', 'Instructions').setInteractive();

    this.menuButton.on('pointerdown', () => {
      this.model = this.sys.game.globals.model;
      this.model.score = 0;
      this.scene.start('Instructions');
    });
  }
}