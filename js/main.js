const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;

const player = new Player(20, 60, 'green', 0, 400, ctx);

let villain = new Villain(25, 50, 'red', 890, 120, ctx);

const bgImg = new Image();
bgImg.addEventListener('load', () => {
  ctx.drawImage(bgImg, 0, 0, cWidth, cHeight)
})
bgImg.src = '../docs/assets/images/capa.jpg'


let game;
//let pos;

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
      if (player.y > 0 + player.height) {
        player.speedY -= 1;
      } else player.speedY = 0;
      break;
    case "ArrowDown":
        if (player.y + player.height < cHeight){
            player.speedY += 1;
        } else {
             player.vy = 0;
             player.speedY = 0;
        }
      break;
    case "ArrowLeft":
      player.speedX -= 1;
      break;
    case "ArrowRight":
      player.speedX += 1;
      break;
    case "Space":
        if (player.y + player.height < cHeight) {
           // pos = player.y;
          player.speedY -= 1;
        } else {
          player.speedY = 0
         //player.y = pos;
        }
      break;
  }
});

document.addEventListener("keyup", (e) => {
  player.speedX = 0;
  //player.speedY = player.vy += player.vy + player.gravity;
  player.speedY = 0
});