function execMessage(e){
    if(e.source!=window.parent) return;
    var data=e.data;
	data= JSON.parse(data);
	if(data["method"]=="onPageup"){
		world.pageup()
	}
	if(data["method"]=="onPagedown"){
		world.pagedown();
	}
	
	if(data["method"]=="onJumpPage"){
		p= data["toPage"];
		world.topage(p-1);
	}
	if(data["method"]=="onFileMessage"){
		world.boards[world.page].status= data["status"];
		px= data["posx"];
		py= data["posy"];
		world.boards[world.page].exec(px,py);
	}
	//world.page= data["page"];
	//world.boards[world.page].status= data["status"];
}

function doKeydown(event){
	var x= event.keyCode;
	//console.log(x);

}

function doKeyup(event){
	var x= event.keyCode;

}

function ExecMove(x,y){
	if(isrotate==1 ){
		tempx= x;
		x=y;
		y=SizeY-tempx;
	}
} 

function Exec(x,y){
	if(isrotate==1 ){
		tempx= x;
		x=y;
		y=SizeY-tempx;
	}

	ex= x-framepx;
	ey= y-framepy;
	rx= ex/framesx;
	ry= ey/framesy;
	//console.log(rx,ry);

	
	world.exec(rx,ry);
	
}


/*-----------------------------------  Â´Â¥Ã†ÃÃÃ Â¹Ã˜Â²Ã™Ã—Ã·  ------------------------------------*/                      
function doTouchStart(event) { 
	for (v in event.targetTouches){
		var touch = event.targetTouches[v];
		var x = touch.pageX; 
		var y = touch.pageY; 	
		Exec(x,y);
		
	}
	event.preventDefault();
}

function doTouchMove(event) { 
	for (v in event.targetTouches){
		var touch = event.targetTouches[v];
		var x = touch.pageX; 
		var y = touch.pageY; 	
		ExecMove(x,y);
	}
	event.preventDefault();
}
function doTouchEnd(event) { 
	for (v in event.changedTouches){
		var touch = event.changedTouches[v];
		var x = touch.pageX; 
		var y = touch.pageY; 	
	}
	event.preventDefault();
}

/*-----------------------------------  ÃŠÃ³Â±ÃªÃÃ Â¹Ã˜Â²Ã™Ã—Ã·  ------------------------------------*/
function doMouseDown(event) { 
	var x = event.pageX; 
	var y = event.pageY; 
	Exec(x,y);
	
}
function doMouseMove(event) { 
	var x = event.pageX; 
	var y = event.pageY; 
}
function doMouseUp(event) { 
	var x = event.pageX; 
	var y = event.pageY; 
	ExecMove(x,y);
}


/*-----------------------------------   Ã–Ã·Â¼Ã†ÃŠÃ½Ã‚ÃŸÂ¼Â­   ------------------------------------*/
function Work(){
	for(xy =0;xy<depends.length;xy++){
		if(world.boards[xy]==0&&count>xy*500-450){
			world.boards[xy]= eval("new " +depends[xy]);
			console.log(world.boards);
			console.log(xy);
		}
	}
	world.work();
	
	count++;
}