let r = 50;
let g = 50;
let b = 50;
let minColour = 100;
let maxColour = 255;
let diameter = 32;
let socket;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    socket = io.connect('http://localhost:3000');
    socket.on('mouse', newDrawing);
}

function newDrawing(data) {
    noStroke();
    r = random(minColour, maxColour);
    g = random(minColour, maxColour);
    b = random(minColour, maxColour);
    fill(r, g, b, minColour);
    diameter = random(16, 124);
    circle(data.x, data.y, diameter);
}

function draw() {
    noStroke();
    fill(r, g, b, minColour);
    circle(mouseX, mouseY, diameter);
}

function mouseDragged() {
    r = random(minColour, maxColour);
    g = random(minColour, maxColour);
    b = random(minColour, maxColour);
    diameter = random(16, 124);

    const data = {
        x: mouseX,
        y: mouseY,
    };

    socket.emit('mouse', data);
}
