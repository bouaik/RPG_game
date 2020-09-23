webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(0);

exports.default = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _GameScene = __webpack_require__(3);

var _GameScene2 = _interopRequireDefault(_GameScene);

var _BootScene = __webpack_require__(4);

var _BootScene2 = _interopRequireDefault(_BootScene);

var _PreloaderScene = __webpack_require__(5);

var _PreloaderScene2 = _interopRequireDefault(_PreloaderScene);

var _TitleScene = __webpack_require__(6);

var _TitleScene2 = _interopRequireDefault(_TitleScene);

var _OptionsScene = __webpack_require__(7);

var _OptionsScene2 = _interopRequireDefault(_OptionsScene);

var _CreditsScene = __webpack_require__(8);

var _CreditsScene2 = _interopRequireDefault(_CreditsScene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_Phaser$Game) {
  _inherits(Game, _Phaser$Game);

  function Game() {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, _config2.default));

    _this.scene.add('Boot', _BootScene2.default);
    _this.scene.add('Preloader', _PreloaderScene2.default);
    _this.scene.add('Title', _TitleScene2.default);
    _this.scene.add('Options', _OptionsScene2.default);
    _this.scene.add('Credits', _CreditsScene2.default);
    _this.scene.add('Game', _GameScene2.default);
    _this.scene.start('Boot');
    return _this;
  }

  return Game;
}(Phaser.Game);

window.game = new Game();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameScene = function (_Phaser$Scene) {
  _inherits(GameScene, _Phaser$Scene);

  function GameScene() {
    _classCallCheck(this, GameScene);

    return _possibleConstructorReturn(this, (GameScene.__proto__ || Object.getPrototypeOf(GameScene)).call(this, 'Game'));
  }

  _createClass(GameScene, [{
    key: 'preload',
    value: function preload() {
      // load images
      this.load.image('logo', 'assets/logo.png');
    }
  }, {
    key: 'create',
    value: function create() {
      this.add.image(400, 300, 'logo');
    }
  }]);

  return GameScene;
}(Phaser.Scene);

exports.default = GameScene;
;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BootScene = function (_Phaser$Scene) {
  _inherits(BootScene, _Phaser$Scene);

  function BootScene() {
    _classCallCheck(this, BootScene);

    return _possibleConstructorReturn(this, (BootScene.__proto__ || Object.getPrototypeOf(BootScene)).call(this, 'Boot'));
  }

  _createClass(BootScene, [{
    key: 'preload',
    value: function preload() {
      this.load.image('logo1', 'assets/zenva_logo.png');
    }
  }, {
    key: 'create',
    value: function create() {
      this.scene.start('Preloader');
    }
  }]);

  return BootScene;
}(Phaser.Scene);

exports.default = BootScene;
;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PreloaderScene = function (_Phaser$Scene) {
  _inherits(PreloaderScene, _Phaser$Scene);

  function PreloaderScene() {
    _classCallCheck(this, PreloaderScene);

    return _possibleConstructorReturn(this, (PreloaderScene.__proto__ || Object.getPrototypeOf(PreloaderScene)).call(this, 'Preloader'));
  }

  _createClass(PreloaderScene, [{
    key: 'preload',
    value: function preload() {
      // add logo image
      this.add.image(400, 200, 'logo1');

      // display progress bar
      var progressBar = this.add.graphics();
      var progressBox = this.add.graphics();
      progressBox.fillStyle(0x222222, 0.8);
      progressBox.fillRect(240, 270, 320, 50);

      var width = this.cameras.main.width;
      var height = this.cameras.main.height;
      var loadingText = this.make.text({
        x: width / 2,
        y: height / 2 - 50,
        text: 'Loading...',
        style: {
          font: '20px monospace',
          fill: '#ffffff'
        }
      });
      loadingText.setOrigin(0.5, 0.5);

      var percentText = this.make.text({
        x: width / 2,
        y: height / 2 - 5,
        text: '0%',
        style: {
          font: '18px monospace',
          fill: '#ffffff'
        }
      });
      percentText.setOrigin(0.5, 0.5);

      var assetText = this.make.text({
        x: width / 2,
        y: height / 2 + 50,
        text: '',
        style: {
          font: '18px monospace',
          fill: '#ffffff'
        }
      });
      assetText.setOrigin(0.5, 0.5);

      // update progress bar
      this.load.on('progress', function (value) {
        percentText.setText(parseInt(value * 100) + '%');
        progressBar.clear();
        progressBar.fillStyle(0xffffff, 1);
        progressBar.fillRect(250, 280, 300 * value, 30);
      });

      // update file progress text
      this.load.on('fileprogress', function (file) {
        assetText.setText('Loading asset: ' + file.key);
      });

      // remove progress bar when complete
      this.load.on('complete', function () {
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
        assetText.destroy();
        this.ready();
      }.bind(this));

      this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

      // load assets needed in our game
      this.load.image('blueButton1', 'assets/ui/blue_button01.png');
      this.load.image('blueButton2', 'assets/ui/blue_button02.png');
      this.load.image('phaserLogo', 'assets/logo.png');
      this.load.image('box', 'assets/ui/grey_box.png');
      this.load.image('checkedBox', 'assets/ui/blue_boxCheckmark.png');
      this.load.audio('bgMusic', ['assets/TownTheme.mp3']);
    }
  }, {
    key: 'create',
    value: function create() {}
  }, {
    key: 'init',
    value: function init() {
      this.readyCount = 0;
    }
  }, {
    key: 'ready',
    value: function ready() {
      this.scene.start('Credits');
      this.readyCount++;
      if (this.readyCount === 2) {
        this.scene.start('Title');
      }
    }
  }]);

  return PreloaderScene;
}(Phaser.Scene);

exports.default = PreloaderScene;
;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(0);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleScene = function (_Phaser$Scene) {
    _inherits(TitleScene, _Phaser$Scene);

    function TitleScene() {
        _classCallCheck(this, TitleScene);

        return _possibleConstructorReturn(this, (TitleScene.__proto__ || Object.getPrototypeOf(TitleScene)).call(this, 'Title'));
    }

    _createClass(TitleScene, [{
        key: 'preload',
        value: function preload() {}
    }, {
        key: 'create',
        value: function create() {
            // Game
            this.gameButton = this.add.sprite(100, 200, 'blueButton1').setInteractive();
            this.centerButton(this.gameButton, 1);

            this.gameText = this.add.text(0, 0, 'Play', { fontSize: '32px', fill: '#fff' });
            this.centerButtonText(this.gameText, this.gameButton);

            this.gameButton.on('pointerdown', function (pointer) {
                this.scene.start('Game');
            }.bind(this));

            this.input.on('pointerover', function (event, gameObjects) {
                gameObjects[0].setTexture('blueButton2');
            });

            this.input.on('pointerout', function (event, gameObjects) {
                gameObjects[0].setTexture('blueButton1');
            });

            this.optionsButton = this.add.sprite(300, 200, 'blueButton1').setInteractive();
            this.centerButton(this.optionsButton);

            this.optionsText = this.add.text(0, 0, 'Options', { fontSize: '32px', fill: '#fff' });
            this.centerButtonText(this.optionsText, this.optionsButton);

            this.optionsButton.on('pointerdown', function (pointer) {
                this.scene.start('Options');
            }.bind(this));

            // Credits
            this.creditsButton = this.add.sprite(300, 200, 'blueButton1').setInteractive();
            this.centerButton(this.creditsButton, -1);

            this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
            this.centerButtonText(this.creditsText, this.creditsButton);

            this.creditsButton.on('pointerdown', function (pointer) {
                this.scene.start('Credits');
            }.bind(this));

            this.input.on('pointerover', function (event, gameObjects) {
                gameObjects[0].setTexture('blueButton2');
            });

            this.input.on('pointerout', function (event, gameObjects) {
                gameObjects[0].setTexture('blueButton1');
            });
        }
    }, {
        key: 'centerButton',
        value: function centerButton(gameObject) {
            var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            Phaser.Display.Align.In.Center(gameObject, this.add.zone(_config2.default.width / 2, _config2.default.height / 2 - offset * 100, _config2.default.width, _config2.default.height));
        }
    }, {
        key: 'centerButtonText',
        value: function centerButtonText(gameText, gameButton) {
            Phaser.Display.Align.In.Center(gameText, gameButton);
        }
    }]);

    return TitleScene;
}(Phaser.Scene);

exports.default = TitleScene;
;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionsScene = function (_Phaser$Scene) {
  _inherits(OptionsScene, _Phaser$Scene);

  function OptionsScene() {
    _classCallCheck(this, OptionsScene);

    return _possibleConstructorReturn(this, (OptionsScene.__proto__ || Object.getPrototypeOf(OptionsScene)).call(this, 'Options'));
  }

  _createClass(OptionsScene, [{
    key: 'preload',
    value: function preload() {}
  }, {
    key: 'create',
    value: function create() {}
  }]);

  return OptionsScene;
}(Phaser.Scene);

exports.default = OptionsScene;
;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(0);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreditsScene = function (_Phaser$Scene) {
  _inherits(CreditsScene, _Phaser$Scene);

  function CreditsScene() {
    _classCallCheck(this, CreditsScene);

    return _possibleConstructorReturn(this, (CreditsScene.__proto__ || Object.getPrototypeOf(CreditsScene)).call(this, 'Credits'));
  }

  _createClass(CreditsScene, [{
    key: 'preload',
    value: function preload() {}
  }, {
    key: 'create',
    value: function create() {
      this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
      this.madeByText = this.add.text(0, 0, 'Created By: Placeholder', { fontSize: '26px', fill: '#fff' });
      this.zone = this.add.zone(_config2.default.width / 2, _config2.default.height / 2, _config2.default.width, _config2.default.height);

      Phaser.Display.Align.In.Center(this.creditsText, this.zone);

      Phaser.Display.Align.In.Center(this.madeByText, this.zone);

      this.madeByText.setY(1000);
      this.creditsTween = this.tweens.add({
        targets: this.creditsText,
        y: -100,
        ease: 'Power1',
        duration: 3000,
        delay: 1000,
        onComplete: function onComplete() {
          this.destroy;
        }
      });

      this.madeByTween = this.tweens.add({
        targets: this.madeByText,
        y: -300,
        ease: 'Power1',
        duration: 8000,
        delay: 1000,
        onComplete: function () {
          this.madeByTween.destroy;
          this.scene.start('Title');
        }.bind(this)
      });
    }
  }]);

  return CreditsScene;
}(Phaser.Scene);

exports.default = CreditsScene;
;

/***/ })
],[2]);