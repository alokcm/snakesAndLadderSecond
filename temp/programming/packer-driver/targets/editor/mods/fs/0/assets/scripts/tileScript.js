System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, TiledMap, Label, tween, Vec3, Prefab, instantiate, SpriteFrame, UITransform, toDegree, Sprite, director, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, TileScript;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("TileScript", TileScript = (_dec = ccclass('TileScript'), _dec2 = property(TiledMap), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = class TileScript extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tileMap", _descriptor, this);

          _initializerDefineProperty(this, "playerOne", _descriptor2, this);

          _initializerDefineProperty(this, "playerTwo", _descriptor3, this);

          _initializerDefineProperty(this, "prefabLabel", _descriptor4, this);

          _initializerDefineProperty(this, "snake", _descriptor5, this);

          _initializerDefineProperty(this, "ladder", _descriptor6, this);

          _initializerDefineProperty(this, "arrayOfDices", _descriptor7, this);

          _defineProperty(this, "tileLayer", null);

          _defineProperty(this, "tile", null);

          _defineProperty(this, "tileCurrPos", null);

          _defineProperty(this, "noOfSix", 0);

          _defineProperty(this, "playerOneTileX", 0);

          _defineProperty(this, "playerOneTileY", 9);

          _defineProperty(this, "playerTwoTileX", 0);

          _defineProperty(this, "playerTwoTileY", 9);

          _defineProperty(this, "playerOneinitialPos", null);

          _defineProperty(this, "playertwoInitialPos", null);

          _defineProperty(this, "arrayOfSnakesHead", []);

          _defineProperty(this, "arrayOfSnakesTail", []);

          _defineProperty(this, "arrayOfLaddersHead", []);

          _defineProperty(this, "arrayOfLaddersTail", []);

          _defineProperty(this, "arrayOfChances", []);

          _defineProperty(this, "sumOfChances", 0);

          _defineProperty(this, "tweenDice1", void 0);

          _defineProperty(this, "tweenDice2", void 0);

          _defineProperty(this, "button1", null);

          _defineProperty(this, "button2", null);
        }

        start() {
          this.tileLayer = this.tileMap.getLayer('Tile Layer 1');
          this.tileCurrPos = this.tileLayer.getTiledTileAt(0, 9, true).node.position; //fixing positions of both player at starting positions

          this.playerOne.setPosition(new Vec3(this.tileCurrPos.x + 8, this.tileCurrPos.y + 15, 0));
          this.playerTwo.setPosition(new Vec3(this.tileCurrPos.x + 25, this.tileCurrPos.y + 15, 0)); //filling every tile with numbers

          let k = 1;

          for (let i = 9; i >= 0; i--) {
            if (i % 2 == 0) {
              for (let l = 9; l >= 0; l--) {
                let ch = instantiate(this.prefabLabel);
                let tileNow = this.tileLayer.getTiledTileAt(l, i, true).node.position;
                ch.getComponent(Label).string = `${k++}`;
                this.tileMap.node.addChild(ch);
                ch.setPosition(tileNow.x + 10, tileNow.y - 8, 1);
              }
            } else {
              for (let j = 0; j <= 9; j++) {
                let ch = instantiate(this.prefabLabel);
                let tileNow = this.tileLayer.getTiledTileAt(j, i, true).node.position;
                ch.getComponent(Label).string = `${k++}`;
                this.tileMap.node.addChild(ch);
                ch.setPosition(tileNow.x + 10, tileNow.y - 8, 1);
              }
            }
          }

          this.addSnakes();
          this.addLadders();
          this.node.getChildByName('playerOneWon').active = false;
          this.node.getChildByName('playerTwoWon').active = false;
          this.button1 = this.node.getChildByName('play1');
          this.button2 = this.node.getChildByName('play2');
        }

        rollDice(event, customData) {
          let btn = null;

          if (customData == '1') {
            btn = this.node.getChildByName('play1');
          } else {
            btn = this.node.getChildByName('play2');
          }

          let randomDice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
          btn.getComponent(Sprite).spriteFrame = this.arrayOfDices[randomDice - 1];
          return randomDice;
        }

        onLoad() {}

        addSnakes() {
          let noOfSnakes = Math.floor(Math.random() * (5 - 2 + 1)) + 2;

          for (let i = 1; i <= noOfSnakes; i++) {
            let randomStartX = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            let randomStartY = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
            let snakeHead = [randomStartX, randomStartY];
            this.arrayOfSnakesHead.push(snakeHead);
            let randomEndX = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            let randomEndY = Math.floor(Math.random() * (9 - (randomStartY + 2) + 1)) + (randomStartY + 2);
            let snakeTail = [randomEndX, randomEndY];
            this.arrayOfSnakesTail.push(snakeTail);
            let tileNowRandom1 = this.tileLayer.getTiledTileAt(randomStartX, randomStartY, true).node.position;
            let tileNowRandom2 = this.tileLayer.getTiledTileAt(randomEndX, randomEndY, true).node.position;
            let diffX = tileNowRandom1.x - tileNowRandom2.x;
            let diffY = tileNowRandom1.y - tileNowRandom2.y;
            let lengthOfSnake = Math.sqrt(diffX * diffX + diffY * diffY);
            let chil = instantiate(this.snake);
            this.tileMap.node.addChild(chil);
            chil.setPosition(tileNowRandom1.x + 16, tileNowRandom1.y + 16, 1);
            chil.getComponent(UITransform).setContentSize(20, lengthOfSnake);
            let ang = Math.atan2(diffY, diffX);
            tween(chil).to(0.1, {
              angle: toDegree(ang) - 90
            }).start();
          }

          console.log(this.arrayOfSnakesHead);
          console.log(this.arrayOfSnakesTail);
        }

        addLadders() {
          let noOfLadders = Math.floor(Math.random() * (3 - 2 + 1)) + 2;

          for (let i = 1; i <= noOfLadders; i++) {
            let randomStartX = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            let randomStartY = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
            let ladderHead = [randomStartX, randomStartY];
            this.arrayOfLaddersHead.push(ladderHead);
            let randomEndX = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            let randomEndY = Math.floor(Math.random() * (9 - (randomStartY + 2) + 1)) + randomStartY + 2;
            let ladderTail = [randomEndX, randomEndY];
            this.arrayOfLaddersTail.push(ladderTail);
            let tileNowRandom1 = this.tileLayer.getTiledTileAt(randomStartX, randomStartY, true).node.position;
            let tileNowRandom2 = this.tileLayer.getTiledTileAt(randomEndX, randomEndY, true).node.position;
            let diffX = tileNowRandom1.x - tileNowRandom2.x;
            let diffY = tileNowRandom1.y - tileNowRandom2.y;
            let lengthOfSnake = Math.sqrt(diffX * diffX + diffY * diffY);
            let chil = instantiate(this.ladder);
            this.tileMap.node.addChild(chil);
            chil.setPosition(tileNowRandom1.x + 16, tileNowRandom1.y + 16, 1);
            chil.getComponent(UITransform).setContentSize(20, lengthOfSnake);
            let ang = Math.atan2(diffY, diffX);
            tween(chil).to(0.1, {
              angle: toDegree(ang) - 90
            }).start();
          }
        }

        movePlayer(event, btnNumber) {
          this.scheduleOnce(() => {
            this.button1.active = false;
            this.button2.active = false;
          }, 0.2);
          let diceNum = this.rollDice(event, btnNumber);
          console.log('diceNum ' + diceNum);
          let initialX = this.playerOneTileX;
          this.arrayOfChances.push([this.playerOneTileX, this.playerOneTileY]);

          if (this.playerOneTileX == 0 && this.playerOneTileY == 9) {
            if (diceNum != 6 && diceNum != 1) diceNum = 0;
          }

          if (this.playerOneTileY % 2 == 1) {
            this.playerOneTileX += diceNum;

            if (this.playerOneTileX > 9) {
              this.playerOneTileY -= 1;
              this.playerOneTileX = 10 - (this.playerOneTileX - 9);
            }

            if (this.playerOneTileY < 0) {
              this.playerOneTileY = 0;
              this.playerOneTileX = initialX;
              diceNum = 0;
            }

            this.sumOfChances += diceNum;
            let nextPos = this.tileLayer.getTiledTileAt(this.playerOneTileX, this.playerOneTileY).node.position;
            tween(this.playerOne).to(1.2, {
              position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
            }, {
              easing: 'sineIn'
            }).start();
            console.log(this.playerOneTileX, this.playerOneTileY);
          } else {
            this.playerOneTileX -= diceNum;

            if (this.playerOneTileX < 0) {
              this.playerOneTileY -= 1;
              this.playerOneTileX = 0 - this.playerOneTileX - 1;
            }

            if (this.playerOneTileY < 0) {
              this.playerOneTileY = 0;
              this.playerOneTileX = initialX;
              diceNum = 0;
            }

            this.sumOfChances += diceNum;
            let nextPos = this.tileLayer.getTiledTileAt(this.playerOneTileX, this.playerOneTileY).node.position;
            tween(this.playerOne).to(1.2, {
              position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
            }, {
              easing: 'sineIn'
            }).start();
            console.log(this.playerOneTileX, this.playerOneTileY);
          }

          this.scheduleOnce(() => {
            for (let i = 0; i < this.arrayOfSnakesHead.length; i++) {
              if (this.arrayOfSnakesHead[i][0] == this.playerOneTileX && this.arrayOfSnakesHead[i][1] == this.playerOneTileY) {
                let nextPos = this.tileLayer.getTiledTileAt(this.arrayOfSnakesTail[i][0], this.arrayOfSnakesTail[i][1]).node.position;
                tween(this.playerOne).to(1, {
                  position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
                }, {
                  easing: 'sineIn'
                }).start();
                this.playerOneTileX = this.arrayOfSnakesTail[i][0];
                this.playerOneTileY = this.arrayOfSnakesTail[i][1];
              }
            }
          }, 1.21);
          this.scheduleOnce(() => {
            for (let i = 0; i < this.arrayOfLaddersTail.length; i++) {
              if (this.arrayOfLaddersTail[i][0] == this.playerOneTileX && this.arrayOfLaddersTail[i][1] == this.playerOneTileY) {
                let nextPos = this.tileLayer.getTiledTileAt(this.arrayOfLaddersHead[i][0], this.arrayOfLaddersHead[i][1]).node.position;
                tween(this.playerOne).to(1, {
                  position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
                }, {
                  easing: 'sineIn'
                }).start();
                this.playerOneTileX = this.arrayOfLaddersHead[i][0];
                this.playerOneTileY = this.arrayOfLaddersHead[i][1];
              }
            }
          }, 1.22);
          this.scheduleOnce(() => {
            if (this.playerOneTileX == 0 && this.playerOneTileY == 0) {
              this.node.getChildByName('playerOneWon').active = true;
              this.scheduleOnce(() => {
                this.button1.active = false;
                this.button2.active = false;
                director.pause();
              }, 2);
            }

            if (this.sumOfChances % 6 == 0 && this.sumOfChances != 0 && this.sumOfChances != 18) {
              this.button1.active = true;
            } else if (this.sumOfChances == 18) {
              this.sumOfChances = 0;
              let nextPos = this.tileLayer.getTiledTileAt(this.arrayOfChances[0][0], this.arrayOfChances[0][1]).node.position;
              tween(this.playerOne).to(1, {
                position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
              }, {
                easing: 'sineIn'
              }).start();
              this.playerOneTileX = this.arrayOfChances[0][0];
              this.playerOneTileY = this.arrayOfChances[0][1];
              this.arrayOfChances = [];
              this.button2.active = true;
            } else {
              this.arrayOfChances = [];
              this.sumOfChances = 0;
              this.button2.active = true;
            }
          }, 0.21);
        }

        movePlayer2(event, btnNumber) {
          this.scheduleOnce(() => {
            this.button1.active = false;
            this.button2.active = false;
          }, 0.2);
          let diceNum = this.rollDice(event, btnNumber);
          let intialX = this.playerTwoTileX;
          console.log('diceNum = ' + diceNum);
          this.arrayOfChances.push([this.playerTwoTileX, this.playerTwoTileY]); //check to start only if dice is 6 or 1

          if (this.playerTwoTileX == 0 && this.playerTwoTileY == 9) {
            if (diceNum != 6 && diceNum != 1) diceNum = 0;
          }

          if (this.playerTwoTileY % 2 == 1) {
            this.playerTwoTileX += diceNum;

            if (this.playerTwoTileX > 9) {
              this.playerTwoTileY -= 1;
              this.playerTwoTileX = 10 - (this.playerTwoTileX - 9);
            }

            if (this.playerTwoTileY < 0) {
              this.playerTwoTileY = 0;
              this.playerTwoTileX = intialX;
              diceNum = 0;
            }

            this.sumOfChances += diceNum;
            let nextPos = this.tileLayer.getTiledTileAt(this.playerTwoTileX, this.playerTwoTileY).node.position;

            if (diceNum != 0) {
              tween(this.playerTwo).to(1.2, {
                position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
              }, {
                easing: 'sineIn'
              }).start();
            }

            console.log(this.playerTwoTileX, this.playerTwoTileY);
          } else {
            this.playerTwoTileX -= diceNum;

            if (this.playerTwoTileX < 0) {
              this.playerTwoTileY -= 1;
              this.playerTwoTileX = 0 - this.playerTwoTileX - 1;
            }

            if (this.playerTwoTileY < 0) {
              this.playerTwoTileY = 0;
              this.playerTwoTileX = intialX;
              diceNum = 0;
            }

            this.sumOfChances += diceNum;
            let nextPos = this.tileLayer.getTiledTileAt(this.playerTwoTileX, this.playerTwoTileY).node.position;
            tween(this.playerTwo).to(1.2, {
              position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
            }, {
              easing: 'sineIn'
            }).start();
            console.log(this.playerTwoTileX, this.playerTwoTileY);
          }

          this.scheduleOnce(() => {
            for (let i = 0; i < this.arrayOfSnakesHead.length; i++) {
              if (this.arrayOfSnakesHead[i][0] == this.playerTwoTileX && this.arrayOfSnakesHead[i][1] == this.playerTwoTileY) {
                let nextPos = this.tileLayer.getTiledTileAt(this.arrayOfSnakesTail[i][0], this.arrayOfSnakesTail[i][1]).node.position;
                tween(this.playerTwo).to(1, {
                  position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
                }, {
                  easing: 'sineIn'
                }).start();
                this.playerTwoTileX = this.arrayOfSnakesTail[i][0];
                this.playerTwoTileY = this.arrayOfSnakesTail[i][1];
              }
            }
          }, 1.21);
          this.scheduleOnce(() => {
            for (let i = 0; i < this.arrayOfLaddersTail.length; i++) {
              if (this.arrayOfLaddersTail[i][0] == this.playerTwoTileX && this.arrayOfLaddersTail[i][1] == this.playerTwoTileY) {
                let nextPos = this.tileLayer.getTiledTileAt(this.arrayOfLaddersHead[i][0], this.arrayOfLaddersHead[i][1]).node.position;
                tween(this.playerTwo).to(1, {
                  position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
                }, {
                  easing: 'sineIn'
                }).start();
                this.playerTwoTileX = this.arrayOfLaddersHead[i][0];
                this.playerTwoTileY = this.arrayOfLaddersHead[i][1];
              }
            }
          }, 1.22);

          if (this.playerTwoTileX == 0 && this.playerTwoTileY == 0) {
            this.node.getChildByName('playerTwoWon').active = true;
            this.scheduleOnce(() => {
              this.button1.active = false;
              this.button2.active = false;
              director.pause();
            }, 2);
          }

          this.scheduleOnce(() => {
            if (this.sumOfChances % 6 == 0 && this.sumOfChances != 0 && this.sumOfChances != 18) {
              this.button2.active = true;
            } else if (this.sumOfChances == 18) {
              this.sumOfChances = 0;
              let nextPos = this.tileLayer.getTiledTileAt(this.arrayOfChances[0][0], this.arrayOfChances[0][1]).node.position;
              tween(this.playerTwo).to(1, {
                position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
              }, {
                easing: 'sineIn'
              }).start();
              this.playerTwoTileX = this.arrayOfChances[0][0];
              this.playerTwoTileY = this.arrayOfChances[0][1];
              this.arrayOfChances = [];
              this.button1.active = true;
            } else {
              this.arrayOfChances = [];
              this.sumOfChances = 0;
              this.button1.active = true;
            }
          }, 0.21);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tileMap", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerOne", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerTwo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "prefabLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "snake", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ladder", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "arrayOfDices", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TileScript.js.map