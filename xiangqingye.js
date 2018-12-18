window.onload=function() {
	//顶部悬浮
	var cover=document.getElementById('cover');
	window.onscroll=function(){
		if((document.documentElement.scrollTop||document.body.scrollTop)>180)
			cover.style.position='fixed';
		else
			cover.style.position='static';
	}
}