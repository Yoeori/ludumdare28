var EntityPlayer = Class.extend({
	
	PosX : 0,
	PosY : 200,
	
	velY : 0,
	velX : 0,
	
	width: 100,
	height: 100,
	
	GROUNDHEIGHT : 624,
	GRAVITY : 1,
	
	world : 0,
	
	isJumping : false,
	
	init : function(world) {
		this.world = world;
	},
	
	render : function() {
		ctx.fillStyle = "orange";
		ctx.fillRect(this.PosX, this.PosY-this.height, this.width, this.height);
	},
	
	update : function(delta) {
		
		if(this.world.game.keyboard.w && !this.isJumping) {
			this.velY -= 23;
			this.isJumping = true;
		}
		
		this.PosY += this.velY;
		
		if(this.PosY >= this.GROUNDHEIGHT) {
			this.velY = 0;
			this.isJumping = false;
			this.PosY = this.GROUNDHEIGHT;
		} else {
			this.velY += this.GRAVITY;
		}
	}
	
});