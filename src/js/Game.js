var Game = Class.extend({

	paused : false,
	GameRenderer : 0,
    keyboard : 0,
	
	
	init : function() {
        this.keyboard = new Input();
		
		ObjectT = this;
		this.GameRenderer = requestAnimationFrame(function() {ObjectT.render();});
		setInterval(function() {ObjectT.update(15);},15);
		
	},
	
	update : function(deltaTime) {
		Tick++;

		
		for(var i = 0; i < sound.BgMusic.length; i++) {
			sound.BgMusic[i].update();
		}

	},
	
	render : function() {
		FPS++;
		
		ObjectT = this;
		this.GameRenderer = requestAnimationFrame(function() {ObjectT.render();});
	},
	
	mouseClicked : function() {
		//Do Nothing
	},
	
	keyPressed : function(e) {

		this.keyboard.onKeyDown(e);
	}
});