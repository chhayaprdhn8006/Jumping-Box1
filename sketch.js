var canvas;
var box;
var s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
    s1 = createSprite(100,592,200,16);
    s2 = createSprite(300,592,200,16);
    s3 = createSprite(500,592,200,16);
    s4 = createSprite(100,8,200,16);
    s5 = createSprite(300,8,200,16);
    s6 = createSprite(500,8,200,16);
    s7 = createSprite(592,484,16,200);
    s8 = createSprite(592,284,16,200);
    s9 = createSprite(592,84,16,200);
    s10 = createSprite(8,84,16,200);
    s11= createSprite(8,284,16,200);
    s12= createSprite(8,484,16,200);

    s1.shapeColor = 'red';
    s2.shapeColor = 'white';
    s3.shapeColor = 'red';
    s4.shapeColor = 'blue';
    s5.shapeColor = 'white';
    s6.shapeColor = 'blue';
    s7.shapeColor = 'yellow';
    s8.shapeColor = 'white';
    s9.shapeColor = 'yellow';
    s10.shapeColor = 'green';
    s11.shapeColor = 'white';
    s12.shapeColor = 'green';

//create box sprite and give velocity
    box = createSprite(random(30,570),50,25,25);
    box.shapeColor = 'white'; 
    box.velocityX = 4;
    box.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    //createEdgeSprite();
   



    //add condition to check if box touching surface and make it box
     if(s1.isTouching(box) && box.bounceOff(s1)){
        box.shapeColor = 'red';
        music.play();
    }
    if(s3.isTouching(box) && box.bounceOff(s3)){
        box.shapeColor = 'red';
        music.play();
    }
    
    if(s4.isTouching(box) && box.bounceOff(s4)){
        box.shapeColor = 'yellow';
        music.play();
    }
    if(s6.isTouching(box) && box.bounceOff(s6)){
        box.shapeColor = 'yellow';
        music.play();
    }

    if(s7.isTouching(box) && box.bounceOff(s7)){
        box.shapeColor = 'blue';
        music.play();
    }
    if(s9.isTouching(box) && box.bounceOff(s9)){
        box.shapeColor = 'blue';
        music.play();
    }

    if(s10.isTouching(box) && box.bounceOff(s10)){
        box.shapeColor = 'green';
        music.play();
    }
    if(s12.isTouching(box) && box.bounceOff(s12)){
        box.shapeColor = 'green';
        music.play();
    }


    if(s2.isTouching(box) && box.bounceOff(s2)){
        music.stop();
    }
    if(s5.isTouching(box) && box.bounceOff(s5)){
       music.stop(); 
    }

    if(s8.isTouching(box) && box.bounceOff(s8)){
        music.stop();
    }
    if(s11.isTouching(box) && box.bounceOff(s11)){
       music.stop(); 
    }




    drawSprites();
}
