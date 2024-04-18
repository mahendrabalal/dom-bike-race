class Obstacle extends Common {
    constructor (gameScreen) {
        super(
            gameScreen,
            Math.floor(Math.random()* (500-250 +1)) +250,
            0,
            100,
            150,
            "./images/obstacle.png"
        );
    }
    move() {
        console.log('obstacle top: ', this.top)
        this.top +=3;
        this.updatePosition();
    }
}