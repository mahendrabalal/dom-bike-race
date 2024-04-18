class Player extends Common {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        super(gameScreen, left, top, width, height, imgSrc);
        this.directionX = 0;
        this.directionY = 0;
        this.rotationAngle = 0;

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
    spin() {
        this.isCollided = true;
        const initialRotation = this.rotationAngle;
        const rotateInterval = setInterval(() => {
            this.element.style.transform = `rotate(${this.rotationAngle}deg)`;
            this.rotationAngle += 10; // Adjust the rotation speed as needed
            if (this.rotationAngle >= 20) {
                clearInterval(rotateInterval); // Stop spinning when reaching 30 degrees
                // Start interval to return to the original position
                const returnInterval = setInterval(() => {
                    this.element.style.transform = `rotate(${this.rotationAngle}deg)`;
                    this.rotationAngle -= 5; // Adjust the rotation speed as needed
                    if (this.rotationAngle <= initialRotation) {
                        clearInterval(returnInterval); // Stop returning when reaching the original position
                        this.rotationAngle = initialRotation; // Ensure the rotation angle is set to the initial value
                        this.element.style.transform = `rotate(${this.rotationAngle}deg)`; // Apply the final rotation
                        this.isCollided = false; // Reset the collision flag
                    }
                }, 50); 
            }
        }, 50);
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

        if (collided) {
            this.spin();
        }
    
        return collided;
    }
    
    
    }
