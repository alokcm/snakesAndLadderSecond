
import { _decorator, Component, Node, TiledMap, Vec2, Label, UITransformComponent, TiledTile, TiledLayer, tween, Vec3, computeRatioByType, easing, Prefab, instantiate, size, SpriteFrame, UITransform, toDegree, math, Sprite, director } from 'cc';
const { ccclass, property } = _decorator;

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
 
@ccclass('TileScript')
export class TileScript extends Component {
    
    @property(TiledMap)
    tileMap : TiledMap = null;

    @property(Node)
    playerOne : Node = null;

    @property(Node)
    playerTwo : Node = null;

    @property(Prefab)
    prefabLabel : Prefab = null;

    @property(Prefab)
    snake : Prefab = null;

    @property(Prefab)
    ladder : Prefab = null;

    @property(SpriteFrame)
    arrayOfDices : SpriteFrame[] = [];

    tileLayer : TiledLayer = null;
    tile : TiledTile = null;
    tileCurrPos : Vec3 = null;
    noOfSix : number = 0;
    playerOneTileX : number = 0;
    playerOneTileY : number = 9;
    playerTwoTileX : number = 0;
    playerTwoTileY : number = 9;
    playerOneinitialPos : Vec3 = null;
    playertwoInitialPos : Vec3 = null;

    arrayOfSnakesHead : number[][] = [];
    arrayOfSnakesTail : number[][] = [];
    arrayOfLaddersHead : number[][] = [];
    arrayOfLaddersTail : number[][] = [];
    arrayOfChances : number[][] = [];
    sumOfChances : number = 0;
    tweenDice1 : any;
    tweenDice2 : any;
    button1 : Node = null;
    button2 : Node = null;

    start () {
        this.tileLayer = this.tileMap.getLayer('Tile Layer 1');
        this.tileCurrPos = this.tileLayer.getTiledTileAt(0,9,true).node.position;
        //fixing positions of both player at starting positions
        this.playerOne.setPosition(new Vec3(this.tileCurrPos.x+8,this.tileCurrPos.y+15,0));
        this.playerTwo.setPosition(new Vec3(this.tileCurrPos.x+25,this.tileCurrPos.y+15,0));
        //filling every tile with numbers
        let k = 1;
        for(let i = 9;i>=0;i--)
        {
            if(i%2 == 0)
            {
                for(let l=9;l>=0;l--)
                {
                    let ch = instantiate(this.prefabLabel);
                    let tileNow = this.tileLayer.getTiledTileAt(l,i,true).node.position;
                    ch.getComponent(Label).string = `${k++}`;
                    this.tileMap.node.addChild(ch);
                    ch.setPosition(tileNow.x+10,tileNow.y-8,1);
                }
            }
            else
            {
                for(let j=0;j<=9;j++)
                {
                    let ch = instantiate(this.prefabLabel);
                    let tileNow = this.tileLayer.getTiledTileAt(j,i,true).node.position;
                    ch.getComponent(Label).string = `${k++}`;
                    this.tileMap.node.addChild(ch);
                    ch.setPosition(tileNow.x+10,tileNow.y-8,1);
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
    rollDice(event,customData)
    {
        let btn : Node = null;
        if(customData == '1')
        {
            btn = this.node.getChildByName('play1');
        }
        else
        {
            btn = this.node.getChildByName('play2');
        }
        let randomDice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        btn.getComponent(Sprite).spriteFrame = this.arrayOfDices[randomDice-1];
        return randomDice;
    }
    onLoad()
    {
    }
    addSnakes()
    {
        let noOfSnakes = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
        for(let i=1;i<=noOfSnakes;i++)
        {
            let randomStartX = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            let randomStartY = Math.floor(Math.random() * (7 - 0 + 1)) + 0;

            let snakeHead = [randomStartX,randomStartY];
            this.arrayOfSnakesHead.push(snakeHead);

            let randomEndX = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            let randomEndY = Math.floor(Math.random() * (9 - (randomStartY+2) + 1)) + (randomStartY+2);
            let  snakeTail = [randomEndX,randomEndY];
            this.arrayOfSnakesTail.push(snakeTail);

            let tileNowRandom1 = this.tileLayer.getTiledTileAt(randomStartX,randomStartY,true).node.position;
            let tileNowRandom2 = this.tileLayer.getTiledTileAt(randomEndX,randomEndY,true).node.position;

            let diffX = tileNowRandom1.x - tileNowRandom2.x;
            let diffY = tileNowRandom1.y - tileNowRandom2.y;
            let lengthOfSnake = Math.sqrt((diffX*diffX)+(diffY*diffY));

            let chil = instantiate(this.snake);
            this.tileMap.node.addChild(chil);
            chil.setPosition(tileNowRandom1.x+16,tileNowRandom1.y+16,1);
            chil.getComponent(UITransform).setContentSize(20,lengthOfSnake);
            let ang = Math.atan2(diffY,diffX);
            tween(chil)
                .to(0.1,{angle : toDegree(ang)-90})
                .start();
        }
        console.log(this.arrayOfSnakesHead);
        console.log(this.arrayOfSnakesTail);
    }
    addLadders()
    {
        let noOfLadders = Math.floor(Math.random() * (3 - 2 + 1)) + 2;
        for(let i=1;i<=noOfLadders;i++)
        {
            let randomStartX = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            let randomStartY = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
            let ladderHead = [randomStartX,randomStartY];
            this.arrayOfLaddersHead.push(ladderHead);

            let randomEndX = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            let randomEndY = Math.floor(Math.random() * (9 - (randomStartY+2) + 1)) + randomStartY+2;
            let ladderTail = [randomEndX,randomEndY];
            this.arrayOfLaddersTail.push(ladderTail);

            let tileNowRandom1 = this.tileLayer.getTiledTileAt(randomStartX,randomStartY,true).node.position;
            let tileNowRandom2 = this.tileLayer.getTiledTileAt(randomEndX,randomEndY,true).node.position;
            
            let diffX = tileNowRandom1.x - tileNowRandom2.x;
            let diffY = tileNowRandom1.y - tileNowRandom2.y;
            let lengthOfSnake = Math.sqrt((diffX*diffX)+(diffY*diffY));

            let chil = instantiate(this.ladder);
            this.tileMap.node.addChild(chil);
            chil.setPosition(tileNowRandom1.x+16,tileNowRandom1.y+16,1);
            chil.getComponent(UITransform).setContentSize(20,lengthOfSnake);
            let ang = Math.atan2(diffY,diffX);
            tween(chil)
                .to(0.1,{angle : toDegree(ang)-90})
                .start();
        }
    }
    movePlayer(event,btnNumber)
    {
        this.scheduleOnce(() => {
            this.button1.active = false;
            this.button2.active = false;
        },0.2);

        let diceNum : number = this.rollDice(event,btnNumber);
        console.log('diceNum ' + diceNum);

        let initialX = this.playerOneTileX;
        this.arrayOfChances.push([this.playerOneTileX,this.playerOneTileY]);
        if(this.playerOneTileX == 0 && this.playerOneTileY == 9)
        {
            if(diceNum!=6 && diceNum!=1)
                diceNum = 0;
        }
        if(this.playerOneTileY % 2 == 1)
        {
            this.playerOneTileX += diceNum;
            if(this.playerOneTileX > 9)
            {
                this.playerOneTileY -= 1;
                this.playerOneTileX = 10 - (this.playerOneTileX-9);
            }
            if(this.playerOneTileY<0)
            {
                this.playerOneTileY = 0;
                this.playerOneTileX = initialX;
                diceNum = 0
            }
            this.sumOfChances += diceNum;
            let nextPos = this.tileLayer.getTiledTileAt(this.playerOneTileX,this.playerOneTileY).node.position;
            tween(this.playerOne)
                .to(1.2,{position : new Vec3(nextPos.x+8,nextPos.y+15,1)},{easing : 'sineIn'})
                .start();
            console.log(this.playerOneTileX,this.playerOneTileY);
        }
        else
        {
            this.playerOneTileX -= diceNum;
            if(this.playerOneTileX < 0)
            {
                this.playerOneTileY -= 1;
                this.playerOneTileX = 0 - (this.playerOneTileX)-1;
            }
            if(this.playerOneTileY<0)
            {
                this.playerOneTileY = 0;
                this.playerOneTileX = initialX
                diceNum = 0;
            }
            this.sumOfChances += diceNum;
            let nextPos = this.tileLayer.getTiledTileAt(this.playerOneTileX,this.playerOneTileY).node.position;
            tween(this.playerOne)
                .to(1.2,{position : new Vec3(nextPos.x+8,nextPos.y+15,1)},{easing : 'sineIn'})
                .start();
            console.log(this.playerOneTileX,this.playerOneTileY);
        }

        this.scheduleOnce(() => {
            for(let i = 0;i<this.arrayOfSnakesHead.length;i++)
            {
                if(this.arrayOfSnakesHead[i][0] == this.playerOneTileX && this.arrayOfSnakesHead[i][1] == this.playerOneTileY)
                {
                    let nextPos = this.tileLayer.getTiledTileAt(this.arrayOfSnakesTail[i][0],this.arrayOfSnakesTail[i][1]).node.position;
                    tween(this.playerOne)
                        .to(1,{position : new Vec3(nextPos.x+8,nextPos.y+15,1)},{easing : 'sineIn'})
                        .start();
                    this.playerOneTileX = this.arrayOfSnakesTail[i][0];
                    this.playerOneTileY = this.arrayOfSnakesTail[i][1];
                }
            }
        },1.21);
        this.scheduleOnce(() => {
            for(let i = 0;i<this.arrayOfLaddersTail.length;i++)
            {
                if(this.arrayOfLaddersTail[i][0] == this.playerOneTileX && this.arrayOfLaddersTail[i][1] == this.playerOneTileY)
                {
                    let nextPos = this.tileLayer.getTiledTileAt(this.arrayOfLaddersHead[i][0],this.arrayOfLaddersHead[i][1]).node.position;
                    tween(this.playerOne)
                    .to(1,{position : new Vec3(nextPos.x+8,nextPos.y+15,1)},{easing : 'sineIn'})
                    .start();
                    this.playerOneTileX = this.arrayOfLaddersHead[i][0];
                    this.playerOneTileY = this.arrayOfLaddersHead[i][1];
                }
            }
        },1.22);

        this.scheduleOnce(() => {
        if(this.playerOneTileX == 0 && this.playerOneTileY == 0)
        {
            this.node.getChildByName('playerOneWon').active = true;
            this.scheduleOnce(() => {
                this.button1.active = false;
                this.button2.active = false;
                director.pause();
            },2);
        }
        if(this.sumOfChances%6 == 0 && this.sumOfChances!=0 && this.sumOfChances != 18)
        {
            this.button1.active = true;
        }
        else if(this.sumOfChances == 18)
        {
            this.sumOfChances = 0;
            let nextPos = this.tileLayer.getTiledTileAt(this.arrayOfChances[0][0],this.arrayOfChances[0][1]).node.position;
            tween(this.playerOne)
                .to(1,{position : new Vec3(nextPos.x+8,nextPos.y+15,1)},{easing : 'sineIn'})
                .start();
            this.playerOneTileX = this.arrayOfChances[0][0];
            this.playerOneTileY = this.arrayOfChances[0][1];
            this.arrayOfChances = [];
            this.button2.active = true;
        }
        else
        {
            this.arrayOfChances = [];
            this.sumOfChances = 0;
            this.button2.active = true;
        }
        },0.21);
    }
    movePlayer2(event,btnNumber)
    {
        this.scheduleOnce(() => {
            this.button1.active = false;
            this.button2.active = false;
        },0.2);

        let diceNum = this.rollDice(event,btnNumber)
        let intialX = this.playerTwoTileX;
        console.log('diceNum = ' + diceNum);
        this.arrayOfChances.push([this.playerTwoTileX,this.playerTwoTileY]);

        //check to start only if dice is 6 or 1
        if(this.playerTwoTileX == 0 && this.playerTwoTileY == 9)
        {
            if(diceNum!=6 && diceNum!=1)
                diceNum = 0;
        }

        if(this.playerTwoTileY % 2 == 1)
        {
            this.playerTwoTileX += diceNum;
            if(this.playerTwoTileX > 9)
            {
                this.playerTwoTileY -= 1;
                this.playerTwoTileX = 10 - (this.playerTwoTileX-9);
            }
            if(this.playerTwoTileY<0)
            {
                this.playerTwoTileY = 0;
                this.playerTwoTileX = intialX;
                diceNum = 0;
            }
            this.sumOfChances += diceNum;
            let nextPos = this.tileLayer.getTiledTileAt(this.playerTwoTileX,this.playerTwoTileY).node.position;
            if(diceNum != 0) {
            tween(this.playerTwo)
                .to(1.2,{position : new Vec3(nextPos.x+8,nextPos.y+15,1)},{easing : 'sineIn'})
                .start();
            }
            console.log(this.playerTwoTileX,this.playerTwoTileY);
        }
        else
        {
            this.playerTwoTileX -= diceNum;
            if(this.playerTwoTileX < 0)
            {
                this.playerTwoTileY -= 1;
                this.playerTwoTileX = 0 - (this.playerTwoTileX)-1;
            }
            if(this.playerTwoTileY<0)
            {
                this.playerTwoTileY = 0;
                this.playerTwoTileX = intialX;
                diceNum = 0;
            }
            this.sumOfChances += diceNum;
            let nextPos = this.tileLayer.getTiledTileAt(this.playerTwoTileX,this.playerTwoTileY).node.position;
            tween(this.playerTwo)
                .to(1.2,{position : new Vec3(nextPos.x+8,nextPos.y+15,1)},{easing : 'sineIn'})
                .start();
            console.log(this.playerTwoTileX,this.playerTwoTileY);
        }

        this.scheduleOnce(() => {
            for(let i = 0;i<this.arrayOfSnakesHead.length;i++)
            {
                if(this.arrayOfSnakesHead[i][0] == this.playerTwoTileX && this.arrayOfSnakesHead[i][1] == this.playerTwoTileY)
                {
                    let nextPos = this.tileLayer.getTiledTileAt(this.arrayOfSnakesTail[i][0],this.arrayOfSnakesTail[i][1]).node.position;
                    tween(this.playerTwo)
                        .to(1,{position : new Vec3(nextPos.x+8,nextPos.y+15,1)},{easing : 'sineIn'})
                        .start();
                    this.playerTwoTileX = this.arrayOfSnakesTail[i][0];
                    this.playerTwoTileY = this.arrayOfSnakesTail[i][1];
                }
            }
        },1.21);
        this.scheduleOnce(() => {
            for(let i = 0;i<this.arrayOfLaddersTail.length;i++)
            {
                if(this.arrayOfLaddersTail[i][0] == this.playerTwoTileX && this.arrayOfLaddersTail[i][1] == this.playerTwoTileY)
                {
                    let nextPos = this.tileLayer.getTiledTileAt(this.arrayOfLaddersHead[i][0],this.arrayOfLaddersHead[i][1]).node.position;
                    tween(this.playerTwo)
                    .to(1,{position : new Vec3(nextPos.x+8,nextPos.y+15,1)},{easing : 'sineIn'})
                    .start();
                    this.playerTwoTileX = this.arrayOfLaddersHead[i][0];
                    this.playerTwoTileY = this.arrayOfLaddersHead[i][1];
                }
            }
        },1.22);
        if(this.playerTwoTileX == 0 && this.playerTwoTileY == 0)
        {
            this.node.getChildByName('playerTwoWon').active = true;
            this.scheduleOnce(() => {
                this.button1.active = false;
                this.button2.active = false;
                director.pause();
            },2);
        }

        
        this.scheduleOnce(() => {
        if(this.sumOfChances%6 == 0 && this.sumOfChances!=0 && this.sumOfChances!=18)
        {
            this.button2.active = true;
        }
        else if(this.sumOfChances == 18)
        {
            this.sumOfChances = 0;
            let nextPos = this.tileLayer.getTiledTileAt(this.arrayOfChances[0][0],this.arrayOfChances[0][1]).node.position;
            tween(this.playerTwo)
                .to(1,{position : new Vec3(nextPos.x+8,nextPos.y+15,1)},{easing : 'sineIn'})
                .start();
            this.playerTwoTileX = this.arrayOfChances[0][0];
            this.playerTwoTileY = this.arrayOfChances[0][1];
            this.arrayOfChances = [];
            this.button1.active = true;
        }
        else
        {
            this.arrayOfChances = [];
            this.sumOfChances = 0;
            this.button1.active = true;
        }
        },0.21);
    }
}