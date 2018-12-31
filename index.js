window.onload=function() {
	//顶部悬浮
	var cover=document.getElementById('cover');
	window.onscroll=function(){
		if((document.documentElement.scrollTop||document.body.scrollTop)>180)
			cover.style.position='fixed';
		else
			cover.style.position='static';
	}
	//轮播图
	var slider=document.getElementById("slider");
	var box=document.getElementById('box');
	var left=document.getElementById('left');
	var right=document.getElementById('right');
	var oNavlist=document.getElementById('nav').children;
	var index=1;
	function lunbo(){
		if(parseInt(getStyle(slider,'left'))%800==0){
			++index;
			animate(slider,{left:-800*index},function(){
				if(index==7){
					slider.style.left=-800+'px';
					index=1;
				}
			});
			navchange(index);
		}
	}
	var timer=setInterval(lunbo,3200);
	function animate(obj,json,callback){
		clearInterval(obj.timer);
		obj.timer=setInterval(
			function(){
				var isStop=true;
				for(var attr in json){
					if(attr=='opacity'){
						var now=parseInt(getStyle(obj,attr)*100);
					}else{
						var now=parseInt(getStyle(obj,attr));
					}
					var speed=(json[attr]-now)/5;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
					if(attr=='opacity'){
						obj.style[attr]=(now+speed)/100;
					}else{
						obj.style[attr]=now+speed+'px';
					}
					var current=now+speed;
					if(json[attr]!==current){
						isStop=false;
					}
				}
				if(isStop){
					clearInterval(obj.timer);
					callback&&callback();
				}
		},40)
	}
	function getStyle(obj,style){
    	if(getComputedStyle(obj))
    	return getComputedStyle(obj)[style]
    	else
    		obj.currentStyle[style]
    }
    box.onmouseover=function(){
    	clearInterval(timer);
    	animate(left,{opacity:50});
    	animate(right,{opacity:50});
    }
    box.onmouseout=function(){
    	timer=setInterval(lunbo,3200);
    	animate(left,{opacity:0});
    	animate(right,{opacity:0});
    }
    right.onclick=lunbo;
    left.onclick=function(){
    	if(parseInt(getStyle(slider,'left'))%800==0){
    		index--;
			animate(slider,{left:-800*index},function(){
				if(index==0){
					slider.style.left=-4800+'px';
					index=6; 
				}
			});
			navchange(index);
    	}
    }
    for (var i = oNavlist.length - 1; i >= 0; i--) {
    	oNavlist[i].index=i+1;
    	oNavlist[i].onclick=function(){
    		index=this.index;
    		animate(slider,{left:-800*this.index});
    		navchange(this.index);
    	}
    }
    function navchange(n){
    	for (var i = oNavlist.length - 1; i >= 0; i--) {
    		oNavlist[i].className="";
    	}
    	if(n==7)
    		oNavlist[0].className="active";
    	else if(n==0)
    		oNavlist[5].className="active";
    	else
    		oNavlist[n-1].className="active";
    }
	//话费金额
	var money=document.getElementsByTagName('select')[0];
	money.onchange=function(){
		money.nextElementSibling.innerHTML='￥'+money.value;
	}
	//公告滚动
	var gonggao=document.getElementById('gonggao');
	for (var i = 0; i<gonggao.children.length; i++) {
			gonggao.children[i].style.top=i*30+'px';
		}
	function gg(){
		id2=setInterval(function(){
			for (var i = gonggao.children.length - 1; i >= 0; i--){
				if(parseInt(getStyle(gonggao.children[i],'top'))<=-30)
					gonggao.children[i].style.top=390+'px';
				animate2(gonggao.children[i],{top:parseInt(getStyle(gonggao.children[i],'top'))-30});
			}
		},560);
	}
	gg();
	function animate2(obj,json,callback){
		clearInterval(obj.timer);
		obj.timer=setInterval(
			function(){
				var isStop=true;
				for(var attr in json){
					var now=parseInt(getStyle(obj,attr));
					var speed=-3;
					obj.style[attr]=now+speed+'px';
					var current=now+speed;
					if(json[attr]!==current){
						isStop=false;
					}
				}
				if(isStop)
					clearInterval(obj.timer);
		},40)
	}
	//右侧伸缩
	function shensuo(){
		var xuanfu=document.getElementsByClassName('xuanfu')[0];
		var id0,id1,id2,id3,id4,id5,id6,id7;
		xuanfu.children[0].onmouseover=function(){
			clearInterval(id1);
			id0=animate3(this,'left');
		}
		xuanfu.children[0].onmouseout=function(){
			clearInterval(id0);
			id1=animate4(this,'left');
		}
		xuanfu.children[1].onmouseover=function(){
			clearInterval(id3);
			id2=animate3(this,'left');
		}
		xuanfu.children[1].onmouseout=function(){
			clearInterval(id2);
			id3=animate4(this,'left');
		}
		xuanfu.children[2].onmouseover=function(){
			clearInterval(id5);
			this.lastElementChild.src='./img/erwei.png';
			this.lastElementChild.style.marginTop=0+'px';
			id4=animate3(this,'left');
		}
		xuanfu.children[2].onmouseout=function(){
			clearInterval(id4);
			this.lastElementChild.src='./img/serwei.png';
			this.lastElementChild.style.marginTop=40+'px';
			id5=animate4(this,'left');
		}
		xuanfu.children[3].onmouseover=function(){
			clearInterval(id7);
			id6=animate3(this,'left');
		}
		xuanfu.children[3].onmouseout=function(){
			clearInterval(id6);
			id7=animate4(this,'left');
		}
	}
	shensuo();
	function animate3(obj,attr){
		var a=parseInt(getStyle(obj,attr));
		var m=a;
		var id=setInterval(function(){
			if(a!=0)
				obj.style[attr]=(a-=2)+"px";
			else
				clearInterval(id);
		},10);
		return id;
	}
	function animate4(obj,attr){
		var a=parseInt(getStyle(obj,attr));
		var m=a;
		var id=setInterval(function(){
			if(a!=80)
				obj.style[attr]=(a+=2)+"px";
			else
				clearInterval(id);
		},10);
		return id;
	}
	 //公告移入移出
	 var gonggao=document.getElementById('gonggao');
	 gonggao.onmouseover=function(){
	 	clearInterval(id2);
	 }
	 gonggao.onmouseout=function(){
	 	gg();
	 }
}


