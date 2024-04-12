window.onload = function() {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const game = new Game();
    startButton.addEventListener("click", function() {
        startGame();
    });
    function startGame() {
        game.start();
    }
    
    restartButton.addEventListener("click", function() {
        restartGame();
    })
    function restartGame() {
        game.restart();
    }
}
