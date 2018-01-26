function test () {
	this.bg = new Image();
	this.bg.src = "test/img/bg.jpg";
	this.playbtns = [];
	this.playbtns[0] = new Image();
	this.playbtns[0].src = "test/img/btn/play_nomal.png";
	this.playbtns[1] = new Image();
	this.playbtns[1].src = "test/img/btn/play.png";
	this.playbtns[2] = 0;
	this.eyes = [];
	this.eyes[0] = new Image();
	this.eyes[0].src = "test/img/eye1@2x.png";
	this.eyes[1] = new Image();
	this.eyes[1].src = "test/img/eye2@2x.png";

	this.showword = new Image();
	this.showword.src = "test/img/show_word_back.png";
	this.whiteline = new Image();
	this.whiteline.src = "test/img/white_line.png";
	this.whiteback = new Image();
	this.whiteback.src = "test/img/white_back.png";
	this.boxW = 295/1600*.8;
	this.boxH = 295/900*.8;
	this.clickIndex = -1;
	this.gobackbtns = [];
	this.gobackbtns[0] = new Image();
	this.gobackbtns[0].src = "test/img/btn/goback_nomal.png";
	this.gobackbtns[1] = new Image();
	this.gobackbtns[1].src = "test/img/btn/goback.png";
	this.gobackbtns[2] = 0;
	this.startbtns = []; 
	this.startbtns[0] = new Image();
	this.startbtns[0].src = "test/img/btn/start_nomal.png";
	this.startbtns[1] = new Image();
	this.startbtns[1].src = "test/img/btn/start.png";
	this.startbtns[2] = 0;

	this.bkg = new Image();
	this.bkg.src = "test/img/background.png";
	var srcs = [];
	for (var i = 0; i < 4; i++) {
		srcs[i] = "test/img/gif/race_center/"+i+".png";
	};
	this.car = new PaperSets(srcs);
	this.carPoint = [.5,.574];
	this.pos = 0;
	srcs = [];
	for (var i = 0; i < 2; i++) {
		srcs[i] = "test/img/gif/road/"+(i+1)+".png";
	};
	this.road = new PaperSets(srcs);
	this.balloon = new Image();
	this.balloon.src = "test/img/balloon.png";
	this.currentTest = -1;
	this.count = -1;
	this.miss = 0;
	this.collect = 0;
	this.pressed = new Image();
	this.pressed.src = "test/img/btn/pressed.png";
	this.opctions = [];
	this.opctionW = 282/1600*.8;
	this.opctionH = 282/900*.8;
	this.isTestTrue = -1;
	this.missI = new Image();
	this.missI.src = "test/img/miss.png";
	this.collectI = new Image();
	this.collectI.src = "test/img/collect.png";

	this.bgm = new Audio();
	this.bgm.src = "test/sound/backmusic.mp3";
	this.bgm.volume = 0.6;
	this.audio1 = new Audio();
	this.audio1.src = "test/sound/Let's listen.mp3";
	this.audio2 = new Audio();
	this.audio2.src = "test/sound/showword.mp3";
	this.missAudio = new Audio();
	this.missAudio.src =  "test/sound/miss.mp3";
	this.goodAudio = new Audio();
	this.goodAudio.src = "test/sound/good.mp3";
	this.status = 0;
	this.speed = 0;
	this.rend = function(){
		if(this.status === 0){
			FrameDraw(this.bg,.5,.5,1,1);
			FrameDraw(this.playbtns[this.playbtns[2]],.88,.88,306/1600*.8,132/900*.8);
			var scale = Math.abs(this.speed-25)/25;
			FrameDraw(this.eyes[0],.642+.007*scale,.494-.016*scale,22/1600,33/900);
			FrameDraw(this.eyes[1],.699+.007*scale,.494-.016*scale,22/1600,33/900);
		}else if(this.status === 1){
			FrameDraw(this.showword,.5,.5,1,1);
			for (var i = 0; i < this.goods.length; i++) {
				var x = .2+(i%5)*(this.boxW+.01),y = .18+parseInt(i/5)*(this.boxH+.02);
				if(i === this.clickIndex){
					FrameDraw(this.whiteback,x,y,this.boxW,this.boxH);
				}else{
					FrameDraw(this.whiteline,x,y,this.boxW,this.boxH);
				}
				FrameDraw(this.goods[i].img,x,y,this.boxW,this.boxH);
			};
			if(this.clickIndex !== -1){
				FrameTxt(this.goods[this.clickIndex].label,8,.45,.7,'#000');
			}

			FrameDraw(this.gobackbtns[this.gobackbtns[2]],.12,.8,237/1600*.8,238/900*.8);
			FrameDraw(this.startbtns[this.startbtns[2]],.88,.8,238/1600*.8,238/900*.8);
		}else if(this.status === 2){
			FrameDraw(this.bkg,.5,.5,1,1);
			var ang = 0;
			switch(this.pos){
				case 0:
					this.carPoint[0] = .5;
					break;
				case 1:
					this.carPoint[0] = .28;
					ang = -25;
					break;
				case 2:
					this.carPoint[0] = .72;
					ang = 25;
					break;
			}
			this.road.show(.7,.5,.574,700/1600*.78,1200/900*.51);
			var scale = Math.abs((count%100)-50)/50;
			FrameDraw(this.balloon,.24+.04*scale,.24,421/1600*.7,438/900*.7);
			if(this.currentTest!==-1){
				FrameTxt(this.goods[this.currentTest].label,4,.2+.04*scale,.195,'#fff');
				FrameTxt(this.goods[this.currentTest].label,6,.45,.976);
			}
			FrameTxt(this.collect,6,.212,.976,'#fff');
			FrameTxt(this.miss,6,.836,.976,'#fff');
			FrameDraw(this.pressed,.04,.954,116/1600*.7,116/900*.7);
			if(this.count%400 > 50&&this.count%400-50 <= 150){
				var scale = 1,speed = (this.count%400-80)/120;
				speed = speed>1?1:speed<0?0:speed;
				scale = .2+.8*speed;
				if(this.count%400<=80){
					tempContext.globalAlpha = (this.count%400-50)/20;
				}
				for (var i = 0; i < this.opctions.length; i++) {
					var ox = .51,oy = .24+.5*speed;
					if(i!==0){
						if(i%2 === 0){
							ox = ox + (this.opctionW+.07)*scale;
						}else{
							ox = ox - (this.opctionW+.07)*scale;
						}
					}
					if(this.count%400-50 >= 100&&this.pos === i){
						//破了
					}else{
						FrameDraw(this.whiteback,ox,oy,this.opctionW*scale,this.opctionH*scale);
						FrameDraw(this.goods[this.opctions[i]].img,ox,oy,this.opctionW*scale,this.opctionH*scale);
					}
					
				};
				tempContext.globalAlpha = 1;
			}
			this.car.show(.7, this.carPoint[0],.74,426/1600*.76,356/900*.76,ang);

			if(this.isTestTrue!==-1){
				var scale = 1+.4*(this.speed/50);
				if(this.isTestTrue){
					FrameDraw(this.collectI,.5,.5,534/1600*scale,220/900*scale);
				}else{
					FrameDraw(this.missI,.5,.5,336/1600*scale,216/900*scale);
				}
			}
		}
	}
	this.work = function(){
		if(this.status === 0){
			if(this.audio1.readyState==4&&!this.audio1.ended){
				this.audio1.play();
			}else if(this.audio1.ended){
				this.bgm.play();
			}
			if(count%100 === 0){
				if(this.speed === 50){
					this.speed = 1;
				}else{
					this.speed = 25
				}
			}
			if(this.speed>0&&this.speed<50&&this.speed!==24){
				this.speed++;
			}
		}else if(this.status === 2){
			if(this.count!==-1){
				this.count++;
			}
			if(this.count%400 == 0){
				this.currentTest++;
				if(this.currentTest>=this.goods.length-1){
					this.count = -1;
				}
				this.goods[this.currentTest].sound.play();
			}
			if(this.currentTest!=-1){
				if(this.count%400 === 50){
					var pre = this.currentTest - 2;
					pre = pre<0?this.goods.length-1:pre;
					var next = this.currentTest + 2;
					next = next>this.goods.length-1?0:next;
					this.opctions = [pre,this.currentTest,next];
					this.opctions.sort(function(a,b){
						return (0.5-Math.random());
					})
				}
				if(this.count%400-50 === 100){
					if(this.opctions[this.pos]===this.currentTest){
						this.isTestTrue = true;
						this.collect++;
						this.goodAudio.play();
					}else{
						this.isTestTrue = false;
						this.miss++;
						this.missAudio.play();
					}
					this.speed = 1;
				}
				if(this.isTestTrue!==-1){
					if(this.speed>0&&this.speed<50){
						this.speed++;
						if(this.speed === 50 ){
							this.isTestTrue = -1;
						}
					}
				}
			}
			
		}
	}

	this.exec = function(rx,ry){
		if(this.status === 0){
			if(rx>.88-0.0765&&rx<.88+0.0765&&ry>.88-0.0587&&ry<.88+132/900/2){
				this.audio1.pause();
				this.playbtns[2] = 1;
				this.bgm.volume = 0.4;
				this.audio2.play();
				this.status = 1;
			}
		}else if(this.status === 1){
			for (var i = 0; i < this.goods.length; i++) {
				var x = .22+(i%5)*(this.boxW+.01),y = .18+parseInt(i/5)*(this.boxH+.02);
				if(rx>x-this.boxW/2&&rx<x+this.boxW/2&&ry>y-this.boxH/2&&ry<y+this.boxH/2){
					if(!this.audio2.ended){
						this.audio2.pause();
					}
					this.clickIndex = i;
					this.goods[i].sound.play();
				}
			};
			if(rx>.12-0.0593&&rx<.12+0.0593&&ry>.8-0.1058&&ry<.8+0.1058){
				this.gobackbtns[2] = 1;
				this.playbtns[2] = 0;
				this.status = 0;
			}
			if(rx>.88-0.0593&&rx<.88+0.0593&&ry>.8-0.1058&&ry<.8+0.1058){
				this.status = 2;
				this.count = 0;
			}
		}else if(this.status === 2){
			if(ry>.5&&ry<.91){
				if(rx>0&&rx<.34){
					this.pos = 1;
				}else if(rx>.34&&rx<.65){
					this.pos = 0;
				}else{
					this.pos = 2;
				}
			}
			if(rx>.04-0.0254&&rx<.04+0.0254&&ry>.954-0.045&&ry<.954+0.045){
				this.status = 1;
			}
			console.log(rx,ry);
		}
	}
	var initData = function(){
		var deudate = ["clock","flower","lemonade","mountain","painting","river","sun","tree","water"];
		var imglib = "test/img/goods/",soundlib = "test/sound/goods/";
		var result = [];
		for (var i = 0; i < deudate.length; i++) {
			var data = {
				img : new Image(),
				sound : new Audio(),
				label: deudate[i]
			}
			data.img.src = imglib+deudate[i]+".png";
			data.sound.src = soundlib+deudate[i]+".mp3";
			result.push(data)
		};
		return result;
	}
	this.goods = initData();
}