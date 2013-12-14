var Game = Class.extend({

	paused : false,
	GameRenderer : 0,
    keyboard : 0,
	player : 0,
	currenttextBox : 0,
	
	
	init : function() {
        this.keyboard = new Input();
		this.player = new EntityPlayer();
		this.currenttextBox = new Textbox();
		
		ObjectT = this;
		this.GameRenderer = requestAnimationFrame(function() {ObjectT.render();});
		setInterval(function() {ObjectT.update(15);},15);
		
	},
	
	update : function(deltaTime) {
		Tick++;
		
		this.player.update(deltaTime);
		
		if(this.currenttextBox != 0) 
			this.currenttextBox.update(deltaTime);
		
		for(var i = 0; i < sound.BgMusic.length; i++) {
			sound.BgMusic[i].update();
		}

	},
	
	render : function() {
		FPS++;
		
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(sml["bg"], 0, 0);
		
		this.player.render();
		
		if(this.currenttextBox != 0) 
			this.currenttextBox.render();
		
		ObjectT = this;
		this.GameRenderer = requestAnimationFrame(function() {ObjectT.render();});
	},
	
	mouseClicked : function() {
		//Do Nothing
	},
	
	keyPressed : function(e) {
		if(e = 13 && this.currenttextBox != 0)
			this.stopTextbox();
		
		this.keyboard.onKeyDown(e);
	},
	
	setTextbox : function(text) {
		this.currenttextBox = text;
	},
	
	stopTextbox : function() {
		if(this.currenttextBox.canenter)
			this.currenttextBox = 0;
	}
	
});