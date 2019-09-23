function setup() {
    createCanvas(windowWidth, windowHeight);
    background(180,400,120);
    frameRate(6);
}
    
function draw() {
    if (true) {
      var size = random(10,30);
      fill(300,300,0);
      stroke(300,300,0);
      ellipse(mouseX,mouseY,size,size);
    }
  
    if (mouseIsPressed) {
        var size = random(10, 20);
        stroke(255);
        strokeWeight(3);
        line(mouseX, mouseY, size, size);
    }
  
    if (keyIsPressed) {
      var size = random(20,40);
      noStroke();
      fill(random(130,400),random(60,500),random(300,600));
      rect(mouseX,mouseY,size,size);
    }
}