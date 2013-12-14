var World = Class.extend({
	
	player : 0,
	currenttextBox : 0,
	timer : 24*60,
	updatetimer : 1000,
	
	init : function() {
		this.player = new EntityPlayer();
		this.currenttextBox = new Textbox();
	},
	
	update : function(deltaTime) {
		
		this.updatetimer -= deltaTime;
		if(this.updatetimer <= 0) {
			this.updatetimer += 1000;
			this.timer--;
		}
		
		this.player.update(deltaTime);
		
		if(this.currenttextBox != 0) 
			this.currenttextBox.update(deltaTime);
		
	},
	
	render : function() {
		
		ctx.drawImage(sml["bg"], 0, 0);
		
		this.player.render();
		
		if(this.currenttextBox != 0) 
			this.currenttextBox.render();
		
		this.renderTimer();
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
	
	keyPressed : function(e) {
		
		if(e == 13 && this.currenttextBox != 0)
			this.stopTextbox();
		
	},
	
	setTextbox : function(text) {
		this.currenttextBox = text;
	},
	
	stopTextbox : function() {
		if(this.currenttextBox.canenter)
			this.currenttextBox = 0;
	}
	
	
});