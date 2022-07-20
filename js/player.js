class Player {
    constructor(width, height, color, x, y, ctx) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 1;
        this.ctx = ctx;
        this.pull = 0;
        this.life = 80;
        this.carrotBar = new Image();
        this.speedX = 0;
        this.speedY = 0;
    }

    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    /* drawLifeBar() {
        this.ctx.fillStyle = 'orange';
        this.ctx.fillRect(10, 10, this.life, 50);

        this.carrotBar.src = "../docs/assets/images/barra-vida.jpg";
        this.ctx.drawImage(this.carrotBar, 0, 0, 250, 70);
    } */

    drawPlayer() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
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
