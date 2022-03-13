
let geo = [ 'Tintagil', 'Camelot', 'Avilion', 'Stonehenge', 'Caerleon', 'Britain', 'Cornwall', 'the Isle of Life', 'Glastonbury'];
let being = ['knight', 'wizard', 'queen', 'king', 'witch', 'squire', 'lord', 'lady'];
let sword = []
let numsword = 25
let landscape;

let mr;
let gr;
let br;
let sr;

let rc = 20;
let gc = 100;
let bc = 250;

let wrds;
let wds;
let ws;

function preload(){
  let sword1 = loadImage('sword1.jpg');
  let sword2 = loadImage('sword2.jpg');
  let sword3 = loadImage('sword3.jpg');
  let sword4 = loadImage('sword4.jpg');
  let sword5 = loadImage('sword5.jpg');
  let sword6 = loadImage('sword6.jpg');
  let sword7 = loadImage('sword7.jpg');
  let sword8 = loadImage('sword8.jpg');
  let sword9 = loadImage('sword9.jpg');
  let sword10 = loadImage('sword10.jpg');
  let sword11 = loadImage('sword11.jpg');
  let sword12 = loadImage('sword12.jpg');
  let sword13 = loadImage('sword13.jpg');
  let sword14 = loadImage('sword14.jpg');
  let sword15 = loadImage('sword15.jpg');
  let sword16 = loadImage('sword16.jpg');
  let sword17 = loadImage('sword17.jpg');
  let sword18  = loadImage('sword18.jpg');
  let sword19 = loadImage('sword19.jpg');
  let sword20 = loadImage('sword20.jpg');
  let sword21 = loadImage('sword21.jpg');
  let sword22 = loadImage('sword22.jpg');
  let sword23 = loadImage('sword23.jpg');
  let sword24 = loadImage('sword24.jpg');
  let sword25 = loadImage('sword25.jpg');
  sword =
  [sword1,sword2,sword3,sword4,sword5,sword6,sword7,sword8,sword9,sword10,sword11,sword12,sword13,sword14,sword15,sword16,sword17,sword18,sword19,sword20] 
  landscape = loadImage('paper.png');
}

function setup() {
  createCanvas(800, 1000);
  background(227, 202, 163);
  frameRate(60);
  intText();


  console.log(geo[3])
  console.log(being.length);

}

function draw() {

  imageMode (CENTER);
}

function mousePressed() {
  gr = int(random(geo.length));
  br = int(random(being.length));
  wds = geo[gr];
  ws = being[br];
  rc = random(255);
  gc = random(255);
  bc = random(255);
  fortText();
  console.log(wrds);
  let randoImg = random(sword);
  image (randoImg, 250, 450, 300,400 );
}

function intText() {
  fill(115, 59, 0);
  textAlign(CENTER);
  textSize(20)
  //this is a lie, you can click anywhere
  text('Click the page to enter.', width*0.5, height*0.2);
}

function fortText() {
  background (227, 202, 163);
  fill(115, 59, 0)
  intText();
  textAlign(CENTER);
  text('You meet a', 550, 300);
  text('in', 550, 400);
  text('who gave you this sword.', 550, 500);
  text(wds, 550, 450)
  text(ws, 550, 350)
}
  
  


