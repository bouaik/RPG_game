webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(0);

/* eslint-disable no-undef */

exports.default = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1200,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: {
        y: 0
      }
    }
  },
  pixelArt: true,
  roundPixels: true,
  dom: {
    createContainer: true
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(17);
var v4 = __webpack_require__(18);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SpawnerType = exports.SpawnerType = {
  MONSTER: 'MONSTER',
  CHEST: 'CHEST'
};

var randomNumber = exports.randomNumber = function randomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

__webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Phaser$GameObjects$C) {
   _inherits(Button, _Phaser$GameObjects$C);

   function Button(scene, x, y, key1, key2, text, targetScene) {
      _classCallCheck(this, Button);

      var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, scene));

      _this.scene = scene;
      _this.x = x;
      _this.y = y;

      _this.button = _this.scene.add.sprite(0, 0, key1).setInteractive();
      _this.text = _this.scene.add.text(0, 0, text, { fontSize: '32px', fill: '#fff' });
      Phaser.Display.Align.In.Center(_this.text, _this.button);

      _this.add(_this.button);
      _this.add(_this.text);

      _this.button.on('pointerdown', function () {
         this.scene.scene.start(targetScene);
      }.bind(_this));

      _this.button.on('pointerover', function () {
         this.button.setTexture(key2);
      }.bind(_this));

      _this.button.on('pointerout', function () {
         this.button.setTexture(key1);
      }.bind(_this));

      _this.scene.add.existing(_this);
      return _this;
   }

   return Button;
}(Phaser.GameObjects.Container);

exports.default = Button;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _GameScene = __webpack_require__(8);

var _GameScene2 = _interopRequireDefault(_GameScene);

var _BootScene = __webpack_require__(21);

var _BootScene2 = _interopRequireDefault(_BootScene);

var _PreloaderScene = __webpack_require__(33);

var _PreloaderScene2 = _interopRequireDefault(_PreloaderScene);

var _TitleScene = __webpack_require__(34);

var _TitleScene2 = _interopRequireDefault(_TitleScene);

var _OptionsScene = __webpack_require__(35);

var _OptionsScene2 = _interopRequireDefault(_OptionsScene);

var _UIScene = __webpack_require__(36);

var _UIScene2 = _interopRequireDefault(_UIScene);

var _CreditsScene = __webpack_require__(37);

var _CreditsScene2 = _interopRequireDefault(_CreditsScene);

var _Model = __webpack_require__(38);

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_Phaser$Game) {
  _inherits(Game, _Phaser$Game);

  function Game() {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, _config2.default));

    var model = new _Model2.default();
    _this.globals = { model: model, bgMusic: null };
    _this.scene.add('Boot', _BootScene2.default);
    _this.scene.add('Preloader', _PreloaderScene2.default);
    _this.scene.add('Title', _TitleScene2.default);
    _this.scene.add('Options', _OptionsScene2.default);
    _this.scene.add('Credits', _CreditsScene2.default);
    _this.scene.add('Ui', _UIScene2.default);
    _this.scene.add('Game', _GameScene2.default);
    _this.scene.start('Boot');
    return _this;
  }

  return Game;
}(Phaser.Game);

window.game = new Game();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(0);

var _PlayerContainer = __webpack_require__(9);

var _PlayerContainer2 = _interopRequireDefault(_PlayerContainer);

var _Chest = __webpack_require__(11);

var _Chest2 = _interopRequireDefault(_Chest);

var _Monster = __webpack_require__(12);

var _Monster2 = _interopRequireDefault(_Monster);

var _Map = __webpack_require__(13);

var _Map2 = _interopRequireDefault(_Map);

var _GameManger = __webpack_require__(14);

var _GameManger2 = _interopRequireDefault(_GameManger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    key: 'init',
    value: function init() {
      this.scene.launch('Ui');
    }
  }, {
    key: 'create',
    value: function create() {
      this.createMap();
      this.createAudio();
      this.createGroups();
      this.createInput();

      this.createGameManager();
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.player) this.player.update(this.cursors);
    }
  }, {
    key: 'createAudio',
    value: function createAudio() {
      this.goldPickupAudio = this.sound.add('goldSound', { loop: false, volume: 0.3 });
      this.playerAttackAudio = this.sound.add('playerAttack', { loop: false, volume: 0.01 });
      this.playerDamageAudio = this.sound.add('playerDamage', { loop: false, volume: 0.2 });
      this.playerDeathAudio = this.sound.add('playerDeath', { loop: false, volume: 0.2 });
      this.monsterDeathAudio = this.sound.add('enemyDeath', { loop: false, volume: 0.2 });
    }
  }, {
    key: 'createPlayer',
    value: function createPlayer(playerObject) {
      this.player = new _PlayerContainer2.default(this, playerObject.x * 2, playerObject.y * 2, 'characters', 5, playerObject.health, playerObject.maxHealth, playerObject.id, this.playerAttackAudio);
    }
  }, {
    key: 'createGroups',
    value: function createGroups() {
      this.chests = this.physics.add.group();

      this.monsters = this.physics.add.group();
      this.monsters.runChildUpdate = true;
    }
  }, {
    key: 'spawnChest',
    value: function spawnChest(chestObject) {
      var chest = this.chests.getFirstDead();
      if (!chest) {
        chest = new _Chest2.default(this, chestObject.x * 2, chestObject.y * 2, 'items', 0, chestObject.gold, chestObject.id);

        this.chests.add(chest);
      } else {
        chest.coins = chestObject.gold;
        chest.id = chestObject.id;
        chest.setPosition(chestObject.x * 2, chestObject.y * 2);
        chest.makeActive();
      }
    }
  }, {
    key: 'spawnMonster',
    value: function spawnMonster(monsterObject) {
      var monster = this.monsters.getFirstDead();
      if (!monster) {
        monster = new _Monster2.default(this, monsterObject.x, monsterObject.y, 'monsters', monsterObject.frame, monsterObject.id, monsterObject.health, monsterObject.maxHealth);

        this.monsters.add(monster);
      } else {
        monster.id = monsterObject.id;
        monster.health = monsterObject.health;
        monster.maxHealth = monsterObject.maxHealth;
        monster.setTexture('monsters', monsterObject.frame);
        monster.setPosition(monsterObject.x, monsterObject.y);
        monster.makeActive();
      }
    }
  }, {
    key: 'createInput',
    value: function createInput() {
      this.cursors = this.input.keyboard.createCursorKeys();
    }
  }, {
    key: 'addCollisions',
    value: function addCollisions() {
      this.physics.add.collider(this.player, this.map.blockedLayer);

      this.physics.add.overlap(this.player, this.chests, this.collectChest, null, this);

      this.physics.add.collider(this.monsters, this.map.blockedLayer);

      this.physics.add.overlap(this.player.weapon, this.monsters, this.enemyOverlap, null, this);
    }
  }, {
    key: 'enemyOverlap',
    value: function enemyOverlap(weapon, enemy) {
      if (this.player.playerAttacking && !this.player.swordHit) {
        this.player.swordHit = true;
        this.events.emit('monsterAttacked', enemy.id, this.player.id);
      }
    }
  }, {
    key: 'collectChest',
    value: function collectChest(player, chest) {
      this.goldPickupAudio.play();
      this.events.emit('pickUpChest', chest.id, player.id);
    }
  }, {
    key: 'createMap',
    value: function createMap() {
      this.map = new _Map2.default(this, 'map', 'background', 'background', 'blocked');
    }
  }, {
    key: 'createGameManager',
    value: function createGameManager() {
      var _this2 = this;

      this.events.on('spawnPlayer', function (playerObject) {
        _this2.createPlayer(playerObject);
        _this2.addCollisions();
      });

      this.events.on('chestSpawned', function (chest) {
        _this2.spawnChest(chest);
      });

      this.events.on('monsterSpawned', function (monster) {
        _this2.spawnMonster(monster);
      });

      this.events.on('chestRemoved', function (chestId) {
        _this2.chests.getChildren().forEach(function (chest) {
          if (chest.id === chestId) {
            chest.makeInactive();
          }
        });
      });

      this.events.on('monsterRemoved', function (monsterId) {
        _this2.monsters.getChildren().forEach(function (monster) {
          if (monster.id === monsterId) {
            monster.makeInactive();
            _this2.monsterDeathAudio.play();
          }
        });
      });

      this.events.on('updateMonsterHealth', function (monsterId, health) {
        _this2.monsters.getChildren().forEach(function (monster) {
          if (monster.id === monsterId) {
            monster.updateHealth(health);
          }
        });
      });

      this.events.on('monsterMovement', function (monsters) {
        _this2.monsters.getChildren().forEach(function (monster) {
          Object.keys(monsters).forEach(function (monsterId) {
            if (monster.id === monsterId) {
              _this2.physics.moveToObject(monster, monsters[monsterId], 40);
            }
          });
        });
      });

      this.events.on('updatePlayerHealth', function (playerId, health) {
        if (health < _this2.player.health) {
          _this2.playerDamageAudio.play();
        }
        _this2.player.updateHealth(health);
      });

      this.events.on('respawnPlayer', function () {
        _this2.playerDeathAudio.play();

        _this2.scene.switch('GameOver');
        _this2.scene.stop('Ui');
      });

      this.gameManager = new _GameManger2.default(this, this.map.map.objects);
      this.gameManager.setup();
    }
  }]);

  return GameScene;
}(Phaser.Scene);

exports.default = GameScene;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(0);

var _phaser2 = _interopRequireDefault(_phaser);

var _Player = __webpack_require__(10);

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Direction = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
  UP: 'UP',
  DOWN: 'DOWN'
};

var PlayerContainer = function (_Phaser$GameObjects$C) {
  _inherits(PlayerContainer, _Phaser$GameObjects$C);

  function PlayerContainer(scene, x, y, key, frame, health, maxHealth, id, attackAudio) {
    _classCallCheck(this, PlayerContainer);

    var _this = _possibleConstructorReturn(this, (PlayerContainer.__proto__ || Object.getPrototypeOf(PlayerContainer)).call(this, scene, x, y));

    _this.scene = scene;
    _this.velocity = 200;
    _this.currentDirection = Direction.RIGHT;
    _this.playerAttacking = false;
    _this.flipX = true;
    _this.swordHit = false;
    _this.health = health;
    _this.maxHealth = maxHealth;
    _this.id = id;
    _this.attackAudio = attackAudio;

    _this.setSize(64, 64);

    _this.scene.physics.world.enable(_this);

    _this.body.setCollideWorldBounds(true);

    _this.scene.add.existing(_this);

    _this.scene.cameras.main.startFollow(_this);

    _this.player = new _Player2.default(_this.scene, 0, 0, key, frame);
    _this.add(_this.player);

    _this.weapon = _this.scene.add.image(40, 0, 'items', 4);
    _this.scene.add.existing(_this.weapon);
    _this.weapon.setScale(1.5);
    _this.scene.physics.world.enable(_this.weapon);
    _this.add(_this.weapon);
    _this.weapon.alpha = 0;

    _this.createHealthBar();
    return _this;
  }

  _createClass(PlayerContainer, [{
    key: 'createHealthBar',
    value: function createHealthBar() {
      this.healthBar = this.scene.add.graphics();
      this.updateHealthBar();
    }
  }, {
    key: 'updateHealthBar',
    value: function updateHealthBar() {
      this.healthBar.clear();
      this.healthBar.fillStyle(0xffffff, 1);
      this.healthBar.fillRect(this.x - 32, this.y - 40, 64, 5);
      this.healthBar.fillGradientStyle(0xff0000, 0xff0000, 4);
      this.healthBar.fillRect(this.x - 32, this.y - 40, 64 * (this.health / this.maxHealth), 5);
    }
  }, {
    key: 'updateHealth',
    value: function updateHealth(health) {
      this.health = health;
      this.updateHealthBar();
    }
  }, {
    key: 'update',
    value: function update(cursors) {
      var _this2 = this;

      this.body.setVelocity(0);

      if (cursors.left.isDown) {
        this.body.setVelocityX(-this.velocity);
        this.currentDirection = Direction.LEFT;
        this.weapon.setPosition(-40, 0);
        this.player.flipX = false;
      } else if (cursors.right.isDown) {
        this.body.setVelocityX(this.velocity);
        this.currentDirection = Direction.RIGHT;
        this.weapon.setPosition(40, 0);
        this.player.flipX = true;
      }

      if (cursors.up.isDown) {
        this.body.setVelocityY(-this.velocity);
        this.currentDirection = Direction.UP;
        this.weapon.setPosition(0, -40);
      } else if (cursors.down.isDown) {
        this.body.setVelocityY(this.velocity);
        this.currentDirection = Direction.DOWN;
        this.weapon.setPosition(0, 40);
      }

      if (_phaser2.default.Input.Keyboard.JustDown(cursors.space) && !this.playerAttacking) {
        this.weapon.alpha = 1;
        this.playerAttacking = true;
        this.attackAudio.play();
        this.scene.time.delayedCall(150, function () {
          _this2.weapon.alpha = 0;
          _this2.playerAttacking = false;
          _this2.swordHit = false;
        }, [], this);
      }

      if (this.playerAttacking) {
        if (this.weapon.flipX) {
          this.weapon.angle -= 10;
        } else {
          this.weapon.angle += 10;
        }
      } else {
        if (this.currentDirection === Direction.DOWN) {
          this.weapon.setAngle(-270);
        } else if (this.currentDirection === Direction.UP) {
          this.weapon.setAngle(-90);
        } else {
          this.weapon.setAngle(0);
        }

        this.weapon.flipX = false;
        if (this.currentDirection === Direction.LEFT) {
          this.weapon.flipX = true;
        }
      }

      this.updateHealthBar();
    }
  }]);

  return PlayerContainer;
}(_phaser2.default.GameObjects.Container);

exports.default = PlayerContainer;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _phaser = __webpack_require__(0);

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Phaser$Physics$Arcad) {
  _inherits(Player, _Phaser$Physics$Arcad);

  function Player(scene, x, y, key, frame) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, scene, x, y, key, frame));

    _this.scene = scene;

    _this.scene.physics.world.enable(_this);

    _this.setImmovable(true);

    _this.setScale(2);

    _this.scene.add.existing(_this);
    return _this;
  }

  return Player;
}(_phaser2.default.Physics.Arcade.Image);

exports.default = Player;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(0);

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chest = function (_Phaser$Physics$Arcad) {
  _inherits(Chest, _Phaser$Physics$Arcad);

  function Chest(scene, x, y, key, frame, coins, id) {
    _classCallCheck(this, Chest);

    var _this = _possibleConstructorReturn(this, (Chest.__proto__ || Object.getPrototypeOf(Chest)).call(this, scene, x, y, key, frame));

    _this.scene = scene;
    _this.coins = coins;
    _this.id = id;

    _this.scene.physics.world.enable(_this);

    _this.scene.add.existing(_this);

    _this.setScale(2);
    return _this;
  }

  _createClass(Chest, [{
    key: 'makeActive',
    value: function makeActive() {
      this.setActive(true);
      this.setVisible(true);
      this.body.checkCollision.none = false;
    }
  }, {
    key: 'makeInactive',
    value: function makeInactive() {
      this.setActive(false);
      this.setVisible(false);
      this.body.checkCollision.none = true;
    }
  }]);

  return Chest;
}(_phaser2.default.Physics.Arcade.Image);

exports.default = Chest;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(0);

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Monster = function (_Phaser$Physics$Arcad) {
  _inherits(Monster, _Phaser$Physics$Arcad);

  function Monster(scene, x, y, key, frame, id, health, maxHealth) {
    _classCallCheck(this, Monster);

    var _this = _possibleConstructorReturn(this, (Monster.__proto__ || Object.getPrototypeOf(Monster)).call(this, scene, x, y, key, frame));

    _this.scene = scene;
    _this.id = id;
    _this.health = health;
    _this.maxHealth = maxHealth;

    _this.scene.physics.world.enable(_this);

    _this.setImmovable(false);

    _this.setScale(2);

    _this.setCollideWorldBounds(true);

    _this.scene.add.existing(_this);

    _this.setOrigin(0);

    _this.createHealthBar();
    return _this;
  }

  _createClass(Monster, [{
    key: 'createHealthBar',
    value: function createHealthBar() {
      this.healthBar = this.scene.add.graphics();
      this.updateHealthBar();
    }
  }, {
    key: 'updateHealthBar',
    value: function updateHealthBar() {
      this.healthBar.clear();
      this.healthBar.fillStyle(0xffffff, 1);
      this.healthBar.fillRect(this.x, this.y - 8, 64, 5);
      this.healthBar.fillGradientStyle(0xff0000, 0xff0000, 4);
      this.healthBar.fillRect(this.x, this.y - 8, 64 * (this.health / this.maxHealth), 5);
    }
  }, {
    key: 'updateHealth',
    value: function updateHealth(health) {
      this.health = health;
      this.updateHealthBar();
    }
  }, {
    key: 'makeActive',
    value: function makeActive() {
      this.setActive(true);
      this.setVisible(true);
      this.body.checkCollision.none = false;
      this.updateHealthBar();
    }
  }, {
    key: 'makeInactive',
    value: function makeInactive() {
      this.setActive(false);
      this.setVisible(false);
      this.body.checkCollision.none = true;
      this.healthBar.clear();
    }
  }, {
    key: 'update',
    value: function update() {
      this.updateHealthBar();
    }
  }]);

  return Monster;
}(_phaser2.default.Physics.Arcade.Image);

exports.default = Monster;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = function () {
  function Map(scene, key, tileSetName, bgLayerName, blockedLayerName) {
    _classCallCheck(this, Map);

    this.scene = scene;
    this.key = key;
    this.tileSetName = tileSetName;
    this.bgLayerName = bgLayerName;
    this.blockedLayerName = blockedLayerName;

    this.createMap();
  }

  _createClass(Map, [{
    key: "createMap",
    value: function createMap() {
      this.map = this.scene.make.tilemap({ key: this.key });

      this.tiles = this.map.addTilesetImage(this.tileSetName, this.tileSetName, 32, 32, 1, 2);

      this.backgroundLayer = this.map.createStaticLayer(this.bgLayerName, this.tiles, 0, 0);
      this.backgroundLayer.setScale(2);

      this.blockedLayer = this.map.createStaticLayer(this.blockedLayerName, this.tiles, 0, 0);
      this.blockedLayer.setScale(2);
      this.blockedLayer.setCollisionByExclusion([-1]);

      this.scene.physics.world.bounds.width = this.map.widthInPixels * 2;
      this.scene.physics.world.bounds.height = this.map.heightInPixels * 2;

      this.scene.cameras.main.setBounds(0, 0, this.map.widthInPixels * 2, this.map.heightInPixels * 2);
    }
  }]);

  return Map;
}();

exports.default = Map;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Spawner = __webpack_require__(15);

var _Spawner2 = _interopRequireDefault(_Spawner);

var _PlayerModel = __webpack_require__(20);

var _PlayerModel2 = _interopRequireDefault(_PlayerModel);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameManager = function () {
  function GameManager(scene, mapData) {
    _classCallCheck(this, GameManager);

    this.scene = scene;
    this.mapData = mapData;

    this.spawners = {};
    this.chests = {};
    this.monsters = {};
    this.players = {};

    this.playerLocations = [];
    this.chestLocations = {};
    this.monsterLocations = {};
  }

  _createClass(GameManager, [{
    key: 'setup',
    value: function setup() {
      this.parseMapData();
      this.setupEventListener();
      this.setupSpawners();
      this.spawnPlayer();
    }
  }, {
    key: 'parseMapData',
    value: function parseMapData() {
      var _this = this;

      this.mapData.forEach(function (layer) {
        if (layer.name === 'player_locations') {
          layer.objects.forEach(function (obj) {
            _this.playerLocations.push([obj.x, obj.y]);
          });
        } else if (layer.name === 'chest_locations') {
          layer.objects.forEach(function (obj) {
            if (_this.chestLocations[obj.properties.spawner]) {
              _this.chestLocations[obj.properties.spawner].push([obj.x, obj.y]);
            } else {
              _this.chestLocations[obj.properties.spawner] = [[obj.x, obj.y]];
            }
          });
        } else if (layer.name === 'monster_locations') {
          layer.objects.forEach(function (obj) {
            if (_this.monsterLocations[obj.properties.spawner]) {
              _this.monsterLocations[obj.properties.spawner].push([obj.x, obj.y]);
            } else {
              _this.monsterLocations[obj.properties.spawner] = [[obj.x, obj.y]];
            }
          });
        }
      });
    }
  }, {
    key: 'setupEventListener',
    value: function setupEventListener() {
      var _this2 = this;

      this.scene.events.on('pickUpChest', function (chestId, playerId) {
        if (_this2.chests[chestId]) {
          var gold = _this2.chests[chestId].gold;


          _this2.players[playerId].updateGold(gold);
          _this2.scene.events.emit('updateScore', _this2.players[playerId].gold);

          _this2.spawners[_this2.chests[chestId].spawnerId].removeObject(chestId);
          _this2.scene.events.emit('chestRemoved', chestId);
        }
      });

      this.scene.events.on('monsterAttacked', function (monsterId, playerId) {
        if (_this2.monsters[monsterId]) {
          var _monsters$monsterId = _this2.monsters[monsterId],
              gold = _monsters$monsterId.gold,
              attack = _monsters$monsterId.attack;


          _this2.monsters[monsterId].loseHealth();

          if (_this2.monsters[monsterId].health <= 0) {
            _this2.players[playerId].updateGold(gold);
            _this2.scene.events.emit('updateScore', _this2.players[playerId].gold);

            _this2.spawners[_this2.monsters[monsterId].spawnerId].removeObject(monsterId);
            _this2.scene.events.emit('monsterRemoved', monsterId);

            _this2.players[playerId].updateHealth(2);
            _this2.scene.events.emit('updatePlayerHealth', playerId, _this2.players[playerId].health);
          } else {
            _this2.players[playerId].updateHealth(-attack * 3);
            _this2.scene.events.emit('updatePlayerHealth', playerId, _this2.players[playerId].health);

            _this2.scene.events.emit('updateMonsterHealth', monsterId, _this2.monsters[monsterId].health);

            if (_this2.players[playerId].health <= 0) {
              _this2.scene.events.emit('respawnPlayer', _this2.players[playerId]);
            }
          }
        }
      });
    }
  }, {
    key: 'setupSpawners',
    value: function setupSpawners() {
      var _this3 = this;

      var config = {
        spawnInterval: 1000,
        limit: 30,
        spawnerType: _utils.SpawnerType.CHEST,
        id: ''
      };
      var spawner = void 0;

      Object.keys(this.chestLocations).forEach(function (key) {
        config.id = 'chest-' + key;
        spawner = new _Spawner2.default(config, _this3.chestLocations[key], _this3.addChest.bind(_this3), _this3.deleteChest.bind(_this3));
        _this3.spawners[spawner.id] = spawner;
      });

      Object.keys(this.monsterLocations).forEach(function (key) {
        config.id = 'monster-' + key;
        config.spawnerType = _utils.SpawnerType.MONSTER;

        spawner = new _Spawner2.default(config, _this3.monsterLocations[key], _this3.addMonster.bind(_this3), _this3.deleteMonster.bind(_this3), _this3.moveMonsters.bind(_this3));
        _this3.spawners[spawner.id] = spawner;
      });
    }
  }, {
    key: 'spawnPlayer',
    value: function spawnPlayer() {
      var player = new _PlayerModel2.default(this.playerLocations);
      this.players[player.id] = player;
      this.scene.events.emit('spawnPlayer', player);
    }
  }, {
    key: 'addChest',
    value: function addChest(chestId, chest) {
      this.chests[chestId] = chest;
      this.scene.events.emit('chestSpawned', chest);
    }
  }, {
    key: 'deleteChest',
    value: function deleteChest(chestId) {
      delete this.chests[chestId];
    }
  }, {
    key: 'addMonster',
    value: function addMonster(monsterId, monster) {
      this.monsters[monsterId] = monster;
      this.scene.events.emit('monsterSpawned', monster);
    }
  }, {
    key: 'deleteMonster',
    value: function deleteMonster(monsterId) {
      delete this.monsters[monsterId];
    }
  }, {
    key: 'moveMonsters',
    value: function moveMonsters() {
      this.scene.events.emit('monsterMovement', this.monsters);
    }
  }]);

  return GameManager;
}();

exports.default = GameManager;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ChestModel = __webpack_require__(16);

var _ChestModel2 = _interopRequireDefault(_ChestModel);

var _MonsterModel = __webpack_require__(19);

var _MonsterModel2 = _interopRequireDefault(_MonsterModel);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spawner = function () {
  function Spawner(config, spawnLocations, addObject, deleteObject, moveObjects) {
    _classCallCheck(this, Spawner);

    this.id = config.id;
    this.spawnInterval = config.spawnInterval;
    this.limit = config.limit;
    this.objectType = config.spawnerType;
    this.spawnLocations = spawnLocations;
    this.addObject = addObject;
    this.deleteObject = deleteObject;
    this.moveObjects = moveObjects;

    this.objectsCreated = [];

    this.start();
  }

  _createClass(Spawner, [{
    key: 'start',
    value: function start() {
      var _this = this;

      this.interval = setInterval(function () {
        if (_this.objectsCreated.length < _this.limit) {
          _this.spawnObject();
        }
      }, this.spawnInterval);
      if (this.objectType === _utils.SpawnerType.MONSTER) this.moveMonsters();
    }
  }, {
    key: 'spawnObject',
    value: function spawnObject() {
      if (this.objectType === _utils.SpawnerType.CHEST) {
        this.spawnChest();
      } else if (this.objectType === _utils.SpawnerType.MONSTER) {
        this.spawnMonster();
      }
    }
  }, {
    key: 'spawnChest',
    value: function spawnChest() {
      var location = this.pickRandomLocation();
      var chest = new _ChestModel2.default(location[0], location[1], (0, _utils.randomNumber)(10, 20), this.id);
      this.objectsCreated.push(chest);
      this.addObject(chest.id, chest);
    }
  }, {
    key: 'spawnMonster',
    value: function spawnMonster() {
      var location = this.pickRandomLocation();
      var monster = new _MonsterModel2.default(location[0], location[1], (0, _utils.randomNumber)(10, 20), this.id, (0, _utils.randomNumber)(0, 20), (0, _utils.randomNumber)(3, 5), 1);
      this.objectsCreated.push(monster);
      this.addObject(monster.id, monster);
    }
  }, {
    key: 'pickRandomLocation',
    value: function pickRandomLocation() {
      var location = this.spawnLocations[Math.floor(Math.random() * this.spawnLocations.length)];
      var invalidLocation = this.objectsCreated.some(function (obj) {
        if (obj.x === location[0] && obj.y === location[1]) {
          return true;
        }
        return false;
      });

      if (invalidLocation) return this.pickRandomLocation();
      return location;
    }
  }, {
    key: 'removeObject',
    value: function removeObject(id) {
      this.objectsCreated = this.objectsCreated.filter(function (obj) {
        return obj.id !== id;
      });
      this.deleteObject(id);
    }
  }, {
    key: 'moveMonsters',
    value: function moveMonsters() {
      var _this2 = this;

      this.moveMonsterInterval = setInterval(function () {
        _this2.objectsCreated.forEach(function (monster) {
          monster.move();
        });

        _this2.moveObjects();
      }, 1000);
    }
  }]);

  return Spawner;
}();

exports.default = Spawner;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uuid = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChestModel = function ChestModel(x, y, gold, spawnerId) {
  _classCallCheck(this, ChestModel);

  this.id = spawnerId + '-' + (0, _uuid.v4)();
  this.spawnerId = spawnerId;
  this.x = x;
  this.y = y;
  this.gold = gold;
};

exports.default = ChestModel;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(4);
var bytesToUuid = __webpack_require__(5);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(4);
var bytesToUuid = __webpack_require__(5);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = __webpack_require__(2);

var _utils = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MonsterModel = function () {
  function MonsterModel(x, y, gold, spawnerId, frame, health, attack) {
    _classCallCheck(this, MonsterModel);

    this.id = spawnerId + '-' + (0, _uuid.v4)();
    this.spawnerId = spawnerId;
    this.x = x * 2;
    this.y = y * 2;
    this.gold = gold;
    this.frame = frame;
    this.health = health;
    this.maxHealth = health;
    this.attack = attack;
  }

  _createClass(MonsterModel, [{
    key: 'loseHealth',
    value: function loseHealth() {
      this.health -= 1;
    }
  }, {
    key: 'move',
    value: function move() {
      var randomPosition = (0, _utils.randomNumber)(1, 8);
      var distance = 64;

      switch (randomPosition) {
        case 1:
          this.x += distance;
          break;
        case 2:
          this.x -= distance;
          break;
        case 3:
          this.y += distance;
          break;
        case 4:
          this.y -= distance;
          break;
        case 5:
          this.x += distance;
          this.y += distance;
          break;
        case 6:
          this.x += distance;
          this.y -= distance;
          break;
        case 7:
          this.x -= distance;
          this.y += distance;
          break;
        case 8:
          this.x -= distance;
          this.y -= distance;
          break;
        default:
          break;
      }
    }
  }]);

  return MonsterModel;
}();

exports.default = MonsterModel;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayerModel = function () {
  function PlayerModel(spawnLocations) {
    _classCallCheck(this, PlayerModel);

    this.health = 10;
    this.maxHealth = 10;
    this.gold = 0;
    this.id = 'player-' + (0, _uuid.v4)();
    this.spawnLocations = spawnLocations;

    var location = this.spawnLocations[Math.floor(Math.random() * this.spawnLocations.length)];

    var _location = _slicedToArray(location, 2);

    this.x = _location[0];
    this.y = _location[1];
  }

  _createClass(PlayerModel, [{
    key: 'updateGold',
    value: function updateGold(gold) {
      this.gold += gold;
    }
  }, {
    key: 'updateHealth',
    value: function updateHealth(health) {
      this.health += health;
      if (this.health > 10) this.health = 10;
    }
  }]);

  return PlayerModel;
}();

exports.default = PlayerModel;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(0);

var _adventure = __webpack_require__(22);

var _adventure2 = _interopRequireDefault(_adventure);

var _backgroundExtruded = __webpack_require__(23);

var _backgroundExtruded2 = _interopRequireDefault(_backgroundExtruded);

var _items = __webpack_require__(24);

var _items2 = _interopRequireDefault(_items);

var _characters = __webpack_require__(25);

var _characters2 = _interopRequireDefault(_characters);

var _monsters = __webpack_require__(26);

var _monsters2 = _interopRequireDefault(_monsters);

var _Pickup = __webpack_require__(27);

var _Pickup2 = _interopRequireDefault(_Pickup);

var _EnemyDeath = __webpack_require__(28);

var _EnemyDeath2 = _interopRequireDefault(_EnemyDeath);

var _PlayerAttack = __webpack_require__(29);

var _PlayerAttack2 = _interopRequireDefault(_PlayerAttack);

var _PlayerDamage = __webpack_require__(30);

var _PlayerDamage2 = _interopRequireDefault(_PlayerDamage);

var _PlayerDeath = __webpack_require__(31);

var _PlayerDeath2 = _interopRequireDefault(_PlayerDeath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jsonMap = __webpack_require__(32);

var BootScene = function (_Phaser$Scene) {
  _inherits(BootScene, _Phaser$Scene);

  function BootScene() {
    _classCallCheck(this, BootScene);

    return _possibleConstructorReturn(this, (BootScene.__proto__ || Object.getPrototypeOf(BootScene)).call(this, 'Boot'));
  }

  _createClass(BootScene, [{
    key: 'preload',
    value: function preload() {
      this.load.image('logo', _adventure2.default);
      this.load.image('background', _backgroundExtruded2.default);
      this.loadSpriteSheets();
      this.loadAudio();
      this.loadTileMap();
    }
  }, {
    key: 'loadSpriteSheets',
    value: function loadSpriteSheets() {
      this.load.spritesheet('items', _items2.default, { frameWidth: 32, frameHeight: 32 });
      this.load.spritesheet('characters', _characters2.default, { frameWidth: 32, frameHeight: 32 });
      this.load.spritesheet('monsters', _monsters2.default, { frameWidth: 32, frameHeight: 32 });
    }
  }, {
    key: 'loadAudio',
    value: function loadAudio() {
      this.load.audio('goldSound', _Pickup2.default);
      this.load.audio('enemyDeath', _EnemyDeath2.default);
      this.load.audio('playerAttack', _PlayerAttack2.default);
      this.load.audio('playerDamage', _PlayerDamage2.default);
      this.load.audio('playerDeath', _PlayerDeath2.default);
    }
  }, {
    key: 'loadTileMap',
    value: function loadTileMap() {
      this.load.tilemapTiledJSON('map', jsonMap);
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

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "asset/adventure.ad8f5917d8f745bcf645236e75f61ab4.png");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "asset/background-extruded.3ca0ea9e6a648f2832702d28eb560694.png");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "asset/items.63d5788757f2f6e686fb26d87b5d294b.png");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "asset/characters.d15dcf66b90c7e9e71f733a4d0ba3815.png");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "asset/monsters.a7514453156b9f41a9863612d1be4f00.png");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cd2ff955b7ffbd7047746007217dc324.wav");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3b2889b0967d2eeadff69b58488b7514.wav");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e118eb50bdc0db240943dcd4d3d8d233.wav");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e4fc6a5c7d4095e44ad74f98725b2f47.wav");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "30b16dda60aef81c889eb750ead08472.wav");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {"compressionlevel":-1,"editorsettings":{"export":{"format":"json"}},"height":60,"infinite":false,"layers":[{"data":[295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,90,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,151,151,151,151,151,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,151,151,151,151,151,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,204,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,151,151,151,151,151,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,204,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,151,151,151,151,295,295,989,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,151,151,151,151,151,989,989,989,295,295,295,295,989,989,989,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,204,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,312,312,295,151,151,151,151,282,989,989,989,989,295,295,295,989,989,989,295,295,295,295,295,295,295,989,989,989,989,989,989,989,989,295,204,295,295,295,295,295,204,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,272,272,272,272,272,295,295,295,151,282,282,282,282,989,989,989,989,989,989,989,989,295,295,295,295,295,989,989,989,989,989,989,989,989,989,989,295,295,295,295,204,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,272,272,272,272,272,272,312,312,312,282,282,282,282,282,989,989,989,989,989,989,989,989,989,989,989,989,989,989,989,989,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,272,272,272,272,272,272,312,282,282,282,282,282,282,282,282,989,989,989,282,282,282,989,989,989,989,989,989,989,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,285,285,285,295,295,272,272,272,272,272,272,272,272,151,151,282,282,282,282,989,989,989,282,270,270,282,989,989,989,989,989,989,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,285,285,285,295,295,272,272,272,272,272,272,272,272,282,151,282,312,282,989,989,989,989,282,270,270,282,989,295,295,295,151,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,285,295,295,295,272,272,311,311,311,311,311,311,311,311,311,311,989,989,989,295,989,282,282,282,282,989,295,295,151,151,151,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,272,272,311,311,311,311,311,311,311,311,311,311,989,989,295,295,989,989,989,989,989,989,295,295,151,151,151,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,285,285,285,285,295,295,295,295,295,295,295,295,295,272,272,272,272,272,272,272,272,272,272,272,312,312,295,295,295,295,295,295,295,295,295,295,295,151,151,151,151,151,151,295,295,295,137,137,295,295,295,295,295,295,295,295,295,295,295,295,285,285,285,285,285,295,295,295,295,295,295,295,295,272,272,272,272,272,272,272,272,272,272,272,272,312,312,295,295,295,295,295,295,295,295,295,295,151,151,151,151,151,151,295,295,295,137,137,295,295,295,295,295,295,295,295,295,295,295,295,295,295,285,285,295,295,295,295,295,295,295,295,295,272,272,272,272,272,272,272,272,272,272,272,272,312,312,312,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295],"height":60,"id":1,"name":"background","opacity":1,"type":"tilelayer","visible":false,"width":60,"x":0,"y":0},{"data":[334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,0,0,0,0,0,0,0,638,638,638,638,638,638,638,638,638,638,638,638,638,638,638,638,334,1309,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,0,0,1609,0,0,0,0,0,0,0,0,334,334,334,334,334,334,0,0,0,848,0,0,0,638,638,638,638,638,638,638,0,0,0,0,0,638,638,334,334,334,334,334,334,1309,334,334,334,334,0,334,334,334,334,334,1309,334,334,0,0,0,0,0,0,0,0,0,0,0,1609,0,0,334,334,334,334,334,334,0,0,0,0,0,0,0,0,0,0,638,638,0,0,638,638,638,0,0,638,334,334,334,1609,0,0,334,334,334,0,0,0,0,334,334,334,334,334,334,0,0,0,0,0,0,848,0,0,0,0,0,0,0,0,334,334,334,1310,334,334,334,0,0,0,0,0,0,638,638,0,0,0,0,638,638,638,638,638,0,638,334,334,0,0,0,0,0,334,334,714,0,0,0,0,334,334,334,334,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,334,334,334,334,334,334,334,0,0,0,0,0,638,638,638,638,638,638,638,638,638,638,638,0,0,334,714,0,0,848,0,0,0,0,0,0,0,0,0,0,334,334,0,0,0,848,0,0,0,0,0,0,83,0,848,0,0,0,0,0,0,0,334,334,334,334,334,334,0,0,0,0,848,638,638,638,638,638,638,638,638,638,638,638,0,334,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1561,0,0,0,0,0,0,334,334,334,334,334,334,334,0,0,0,0,0,0,638,638,638,638,638,638,638,638,638,0,334,0,0,1609,0,0,0,848,0,0,0,0,0,848,0,0,0,0,0,863,0,0,0,0,0,1561,0,848,1355,1355,1355,1355,1355,1355,0,0,0,334,334,334,334,1309,334,334,334,334,334,0,0,0,0,0,638,638,638,638,638,638,638,0,0,0,0,0,0,0,0,0,0,0,0,848,0,848,0,0,0,0,0,1355,1355,1355,1355,1355,1355,0,0,0,1355,0,0,0,0,1355,0,0,0,0,0,1609,334,334,334,334,334,334,334,334,334,0,0,891,891,891,891,731,891,891,891,0,0,0,0,0,848,0,0,1609,0,0,0,0,0,0,0,0,0,0,0,1355,0,0,0,0,1355,0,0,0,1355,55,0,0,0,1355,1355,1355,1355,0,0,0,0,0,0,0,334,334,334,334,714,0,0,891,0,0,0,0,0,0,891,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,848,0,0,1355,0,1355,1355,0,1355,1355,1355,1355,1355,1355,1355,0,1355,1355,0,0,1355,0,0,0,0,0,0,848,0,0,0,0,0,0,0,891,0,0,0,0,0,0,891,0,0,1593,1594,1595,0,0,0,0,0,0,0,0,0,848,848,0,0,0,0,1355,0,1355,1355,0,0,0,0,0,0,0,0,0,0,0,0,59,1355,0,0,0,0,0,0,0,0,0,0,0,0,0,0,891,891,891,0,891,891,891,891,0,0,1617,1618,1619,0,0,848,0,0,0,0,0,0,1561,848,0,0,0,0,1355,0,0,0,0,0,0,0,0,0,0,1355,1355,1355,1355,1355,1355,1355,0,0,1667,1668,0,0,0,0,0,0,848,0,1539,0,0,0,891,0,891,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1355,0,0,0,0,1355,1355,1355,1355,0,0,1355,0,0,1355,0,0,0,0,0,1691,1692,0,1539,0,0,0,0,0,0,0,1539,0,0,891,0,891,891,891,0,891,334,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1355,1355,0,0,1355,1355,0,0,1355,0,0,0,0,60,1355,0,0,0,56,0,0,0,0,0,0,0,0,0,0,0,1539,1539,0,0,891,0,891,891,0,0,891,334,334,0,0,0,334,334,334,0,0,1341,1341,1341,1341,0,1341,1341,1341,1341,0,794,0,0,794,0,0,0,1355,1355,1355,1355,1355,1355,1355,0,0,0,0,0,83,0,0,0,0,0,0,0,0,0,0,0,0,0,891,0,891,891,0,0,891,334,334,334,334,334,334,334,334,334,0,1341,0,0,0,0,0,0,0,1341,0,0,0,0,0,0,0,0,845,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,891,891,891,891,891,0,0,0,0,0,891,334,334,334,334,334,334,334,334,334,0,1341,0,0,1307,0,1307,0,0,1341,0,0,0,0,0,0,0,0,334,334,334,845,0,0,0,1539,0,0,0,0,0,0,1009,1009,1009,1009,0,0,0,0,0,0,0,0,0,0,891,891,0,857,891,334,334,334,334,334,334,1309,334,334,0,1341,0,0,0,0,0,0,0,1341,0,0,0,0,1537,0,845,334,334,334,334,334,1539,0,0,0,1539,0,0,0,0,0,1009,1363,1363,1009,0,0,0,0,891,891,891,891,891,0,891,891,891,891,891,334,1309,334,334,334,334,334,334,334,0,1341,0,0,1307,0,1307,0,0,1341,857,0,0,0,1539,1515,334,334,334,334,334,334,0,1515,0,1539,0,0,0,0,0,0,1009,1363,1363,1009,0,0,0,0,891,0,0,0,891,0,0,0,0,0,781,334,334,334,334,334,334,334,334,0,0,1341,0,0,0,0,0,0,0,1341,0,0,0,1341,1341,1341,1341,1341,1341,1341,1341,1341,1341,0,0,0,0,0,0,0,0,0,1009,1009,1009,1009,0,0,0,0,891,0,891,0,891,0,0,0,0,0,0,334,334,334,334,334,334,0,0,0,0,1341,0,0,1307,0,1307,0,0,1341,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,891,0,891,0,891,0,891,891,0,0,781,334,334,334,334,334,334,0,0,0,0,1341,0,0,0,0,0,0,0,1341,0,0,0,1341,1341,1341,1341,1341,1341,1341,1341,1341,1341,0,0,0,0,81,0,0,0,0,0,0,0,0,0,0,0,0,891,0,891,0,0,0,891,0,0,0,0,334,334,0,0,334,334,0,0,0,0,1341,0,0,1307,0,1307,0,0,1341,0,0,0,0,334,334,334,334,334,334,334,0,0,0,0,0,0,0,0,0,1537,0,0,1516,0,0,0,0,0,0,891,0,891,891,891,891,891,0,0,0,784,0,0,0,0,0,0,0,0,0,0,1341,0,0,0,0,0,0,0,1341,0,0,0,0,334,334,334,334,334,334,334,0,0,0,0,845,0,1537,1537,334,334,334,0,1537,0,0,0,0,0,0,891,0,0,0,0,0,891,891,891,891,891,0,843,0,0,0,0,0,0,0,0,1341,1341,1341,1341,0,1341,1341,1341,1341,0,0,0,334,334,334,334,334,334,334,334,0,845,0,0,0,334,334,334,334,334,334,334,334,0,845,0,0,0,0,891,891,891,891,891,0,0,0,0,0,862,1539,0,0,1515,0,0,0,1515,0,0,0,1515,0,0,0,0,0,0,0,0,0,334,334,334,334,334,334,334,334,334,334,1537,0,1516,334,334,334,334,334,334,334,334,334,334,0,1537,0,0,0,0,0,0,0,891,891,891,891,891,891,891,0,0,0,1515,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,334,334,334,1310,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,0,0,1516,0,0,0,0,0,0,0,0,0,1539,0,0,0,843,0,0,1539,0,843,0,1539,0,1539,1515,0,0,0,0,0,0,0,1516,0,0,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,1310,334,334,334,1537,0,0,0,0,0,0,0,1516,0,0,1537,0,1516,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1539,1539,1539,1539,1539,1539,1539,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,0,0,845,0,0,1516,1516,1516,0,0,0,0,845,1539,0,0,0,0,0,843,0,0,0,843,0,0,0,0,0,0,0,0,0,0,0,0,0,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,0,0,895,895,895,895,895,895,0,0,0,0,0,0,0,0,0,843,0,0,877,877,0,877,877,877,877,877,877,0,0,0,0,0,0,0,0,0,0,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,0,0,895,895,895,895,895,895,895,895,895,0,895,895,0,0,845,0,877,877,877,877,877,0,877,877,877,877,877,877,877,877,877,877,0,0,877,877,877,0,0,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,895,895,895,895,895,895,895,895,895,895,0,0,895,895,895,0,0,0,877,877,877,877,877,0,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,0,334,334,334,334,334,334,334,844,0,844,334,334,334,334,334,334,334,334,895,895,895,895,895,895,895,895,895,895,895,0,895,895,895,895,895,0,0,877,877,877,877,877,0,0,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,0,334,334,334,334,334,334,844,0,0,0,334,334,334,334,334,334,334,334,895,895,74,0,895,895,895,895,895,895,895,0,895,895,895,895,895,895,0,877,877,877,877,877,877,0,0,0,0,877,877,877,877,877,877,877,877,877,877,877,877,0,334,334,334,334,334,334,0,844,0,334,334,334,334,334,334,334,334,334,895,895,0,0,895,895,895,895,0,0,0,0,0,0,0,895,895,895,0,877,877,877,877,877,877,877,877,877,0,0,877,877,877,877,877,877,877,877,877,877,877,0,334,334,1310,334,334,334,844,0,334,334,334,334,334,334,1310,334,334,334,895,895,895,0,0,895,895,895,0,82,0,0,0,82,0,895,895,895,895,877,877,877,877,877,877,877,877,877,877,0,0,877,877,877,0,0,0,0,877,877,877,0,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,895,895,895,895,0,895,0,0,0,0,0,0,0,0,0,895,895,895,895,877,877,877,877,877,877,877,877,877,877,877,0,0,0,0,0,1128,1128,0,877,877,877,877,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,844,895,895,895,0,0,0,895,0,82,0,0,0,82,0,895,895,895,895,877,877,877,877,877,877,877,877,877,877,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,1469,895,0,0,0,0,0,0,0,895,895,895,895,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,0,0,943,943,943,943,943,1362,1362,1362,1362,1362,1362,1030,1030,1030,1030,1362,0,0,0,0,0,1539,0,895,895,895,1469,895,895,895,895,895,0,895,895,895,895,895,895,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,0,943,943,943,943,943,943,1362,1362,1362,1362,1362,1030,1030,1030,1030,0,0,0,0,845,0,0,0,895,895,895,895,895,895,0,0,0,0,895,895,895,895,895,895,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,877,0,943,943,943,943,943,0,0,0,0,0,0,1030,1030,1030,1030,0,845,1540,0,0,0,0,844,0,844,895,895,895,895,0,895,895,895,895,895,895,895,895,845,877,877,877,877,877,1014,1014,1011,1014,1014,1014,1014,877,877,877,877,877,877,877,0,0,943,943,943,943,845,0,0,1539,0,0,0,1030,1030,1030,1030,0,0,0,0,0,0,0,0,0,0,844,895,895,895,0,0,895,895,895,895,895,895,0,1539,877,877,877,877,877,1014,0,0,0,0,0,1014,877,877,877,877,877,1014,1014,0,1014,1014,943,943,0,1539,0,0,0,0,1539,845,0,1027,1028,0,0,0,0,0,845,0,0,0,0,0,0,0,895,895,895,0,895,844,0,844,0,1539,0,844,877,877,877,877,877,1014,0,0,0,0,0,1015,877,877,877,877,877,1014,0,0,0,1011,0,0,0,0,0,0,0,0,0,0,0,1028,1028,0,0,845,0,0,0,1539,0,845,0,1539,0,0,0,0,0,0,0,0,0,0,0,0,0,0,877,877,877,877,877,1014,0,0,0,0,0,1011,0,0,1539,845,1539,1011,0,0,0,1011,0,0,845,0,0,0,0,1539,0,0,0,1028,1027,0,0,0,1539,0,0,0,0,0,0,0,0,0,0,0,0,845,0,0,0,0,845,0,0,844,877,877,877,877,877,1014,35,0,0,0,1011,1011,0,0,0,0,0,1011,1011,0,1011,1011,0,1539,1539,0,0,0,0,0,0,0,1030,1030,1030,1030,0,0,0,0,0,845,0,0,0,844,0,0,0,0,844,0,0,844,0,0,0,0,1539,0,877,877,877,877,877,1014,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1539,1539,0,0,0,0,0,0,845,1030,1030,1030,1030,1540,0,0,845,0,0,0,0,0,0,0,844,0,0,0,0,0,0,845,0,845,0,0,1539,877,877,877,0,0,1011,0,0,0,0,1011,0,0,0,0,0,0,0,0,0,0,0,1539,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1539,0,0,0,0,0,0,0,844,0,845,273,273,273,273,273,1011,1011,1011,1011,1011,1011,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,845,0,1513,1514,0,0,0,844,0,0,0,0,845,0,0,0,1539,273,273,273,273,273,273,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1030,1030,1030,1030,1539,0,0,0,0,0,1539,0,0,1537,1538,0,844,0,0,0,0,844,1009,1009,1009,1009,1009,0,273,273,273,273,273,273,0,1011,1011,1011,1011,0,0,0,0,0,0,1009,1009,1009,1009,0,0,0,0,0,0,0,0,0,0,0,1030,1030,1030,1030,0,0,1513,1514,0,0,0,0,0,0,0,0,0,844,0,1539,0,0,1009,0,0,0,1009,845,273,273,273,273,273,273,273,1011,0,0,1011,0,0,0,0,0,0,1009,0,0,1009,0,0,0,0,0,0,0,0,0,0,0,0,1028,1028,0,0,0,1537,1538,0,0,844,0,0,845,0,0,0,0,0,0,0,845,1009,0,0,0,1009,0,273,273,273,273,273,273,273,1011,1011,0,1011,0,0,0,0,0,0,1009,0,0,1009,0,0,1011,1011,0,1011,1011,0,0,0,0,0,1028,1027,1539,0,0,0,845,0,0,0,0,0,0,0,0,844,0,845,0,0,0,1009,1009,0,1009,1009,845,273,273,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1009,1009,1009,1009,0,0,1011,0,0,0,1011,0,0,0,0,0,1027,1028,0,0,845,0,0,0,0,0,845,0,0,1319,1319,1319,1319,1319,1319,0,0,0,0,0,0,0,844,273,273,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1011,0,0,0,1011,1011,1011,1011,0,1030,1030,1030,1030,0,0,0,0,0,0,0,0,0,845,1319,0,0,0,0,1319,845,0,0,0,0,0,0,1539,273,273,273,273,273,273,273,273,273,273,273,0,0,0,1539,0,0,0,0,1539,1539,0,0,1011,0,0,0,0,0,0,1011,0,1030,1030,1030,1030,1539,0,0,1564,844,0,0,0,0,0,1319,0,0,0,0,0,0,0,0,0,119,0,0,845,273,273,273,273,273,273,273,273,273,273,273,273,0,0,0,0,845,0,0,0,0,0,0,1011,817,0,0,0,0,804,1011,0,1030,1030,1030,1030,0,0,0,0,0,0,0,845,0,0,1319,1319,1319,80,0,1319,0,0,1539,0,0,0,0,0,273,273,273,273,273,273,273,273,273,273,273,273,0,0,0,0,0,0,1539,0,845,0,0,1011,1011,1011,1011,1011,1011,1011,1011,845,1030,1030,1030,1030,0,845,0,1539,1539,845,0,0,845,0,844,0,1319,1319,1319,1319,844,0,844,0,845,1539,844,845],"height":60,"id":2,"name":"blocked","opacity":1,"type":"tilelayer","visible":false,"width":60,"x":0,"y":0},{"draworder":"topdown","id":3,"name":"chest_locations","objects":[{"gid":86,"height":32,"id":6,"name":"","properties":[{"name":"spawner","type":"string","value":"6"}],"rotation":0,"type":"","visible":true,"width":32,"x":417,"y":934},{"gid":86,"height":32,"id":7,"name":"","properties":[{"name":"spawner","type":"string","value":"1"}],"rotation":0,"type":"","visible":true,"width":32,"x":448,"y":1635},{"gid":86,"height":32,"id":8,"name":"","properties":[{"name":"spawner","type":"string","value":"3"}],"rotation":0,"type":"","visible":true,"width":32,"x":1664,"y":1214},{"gid":86,"height":32,"id":11,"name":"","properties":[{"name":"spawner","type":"string","value":"4"}],"rotation":0,"type":"","visible":true,"width":32,"x":1407,"y":125},{"gid":86,"height":32,"id":12,"name":"","properties":[{"name":"spawner","type":"string","value":"5"}],"rotation":0,"type":"","visible":true,"width":32,"x":960,"y":119},{"gid":86,"height":32,"id":13,"name":"","properties":[{"name":"spawner","type":"string","value":"5"}],"rotation":0,"type":"","visible":true,"width":32,"x":1149,"y":607},{"gid":86,"height":32,"id":14,"name":"","properties":[{"name":"spawner","type":"string","value":"6"}],"rotation":0,"type":"","visible":true,"width":32,"x":64,"y":413},{"gid":86,"height":32,"id":15,"name":"","properties":[{"name":"spawner","type":"string","value":"2"}],"rotation":0,"type":"","visible":true,"width":32,"x":1445,"y":1632},{"gid":86,"height":32,"id":16,"name":"","properties":[{"name":"spawner","type":"string","value":"6"}],"rotation":0,"type":"","visible":true,"width":32,"x":352,"y":197},{"gid":86,"height":32,"id":17,"name":"","properties":[{"name":"spawner","type":"string","value":"5"}],"rotation":0,"type":"","visible":true,"width":32,"x":806,"y":411},{"gid":86,"height":32,"id":18,"name":"","properties":[{"name":"spawner","type":"string","value":"6"}],"rotation":0,"type":"","visible":true,"width":32,"x":38,"y":961},{"gid":86,"height":32,"id":19,"name":"","properties":[{"name":"spawner","type":"string","value":"1"}],"rotation":0,"type":"","visible":true,"width":32,"x":224,"y":1822},{"gid":86,"height":32,"id":20,"name":"","properties":[{"name":"spawner","type":"string","value":"1"}],"rotation":0,"type":"","visible":true,"width":32,"x":227,"y":1442},{"gid":86,"height":32,"id":21,"name":"","properties":[{"name":"spawner","type":"string","value":"1"}],"rotation":0,"type":"","visible":true,"width":32,"x":801,"y":1538},{"gid":86,"height":32,"id":22,"name":"","properties":[{"name":"spawner","type":"string","value":"2"}],"rotation":0,"type":"","visible":true,"width":32,"x":993,"y":1796},{"gid":86,"height":32,"id":23,"name":"","properties":[{"name":"spawner","type":"string","value":"2"}],"rotation":0,"type":"","visible":true,"width":32,"x":1283,"y":1794},{"gid":86,"height":32,"id":24,"name":"","properties":[{"name":"spawner","type":"string","value":"2"}],"rotation":0,"type":"","visible":true,"width":32,"x":1314,"y":1401},{"gid":86,"height":32,"id":25,"name":"","properties":[{"name":"spawner","type":"string","value":"2"}],"rotation":0,"type":"","visible":true,"width":32,"x":1566,"y":1828},{"gid":86,"height":32,"id":26,"name":"","properties":[{"name":"spawner","type":"string","value":"2"}],"rotation":0,"type":"","visible":true,"width":32,"x":1767,"y":1697},{"gid":86,"height":32,"id":27,"name":"","properties":[{"name":"spawner","type":"string","value":"3"}],"rotation":0,"type":"","visible":true,"width":32,"x":1384,"y":1150},{"gid":86,"height":32,"id":28,"name":"","properties":[{"name":"spawner","type":"string","value":"3"}],"rotation":0,"type":"","visible":true,"width":32,"x":1874,"y":1081},{"gid":86,"height":32,"id":29,"name":"","properties":[{"name":"spawner","type":"string","value":"3"}],"rotation":0,"type":"","visible":true,"width":32,"x":1757,"y":900},{"gid":86,"height":32,"id":30,"name":"","properties":[{"name":"spawner","type":"string","value":"3"}],"rotation":0,"type":"","visible":true,"width":32,"x":1802,"y":759},{"gid":86,"height":32,"id":31,"name":"","properties":[{"name":"spawner","type":"string","value":"4"}],"rotation":0,"type":"","visible":true,"width":32,"x":1814,"y":322},{"gid":86,"height":32,"id":32,"name":"","properties":[{"name":"spawner","type":"string","value":"3"}],"rotation":0,"type":"","visible":true,"width":32,"x":1357,"y":758},{"gid":86,"height":32,"id":33,"name":"","properties":[{"name":"spawner","type":"string","value":"4"}],"rotation":0,"type":"","visible":true,"width":32,"x":1326,"y":352},{"gid":86,"height":32,"id":34,"name":"","properties":[{"name":"spawner","type":"string","value":"5"}],"rotation":0,"type":"","visible":true,"width":32,"x":1007,"y":296},{"gid":86,"height":32,"id":35,"name":"","properties":[{"name":"spawner","type":"string","value":"5"}],"rotation":0,"type":"","visible":true,"width":32,"x":646,"y":144},{"gid":86,"height":32,"id":36,"name":"","properties":[{"name":"spawner","type":"string","value":"5"}],"rotation":0,"type":"","visible":true,"width":32,"x":531,"y":787},{"gid":86,"height":32,"id":37,"name":"","properties":[{"name":"spawner","type":"string","value":"6"}],"rotation":0,"type":"","visible":true,"width":32,"x":356,"y":544},{"gid":86,"height":32,"id":38,"name":"","properties":[{"name":"spawner","type":"string","value":"5"}],"rotation":0,"type":"","visible":true,"width":32,"x":824,"y":495},{"gid":86,"height":32,"id":39,"name":"","properties":[{"name":"spawner","type":"string","value":"1"}],"rotation":0,"type":"","visible":true,"width":32,"x":638,"y":1503},{"gid":86,"height":32,"id":40,"name":"","properties":[{"name":"spawner","type":"string","value":"1"}],"rotation":0,"type":"","visible":true,"width":32,"x":811,"y":1879},{"gid":86,"height":32,"id":41,"name":"","properties":[{"name":"spawner","type":"string","value":"1"}],"rotation":0,"type":"","visible":true,"width":32,"x":557,"y":1882},{"gid":86,"height":32,"id":42,"name":"","properties":[{"name":"spawner","type":"string","value":"4"}],"rotation":0,"type":"","visible":true,"width":32,"x":1656,"y":122},{"gid":86,"height":32,"id":43,"name":"","properties":[{"name":"spawner","type":"string","value":"6"}],"rotation":0,"type":"","visible":true,"width":32,"x":146,"y":803}],"opacity":1,"type":"objectgroup","visible":false,"x":0,"y":0},{"draworder":"topdown","id":4,"name":"monster_locations","objects":[{"gid":44,"height":32,"id":44,"name":"","properties":[{"name":"spawner","type":"string","value":"1"}],"rotation":0,"type":"","visible":true,"width":32,"x":67,"y":283},{"gid":44,"height":32,"id":45,"name":"","properties":[{"name":"spawner","type":"string","value":"1"}],"rotation":0,"type":"","visible":true,"width":32,"x":257,"y":451},{"gid":44,"height":32,"id":46,"name":"","properties":[{"name":"spawner","type":"string","value":"1"}],"rotation":0,"type":"","visible":true,"width":32,"x":387,"y":189},{"gid":44,"height":32,"id":47,"name":"","properties":[{"name":"spawner","type":"string","value":"1"}],"rotation":0,"type":"","visible":true,"width":32,"x":526,"y":564},{"gid":44,"height":32,"id":48,"name":"","properties":[{"name":"spawner","type":"string","value":"1"}],"rotation":0,"type":"","visible":true,"width":32,"x":365,"y":775},{"gid":44,"height":32,"id":49,"name":"","properties":[{"name":"spawner","type":"string","value":"1"}],"rotation":0,"type":"","visible":true,"width":32,"x":212,"y":810},{"gid":44,"height":32,"id":50,"name":"","properties":[{"name":"spawner","type":"string","value":"2"}],"rotation":0,"type":"","visible":true,"width":32,"x":741,"y":94},{"gid":44,"height":32,"id":51,"name":"","properties":[{"name":"spawner","type":"string","value":"2"}],"rotation":0,"type":"","visible":true,"width":32,"x":731,"y":415},{"gid":44,"height":32,"id":52,"name":"","properties":[{"name":"spawner","type":"string","value":"2"}],"rotation":0,"type":"","visible":true,"width":32,"x":632,"y":740},{"gid":44,"height":32,"id":53,"name":"","properties":[{"name":"spawner","type":"string","value":"2"}],"rotation":0,"type":"","visible":true,"width":32,"x":1059,"y":193},{"gid":44,"height":32,"id":54,"name":"","properties":[{"name":"spawner","type":"string","value":"2"}],"rotation":0,"type":"","visible":true,"width":32,"x":1058,"y":749},{"gid":44,"height":32,"id":55,"name":"","properties":[{"name":"spawner","type":"string","value":"2"}],"rotation":0,"type":"","visible":true,"width":32,"x":1113,"y":474},{"gid":44,"height":32,"id":56,"name":"","properties":[{"name":"spawner","type":"string","value":"3"}],"rotation":0,"type":"","visible":true,"width":32,"x":1417,"y":81},{"gid":44,"height":32,"id":57,"name":"","properties":[{"name":"spawner","type":"string","value":"3"}],"rotation":0,"type":"","visible":true,"width":32,"x":1730,"y":343},{"gid":44,"height":32,"id":58,"name":"","properties":[{"name":"spawner","type":"string","value":"3"}],"rotation":0,"type":"","visible":true,"width":32,"x":1380,"y":441},{"gid":44,"height":32,"id":59,"name":"","properties":[{"name":"spawner","type":"string","value":"3"}],"rotation":0,"type":"","visible":true,"width":32,"x":1415,"y":732},{"gid":44,"height":32,"id":60,"name":"","properties":[{"name":"spawner","type":"string","value":"3"}],"rotation":0,"type":"","visible":true,"width":32,"x":1836,"y":678},{"gid":44,"height":32,"id":61,"name":"","properties":[{"name":"spawner","type":"string","value":"3"}],"rotation":0,"type":"","visible":true,"width":32,"x":1580,"y":458},{"gid":44,"height":32,"id":62,"name":"","properties":[{"name":"spawner","type":"string","value":"4"}],"rotation":0,"type":"","visible":true,"width":32,"x":1531,"y":915},{"gid":44,"height":32,"id":63,"name":"","properties":[{"name":"spawner","type":"string","value":"4"}],"rotation":0,"type":"","visible":true,"width":32,"x":1655,"y":1173},{"gid":44,"height":32,"id":64,"name":"","properties":[{"name":"spawner","type":"string","value":"4"}],"rotation":0,"type":"","visible":true,"width":32,"x":1864,"y":984},{"gid":44,"height":32,"id":65,"name":"","properties":[{"name":"spawner","type":"string","value":"4"}],"rotation":0,"type":"","visible":true,"width":32,"x":1746,"y":1491},{"gid":44,"height":32,"id":66,"name":"","properties":[{"name":"spawner","type":"string","value":"4"}],"rotation":0,"type":"","visible":true,"width":32,"x":1229,"y":1502},{"gid":44,"height":32,"id":67,"name":"","properties":[{"name":"spawner","type":"string","value":"4"}],"rotation":0,"type":"","visible":true,"width":32,"x":1717,"y":1856},{"gid":44,"height":32,"id":68,"name":"","properties":[{"name":"spawner","type":"string","value":"4"}],"rotation":0,"type":"","visible":true,"width":32,"x":1352,"y":1843},{"gid":44,"height":32,"id":69,"name":"","properties":[{"name":"spawner","type":"string","value":"4"}],"rotation":0,"type":"","visible":true,"width":32,"x":1373,"y":1553},{"gid":44,"height":32,"id":70,"name":"","properties":[{"name":"spawner","type":"string","value":"5"}],"rotation":0,"type":"","visible":true,"width":32,"x":902,"y":1411},{"gid":44,"height":32,"id":71,"name":"","properties":[{"name":"spawner","type":"string","value":"5"}],"rotation":0,"type":"","visible":true,"width":32,"x":926,"y":1760},{"gid":44,"height":32,"id":72,"name":"","properties":[{"name":"spawner","type":"string","value":"5"}],"rotation":0,"type":"","visible":true,"width":32,"x":661,"y":1860},{"gid":44,"height":32,"id":73,"name":"","properties":[{"name":"spawner","type":"string","value":"5"}],"rotation":0,"type":"","visible":true,"width":32,"x":486,"y":1561},{"gid":44,"height":32,"id":74,"name":"","properties":[{"name":"spawner","type":"string","value":"5"}],"rotation":0,"type":"","visible":true,"width":32,"x":254,"y":1492},{"gid":44,"height":32,"id":75,"name":"","properties":[{"name":"spawner","type":"string","value":"5"}],"rotation":0,"type":"","visible":true,"width":32,"x":378,"y":1805},{"gid":44,"height":32,"id":76,"name":"","properties":[{"name":"spawner","type":"string","value":"5"}],"rotation":0,"type":"","visible":true,"width":32,"x":720,"y":1526},{"gid":44,"height":32,"id":77,"name":"","properties":[{"name":"spawner","type":"string","value":"6"}],"rotation":0,"type":"","visible":true,"width":32,"x":518,"y":998},{"gid":44,"height":32,"id":78,"name":"","properties":[{"name":"spawner","type":"string","value":"6"}],"rotation":0,"type":"","visible":true,"width":32,"x":80,"y":905},{"gid":44,"height":32,"id":79,"name":"","properties":[{"name":"spawner","type":"string","value":"6"}],"rotation":0,"type":"","visible":true,"width":32,"x":795,"y":1680},{"gid":44,"height":32,"id":80,"name":"","properties":[{"name":"spawner","type":"string","value":"6"}],"rotation":0,"type":"","visible":true,"width":32,"x":1263,"y":1671},{"gid":44,"height":32,"id":81,"name":"","properties":[{"name":"spawner","type":"string","value":"6"}],"rotation":0,"type":"","visible":true,"width":32,"x":1668,"y":1262},{"gid":44,"height":32,"id":82,"name":"","properties":[{"name":"spawner","type":"string","value":"6"}],"rotation":0,"type":"","visible":true,"width":32,"x":1215,"y":670},{"gid":44,"height":32,"id":83,"name":"","properties":[{"name":"spawner","type":"string","value":"6"}],"rotation":0,"type":"","visible":true,"width":32,"x":893,"y":109}],"opacity":1,"type":"objectgroup","visible":true,"x":0,"y":0},{"draworder":"topdown","id":5,"name":"player_locations","objects":[{"gid":2,"height":32,"id":84,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":194,"y":317},{"gid":2,"height":32,"id":85,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":160,"y":873},{"gid":2,"height":32,"id":86,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":538,"y":1601},{"gid":2,"height":32,"id":87,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":949,"y":1470},{"gid":2,"height":32,"id":88,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":1336,"y":1678},{"gid":2,"height":32,"id":89,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":1841,"y":920},{"gid":2,"height":32,"id":90,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":1461,"y":793},{"gid":2,"height":32,"id":91,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":1449,"y":185},{"gid":2,"height":32,"id":92,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":1269,"y":44},{"gid":2,"height":32,"id":93,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":1048,"y":568},{"gid":2,"height":32,"id":94,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":1227,"y":328},{"gid":2,"height":32,"id":95,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":687,"y":473},{"gid":2,"height":32,"id":96,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":716,"y":224},{"gid":2,"height":32,"id":97,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":997,"y":156},{"gid":2,"height":32,"id":98,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":503,"y":254},{"gid":2,"height":32,"id":99,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":383,"y":677},{"gid":2,"height":32,"id":100,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":620,"y":959},{"gid":2,"height":32,"id":101,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":1659,"y":1600},{"gid":2,"height":32,"id":102,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":249,"y":1579},{"gid":2,"height":32,"id":103,"name":"","rotation":0,"type":"","visible":true,"width":32,"x":1836,"y":536}],"opacity":1,"type":"objectgroup","visible":false,"x":0,"y":0}],"nextlayerid":6,"nextobjectid":123,"orientation":"orthogonal","renderorder":"right-down","tiledversion":"1.4.2","tileheight":32,"tilesets":[{"columns":32,"firstgid":1,"image":"Downloads/PhaserRPG-Assets/level/background.png","imageheight":1504,"imagewidth":1024,"margin":0,"name":"background","spacing":0,"tilecount":1504,"tileheight":32,"tilewidth":32},{"columns":24,"firstgid":1505,"image":"OneDrive/Documents/tiles.png","imageheight":452,"imagewidth":774,"margin":0,"name":"tiles","spacing":0,"tilecount":336,"tileheight":32,"tilewidth":32}],"tilewidth":32,"type":"map","version":1.4,"width":60}

/***/ }),
/* 33 */
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
      this.load.image('blueButton1', 'assets/ui/blue_button02.png');
      this.load.image('blueButton2', 'assets/ui/blue_button03.png');
      // this.load.image('phaserLogo', 'assets/logo.png');
      this.load.image('box', 'assets/ui/grey_box.png');
      this.load.image('checkedBox', 'assets/ui/blue_boxCheckmark.png');
      this.load.audio('bgMusic', ['assets/TownTheme.ogg']);
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
      this.scene.start('Title');
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(0);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

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
      this.gameButton = new _Button2.default(this, _config2.default.width / 2, _config2.default.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');

      // Options
      this.optionsButton = new _Button2.default(this, _config2.default.width / 2, _config2.default.height / 2, 'blueButton1', 'blueButton2', 'Options', 'Options');

      // Credits
      this.creditsButton = new _Button2.default(this, _config2.default.width / 2, _config2.default.height / 2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

      this.model = this.sys.game.globals.model;
      if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
        this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
        this.bgMusic.play();
        this.model.bgMusicPlaying = true;
        this.sys.game.globals.bgMusic = this.bgMusic;
      }
    }
  }]);

  return TitleScene;
}(Phaser.Scene);

exports.default = TitleScene;
;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(0);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    value: function create() {
      this.model = this.sys.game.globals.model;

      this.text = this.add.text(300, 100, 'Options', { fontSize: 40 });
      this.musicButton = this.add.image(200, 200, 'checkedBox');
      this.musicText = this.add.text(250, 190, 'Music Enabled', { fontSize: 24 });

      this.soundButton = this.add.image(200, 300, 'checkedBox');
      this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: 24 });

      this.musicButton.setInteractive();
      this.soundButton.setInteractive();

      this.musicButton.on('pointerdown', function () {
        this.model.musicOn = !this.model.musicOn;
        this.updateAudio();
      }.bind(this));

      this.soundButton.on('pointerdown', function () {
        this.model.soundOn = !this.model.soundOn;
        this.updateAudio();
      }.bind(this));

      this.updateAudio();

      this.menuButton = new _Button2.default(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');

      this.updateAudio();
    }
  }, {
    key: 'updateAudio',
    value: function updateAudio() {
      if (this.model.musicOn === false) {
        this.musicButton.setTexture('box');
        this.sys.game.globals.bgMusic.stop();
        this.model.bgMusicPlaying = false;
      } else {
        this.musicButton.setTexture('checkedBox');
        if (this.model.bgMusicPlaying === false) {
          this.sys.game.globals.bgMusic.play();
          this.model.bgMusicPlaying = true;
        }
      }

      if (this.model.soundOn === false) {
        this.soundButton.setTexture('box');
      } else {
        this.soundButton.setTexture('checkedBox');
      }
    }
  }]);

  return OptionsScene;
}(Phaser.Scene);

exports.default = OptionsScene;
;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(0);

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UiScene = function (_Phaser$Scene) {
  _inherits(UiScene, _Phaser$Scene);

  function UiScene() {
    _classCallCheck(this, UiScene);

    return _possibleConstructorReturn(this, (UiScene.__proto__ || Object.getPrototypeOf(UiScene)).call(this, 'Ui'));
  }

  _createClass(UiScene, [{
    key: 'init',
    value: function init() {
      this.gameScene = this.scene.get('Game');
      this.model = this.sys.game.globals.model;
    }
  }, {
    key: 'create',
    value: function create() {
      this.setupUiElements();
      this.setupEvents();
    }
  }, {
    key: 'setupUiElements',
    value: function setupUiElements() {
      this.scoreText = this.add.text(35, 8, 'Coins: 0', { fontSize: '16px', fill: '#fff' });

      this.coinIcon = this.add.image(15, 15, 'items', 3);
    }
  }, {
    key: 'setupEvents',
    value: function setupEvents() {
      var _this2 = this;

      this.gameScene.events.on('updateScore', function (score) {
        _this2.scoreText.setText('Coins: ' + score);
        _this2.sys.game.globals.model.score = score;
      });
    }
  }]);

  return UiScene;
}(_phaser2.default.Scene);

exports.default = UiScene;

/***/ }),
/* 37 */
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

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model() {
    _classCallCheck(this, Model);

    this._soundOn = true;
    this._musicOn = true;
    this._bgMusicPlaying = false;
  }

  _createClass(Model, [{
    key: "musicOn",
    set: function set(value) {
      this._musicOn = value;
    },
    get: function get() {
      return this._musicOn;
    }
  }, {
    key: "soundOn",
    set: function set(value) {
      this._soundOn = value;
    },
    get: function get() {
      return this._soundOn;
    }
  }, {
    key: "bgMusicPlaying",
    set: function set(value) {
      this._bgMusicPlaying = value;
    },
    get: function get() {
      return this._bgMusicPlaying;
    }
  }]);

  return Model;
}();

exports.default = Model;

/***/ })
],[7]);