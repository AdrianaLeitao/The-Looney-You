class Villain {
    constructor(width, height, ctx){
        this.width = width;
        this.height = height;
        this.x = 890;
        this.y = 120;
        this.ctx = ctx;
        this.speedX = 1;
        this.speedY = 1;
        const img = new Image();
        img.addEventListener('load', () => {});
        img.src = "./docs/assets/images/img41.png";
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
    
    drawVillain() {
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}
