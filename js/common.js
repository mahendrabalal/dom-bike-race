class Common {
    constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}}px`;
    
    this.gameScreen.appendChild(this.element);
    }
    
    updatePosition() {
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }
    }