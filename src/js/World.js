var World = Class.extend({
	
	player : 0,
	currenttextBox : 0,
	timer : 0,
	
	init : function() {
		this.player = new EntityPlayer();
		this.timer = new Timer(24*60);
		
		//Create first storylinetextbox
		var storytextbox = Textbox.extend({
			
			onEnter : function() {
				
				return true;
			}
			
		});
		this.currenttextBox = new Textbox(this, ["Welcome a board of the", "[Alien Jibberish] ship!"]);
	},
	
	update : function(deltaTime) {
		
		this.player.update(deltaTime);
		this.timer.update(deltaTime);
		if(this.currenttextBox != 0) 
			this.currenttextBox.update(deltaTime);
		
	},
	
	render : function() {
		
		ctx.drawImage(sml["bg"], 0, 0);
		
		this.player.render();
		
		if(this.currenttextBox != 0) 
			this.currenttextBox.render();
		
		this.timer.render();
	},
	
	keyPressed : function(e) {
		
		if((e == 13 || e == 32) && this.currenttextBox != 0)
			this.stopTextbox();
		
	},
	
	setTextbox : function(text) {
		this.currenttextBox = text;
	},
	
	stopTextbox : function() {
		if(this.currenttextBox.canenter) {
			if(!this.currenttextBox.onEnter())
				this.currenttextBox = 0;
		}
	}
	
	
});