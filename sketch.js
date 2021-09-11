var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
   btn_red = createButton("RED");
   btn_red.position(100,50);
   btn_red.style("background:turquoise;width:100px;color:green;height:50px;font:italic bold 20px arial,serif");
   btn_red.mousePressed(red_bg);
  
   btn_green = createButton("GREEN");
   btn_green.position(220,50)
   btn_green.style("background:pink;width:100px;height:50px;color:red;font:italic bold 20px arial,serif")
   btn_green.mousePressed(green_bg);
  
}

function draw() {
  background(r,g,b);
}


function red_bg()
{
  r = 180;
  g = 0;
  b = 40;
}

function green_bg()

{
  r = 0;
  g = 150;
  b = 105;
}