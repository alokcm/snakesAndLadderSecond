System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, TiledMap, Label, tween, Vec3, Prefab, instantiate, UITransform, toDegree, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, TileScript;

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
      UITransform = _cc.UITransform;
      toDegree = _cc.toDegree;
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

      _export("TileScript", TileScript = (_dec = ccclass('TileScript'), _dec2 = property(TiledMap), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec(_class = (_class2 = (_temp = class TileScript extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tileMap", _descriptor, this);

          _initializerDefineProperty(this, "playerOne", _descriptor2, this);

          _initializerDefineProperty(this, "playerTwo", _descriptor3, this);

          _initializerDefineProperty(this, "prefabLabel", _descriptor4, this);

          _initializerDefineProperty(this, "snake", _descriptor5, this);

          _initializerDefineProperty(this, "ladder", _descriptor6, this);

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
        }

        start() {
          this.tileLayer = this.tileMap.getLayer('Tile Layer 1');
          this.tileCurrPos = this.tileLayer.getTiledTileAt(0, 9, true).node.position;
          this.playerOne.setPosition(new Vec3(this.tileCurrPos.x + 8, this.tileCurrPos.y + 15, 0));
          this.playerTwo.setPosition(new Vec3(this.tileCurrPos.x + 25, this.tileCurrPos.y + 15, 0));
          tween(this.playerOne).to(1, {
            angle: 90
          });
          let k = 1;

          for (let i = 9; i >= 0; i--) {
            let startLoop = null;
            let endLoop = null;

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
        }

        onLoad() {//this.node.on(Node.EventType.MOUSE_DOWN, this.movePlayer,this)
        }

        addSnakes() {
          let noOfSnakes = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
          console.log(' No of snakes : ' + noOfSnakes);

          for (let i = 0; i < noOfSnakes; i++) {
            let randomStartX = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            let randomStartY = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
            console.log('start ' + randomStartX, randomStartY);
            let randomEndX = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            let randomEndY = Math.floor(Math.random() * (9 - (randomStartY + 2) + 1)) + (randomStartY + 2);
            console.log('end ' + randomEndX, randomEndY);
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
            tween(chil).to(1, {
              angle: toDegree(ang) - 90
            }).start();
          }
        }

        addLadders() {
          let noOfLadders = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
          console.log('No of ladders : ' + noOfLadders);

          for (let i = 0; i <= noOfLadders; i++) {
            let randomStartX = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            let randomStartY = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
            let randomEndX = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            let randomEndY = Math.floor(Math.random() * (9 - (randomStartY + 2) + 1)) + randomStartY + 2;
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
            tween(chil).to(1, {
              angle: toDegree(ang) - 90
            }).start();
          }
        }

        movePlayer() {
          // // Math.floor(Math.random() * (max - min + 1)) + min;
          let diceNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
          console.log(diceNumber);

          if (this.playerOneTileY % 2 == 1) {
            this.playerOneTileX += diceNumber;

            if (this.playerOneTileX > 9) {
              this.playerOneTileY -= 1;
              this.playerOneTileX = 10 - (this.playerOneTileX - 9);
            }

            let nextPos = this.tileLayer.getTiledTileAt(this.playerOneTileX, this.playerOneTileY).node.position;
            tween(this.playerOne).to(1.2, {
              position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
            }, {
              easing: 'sineIn'
            }).start(); //this.playerOne.setPosition(nextPos.x+8,nextPos.y+15,1);

            console.log(this.playerOneTileX, this.playerOneTileY);
          } else {
            this.playerOneTileX -= diceNumber;

            if (this.playerOneTileX < 0) {
              this.playerOneTileY -= 1;
              this.playerOneTileX = 0 - this.playerOneTileX - 1;
            }

            let nextPos = this.tileLayer.getTiledTileAt(this.playerOneTileX, this.playerOneTileY).node.position;
            tween(this.playerOne).to(1.2, {
              position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
            }, {
              easing: 'sineIn'
            }).start();
            console.log(this.playerOneTileX, this.playerOneTileY);
          }
        }

        movePlayer2() {
          // // Math.floor(Math.random() * (max - min + 1)) + min;
          let diceNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
          console.log(diceNumber);

          if (this.playerTwoTileY % 2 == 1) {
            this.playerTwoTileX += diceNumber;

            if (this.playerTwoTileX > 9) {
              this.playerTwoTileY -= 1;
              this.playerTwoTileX = 10 - (this.playerTwoTileX - 9);
            }

            let nextPos = this.tileLayer.getTiledTileAt(this.playerTwoTileX, this.playerTwoTileY).node.position;
            tween(this.playerTwo).to(1.2, {
              position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
            }, {
              easing: 'sineIn'
            }).start(); //this.playerOne.setPosition(nextPos.x+8,nextPos.y+15,1);

            console.log(this.playerTwoTileX, this.playerTwoTileY);
          } else {
            this.playerTwoTileX -= diceNumber;

            if (this.playerTwoTileX < 0) {
              this.playerTwoTileY -= 1;
              this.playerTwoTileX = 0 - this.playerTwoTileX - 1;
            }

            let nextPos = this.tileLayer.getTiledTileAt(this.playerTwoTileX, this.playerTwoTileY).node.position;
            tween(this.playerTwo).to(1.2, {
              position: new Vec3(nextPos.x + 8, nextPos.y + 15, 1)
            }, {
              easing: 'sineIn'
            }).start();
            console.log(this.playerTwoTileX, this.playerTwoTileY);
          }
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TileScript.js.map