class Victory {
    constructor(width, height, ctx) {
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.x = 970;
        this.y = 250;
        const img = new Image();
        img.addEventListener('load', () => {});
        img.src = "./docs/assets/images/lola.jpg";
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