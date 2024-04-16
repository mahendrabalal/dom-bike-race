class Player extends Common {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        super(gameScreen, left, top, width, height, imgSrc);
        this.directionX = 0;
        this.directionY = 0;

    }

    move() {
        this.left += this.directionX;
        this.top += this.directionY;

        if(this.left < 250) {
            this.left = 250;
        }
        if(this.top < 10) {
            this.top = 10;
        }
        if(this.left > this.gameScreen.offsetWidth - this.width - 200) {
            this.left = this.gameScreen.offsetWidth- this.width - 200;
        }
        if(this.top > this.gameScreen.offsetHeight -this.height - 10) {
            this.top = this.gameScreen.offsetHeight - this.height -10;
        }
        
        this.updatePosition();

    }
    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
        console.log('Player Rect:', playerRect);
        console.log('Obstacle Rect:', obstacleRect);
    
        const collided = (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        );
    
        console.log('Collision:', collided);
    
        return collided;
    }
    
    }
