var CutsceneGameOver = Class.extend({
	
	world : 0,
	
	init : function(world) {
		this.world = world;
	},
	
	update : function() {
		
	},
	
	render : function() {
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}
});