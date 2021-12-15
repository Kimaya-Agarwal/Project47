var bg, rocketImg, rocket;

var rock, rockImg;
;
var gameState = "play";

function preload()
{
    bg = loadImage("images/bg.jpg")
    rocketImg = loadImage("images/r1.png");
    rockImg = loadImage("images/obstacle.png")
   
}

function setup()
{
    createCanvas(windowWidth, windowHeight);

    space = createSprite(0,0,200,300);
    space.addImage(bg);
    space.scale = 2.5
    
    rocket = createSprite(windowWidth/2,550,10,10)
    rocket.addImage(rocketImg)
    rocket.scale = 0.5

    rockGroup = createGroup();
}

function draw()
{

    if(gameState == "play")
    {
        space.velocityY = 5;
        if(space.y > 400)
        {
            space.y = 100
        }
    
        rockGroup.setVelocityYEach(3);
       // rockGroup.setLifetimeEach(100);
       rocket.position.x = mouseX;
       spawnObstacles();
       if(rocket.collide(rockGroup))
        {
            gameState = "end";
        }

    }
    else if(gameState == "end")
    {
        rockGroup.destroyEach()
        rocket.destroy()  
       //rockGroup.setLifetimeEach(0);   
       space.velocity = 0;
       space.visible = false;
       textSize(30)
       fill("white")
       text("Oops! Better luck next time!",500,200)
    }
    
 
    drawSprites()
}



function spawnObstacles()
{

    if(frameCount % 60 === 0)
   {
    rock = createSprite(170,100,20,20) 
    rock.x = Math.round(random(100,1000));
    rock.addImage(rockImg)
    rock.scale = 0.07
    rockGroup.add(rock)
   }
}