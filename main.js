noseX = 0;
noseY = 0;

leftwristX = 0;
rightwristX = 0;
diffX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(720, 0);

    poseNet = ml5.poseNet(video, model_loaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("#03fcf4");
    fill("#dd26ed");
    stroke("#cc26ed");
    square(noseX, noseY, diffX); 
    document.getElementById("square_sides").innerHTML = "The Side Of The Square Is " + diffX;
}

function model_loaded() {
    console.log("Model Loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("X - " + noseX + " Y - " + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        diffX = Math.floor(leftwristX - rightwristX, 2);

    }
}