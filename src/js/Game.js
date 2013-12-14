var Game = Class.extend({

	paused : false,
	GameRenderer : 0,
    keyboard : 0,
	world : 0,
	
	init : function() {
        this.keyboard = new Input();
		this.world = new World();
		ObjectT = this;
		this.GameRenderer = requestAnimationFrame(function() {ObjectT.render();});
		setInterval(function() {ObjectT.update(15);},15);
		
	},
	
	update : function(deltaTime) {
		Tick++;
		
		if(!this.paused)
			this.world.update(deltaTime);
		
		for(var i = 0; i < sound.BgMusic.length; i++) {
			sound.BgMusic[i].update();
		}

	},
	
	render : function() {
		FPS++;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		this.world.render();
		
		ObjectT = this;
		this.GameRenderer = requestAnimationFrame(function() {ObjectT.render();});
	},
	
	mouseClicked : function() {
		//Do Nothing
	},
	
	keyPressed : function(e) {
		if(!this.paused)
			this.world.keyPressed(e);
		
		this.keyboard.onKeyDown(e);
	}
	
});