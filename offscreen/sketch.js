var square = 10;
var posX = 50;
var posY = 50;

function setup()
{
	createCanvas(300,300);
	frameRate(60);
}

function draw()
{
	background(0);
	stroke(0);
	
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
		posX--;
		if (posX <= -square)
			posX = width;
	}
	if (keyIsDown(RIGHT_ARROW))
	{
		posX++;
		if (posX > width)
			posX = -square;
	}
	if (keyIsDown(UP_ARROW))
	{
		posY--;
		if (posY <= -square)
			posY = height;
	}
	if (keyIsDown(DOWN_ARROW))
	{
		posY++;
		if (posY > height)
			posY = -square;
	}
}