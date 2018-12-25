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
	//放大镜
	function magnifier(){
		var img1=document.getElementById('img1');
		var slider=document.getElementById('slider');
		var img2=document.getElementById('img2');
		var box=document.getElementById('box');
		var Bimg=document.getElementById('Bimg');
		img1.onmouseover=function() {
			slider.style.display='inline-block';
			img2.style.display='inline-block'
		}
		img1.onmouseout=function() {
			slider.style.display='none';
			img2.style.display='none'
		}
		img1.onmousemove=function(e){
			var sHeight=slider.offsetHeight;
			var sWidth=slider.offsetWidth;
			var iHeight=img1.offsetHeight;
			var iWidth=img1.offsetWidth;
			var oT=e.clientY-box.offsetTop-sHeight/2+getScrollTop();
			var oL=e.clientX-box.offsetLeft-sWidth/2;
			slider.style.top=oT<0?oT=0:(oT>iHeight-sHeight?oT=iHeight-sHeight:oT)+'px';
			slider.style.left=oL<0?oL=0:(oL>iWidth-sWidth?oL=iWidth-sWidth:oL)+'px';
			Bimg.style.top=-(oT<0?oT=0:(oT>iHeight-sHeight?oT=iHeight-sHeight:oT))*(1000/408)+'px';
			Bimg.style.left=-(oL<0?oL=0:(oL>iWidth-sWidth?oL=iWidth-sWidth:oL)*(1000/408))+'px';
		}
	}
	magnifier();
	function getScrollTop() {  
        var scrollPos;  
        if (window.pageYOffset) {  
        scrollPos = window.pageYOffset;
        }  
        else if (document.compatMode && document.compatMode != 'BackCompat'){ 
        	scrollPos = document.documentElement.scrollTop;
        }  
        else if (document.body) { 
        	scrollPos = document.body.scrollTop;
        }   
        return scrollPos;   
	} 
	//容量选择
	var sel=document.getElementsByClassName('ml');
	var xuanze=document.getElementsByClassName('xuanze')[0];
	sel[0].onclick=function(){
		this.id="sele";
		sel[1].id="";
		var ml=document.getElementById('sele');
		xuanze.lastElementChild.innerHTML='"'+ml.innerHTML+'"';
	}
	sel[1].onclick=function(){
		this.id="sele";
		sel[0].id="";
		var ml=document.getElementById('sele');
		xuanze.lastElementChild.innerHTML='"'+ml.innerHTML+'"';
	}
	//数量加减
	var add=document.getElementsByClassName('uppr')[0];
	var num=document.getElementsByClassName('num')[0];
	var kucun=document.getElementsByClassName('kucun')[0];
	add.firstElementChild.onclick=function(){
		if(num.value>1)
			num.value--;
		if(num.value<=1)
			add.firstElementChild.style.cursor="not-allowed";
	}
	add.lastElementChild.onclick=function(){
		add.firstElementChild.style.cursor="pointer";
		if(num.value<kucun.innerHTML)
			num.value++;
	}
	num.onchange=function(){
		add.firstElementChild.style.cursor="pointer";
		if(this.value<=1){
			this.value=1;
			add.firstElementChild.style.cursor="not-allowed";
		}
		else if(this.value>kucun.innerHTML)
			this.value=kucun.innerHTML;
	}
	//放大镜换图片
	var show=document.getElementsByClassName('sml')[0];
	show.children[1].onclick=function(){
		show.children[2].className="";
		this.className="bor";
		img1.firstElementChild.src="./img/pp0.jpeg";
		img2.firstElementChild.src="./img/pp0.jpeg";
	}
	show.children[2].onclick=function(){
		show.children[1].className="";
		this.className="bor";
		img1.firstElementChild.src="./img/pp1.jpeg";
		img2.firstElementChild.src="./img/pp1.jpeg";
	}
	//加入购物车
	var shopcar=document.getElementsByClassName('but')[1];
	var upper=document.getElementById('upper');
	var windows=document.getElementById('windows');
	shopcar.onclick=function(){
		upper.style.display='inline-block';
		windows.style.display='inline-block';
	}
	windows.firstElementChild.onclick=function(){
		upper.style.display='none';
		windows.style.display='none';
	}
	windows.children[2].onclick=function(){
		upper.style.display='none';
		windows.style.display='none';
	}
	windows.children[3].onclick=function(){
		upper.style.display='none';
		windows.style.display='none';
	}

}