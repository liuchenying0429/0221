let points = [[-3, 5], [3, 7], [1, 5], [2, 4], [4, 3], [5, 2], [6, 2], [8, 4], [8, -1], [6, 0], [0, -3], [2, -6], [-2, -3], [-4, -2], [-5, -1], [-6, 1], [-6, 2]];

let fishes = [];

function setup() { //設定
  //一個充滿視窗的畫布
  createCanvas(windowWidth, windowHeight); //建立畫布
  for (let i = 0; i < 50; i++) {
    fishes.push(new Fish(random(width), random(height), random(20, 50), color(random(255), random(255), random(255)), random(-3, 3), random(-3, 3)));
  }
}

function draw() { //畫圖
  background("#f3dfa2"); //背景顏色
  //畫一個有顏色的圓，框線為橘色，圓的顏色為黃色，框線粗細為7
  stroke(255, 165, 0); //框線顏色
  fill(255, 255, 0); //圓的顏色
  strokeWeight(7); //框線粗細
  ellipse(200, 200, 200, 200); //畫一個圓，圓心為(200, 200)，寬為100，高為100
  //在上一個圓上方左右兩邊方向，各畫一個小圓
  ellipse(100, 100, 85, 85); //畫一個圓，圓心為(100, 100)，寬為85，高為85
  ellipse(300, 100, 85, 85); //畫一個圓，圓心為(300, 100)，寬為85，高為85

  // 畫出連線圖案並填充顏色
  stroke("#6f1a07"); // 設定線條顏色
  strokeWeight(7); // 設定線條粗細
  fill("#8d0801"); // 設定填充顏色
  beginShape(); // 開始繪製形狀
  for (let point of points) { // 迭代所有點
    vertex(point[0] * 20 + width / 2, -point[1] * 20 + height / 2); // 繪製頂點
  }
  endShape(CLOSE); // 結束繪製形狀並閉合

  // 畫出魚
  for (let fish of fishes) {
    fish.move();
    fish.display();
  }
}

class Fish {
  constructor(x, y, size, color, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }

    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size * 2, this.size);
    triangle(this.x - this.size, this.y, this.x - this.size * 1.5, this.y - this.size / 2, this.x - this.size * 1.5, this.y + this.size / 2);
  }
}
