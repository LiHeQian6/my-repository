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
	var dian=document.getElementsByClassName('dian');
	dian[0].style.backgroundColor='#fe6c00';
	dian[0].style.color='#476954';
	function lunbo(){
		var img=document.getElementsByClassName('ban');
		id1=setInterval(function(){
			for (var i = img.length - 1; i >= 0; i--)
				animate1(img[i],'left',-800);
			for (var i = img.length - 1; i >= 0; i--){
				if(0<=parseInt(getStyle(img[i],'left'))&&parseInt(getStyle(img[i],'left'))<800){
			 		if(i<5){
			 			dian[i+1].style.backgroundColor='#fe6c00';
			 			dian[i+1].style.color='#476954';
			 		}
			 		else{
			 			dian[0].style.backgroundColor='#fe6c00';
			 			dian[0].style.color='#476954';
			 		}
			 	}
			 	else{
			 		if(i<5){
			 			dian[i+1].style.backgroundColor='white';
			 			dian[i+1].style.color='black';
			 		}
			 		else{
			 			dian[0].style.backgroundColor='white';
			 			dian[0].style.color='black';
			 		}
		 		}
			}
		},3000);
	}
	var img=document.getElementsByClassName('ban');
	for (var i =0; i <img.length; i++) {
			img[i].style['left']=i*800+'px';
		}
	lunbo();
	function animate1(obj,attr,num){
		var a=parseInt(getStyle(obj,attr));
		var m=a;
		var id=setInterval(function(){
			if(a!=m+num)
				obj.style[attr]=(a-=10)+"px";
			else
				clearInterval(id);
			if(a<=-800)
			obj.style['left']=5*800+'px';
		},10);
	}
	function getStyle(obj,style) {
		if(obj.currentStyle) {
			return obj.currentStyle[style];
		} else {
			return getComputedStyle(obj)[style];
		}
	}
	//话费金额
	var money=document.getElementsByTagName('select')[0];
	money.onchange=function(){
		money.nextElementSibling.innerHTML='￥'+money.value;
	}
	//公告滚动
	var gonggao=document.getElementById('gonggao');
	for (var i = 0; i<gonggao.children.length; i++) {
			gonggao.children[i].style.top=i*29+'px';
		}
	function gg(){
		id2=setInterval(function(){
			for (var i = gonggao.children.length - 1; i >= 0; i--)
				animate2(gonggao.children[i],'top',-29);
			},330);
	}
	gg();
	function animate2(obj,attr,num){
		var a=parseInt(getStyle(obj,attr));
		var m=a;
		var id=setInterval(function(){
			if(a!=m+num)
				obj.style[attr]=(a-=1)+"px";
			else
				clearInterval(id);
			if(a==-29)
				obj.style[attr]=(gonggao.children.length-1)*29+'px';
		},10);
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
	//轮播图移入
	 var bann=document.getElementById('banner');
	 bann.onmouseover=function(){
	 	clearInterval(id1);
	 	bann.lastElementChild.style.display='inline-block';
	 	bann.lastElementChild.previousElementSibling.style.display='inline-block';
	 }
	 bann.onmouseout=function(){
		bann.lastElementChild.style.display='none';
	 	bann.lastElementChild.previousElementSibling.style.display='none';
	 	lunbo();
	 }
	 //点击左右箭头
	 bann.lastElementChild.onclick=function(){
	 	if(parseInt(getStyle(img[0],'left'))%800==0){
	 		for (var i = img.length - 1; i >= 0; i--){
	 			animate1(img[i],'left',-800);
	 			if(0<=parseInt(getStyle(img[i],'left'))&&parseInt(getStyle(img[i],'left'))<800){
			 		if(i<5){
			 			dian[i+1].style.backgroundColor='#fe6c00';
			 			dian[i+1].style.color='#476954';
			 		}
			 		else{
			 			dian[0].style.backgroundColor='#fe6c00';
			 			dian[0].style.color='#476954';
			 		}
			 	}
			 	else{
			 		if(i<5){
			 			dian[i+1].style.backgroundColor='white';
			 			dian[i+1].style.color='black';
			 		}
			 		else{
			 			dian[0].style.backgroundColor='white';
			 			dian[0].style.color='black';
			 		}
		 		}
	 		}
	 	}
	 }
	 bann.lastElementChild.previousElementSibling.onclick=function(){
	 	if(parseInt(getStyle(img[0],'left'))%800==0){
	 		for (var i = img.length - 1; i >= 0; i--){
	 			var a=parseInt(getStyle(img[i],'left'));
				if(a>=5*800)
					img[i].style['left']=-800+'px';
				if(0<=parseInt(getStyle(img[i],'left'))&&parseInt(getStyle(img[i],'left'))<800){
			 		if(i>0){
			 			dian[i-1].style.backgroundColor='#fe6c00';
			 			dian[i-1].style.color='#476954';
			 		}
			 		else{
			 			dian[5].style.backgroundColor='#fe6c00';
			 			dian[5].style.color='#476954';
			 		}
			 	}
			 	else{
			 		if(i>0){
			 			dian[i-1].style.backgroundColor='white';
			 			dian[i-1].style.color='black';
			 		}
			 		else{
			 			dian[5].style.backgroundColor='white';
			 			dian[5].style.color='black';
			 		}
		 		}
			 	animate5(img[i],'left',800);
	 		}
	 	}
	 }
	 function animate5(obj,attr,num){
		var a=parseInt(getStyle(obj,attr));
		var m=a;
		var id=setInterval(function(){
			if(a!=m+num)
				obj.style[attr]=(a+=10)+"px";
			else
				clearInterval(id);
		},10);
	}
	 //轮播对应圆点
	 for (var i = dian.length - 1; i >= 0; i--) {
	 	dian[i].onclick=function(){

	 	}
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
