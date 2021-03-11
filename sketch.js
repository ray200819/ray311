let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;

let r = 25;
let rSlider;
let gSlider;
let bSlider;
let cSlider;
function setup() {
  createCanvas(640, 360);
  rSlider = createSlider(0, 640, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 360, 100);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 10, 2.5);
  bSlider.position(20, 80);
  cSlider = createSlider(0, 10,2 );
  cSlider.position(20, 110);
}

function draw() {
  background(0);
  ellipse(x, y, r*2, r*2);
  x = rSlider.value();
  y = gSlider.value();
  console.log('x = ',x);
  console.log(' y= ',y);
  //xspeed = bSlider.value();
  yspeed = cSlider.value();
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }


}