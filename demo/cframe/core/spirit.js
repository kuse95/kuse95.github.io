function PaperSets(srcs){
	this.imgs=[];
	for(x in srcs){
		this.imgs[x]=new Image();
		this.imgs[x].src= srcs[x];		
	}
	this.papernum= this.imgs.length;
	this.show= function(speed,px,py,sx,sy,angle){
		FrameDraw(this.imgs[parseInt(count*speed)%this.papernum],px,py,sx,sy,angle);
	}
}