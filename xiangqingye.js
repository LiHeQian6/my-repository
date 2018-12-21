window.onload=function() {
	//顶部悬浮
	var cover=document.getElementById('cover');
	window.onscroll=function(){
		if((document.documentElement.scrollTop||document.body.scrollTop)>180)
			cover.style.position='fixed';
		else
			cover.style.position='static';
	}
	function getStyle(obj,style) {
		if(obj.currentStyle) {
			return obj.currentStyle[style];
		} else {
			return getComputedStyle(obj)[style];
		}
	}
	//右伸缩
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
}