var bodyImg, body, canvas;
var database, form, user;

function preload(){
    bodyImg = loadImage('images/Human Body.png');
}

function setup(){
    canvas = createCanvas(windowWidth-10, windowHeight-10);
    database = firebase.database();
    form = new Form();
    user = new User();
}

function draw(){
    background('lightblue');

    form.display();
    body = image(bodyImg, 160, 100);
}