var entr = 0.15; // entropia
var spazio = 17;
var zn = 0;
var righe, col;





function setup() {
  createCanvas(windowWidth, windowHeight);

  righe = floor(width / spazio);
  col = floor(height / spazio - 5);
}



function draw() {
  background(0, 3, 30);
  noStroke();

  push()
    let s = 'MOVE THE CURSOR HORIZONTALLY TO MOVE CIRCLES';
    let t = 'CLICK AND MOVE VERTICALLY TO CHANGE COLORS';
    stroke('white');
    strokeWeight(0.5);
    noFill()
    textSize(33);
    textStyle(BOLD)
    textAlign(CENTER,CENTER);
    text(s, width/2, height/15);
    text(t, width/2, height*0.9);
  pop()

  var yn = 10;
  for (var y = 8; y < col; y++) {
    var xn = 0;
    for (var x = 10; x < righe; x++) {
      var v = p5.Vector.fromAngle(angle);
      var colorList1 = ['#5fbfb9',
        '#d96d7c',
        '#d9a06d',


      ];

      var colorList2 = ['#bfd242',
        '#82cfe9',
        '#8e82e9'

      ];
      var index = floor(random(0, 3));
      if (mouseIsPressed && mouseY <= windowHeight / 2) {
        fill(color(colorList1[index]));
      } else if (mouseIsPressed && mouseX > windowHeight / 2) {
        fill(color(colorList2[index]));

      }


      yn += entr;

      var diam = noise(yn) * 15;


      push();
      translate(x/1.1 * spazio, y/1.1 * spazio);
      rotate(v.heading(PI));
      ellipse(10, 10, diam, diam);
      pop();

      var angle = noise(xn, yn, zn) * (dist(mouseX, 0, x, y) / dist(20, 20, width / 2, height / 2) * 7)


    }
    yn += entr;
    zn += 0.001;

  }
}
