var nosex=0;
var nosey=0;
function preload(){
 mustache=loadImage("https://i.postimg.cc/P56pVcZC/mustache-filter.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log(" nose x= "+nosex);
        console.log("nose y= "+nosey);
    }
}
function modelloaded(){
    console.log("poseNet is initialized");
}
function draw(){
    image(video,0,0,300,300);
    image(mustache,nosex-40,nosey+5,80,30);
}
function takesnapshot(){
    save("mustache.png");
}