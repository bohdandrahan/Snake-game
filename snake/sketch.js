let snake;
let apple;
let resolution = 20;

function setup() {
  w = floor(640/resolution);
  h = floor(480/resolution);
  createCanvas(w*resolution, h*resolution);
  frameRate(10);
  snake = new Snake();
  apple = get_new_apple()
}
function get_new_apple(){
  apple_location = get_random_location(w, h);
  return new Apple(apple_location[0], apple_location[1]);
}

function get_random_location(w, h) {
	return [floor(random(w)), floor(random(h))];
}

function keyPressed() {
	switch (keyCode){
		case LEFT_ARROW:
			if (snake.getDirStr() === 'right'){
				break;
			}
			else{
				snake.setDir(-1, 0);
				break;
			}

		case RIGHT_ARROW:
			if (snake.getDirStr() === 'left'){
				break;
			} else {
				snake.setDir(1, 0);
				break;
			}

		case DOWN_ARROW:
			if (snake.getDirStr() === 'up'){
				break;
			} else {
				snake.setDir(0, 1)
				break;
			}
		case UP_ARROW:
			if (snake.getDirStr() === 'down'){
				break;
			} else {
				snake.setDir(0, -1)
				break;
			}

	}
}

function draw() {
	scale(resolution)
	colorMode(RGB)
	background(0);
	if (snake.eat(apple)){
		apple = get_new_apple()
	};
	snake.update();
	snake.show();
	apple.show();

	if (snake.collision()){
		print("END GAME")
		noLoop()
	}
}