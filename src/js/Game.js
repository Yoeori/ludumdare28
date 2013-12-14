var Game = Class.extend({

	paused : false,
	GameRenderer : 0,
    keyboard : 0,
	player : 0,
	currenttextBox : 0,
	timer : 9*60,
	
	init : function() {
        this.keyboard = new Input();
		this.player = new EntityPlayer();
		this.currenttextBox = new Textbox();
		
		ObjectT = this;
		this.GameRenderer = requestAnimationFrame(function() {ObjectT.render();});
		setInterval(function() {ObjectT.update(15);},15);

		setInterval(function() {ObjectT.timer--;}, 1000);
		
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
		
		this.renderTimer();
		
		ObjectT = this;
		this.GameRenderer = requestAnimationFrame(function() {ObjectT.render();});
	},
	
	renderTimer : function() {
		ctx.font="36px victor";
		ctx.fillText(this.gettimertext(),canvas.width-130,50);
	},
	
	gettimertext : function() {
		var hour = Math.floor((this.timer/60));
		if(hour < 10)
			hour = "0"+hour;
		var min = this.timer%60;
		if(min < 10)
			min = "0"+min;
		return hour+":"+min;
	},
	
	mouseClicked : function() {
		//Do Nothing
	},
	
	keyPressed : function(e) {
		if(e == 13 && this.currenttextBox != 0)
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