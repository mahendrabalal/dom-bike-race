window.onload = function() {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const game = new Game();
    startButton.addEventListener("click", startGame)
    restartButton.addEventListener("click", restartGame)
    
    document.addEventListener("keydown", (event)=> {
        if(event.code === "ArrowRight") {
            game.player.directionX = 1;
        }else if(event.code === "ArrowLeft") {
            game.player.directionX = -1;
        }else if(event.code === "ArrowUp") {
            game.player.directionY = -1;
        }else if(event.code ==="ArrowDown") {
            game.player.directionY = 1;
            console.log(addEvent)
        }
    });
    document.addEventListener("keyup", () => {
        game.player.directionX = 0;
        game.player.directionY = 0;
    })

    function startGame() {
        game.start();
    }

    function restartGame() {
        game.restart();
    }
}
