class Game {
    constructor(ctx, width, height, player, villain) {
        this.frames = 0;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.bgImg = new Image();
        this.player = player;
        this.villain = villain;
        this.obstacles = [];
        this.interval = null;
        this.isRunning = false;
        this.bonusLife = [];
        this.speed = 1
    }
    
    start() {
        this.interval = setInterval(this.updateGameArea, 1000 / 60);
        this.isRunning = true;
    }
    
    reset = () => {
        this.player.x = 0;
        this.player.y = 110;
        this.frames = 0;
        this.obstacles = [];
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
            //this.obstacles[i] -= 1;
            this.obstacles[i].draw();
        }

        this.frames += 1;

        if(this.frames % 200 === 0) {

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

        this.frames += 1;

        if(this.frames % 180 === 0) {

            let minHeight = 20;
            let maxHeight = 50;
            let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
            let randomX = Math.random() * this.width;
            let randomY= Math.random() * this.height;
            this.bonusLife.push(new BonusLife(height, height, this.ctx, randomX, randomY));
        }
    }

    checkObstacles = () => {
        const crashed = this.obstacles.some((obstacle, index) => {
            if(this.player.crashWith(obstacle)) {
                this.obstacles.splice(index, 1);
                this.player.life -= 5
            }
        return this.player.crashWith(obstacle);
    });
    }


    checkGameOver = () => {
      if(this.player.crashWith(this.villain)){
        this.stop()
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
        this.bgImg.src = "";
        this.ctx.drawImage(this.bgImg, 0, 0, this.cWidth, this.cHeight);
    }

    checkWin() {}


    updateGameArea = () => {
        this.clear();
        //this.drawBackground();
        this.updateBonus();
        this.updateObstacles();
        this.checkGameOver();
        this.checkObstacles();
        this.updateVillain();
        this.player.newPos();
        this.player.drawPlayer();
        this.villain.drawVillain();
    }
}