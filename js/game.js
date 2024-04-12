class Game {
    constructor() {
        this.startScreen = document.getElementById("game-introduction");
        this.gameScreen = document.getElementById("game-screen");
        this.endScreen = document.getElementById("game-end");
        this.height = 1000
        this.width = 900
        this.score = 1;
        this.lives = 5;
        this.obstacles = [];
        this.gameIsOver = false; 
        this.gameIntervalId = 0;
        this.gameLoopFrequency = Math.round(1000/60);
        this.player = new Player(
            this.gameScreen,
            200,
            300,
            100, 200,
            "../images/player".JPG

        );
    }
    start() {
        this.gameScreen.style.width = `${this.width}px`;
      this.gameScreen.style.height = `${this.height}px`;
      this.startScreen.style.display = 'none';
      this.gameScreen.style.display = 'block';
      this.gameIntervalId = setInterval(() => {
        this.gameLoop();
      }, this.gameLoopFrequency);
    }
    restart(){
        this.gameIsOver = false;
        this.score = 0;
        this.lives = 3;
        this.gameEndScreen.style.display = "none";
        this.gameScreen.style.display = "block";
}
}