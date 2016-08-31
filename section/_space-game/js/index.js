function Actor(base) {
	this.base = base;
}

Actor.prototype.changeHealth = function(change) {
	
	if (this.health === undefined)
		this.health = this.base.health

	this.health = this.health + change

	if (this.health <= 0)
		this.alive = false
	else
		this.alive = true

}



var ship = {};

ship["pug"] = new Actor({
	health: 120,
	power: 20
});

ship[1] = new Actor({
	name: "tug",
	health: 100,
	power: 16
});





function decision() {
	// retreat
	// attack
	// defend
	// talk 
	// trade
}