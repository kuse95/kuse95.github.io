function World(){
	
	
	this.boards=[];
	this.page= 0;
	
	board= eval("new " +depends[0]);
	this.boards.push(board);
	for(x=1;x<depends.length;x++){
		this.boards.push(0);	
	}
	
	this.work= function(){
		this.boards[this.page].work();
	}
	this.rend=function(){
		this.boards[this.page].rend();
	}
	
	
	this.exec= function(rx,ry){
		// var a={"method":"onFileMessage","posx":rx,"posy":ry,"status":this.boards[this.page].status}
		// console.log(a);
		// a=JSON.stringify(a);
		
		/*ç½‘ç»œç‰ˆ*/
		// window.parent.postMessage(a,'*');
		
		
		if(rx>0.9&&ry<0.1){
			this.pagedown();
			return;
		}
		this.boards[this.page].exec(rx,ry);
	}
	
	
	this.pageup=function(){
		if(this.page>0){
			this.page--;
			if(this.boards[this.page]==0){
				this.boards[this.page]= eval("new " +depends[this.page]);
			}
		}
			
	}
	this.pagedown=function(){
		if(this.page<depends.length-1){
			this.page++;
			if(this.boards[this.page]==0){
				this.boards[this.page]= eval("new " +depends[this.page]);
			}
			if(this.boards[this.page-1].pagedown){
				this.boards[this.page-1].pagedown();
			}
		}
		if(this.boards[this.page-1].pagedown){
			this.boards[this.page-1].pagedown();
		}
	}
	
	this.topage=function(p){
		this.page=p;
		if(this.boards[this.page]==0){
			this.boards[this.page]= eval("new " +depends[this.page]);
		}
		if(this.boards[this.page-1].pagedown){
				this.boards[this.page-1].pagedown();
		}
	}
}


