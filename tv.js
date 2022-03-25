Status = "";
tv_image = "";
object = [];

function preload(){
tv_image = loadImage("tv.png");
}

function setup(){
canvas = createCanvas(640,350);
canvas.position(315,200);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
}


function modelLoaded(){
console.log("Model Loaded!");
Status = true;
object_detector.detect(tv_image,gotResults);
}

function gotResults(){
if(error){
console.error(error);
}
console.log(results);

object = results;
}

function draw(){
image(tv_image,0,0,640,350);

if(Status != ""){
    for(i = 0; i < objects.length; i++){
        document.getElementById("Status").innerHTML = "Status: Objects Detected";

        fill("#f0000");
        precent = floor(objects[i].confidence * 100);
        text(objects[i].label + "" + precent + "%",objects[i].x, objects[i].y);
        noFill();
        stroke("#f0000");
        rect( objects[i].x, objects[i].y, objects[i].width, objects[i].height,);
    }
}

}
