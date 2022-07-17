const canvas = document.getElementById('myCanvas');
const ctx = getContext('2d');

const player = new Player(30, 30, 'blue', 0, 110, ctx);

let game = null;

const startBtn = document.getElementById('btn');
startBtn.addEventListener('click', () => {
    if(!game) {
        game = new Game(ctx, cWidth, cHeight, player, villain);
        game.start();
    } else if(game && !game.gameRunning) {
        game.reset();
    }
});