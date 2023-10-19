let w, h;
let size = 30;
let data = [];
function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(60);
  w = width / size;
  h = height / size;

  for (let i = 0; i < w; i++) {
    let cols = [];
    for (let j = 0; j < h; j++) {
      cols.push({ x: i * size, y: j * size });
    }
    data.push(cols);
  }
}

// let prev = null;
function draw() {
  // background(220);
  for (let row = 0; row < data.length; row++) {
    for (let col = 0; col < data[row].length; col++) {
      let cell = data[row][col];

      let collided = rect_collision_mouse(cell);
      if (collided && mouseIsPressed) {
        noFill();
        // rect(collided.x, collided.y, size, size);
        spawn_generator(cell);
        // if (prev) {
        //   line(collided.x, collided.y, prev.x, prev.y);
        // }
        // prev = collided;
      }

      if (!mouseIsPressed) {
        prev = null;
      }
    }
  }
}

function rect_collision_mouse(cell) {
  let cell_right_edge = cell.x + size;
  let cell_bottom_edge = cell.y + size;
  if (
    cell_right_edge >= mouseX &&
    cell.x <= mouseX &&
    cell_bottom_edge >= mouseY &&
    cell.y <= mouseY
  ) {
    return cell;
  } else {
    return null;
  }
}

let level = 2;
let cl = 0;
let rule = {
  x: ["1", "x"], // - +
  y: ["1", "0"], // - +
};
function spawn_generator(cell) {
  fill("lime");
  rect(cell.x, cell.y, size, size);

  let { x, y } = rule;

  //1
  if (x[0] != "0") {
    if (x[0] == "x") fill("lime");
    else fill("white");
    rect(cell.x - size, cell.y, size, size);
  }
  //2
  if (x[1] != "0") {
    if (x[1] == "x") fill("lime");
    else fill("white");
    rect(cell.x + size, cell.y, size, size);
  }
  //3
  if (y[0] != "0") {
    if (y[0] == "x") fill("lime");
    else fill("white");
    rect(cell.x, cell.y - size, size, size);
  }
  //4
  if (y[1] != "0") {
    if (y[1] == "x") fill("lime");
    else fill("white");
    rect(cell.x, cell.y + size, size, size);
  }


}
