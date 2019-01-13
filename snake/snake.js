class Snake {
	constructor() {
		this.body = [];
		this.body[0] = createVector(0,0);
		this.xdir = 1;
		this.ydir = 0;
		this.widht = 1;
		}

	setDir(x,y) {
		this.xdir = x;
		this.ydir = y;
	}

	get_head() {
		return this.body[this.body.length-1].copy()	}

	eat(apple) {
		let x = this.get_head().x;
		let y = this.get_head().y;
		if (x === apple.x && y === apple.y){
			this.grow();
			return true;}
		return false;
	}

	grow() {
		let head = this.get_head()
		this.body.push(head)
	}
	
	collision() {
		let x = this.get_head().x
		let y = this.get_head().y

	}

	update() {
		let head = this.get_head();
		this.body.shift();
		head.x += this.xdir;
		head.y += this.ydir;
		this.body.push(head);

	}

	show() {
		for (let i = 0; i < this.body.length; i++){
			noStroke();
			colorMode(HSB);
			fill((100 + 20*i)%360, 100, 95)
			rect(this.body[i].x, this.body[i].y, this.widht, this.widht)
		}

	}


}