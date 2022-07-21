const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;

const player = new Player(40, 80, 1, 400, ctx);

let villain = new Villain(50, 80, ctx);

const bgImg = new Image();
bgImg.addEventListener('load', () => {
  ctx.drawImage(bgImg, 0, 0, cWidth, cHeight)
})
bgImg.src = './docs/assets/images/capa.jpg';

//const introSound = new Audio('./docs/assets/sounds/intro.mp3');


let game;

const startBtn = document.getElementById('start');
startBtn.addEventListener('click', () => {
    if(!game) {
        game = new Game(ctx, cWidth, cHeight, player, villain);
        game.start();
    } else if (game && !game.isRunning) {
        game.reset();
    }
});

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      if (player.y >= 0) {
        player.speedY -= 1;
      } else player.speedY = 0;
      break;
    case "ArrowDown":
        if (player.y + player.height <= cHeight){
            player.speedY += 1;
        } else {
             player.y = cHeight - player.height;
        }
      break;
    case "ArrowLeft":
      if(player.x >= 0){
        player.speedX -= 1;
      } else player.x = 0;
      break;
    case "ArrowRight":
      if(player.x + player.width <= cWidth){
        player.speedX += 1;

      } else player.x = cWidth - player.width
      break;
  }
});

document.addEventListener("keyup", (e) => {
  player.speedX = 0;
  player.speedY = 0
});