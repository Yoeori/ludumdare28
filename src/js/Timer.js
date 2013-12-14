var Timer = Class.extend({
	
	time : 0,
	lastupdate: 1000,
	isPaused : false,
	
	init : function(time) {
		this.time = time;
	},
	
	update : function(delta) {
		if(!this.isPaused) {
			this.lastupdate -= delta;
			if(this.lastupdate <= 0) {
				this.lastupdate += 1000;
				this.time--;
				if(this.time <= 0) {
					this.onTimerfinish();
				}
			}
		}
	},
	
	render : function() {
		var hour = Math.floor((this.time/60));
		if(hour < 10)
			hour = "0"+hour;
		var min = this.time%60;
		if(min < 10)
			min = "0"+min;
		
		ctx.font="36px victor";
		ctx.fillText(hour+":"+min,canvas.width-130,50);
	},
	
	addTime : function(timetoadd) { //Or remove time...
		this.time += timetoadd;
	},
	
	onTimerfinish : function() {
		//World destruction or something
	}
	
});