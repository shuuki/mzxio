/** event listeners */

window.addEventListener("load", function() {
	Sim.init();
	Sim.update();
}, false);

window.addEventListener("keyup", function(event) {
	Key.onKeyup(event);
}, false);

window.addEventListener("keydown", function(event) {
	Key.onKeydown(event);
	//console.log(event.keyCode)
}, false);

/**  canvas manipulation */

var Canvas = {}

Canvas.make = function() {
	let canvas = document.createElement("canvas"),
		body = document.getElementsByTagName("body")[0];
	canvas.id = "display";
	canvas.width = 320;
	canvas.height = 200;
	body.appendChild(canvas);
}

/**  the simulation */

var Sim = {};

Sim.init = function() {
	Canvas.make();

	this.canvas = document.getElementById("display");
	this.context = this.canvas.getContext("2d");

	this.time = 0;

	this.canvas.addEventListener("click", function() {
		let x = event.pageX - this.offsetLeft;
		let y = event.pageY - this.offsetTop;
		console.log(x, y)
		//show where clicked, needs to go into a layer queue
		//Sim.context.fillRect(x-1, y-1, 3, 3);
	}, false);

	this.ship = new Ship(this.canvas);

}

//var fps = 30;

Sim.update = function() {
	//setTimeout(function() {
	requestAnimationFrame(this.update.bind(this));


	// update clock
	let now = new Date().getTime();
	this.delta = now - (this.time || now);
	this.time = now;
	//test: console.log(this.time, this.delta)

	this.ship.update();

	this.render();
	//}, 1000 / fps);
}

Sim.render = function() {
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	//this.context.beginPath()

	let debug = "T " + this.time + " Δ " + (1000 / this.delta).toFixed(1) + "fps";
	this.context.font = "12px monospace";
	this.context.fillText(debug, 10, 20);

	this.ship.draw(this.context);

}



/**  keyboard events */

var Key = {
	// index of recognized keys
	BACKSPACE: 8,
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	A: 65,
	D: 68,
	W: 87,
	S: 83,

	// cache keys currently pressed here
	pressed: {},

	// methods for tracking key state
	isDown: function(keyCode) {
		return this.pressed[keyCode];
	},
	onKeydown: function(event) {
		this.pressed[event.keyCode] = true;
	},
	onKeyup: function(event) {
		delete this.pressed[event.keyCode];
	}
};



/**  utilities */

var Util = {
	degToRad: function(degrees) {
		return degrees * (Math.PI/180)
	},
	radToDeg: function(radians) {
		return radians * (180/Math.PI)
	}
};



/**  ship actor */

function Ship(domain) {
	this.domain = domain;
	this.x = 0 || domain.width/2;
	this.y = 0 || domain.height/2;
	this.xSpeed = 0;
	this.ySpeed = 0;
	this.TurnSpeed = 0;
	this.Direction = Math.PI*1.5;
}

Ship.prototype.update = function() {

	// physics 
	var Acceleration = 0.04,
		Friction = 0.00000014,
		TopSpeed = 5.0,
		LateralMod = 0.75,
		TurnAcceleration = 0.028,
		TurnFriction = 0.06,
		TurnMax = 3;

	// movement controls
	if (Key.isDown(Key.UP) || Key.isDown(Key.W)) {
			this.xSpeed += Math.cos(this.Direction)*Acceleration;
			this.ySpeed += Math.sin(this.Direction)*Acceleration;	
	}
	if (Key.isDown(Key.DOWN) || Key.isDown(Key.S)) {
			this.xSpeed -= Math.cos(this.Direction)*(Acceleration*LateralMod);
			this.ySpeed -= Math.sin(this.Direction)*(Acceleration*LateralMod);	
	}
	if (Key.isDown(Key.A)) {
		this.xSpeed += Math.cos(this.Direction-(Math.PI/2))*(Acceleration*LateralMod);
		this.ySpeed += Math.sin(this.Direction-(Math.PI/2))*(Acceleration*LateralMod);	
	}
	if (Key.isDown(Key.D)) {
		this.xSpeed -= Math.cos(this.Direction-(Math.PI/2))*(Acceleration*LateralMod);
		this.ySpeed -= Math.sin(this.Direction-(Math.PI/2))*(Acceleration*LateralMod);	
	}

	// Calculate Length of the Speed Vector with pythagoras
	var SpeedVectorLength = Math.sqrt((this.xSpeed * this.xSpeed) + (this.ySpeed * this.ySpeed));

	// Decrease Speed with Friction if moving
	if (SpeedVectorLength > 0) {
		this.xSpeed -= (this.xSpeed / SpeedVectorLength) * Friction;
		this.ySpeed -= (this.ySpeed / SpeedVectorLength) * Friction;
	}
	
	if (SpeedVectorLength > TopSpeed) {
		this.xSpeed += (this.xSpeed/SpeedVectorLength)*(TopSpeed - SpeedVectorLength);
		this.ySpeed += (this.ySpeed/SpeedVectorLength)*(TopSpeed - SpeedVectorLength);
	}

	//console.log(SpeedVectorLength)
	

	
	this.x += this.xSpeed;
	this.y += this.ySpeed;

	// Rotation Movement (Keys Left, Right)
	if (Key.isDown(Key.LEFT)) this.TurnSpeed -= TurnAcceleration;
	if (Key.isDown(Key.RIGHT)) this.TurnSpeed += TurnAcceleration;

	// Limit TurnSpeed
	if (this.TurnSpeed > TurnMax) this.TurnSpeed = TurnMax;
	if (this.TurnSpeed < -TurnMax) this.TurnSpeed = -TurnMax;

	this.Direction += this.TurnSpeed;

	if (this.Direction > Math.PI*2) this.Direction -= Math.PI*2;
	if (this.Direction < 0) this.Direction += Math.PI*2;


	// Apply Friction To Rotation
	if (this.TurnSpeed > TurnFriction) this.TurnSpeed -= TurnFriction;
	if (this.TurnSpeed < -TurnFriction) this.TurnSpeed += TurnFriction;

	// If Friction is Greater than Speed then Stop
	if (this.TurnSpeed < TurnFriction && this.TurnSpeed > -TurnFriction) this.TurnSpeed = 0;
	
	
	if (this.x > this.domain.width) this.x = 0;
	if (this.x < 0) this.x = this.domain.width;
	if (this.y > this.domain.height) this.y = 0; 
	if (this.y < 0) this.y = this.domain.height;
	
	
}

Ship.prototype.draw = function(context) {

	let shipAngle = 0.8,
		shipSize = 8;

	// clear path: turn off for drawing
	context.beginPath();

	context.lineWidth = 2;
	context.arc(this.x, this.y, shipSize, (this.Direction-Math.PI-shipAngle), (this.Direction-Math.PI+shipAngle), false);
	context.arc(this.x, this.y, shipSize, this.Direction, this.Direction, false);
	context.arc(this.x, this.y, shipSize, (this.Direction-Math.PI-shipAngle), (this.Direction-Math.PI+shipAngle), false);

	//context.fillRect(this.x - 2, this.y - 2, 4, 4);
	//context.arc(this.x, this.y, 4, 0, 2 * Math.PI, false);

	context.fillText(Util.radToDeg(this.Direction).toFixed(0), 10, 40);

	//context.fill();
	context.stroke();
	context.closePath();

}
