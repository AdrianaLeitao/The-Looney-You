class Player {
    constructor(width, height, x, y, ctx) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 1;
        this.ctx = ctx;
        this.pull = 0;
        this.life = 10;
        this.speedX = 0;
        this.speedY = 0;
        const img = new Image();
        img.addEventListener('load', () => {});
        img.src = "./docs/assets/images/bunny.png";
        this.img = img;
        const heartImg = new Image();
        heartImg.addEventListener('load', () => {});
        heartImg.src = "./docs/assets/images/heart1.png";
        this.heartImg = heartImg;

      
    }

    newPos() {
      this.x += this.speedX;
      this.y += this.speedY;

      if(this.x <= 0) {
        this.x = 0
      } else if(this.x + this.width >= 990){
        this.x = 990 - this.width;
      } else if(this.y <= 0){
        this.y = 0;
      } else if(this.y + this.height >= 570){
        this.y = 570 - this.height
      }
    }

    drawLifeBar() {
      for (let i= 0; i < Math.floor(this.life / 2); i++){
        this.ctx.drawImage(this.heartImg, 50 + i * 30, 20, 30, 30);
      }
    }

    drawPlayer() {
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    left() {
        return this.x;
      }
    
      right() {
        return this.x + this.width;
      }
    
      top() {
        return this.y;
      }
    
      bottom() {
        return this.y + this.height;
      }
    
      crashWith(obstacle) {
        return !(
          this.bottom() < obstacle.top() ||
          this.top() > obstacle.bottom() ||
          this.right() < obstacle.left() ||
          this.left() > obstacle.right()
        );
      }
    }
