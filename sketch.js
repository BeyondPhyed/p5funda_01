function setup() {  // 처음 한 번 실행되는 부분
  createCanvas(400, 400); 
  background(250,0,150);
}

function draw() {  // 반복적으로 (시각화)실행되는 부분
  fill(0);
  ellipse(mouseX, mouseY, 20, 20);
}

//발문) 잔상을 없애려면 어떻게 수정해야 할까?