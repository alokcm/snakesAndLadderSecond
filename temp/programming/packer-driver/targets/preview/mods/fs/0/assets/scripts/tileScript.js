System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, TiledMap, Label, tween, Vec3, Prefab, instantiate, SpriteFrame, UITransform, toDegree, Sprite, director, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, TileScript;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      TiledMap = _cc.TiledMap;
      Label = _cc.Label;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      toDegree = _cc.toDegree;
      Sprite = _cc.Sprite;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac253m+E4FMpabxtLyhenLM", "TileScript", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = TileScript
       * DateTime = Wed Sep 15 2021 11:44:38 GMT+0530 (India Standard Time)
       * Author = alokraj0024
       * FileBasename = TileScript.ts
       * FileBasenameNoExtension = TileScript
       * URL = db://assets/scripts/TileScript.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       * Math.floor(Math.random() * (max - min + 1)) + min;
       */

      _export("TileScript", TileScript = (_dec = ccclass('TileScript'), _dec2 = property(TiledMap), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TileScript, _Component);

        function TileScript() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "tileMap", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "playerOne", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "playerTwo", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "prefabLabel", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "snake", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "ladder", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "arrayOfDices", _descriptor7, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "tileLayer", null);

          _defineProperty(_assertThisInitialized(_this), "tileCurrPos", null);

          _defineProperty(_assertThisInitialized(_this), "playerOneTileX", 0);

          _defineProperty(_assertThisInitialized(_this), "playerOneTileY", 9);

          _defineProperty(_assertThisInitialized(_this), "playerTwoTileX", 0);

          _defineProperty(_assertThisInitialized(_this), "playerTwoTileY", 9);

          _defineProperty(_assertThisInitialized(_this), "arrayOfSnakesHead", []);

          _defineProperty(_assertThisInitialized(_this), "arrayOfSnakesTail", []);

          _defineProperty(_assertThisInitialized(_this), "arrayOfLaddersHead", []);

          _defineProperty(_assertThisInitialized(_this), "arrayOfLaddersTail", []);

          _defineProperty(_assertThisInitialized(_this), "arrayOfChances", []);

          _defineProperty(_assertThisInitialized(_this), "sumOfChances", 0);

          _defineProperty(_assertThisInitialized(_this), "button1", null);

          _defineProperty(_assertThisInitialized(_this), "button2", null);

          return _this;
        }

        var _proto = TileScript.prototype;

        _proto.start = function start() {
          this.tileLayer = this.tileMap.getLayer('Tile Layer 1');
          this.tileCurrPos = this.tileLayer.getTiledTileAt(0, 9, true).node.position;
          this.playerOne.setPosition(new Vec3(this.tileCurrPos.x + 8, this.tileCurrPos.y + 15, 0));
          this.playerTwo.setPosition(new Vec3(this.tileCurrPos.x + 25, this.tileCurrPos.y + 15, 0));
          var k = 1;

          for (var i = 9; i >= 0; i--) {
            if (i % 2 == 0) {
              for (var l = 9; l >= 0; l--) {
                this.addLabel(l, i, k++);
              }
            } else {
              for (var j = 0; j <= 9; j++) {
                this.addLabel(j, i, k++);
              }
            }
          }

          this.addSnakes();
          this.addLadders();
          this.node.getChildByName('playerOneWon').active = false;
          this.node.getChildByName('playerTwoWon').active = false;
          this.button1 = this.node.getChildByName('play1');
          this.button2 = this.node.getChildByName('play2');
        };

        _proto.addLabel = function addLabel(j, i, k) {
          var ch = instantiate(this.prefabLabel);
          var tileNow = this.tileLayer.getTiledTileAt(j, i, true).node.position;
          ch.getComponent(Label).string = "" + k;
          this.tileMap.node.addChild(ch);
          ch.setPosition(tileNow.x + 10, tileNow.y - 8, 1);
        };

        _proto.addSnakes = function addSnakes() {
          var noOfSnakes = Math.floor(Math.random() * (5 - 2 + 1)) + 2;

          for (var i = 1; i <= noOfSnakes; i++) {
            var randomStartX = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            var randomStartY = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
            var snakeHead = [randomStartX, randomStartY];
            this.arrayOfSnakesHead.push(snakeHead);
            var randomEndX = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            var randomEndY = Math.floor(Math.random() * (9 - (randomStartY + 2) + 1)) + (randomStartY + 2);
            var snakeTail = [randomEndX, randomEndY];
            this.arrayOfSnakesTail.push(snakeTail);
            var tileNowRandom1 = this.tileLayer.getTiledTileAt(randomStartX, randomStartY, true).node.position;
            var tileNowRandom2 = this.tileLayer.getTiledTileAt(randomEndX, randomEndY, true).node.position;
            var diffX = tileNowRandom1.x - tileNowRandom2.x;
            var diffY = tileNowRandom1.y - tileNowRandom2.y;
            var lengthOfSnake = Math.sqrt(diffX * diffX + diffY * diffY);
            var chil = instantiate(this.snake);
            this.tileMap.node.addChild(chil);
            chil.setPosition(tileNowRandom1.x + 16, tileNowRandom1.y + 16, 1);
            chil.getComponent(UITransform).setContentSize(20, lengthOfSnake);
            var ang = Math.atan2(diffY, diffX);
            tween(chil).to(0.1, {
              angle: toDegree(ang) - 90
            }).start();
          }

          console.log(this.arrayOfSnakesHead);
          console.log(this.arrayOfSnakesTail);
        };

        _proto.addLadders = function addLadders() {
          var noOfLadders = Math.floor(Math.random() * (3 - 2 + 1)) + 2;

          for (var i = 1; i <= noOfLadders; i++) {
            var randomStartX = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            var randomStartY = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
            var ladderHead = [randomStartX, randomStartY];
            this.arrayOfLaddersHead.push(ladderHead);
            var randomEndX = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            var randomEndY = Math.floor(Math.random() * (9 - (randomStartY + 2) + 1)) + randomStartY + 2;
            var ladderTail = [randomEndX, randomEndY];
            this.arrayOfLaddersTail.push(ladderTail);
            var tileNowRandom1 = this.tileLayer.getTiledTileAt(randomStartX, randomStartY, true).node.position;
            var tileNowRandom2 = this.tileLayer.getTiledTileAt(randomEndX, randomEndY, true).node.position;
            var diffX = tileNowRandom1.x - tileNowRandom2.x;
            var diffY = tileNowRandom1.y - tileNowRandom2.y;
            var lengthOfSnake = Math.sqrt(diffX * diffX + diffY * diffY);
            var chil = instantiate(this.ladder);
            this.tileMap.node.addChild(chil);
            chil.setPosition(tileNowRandom1.x + 16, tileNowRandom1.y + 16, 1);
            chil.getComponent(UITransform).setContentSize(20, lengthOfSnake);
            var ang = Math.atan2(diffY, diffX);
            tween(chil).to(0.1, {
              angle: toDegree(ang) - 90
            }).start();
          }
        };

        _proto.rollDice = function rollDice(event, customData) {
          var btn = null;

          if (customData == '1') {
            btn = this.button1;
          } else {
            btn = this.button2;
          }

          var randomDice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
          btn.getComponent(Sprite).spriteFrame = this.arrayOfDices[randomDice - 1];
          return randomDice;
        };

        _proto.moveNode = function moveNode(playerNode, chances, checkPlayer) {
          var _this2 = this;

          var x = null;
          var y = null;
          var ret = chances * 0.5;

          if (checkPlayer == '1') {
            x = this.playerOneTileX;
            y = this.playerOneTileY;
          } else {
            x = this.playerTwoTileX;
            y = this.playerTwoTileY;
          }

          var id = setInterval(function () {
            if (y % 2 == 0) {
              x--;

              if (x < 0) {
                x = 0;
                y--;
              }
            } else {
              x++;

              if (x > 9) {
                x = 9;
                y--;
              }
            }

            var nextPos = _this2.tileLayer.getTiledTileAt(x, y).node.position;

            tween(playerNode).to(0.5, {
              position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
            }, {
              easing: 'sineIn'
            }).start();

            if (checkPlayer == '1') {
              _this2.playerOneTileX = x;
              _this2.playerOneTileY = y;
            } else {
              _this2.playerTwoTileX = x;
              _this2.playerTwoTileY = y;
            }
          }, 500);
          this.scheduleOnce(function () {
            clearInterval(id);
          }, ret + 0.1);
          return ret + 0.5;
        };

        _proto.movePlayer = function movePlayer(event, btnNumber) {
          var _this3 = this;

          var node = null;
          var x, y;
          var waitTime = 0;
          var child = null;
          var initialX = null;

          if (btnNumber == '1') {
            node = this.playerOne;
            x = this.playerOneTileX;
            y = this.playerOneTileY;
            child = 'playerOneWon';
            initialX = this.playerOneTileX;
          } else {
            node = this.playerTwo;
            x = this.playerTwoTileX;
            y = this.playerTwoTileY;
            child = 'playerTwoWon';
            initialX = this.playerTwoTileX;
          }

          this.scheduleOnce(function () {
            _this3.button1.active = false;
            _this3.button2.active = false;
          }, 0.2);
          var diceNum = this.rollDice(event, btnNumber);
          console.log('diceNum ' + diceNum);
          this.arrayOfChances.push([x, y]);

          if (x == 0 && y == 9) {
            if (diceNum != 6 && diceNum != 1) diceNum = 0;
          }

          if (y % 2 == 1) {
            x += diceNum;

            if (x > 9) {
              y -= 1;
              x = 10 - (x - 9);
            }

            if (y < 0) {
              y = 0;
              x = initialX;
              diceNum = 0;
            }

            this.sumOfChances += diceNum;
            waitTime = this.moveNode(node, diceNum, btnNumber);
          } else {
            x -= diceNum;

            if (x < 0) {
              y -= 1;
              x = 0 - x - 1;
            }

            if (y < 0) {
              y = 0;
              x = initialX;
              diceNum = 0;
            }

            this.sumOfChances += diceNum;
            waitTime = this.moveNode(node, diceNum, btnNumber);
          }

          if (waitTime == 0) {
            if (btnNumber == '1') {
              x = this.playerOneTileX;
              y = this.playerOneTileY;
            } else {
              x = this.playerTwoTileX;
              y = this.playerTwoTileY;
            }
          }

          console.log('wait time ' + waitTime);
          this.scheduleOnce(function () {
            for (var i = 0; i < _this3.arrayOfSnakesHead.length; i++) {
              if (_this3.arrayOfSnakesHead[i][0] == x && _this3.arrayOfSnakesHead[i][1] == y) {
                var nextPos = _this3.tileLayer.getTiledTileAt(_this3.arrayOfSnakesTail[i][0], _this3.arrayOfSnakesTail[i][1]).node.position;

                tween(node).to(1, {
                  position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
                }, {
                  easing: 'sineIn'
                }).start();

                if (btnNumber == '1') {
                  _this3.playerOneTileX = _this3.arrayOfSnakesTail[i][0];
                  _this3.playerOneTileY = _this3.arrayOfSnakesTail[i][1];
                } else {
                  _this3.playerTwoTileX = _this3.arrayOfSnakesTail[i][0];
                  _this3.playerTwoTileY = _this3.arrayOfSnakesTail[i][1];
                }
              }
            }
          }, waitTime + 0.2);
          this.scheduleOnce(function () {
            for (var i = 0; i < _this3.arrayOfLaddersTail.length; i++) {
              if (_this3.arrayOfLaddersTail[i][0] == x && _this3.arrayOfLaddersTail[i][1] == y) {
                var nextPos = _this3.tileLayer.getTiledTileAt(_this3.arrayOfLaddersHead[i][0], _this3.arrayOfLaddersHead[i][1]).node.position;

                tween(node).to(1, {
                  position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
                }, {
                  easing: 'sineIn'
                }).start();

                if (btnNumber == '1') {
                  _this3.playerOneTileX = _this3.arrayOfLaddersHead[i][0];
                  _this3.playerOneTileY = _this3.arrayOfLaddersHead[i][1];
                } else {
                  _this3.playerTwoTileX = _this3.arrayOfLaddersHead[i][0];
                  _this3.playerTwoTileY = _this3.arrayOfLaddersHead[i][1];
                }
              }
            }
          }, waitTime + 0.2);

          if (x == 0 && y == 0) {
            console.log(child);
            this.node.getChildByName(child).active = true;
            this.scheduleOnce(function () {
              _this3.button1.active = false;
              _this3.button2.active = false;
              console.log('Game finished');
              director.pause();
            }, waitTime + 1.3);
          }

          if (btnNumber == '1') {
            this.scheduleOnce(function () {
              if (_this3.sumOfChances % 6 == 0 && _this3.sumOfChances != 0 && _this3.sumOfChances != 18 && diceNum != 0) {
                _this3.button1.active = true;
              } else if (_this3.sumOfChances == 18) {
                _this3.sumOfChances = 0;

                var nextPos = _this3.tileLayer.getTiledTileAt(_this3.arrayOfChances[0][0], _this3.arrayOfChances[0][1]).node.position;

                tween(_this3.playerOne).delay(waitTime + 2.4).to(1, {
                  position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
                }, {
                  easing: 'sineIn'
                }).start();
                _this3.playerOneTileX = _this3.arrayOfChances[0][0];
                _this3.playerOneTileY = _this3.arrayOfChances[0][1];
                _this3.arrayOfChances = [];
                _this3.button2.active = true;
              } else {
                _this3.arrayOfChances = [];
                _this3.sumOfChances = 0;
                _this3.button2.active = true;
              }
            }, 0.21);
          } else {
            this.scheduleOnce(function () {
              if (_this3.sumOfChances % 6 == 0 && _this3.sumOfChances != 0 && _this3.sumOfChances != 18 && diceNum != 0) {
                _this3.button2.active = true;
              } else if (_this3.sumOfChances == 18) {
                _this3.sumOfChances = 0;

                var nextPos = _this3.tileLayer.getTiledTileAt(_this3.arrayOfChances[0][0], _this3.arrayOfChances[0][1]).node.position;

                tween(_this3.playerTwo).delay(waitTime + 2.4).to(1, {
                  position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
                }, {
                  easing: 'sineIn'
                }).start();
                _this3.playerTwoTileX = _this3.arrayOfChances[0][0];
                _this3.playerTwoTileY = _this3.arrayOfChances[0][1];
                _this3.arrayOfChances = [];
                _this3.button1.active = true;
              } else {
                _this3.arrayOfChances = [];
                _this3.sumOfChances = 0;
                _this3.button1.active = true;
              }
            }, 0.21);
          }
        };

        return TileScript;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tileMap", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerOne", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerTwo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "prefabLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "snake", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ladder", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "arrayOfDices", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TileScript.js.map