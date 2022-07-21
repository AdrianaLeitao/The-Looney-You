class  BonusLife{
    constructor(width, height, ctx,  x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        const img = new Image();
        img.addEventListener('load', () => {});
        img.src = "./docs/assets/images/carrot1.png";
        this.img = img;
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

    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

