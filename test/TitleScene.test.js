/* eslint no-undef: 0 */
import TitleScene from '../src/Scenes/TitleScene';

test('Titlescene is a subclass of Phaser.Scene', () => {
  expect(TitleScene).toBeSubclassOf(Phaser.Scene);
});