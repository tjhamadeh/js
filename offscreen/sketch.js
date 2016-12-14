var square = 10;
var posX = 50;
var posY = 50;
var velocity = 5;
var randPosX;
var randPosY;

function setup()
{
	createCanvas(500,500);
	frameRate(60);
	
	newRandomPos();
}

function draw()
{
	background(0);
	stroke(0);
	fill('white');

	spawnSquare();

	text("(" + posX + ", " + posY + ")", 5, 15);
	text("(" + randPosX + ", " + randPosY + ")", 200, 15);

	rect(posX, posY, square, square, 1);

	move();
}

function moveY()
{
	posY++;
	if (posY > height)
		posY = -square;
}

function moveX()
{
	posX++;
	if (posX > width)
		posX = -square;
}

function move()
{
	if (keyIsDown(LEFT_ARROW))
	{
		posX -= velocity;
		if (posX <= -square)
			posX = width;
	}
	if (keyIsDown(RIGHT_ARROW))
	{
		posX += velocity;
		if (posX > width)
			posX = -square;
	}
	if (keyIsDown(UP_ARROW))
	{
		posY -= velocity;
		if (posY <= -square)
			posY = height;
	}
	if (keyIsDown(DOWN_ARROW))
	{
		posY += velocity;
		if (posY > height)
			posY = -square;
	}
	
	if ((posX === randPosX) && (posY === randPosY))
		newRandomPos();
}

function newRandomPos()
{
	randPosX = floor(random(0, width));
	randPosY = floor(random(0, height));
}

function spawnSquare()
{
	rect(randPosX, randPosY, square/2, square/2, 1);
}
