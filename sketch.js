
let mood = ['sword in the stone', 'holy grail', 'crown', 'horse', 'surprised', 'contemplative', 'mad', 'curious'];
let geo = [ 'Tintagil', 'Camelot', 'Avilion', 'Stonehenge', 'Caerleon', 'Britain', 'Cornwall', 'the Isle of Life', 'Glastonbury'];
let being = ['knight', 'wizard', 'queen', 'king', 'witch', 'squire', 'lord', 'lady'];
let sword = []
let numsword = 25;
let landscape;
let myFont;
let manuscript = [];
let nummanuscript = 6;

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
let button;

function preload(){
  let sword1 = loadImage('sword1color.png');
  let sword2 = loadImage('sword2color.png');
  let sword3 = loadImage('sword3color.png');
  let sword4 = loadImage('sword4color.png');
  let sword5 = loadImage('sword5color.png');
  let sword6 = loadImage('sword6color.png');
  let sword7 = loadImage('sword7color.png');
  let sword8 = loadImage('sword8color.png');
  let sword9 = loadImage('sword9color.png');
  let sword10 = loadImage('sword10color.png');
  let sword11 = loadImage('sword11color.png');
  let sword12 = loadImage('sword12color.png');
  let sword13 = loadImage('sword13color.png');
  let sword14 = loadImage('sword14color.png');
  let sword15 = loadImage('sword15color.png');
  let sword16 = loadImage('sword16color.png');
  let sword17 = loadImage('sword17color.png');
  let sword18 = loadImage('sword18color.png');
  let sword19 = loadImage('sword19color.png');
  let sword20 = loadImage('sword20color.png');
  let sword21 = loadImage('sword21color.png');
  let sword22 = loadImage('sword22color.png');
  let sword23 = loadImage('sword23color.png');
  let sword24 = loadImage('sword24color.png');
  let sword25 = loadImage('sword25color.png');
  sword =
  [sword1,sword2,sword3,sword4,sword5,sword6,sword7,sword8,sword9,sword10,sword11,sword12,sword13,sword14,sword15,sword16,sword17,sword18,sword19,sword20];
 let manuscript1 = loadImage('manuscriptcrop1.png');
 let manuscript2 = loadImage('manuscript2dark.png');
 let manuscript3 = loadImage('manuscriptcrop3.png');
 let manuscript4 = loadImage('manuscriptcrop4.png');
 let manuscript5 = loadImage('manuscriptcrop5.png');
 let manuscript6 = loadImage('manuscriptcrop6.png');
 manuscript =
 [manuscript1, manuscript2,manuscript3,manuscript4,manuscript5,manuscript6];
  landscape = loadImage('paper.png');
  myFont = loadFont('MedievalSharp-Regular.ttf');
}

function setup() {
  createCanvas(850, 900);
  background(landscape);
  frameRate(60);
  intText();
  textFont(myFont);
 let button = createButton('Click Here For Your Destiny Awaits.');
 button.parent('button-holder');
 button.mousePressed(buttonPressed);

  console.log(mood[int(random(mood.length))]);
  console.log(geo[3])
  console.log(being.length);

}

function draw() {

  imageMode (CENTER);
}

function buttonPressed() {
  imageMode(CORNER);
  background(landscape);
  imageMode (CENTER);
  mr = int(random(mood.length));
  gr = int(random(geo.length));
  br = int(random(being.length));
  wrds = mood[mr];
  wds = geo[gr];
  ws = being[br];
  rc = random(255);
  gc = random(255);
  bc = random(255);
  fortText();
  console.log(wrds);
  let randoImg = random(sword);
  image (randoImg, 570, 560, 300, 400 );
  let randoPic = random(manuscript);
  image (randoPic, 190, 290, 200,250 );
}

function intText() {
  fill(115, 59, 0);
  textAlign(CENTER);
  textSize(20)
  textFont(myFont);
 

}

function fortText() {
  fill(115, 59, 0)
  intText();

  text('long time ago, a sword was placed in a stone by a', 528, 200);
  text('great sorcerer. Legend says that a king unsheathed', 530, 250);
  text ('the blade bringing peace to the kingdom. When the ', 530, 300);
  text ('king passed, the sword was lost with him. That is', 525, 350);
  text ('until one day...', 365, 400);

  text('You meet a', 250, 470);
  text('in', 250, 570);
  text('who gave you this sword.', 250, 670);
  text(wds, 250, 620)
  text(ws, 250, 520)
}
