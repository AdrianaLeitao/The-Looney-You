class Obstacles {
    constructor(width, height, ctx, x, y) {
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        const img = new Image();
        img.addEventListener('load', () => {});
        img.src = "../docs/assets/images/pedra.png";
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