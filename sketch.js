var numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
var lastNumber=null,currentNumber=null;
var generate;
var frame=null;

function setup() {
  createCanvas(displayWidth,displayHeight);

  generate = createButton("Generate");
  generate.position(140,500);
}

function draw() {
  background(100);

  frameRate(60);

  console.log(frameCount);

  generate.mousePressed(()=>{
    generate.hide();
    frame = frameCount;
    console.log(frame);
    let selectedIndex = round(random(0,(numbers.length)-1));
    let selectedNumber = numbers[selectedIndex];
    lastNumber=currentNumber;
    currentNumber=selectedNumber;
    numbers.splice(selectedIndex, 1);
  });

  if(frame!=null && frameCount==(frame+600)) {
    generate.show();
  }

  for(let i=1;i<=90;i++) {
    if (numbers.includes(i)) {
      fill(0);
      textSize(20);
      text(i,20+((i-1)%10)*40,100+floor((i-1)/10)*40);
    }else {
     fill(255);
     textSize(20);
     text(i,20+((i-1)%10)*40,100+floor((i-1)/10)*40);
    }
  }

  if(currentNumber!=null) {
    fill(0);
    textSize(50);
    text(currentNumber,750,250);
  }

  if(lastNumber!=null) {
    fill(0);
    textSize(30);
    text(lastNumber,600,250);
  }
}