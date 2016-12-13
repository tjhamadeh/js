var x = [];
var y = [];
var yPos = 0;
var xPos = 0;
var numLines = 3;

for (var i = 0; i < numLines; i++)
{
  y[i] = yPos;
  yPos += 200;

  x[i] = xPos;
  xPos += 200;
}

function setup()
{
  createCanvas(600, 600);
  frameRate(60);
}

function draw()
{
  background(0);
  stroke(100);
  yLines();
  xLines();
}

// Moving 'y lines' down the canvas
function yLines()
{
  for (var i = 0; i < y.length; i++)
  {
    y[i]++;
  }

  for (var j = 0; j < y.length; j++)
  {
    if (y[j] > height)
    {
      y[j] = 0;
    }
  }

  for (var k = 0; k < y.length; k++)
  {
    line(0, y[k], width, y[k]);
  }
}

// Moving 'x lines' to the right of the canvas
function xLines()
{
  for (var i = 0; i < x.length; i++)
  {
    x[i]++;
  }

  for (var j = 0; j < x.length; j++)
  {
    if (x[j] > width)
    {
      x[j] = 0;
    }
  }

  for (var k = 0; k < x.length; k++)
  {
    line(x[k], 0, x[k], height);
  }
}
