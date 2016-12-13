var X = [];
var Y = [];
var posX = 100;
var posY = 50;
var sizeX = 50;
var sizeY = 50;
var canvasX = 800;
var canvasY = 600;
var dirX = true;
var dirY = true;

for (var i = 0; i < canvasX; i++)
{
	X[i] = 0;
}
for (var i = 0; i < canvasY; i++)
{
	Y[i] = 0;
}

function setup()
{
	createCanvas(canvasX,canvasY);
	frameRate(60);
//	background(0);
}

function draw()
{
	background(0);
	stroke(100);
	line(0, 0, width, height);
	line(width, 0, 0, height);
	line(0, height/2, width, height/2);
	line(width/2, 0, width/2, height);
	ellipse(width/2, height/2, sizeX*2, sizeX*2);
	rect(posX, posY, sizeX, sizeY, 5);
	moveBlock();
}

function moveBlock()
{
	if (dirY)
		posY = posY+2;
	else
		posY = posY-2;
	
	if (dirX)
		posX++;
	else
		posX--;
	
	if (posX > width-sizeX)
		dirX = false;
	else if (posX <= 0)
		dirX = true;
	
	if (posY > height-sizeY)
		dirY = false;
	else if (posY <= 0)
		dirY = true;
}