

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,110,110,300,300);
    circle(50,60,120);
    circle(60,440,120);
    circle(440,60,120);
    circle(440,440,120);
    
}

function take_snapshot(){
    save("my_pic.jpg")
}