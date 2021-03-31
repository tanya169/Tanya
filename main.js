function setup() {
  canvas = createCanvas(650, 500);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 230, 150, 220, 200);
  fill(255, 91, 165);
  stroke(230, 0, 0);
  ellipse(55, 50, 55, 55);

  fill(181, 126, 220);
  stroke(230, 0, 0);
  ellipse(55, 100, 55, 55);

  fill(219, 73, 172);
  stroke(230, 0, 0);
  ellipse(55, 150, 55, 55);

  fill(107, 167, 214);
  stroke(230, 0, 0);
  ellipse(55, 200, 55, 55);

  fill(240, 173, 219);
  stroke(230, 0, 0);
  ellipse(55, 250, 55, 55);

  fill(107, 167, 214);
  stroke(230, 0, 0);
  ellipse(55, 300, 55, 55);

  fill(184, 231, 223);
  stroke(230, 0, 0);
  ellipse(55, 350, 55, 55);

  fill(228, 114, 191);
  stroke(230, 0, 0);
  ellipse(55, 400, 55, 55);

  fill(100, 212, 199);
  stroke(230, 0, 0);
  ellipse(55, 450, 55, 55);

  fill(229, 114, 191);
  stroke(230, 0, 0);
  ellipse(100, 450, 55, 55);

  fill(176, 214, 218);
  stroke(230, 0, 0);
  ellipse(150, 450, 55, 55);

  fill(255, 132, 168);
  stroke(230, 0, 0);
  ellipse(200, 450, 55, 55);

  fill(219, 73, 172);
  stroke(230, 0, 0);
  ellipse(250, 450, 55, 55);

  fill(164, 231, 223);
  stroke(230, 0, 0);
  ellipse(300, 450, 55, 55);

  fill(255, 91, 165);
  stroke(230, 0, 0);
  ellipse(350, 450, 55, 55);

  fill(107, 167, 214);
  stroke(230, 0, 0);
  ellipse(400, 450, 55, 55);

  fill(100, 212, 190);
  stroke(230, 0, 0);
  ellipse(450, 450, 55, 55);

  fill(240, 173, 219);
  stroke(230, 0, 0);
  ellipse(500, 450, 55, 55);

  fill(153, 87, 205);
  stroke(230, 0, 0);
  ellipse(550, 450, 55, 55);

  fill(67, 142, 200);
  stroke(230, 0, 0);
  ellipse(600, 450, 55, 55);

  fill(255, 132, 188);
  stroke(230, 0, 0);
  ellipse(100, 50, 55, 55);

  fill(219, 73, 172);
  stroke(230, 0, 0);
  ellipse(150, 50, 55, 55);

  fill(59, 198, 182);
  stroke(230, 0, 0);
  ellipse(200, 50, 55, 55);

  fill(67, 142, 200);
  stroke(230, 0, 0);
  ellipse(250, 50, 55, 55);

  fill(107, 167, 214);
  stroke(230, 0, 0);
  ellipse(300, 50, 55, 55);

  fill(169, 204, 232);
  stroke(230, 0, 0);
  ellipse(350, 50, 55, 55);

  fill(255, 91, 165);
  stroke(230, 0, 0);
  ellipse(400, 50, 55, 55);

  fill(153, 87, 205);
  stroke(230, 0, 0);
  ellipse(450, 50, 55, 55);

  fill(255, 132, 168);
  stroke(230, 0, 0);
  ellipse(500, 50, 55, 55);

  fill(100, 212, 190);
  stroke(230, 0, 0);
  ellipse(550, 50, 55, 55);

  fill(200, 178, 234);
  stroke(230, 0, 0);
  ellipse(600, 50, 55, 55);

  fill(229, 114, 191);
  stroke(230, 0, 0);
  ellipse(600, 100, 55, 55);

  fill(100, 212, 190);
  stroke(230, 0, 0);
  ellipse(600, 150, 55, 55);

  fill(153, 87, 205);
  stroke(230, 0, 0);
  ellipse(600, 200, 55, 55);

  fill(59, 198, 182);
  stroke(230, 0, 0);
  ellipse(600, 250, 55, 55);

  fill(255, 132, 188);
  stroke(230, 0, 0);
  ellipse(600, 300, 55, 55);

  fill(107, 167, 214);
  stroke(230, 0, 0);
  ellipse(600, 350, 55, 55);

  fill(164, 231, 223);
  stroke(230, 0, 0);
  ellipse(600, 400, 55, 55);

  fill(255, 187, 219);
  stroke(230, 0, 0);
  ellipse(600, 450, 55, 55);
}

function take_snapshot(){    
  save('student_name.png');
}