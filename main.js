noseX = 0;
noseY = 0;


function preload() {
    clown_nose = loadImage('https://i.postimg.cc/kG4PGptr/istockphoto-585767990-1024x1024.png')
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose)
}

function modelLoaded(){
    console.log("model is loaded");
}

function gotPose(results){
    if(results.length > 0){
        noseX = results[0].pose.nose.x+10;
        noseY = results[0].pose.nose.y-15;
        console.log(results);
        console.log("nose X = "+ noseX);
        console.log("nose Y = "+ noseY);
    }
}

function draw() {
    image(video, 0, 0, 400, 300);

    image(clown_nose, noseX, noseY, 80, 80)
    //fill(255, 0, 0);
    //stroke(255, 0, 0);
    //circle(noseX, noseY, 20);

}

function takeSnapshot(){
    save("MyFilterPic.png")
}