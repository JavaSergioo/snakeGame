const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);
document.addEventListener("keydown", key);
setInterval(loop, 1000 / 15);

var gameSize = 20;
var posY = 10;
var posX = 10;
var vx = 0;
var vy = 0;
var snakes = [];
var appleX = 10;
var appleY = 10;
var score = 0;
var gameOver = "Game  Over"

function loop() {
    draw();
    update();
    pause();
}

function draw() {
    context.fillStyle = "black"
    context.fillRect(0, 0, 400, 400);
    context.fillStyle = "red"
    context.fillRect(appleX * 20, appleY * 20, 20, 20)
    context.fillStyle = "green"

    snakes.forEach(t => {
        context.fillRect(t.posX * 20, t.posY * 20, 20, 20)
    });
    context.fillStyle = "white";
    context.font = "30px Arial";
    context.fillText(score, 20, 40);

    context.fillStyle = "green"

}

function update() {
    posX += vx;
    posY += vy;

    if (posX < 0) {
        posX = gameSize - 1;

    }

    if (posX > gameSize - 1) {
        posX = 0;

    }

    if (posY < 0) {
        posY = gameSize - 1;

    }

    if (posY > gameSize) {
        posY = 0;
    }

    snakes.push({ posX: this.posX, posY: this.posY });
    snakes.forEach(t => {
        if (snakes.length > score)
            snakes.shift();
    })
    if (posX === appleX && posY === appleY) {
        score++;
        appleX = Math.floor(Math.random() * 20);
        appleY = Math.floor(Math.random() * 20);
    }

}

function key(key) {
    if (key.keyCode === 87 && vy != 1) {
        vx = 0
        vy = -1
    }

    if (key.keyCode === 83 && vy != -1) {
        vx = 0
        vy = 1
    }

    if (key.keyCode === 68 && vx != -1) {
        vx = 1
        vy = 0
    }

    if (key.keyCode === 65 && vx != 1) {
        vx = -1
        vy = 0
    }

}

function pause() {
    for (i = 1; i < snakes.length; i++) {
        if (snakes[0].posX === snakes[i].posX && snakes[0].posY === snakes[i].posY) {
            snakes.length = 1
            vx = 0
            vy = 0
            score= 0
            context.fillStyle = "red"
            context.fillText(gameOver, 140, 200)

            if (key.keyCode === 87) {

                score = 0;


            }
            else if (key.keyCode === 83) {
                score = 0;

            }
            else if (key.keyCode === 68) {

                score = 0;

            }
            else if (key.keyCode === 65) {

                score = 0;

            }





















        }

    }
}





