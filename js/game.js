class Game {
  constructor() {
    this.startScreen = document.getElementById("game-introduction");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-end");
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");
    this.height = 800;
    this.width = 800;
    this.score = 1;
    this.lives = 5;
    this.obstacles = [];
    this.gameIsOver = false;
    this.gameIntervalId = 0;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.player = new Player(
      this.gameScreen,
      300,
      300,
      100,
      150,
      "../images/player1.webp"
    );
  }
  start() {
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  restart() {
    this.gameIsOver = false;
    this.score = 0;
    this.lives = 5;
    this.endScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.player.element.remove();
    this.player = new Player(
      this.gameScreen,
      300,
      300,
      150,
      200,
      "../images/player1.webp"
    );
    this.obstacles.forEach(obstacle => {
      obstacle.element.remove();
    });
    this.obstacles = [];
  
    // Add new obstacle
    this.obstacles.push(new Obstacle(this.gameScreen));
  
    this.start();
  }
  gameLoop() {
    this.update();
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
      this.gameIsOver();
    }
  }
  update() {
    this.player.move();
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      //collision
      if (this.player.didCollide(obstacle)) {
        this.obstacles.splice(i, 1);
        obstacle.element.remove();
        this.lives--;
        this.livesElement.textContent = this.lives;
        i--;
      } else if (obstacle.top > this.height) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
        this.score++;
        this.scoreElement.textContent = this.score;

        // making 5 score = 1lives;
        if (this.score % 5 === 0) {
          this.lives++;
          this.livesElement.textContent = this.lives;
        }
      }
    }
    if (this.lives === 0) {
      this.endGame();
    }
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }
  endGame() {
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());
    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.endScreen.style.display = "block";
  }
}
