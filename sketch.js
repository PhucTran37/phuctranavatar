let count = 0;
let myMap = 0;

function setup() {
  createCanvas(400,400);
}

function draw() {
    background(220,250,200);
    lens();
    eyes();
    iris();
    
}
function lens(){
  square(90,90,220)
  square(100,100,200,20)
  square(150,150,100,20)
  ellipse(200,200,100,100)
  fill(0);
}
function eyes(){
  ellipse(200,200,70,30)
  fill(500);
  rotate(myMap);
  
  console.log(mouseX);
  console.log(mouseY);
  
  myMap = map(mouseX, 0, width, 50, 300)
}
function iris(){
  ellipse(200,200,25,25)
  fill()
}