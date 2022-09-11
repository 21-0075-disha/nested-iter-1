/* This code illustrates
  how a double dimensional array
  is traversed
  here each element is represented by a circle.
*/
function setup() {
  createCanvas(300, 300);
  background(255, 239, 213);
  let x = 70, y = 60; let m = 1000;
  ellipseMode(CORNER);
  fill(255, 128, 128);
  noStroke();
  for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
      setTimeout(disp, m, x, y);
      m += 1000;
      x += 30;
    }
    x = 70; y += 30;
  }
}
function disp(x1, y1) {
  ellipse(x1, y1, 30);
}
