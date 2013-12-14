var EntityPlayer = Class.extend({
	
	PosX : 0,
	PosY : 200,
	
	velY : 0,
	velX : 0,
	
	width: 84,
	height: 168,
	
	facing : true,
	
	GROUNDHEIGHT : 624,
	GRAVITY : 1,
	
	world : 0,
	
	isJumping : false,
	
	init : function(world) {
		this.world = world;
	},
	
	render : function() {
	
		if(this.facing == true) {
			ctx.drawImage(sml["player"],							// Image
				  		  0,										// Start X on image
						  0,										// Start Y on image
						  this.width, 								// Width in image to display
						  this.height,								// Height in image to display
						  this.PosX, 								// Position X
						  this.PosY-this.height,					// Position Y
						  this.width,								// Width to display
						  this.height);								// Height to display
		} else {
			ctx.save();
			ctx.translate(this.width, 0);
			ctx.scale(-1, 1);
			ctx.drawImage(sml["player"], 
						  0, 
						  0,
						  this.width, 
						  this.height,
						  -(this.PosX), 
						  this.PosY-this.height, 
						  this.width, 
						  this.height);
			ctx.restore();
		}
	},
	
	update : function(delta) {
		
		if((this.world.game.keyboard.w || this.world.game.keyboard.up) && !this.isJumping) {
			this.velY -= 23;
			this.isJumping = true;
		}
		
		if(this.world.game.keyboard.d || this.world.game.keyboard.right) {
			this.velX += 12;
		}
		
		if(this.world.game.keyboard.a || this.world.game.keyboard.left) {
			this.velX -= 12;
		}
		
		this.velX *= 0.35;
		if(Math.abs(this.velX) <= 0.35)
			this.velX = 0;
		
		this.PosY += this.velY;
		this.PosX += this.velX;
		if(this.PosY >= this.GROUNDHEIGHT) {
			this.velY = 0;
			this.isJumping = false;
			this.PosY = this.GROUNDHEIGHT;
		} else {
			this.velY += this.GRAVITY;
		}
		
		this.facing = this.velX >= 0;
	}
	
});