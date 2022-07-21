class Game {
    constructor(ctx, width, height, player, villain) {
        this.frames = 0;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.villain = villain;
        this.obstacles = [];
        this.interval = null;
        this.isRunning = false;
        this.bonusLife = [];
        this.speed = 1
        this.victory = null;
        this.sound = new Audio('./docs/assets/sounds/intro.mp3');

        const bgImg = new Image();
        bgImg.addEventListener('load', () => {});
        bgImg.src = "./docs/assets/images/relva.jpg";
        this.bgImg = bgImg;

        const gameOverImg = new Image();
        gameOverImg.addEventListener('load', () => {});
        gameOverImg.src = "./docs/assets/images/gameover.jpg";
        this.gameOverImg = gameOverImg;

        const winImg = new Image();
        winImg.addEventListener('load', () => {});
        winImg.src = "./docs/assets/images/win2.jpg";
        this.winImg = winImg;

        //const introSound = new Audio('./docs/assets/sounds/intro.mp3');
        //introSound.loop = true;


    }
    
    start() {
        this.interval = setInterval(this.updateGameArea, 1000 / 60);
        this.isRunning = true;
        this.sound.play();
    }

    reset = () => {
        this.player.x = 0;
        this.player.y = 110;
        this.frames = 0;
        this.obstacles = [];
        this.bonusLife = [];
        this.speed = 1
        this.victory = null;
        this.villain = new Villain(40, 80, this.ctx)
        this.bgImg.src = "./docs/assets/images/relva.jpg";
        this.gameOverImg.src = "./docs/assets/images/gameover.jpg";
        this.winImg.src = "./docs/assets/images/win2.jpg"
        this.start();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    stop() {
        clearInterval(this.interval);
        this.isRunning = false;
    }

    updateObstacles(){
        for(let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].draw();
        }

        this.frames += 1;

        if(this.frames % 180 === 0) {

            let minHeight = 20;
            let maxHeight = 50;
            let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
            let randomX = Math.random() * this.width;
            let randomY= Math.random() * this.height;
            this.obstacles.push(new Obstacles(height, height, this.ctx, randomX, randomY));
        }
    }



    updateBonus() {
        for(let i = 0; i < this.bonusLife.length; i++) {
            this.bonusLife[i].draw();
        }


        if(this.frames % 600 === 0) {
            let randomX =Math.floor( Math.random() * this.width);
            let randomY= Math.floor(Math.random() * this.height);
            this.bonusLife.push(new BonusLife(30, 60, this.ctx, randomX, randomY));
        }
    }

    checkObstacles = () => {
        const crashed = this.obstacles.some((obstacle, index) => {
            if(this.player.crashWith(obstacle)) {
                this.obstacles.splice(index, 1);
                this.player.life -= 1
            }
        return this.player.crashWith(obstacle);
    });
    }

    checkBonus = () => {
        this.bonusLife.some((bonus, index) => {
            if(this.player.crashWith(bonus)) {
                this.bonusLife.splice(index, 1);
                this.player.life += 1
            }
    });
    }


    checkGameOver = () => {
      if(this.player.crashWith(this.villain)){
        this.stop()
        this.ctx.drawImage(this.gameOverImg, 0, 0, this.width, this.height)
      }
    }

    updateVillain() {
        // Chase horizontally
      if(this.villain.x < this.player.x){
        this.villain.x += this.speed
      } else{
        this.villain.x -= this.speed
      }

      //Chase vertically
      if(this.villain.y < this.player.y){
        this.villain.y += this.speed
      } else{
        this.villain.y -= this.speed
      }

    } 

    drawBg() {
        this.ctx.drawImage(this.bgImg, 0, 0, this.width, this.height);
    }

    updateVictory(){
        if(this.frames === 400){
            this.victory = new Victory(40, 80, this.ctx)
        }
        if(this.victory){
            this.victory.draw()
        }
    }

    checkWin() {
        if(this.victory && this.player.crashWith(this.victory)){
            this.stop()
            this.ctx.drawImage(this.winImg, 0, 0, this.width, this.height)
        }
    }


    updateGameArea = () => {
        this.clear();
        this.drawBg();
        this.updateBonus();
        this.updateObstacles();
        this.updateVictory()
        this.checkObstacles();
        this.updateVillain();
        this.player.newPos();
        this.player.drawPlayer();
        this.player.drawLifeBar()
        this.villain.drawVillain();
        this.checkBonus()
        this.checkWin();
        this.checkGameOver();
        this.sound();
    }
}