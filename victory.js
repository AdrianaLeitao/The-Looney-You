class Victory {
    constructor(width, height, ctx, x, y) {
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.x = 970;
        this.y = 200;
        const img = new Image();
        img.addEventListener('load', () => {});
        img.src = "../docs/assets/images/lola.jpg";
        this.img = img;
    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

} 