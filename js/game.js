class Game {
    constructor(ctx, width, height, player, villain){
        this.frame = 0;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.villain = villain;
        this.bgImage = new Image();
        this.obstacles = [];
        this.obstacles1 = [];
        this.interval = null;
        this.gameRunning = false;
    }

    start(){
        this.interval = setInterval(this.updateGameArea, 20);
        this.gameRunning = true;
    }

    drawBg(){
        this.bgImage.src = '../docs/assets/images/2.jpg';
        this.ctx.drawBg(this.bgImage, 0, 0, this.cWidth, this.cHeight);
    }

    clear(){
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    updateGameArea(){
        this.clear();
        this.drawBg();
        this.player.draw();
    }
}