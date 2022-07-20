class Villain {
    constructor(width, height, color, x, y, ctx){
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = 890;
        this.y = 120;
        this.ctx = ctx;
        this.speedX = 1;
        this.speedY = 1;
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
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
