var Main = {	iscrolls : []};
Main.url = 'http://pc.gntsh.net/html/ceshi2/create.html';//ajax请求地址cz.mengniu.sinreweb.com
Main.imgurl='http://pc.gntsh.net/html/ceshi2/'//加载图片请求地址址
Main.init = function() {	
	Main.ortchange(); 		  
	window.onresize = function() {		
		//Main.ortchange();	
	}	
	$(document.body).on('touchmove',function(e){
		//e.preventDefault?e.preventDefault():window.event.returnValue = false; 	
	})	
	//旋转	
	/*window.addEventListener('orientationchange',function(){
		//alert(window.orientation)
		// window.orientation  0 正着  左转90  右转-90
	})*/
	Main.On();		
}
//设置  页面  width  height
Main.ortchange = function(bool) {
	Main.width = $(window).width()
	Main.height = $(window).height();	
	$('.page_box').css('height',Main.height+'px')
	Main.scrollbool=false;	
	var href=location.href;
	if(href.indexOf('#index')>-1){
	   	$('.page_tab').hide();
		Main.indexbool=true;
	}
	Main.scrollbool=false;
}
//索引
Main.On = function() {	
    Main.index=0;    	
}
//图片加载后执行
Main.loading=function(){
		$('.page_index').eq(0).addClass('cur')
		$('audio').get(0).play()
		$('.audio_mp3').addClass('cur')
		$('audio').get(0).play()
		$('.audio_mp3').addClass('cur')
		Main.scrollbool=true;
		Main.scrolbody()

}
//页面加载后执行
$(function(){
	

	$('.audio_mp3').click(function(){
		
	    var This = $(this)
		if(This.hasClass('play')){
		    This.removeClass('play')
			$('audio').get(0).play()
			$('.audio_mp3').addClass('cur')
			
			
		}else{
		    This.addClass('play')
			$('audio').get(0).pause()
			$('.audio_mp3').removeClass('cur')
			
		}	
	});
	Main.init();	
	var img=new Image();
	img.src=Main.imgurl+'images/bj.jpg';	
	if(img.complete){		
		onload();				
		return ;
	}	
	img.onload=onload;
	function onload(){	
		if($(".page_load").length>0 ){
			Main.imgload();				
		}else{
		    Main.loading();			
		}			
	}		
})
/*进度条*/
Main.imgload = function(imgs) {
	var imgs=Main.imgs;
	var length = imgs.length, index = 0;
	var loadspan=$('.num_load').find('span').get(0),loadtxt=document.getElementById('id_load_num')	
	//var svgForStroke=$('#svgForStroke')
	function load(){
		var img=new Image();
		img.src=Main.imgurl+imgs[index];
		if(img.complete){			
			setTimeout(function(){
				onload();
			},20)
			return ;
		}
		img.onload=function(){
			setTimeout(function(){
				onload();
			},20)
		};		
		function onload(){
			index++;			
			var a = Math.floor(100 / length * index);						
			//修改进度
			loadspan.style.width=a+'%';
		    loadtxt.innerHTML=a+'%'	
		    a=250/100*a;	
		   // svgForStroke.attr('style','stroke-dasharray:'+a+'% 250%')	
			if (index == length) {	
				//进度改成100%
				$('.page_load').addClass('current');
				setTimeout(function(){
					Main.loading();			
				},200)			
			}else{
				load();
			}		
		}
	}
	load();
}
/*加载的图片*/
Main.imgs=['images/bj.jpg','images/bj2.jpg','images/bj3.jpg','images/bj4.jpg','images/bj5.jpg'];
//滑动事件
Main.scrolbody=function(){	
     var y,y2=0,index=0;
	 /*手指触碰屏幕*/
	 document.addEventListener('touchstart', function(e){
		//e.preventDefault();	
		y =e.touches[0].pageY;
		y2 = y;
	}, false)
	/*手指离开屏幕*/
	document.addEventListener('touchmove', function(e){
		e.preventDefault();
		y2 =e.touches[0].pageY;	
	}, false)
	/*手指在屏幕上移动*/
	document.addEventListener('touchend', function(e){	
	    /*上滑*/
		if(y-y2>3){	
		   if(index>=9){
			  index=9; 
		      $('.page_index').eq(index).removeClass('hover')
		   }else{
			  index++
			  $('.page_index').eq(index-1).addClass('hover').removeClass('hover2')
		      $('.page_index').eq(index).addClass('cur').siblings().removeClass('cur')
		   }  
		}
		/*下滑*/
		if(y-y2<-5){
			if(index<=0){
			  index=0;
		      $('.page_index').eq(index).removeClass('hover2')  
		   }else{
			  index-- 
		      $('.page_index').eq(index).removeClass('hover').addClass('hover2')
			  $('.page_index').eq(index).addClass('cur').siblings().removeClass('cur') 
		   }  
		}	
	},false);
}
//禁止拖动
function Nodrag(obj){
    $('obj').on('touchmove', function (event) {
        event.preventDefault();
    });
}
//判断手机是否为安卓
function isAndroid(){
    var u = navigator.userAgent;
    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1){
	    alert('安卓机') 
    }
}
//判断手机是否为苹果
function isIphone(){
    var u = navigator.userAgent;
    if (u.indexOf('iPhone') > -1) {
		alert('苹果机')
    }
}
//判断手机是否为微软
function isIphone(){
    var u = navigator.userAgent;
    if (u.indexOf('Windows Phone') > -1) {
		alert('微软机')
    }
}
//get请求
Main.get = function(url, data, success) {
	$.ajax({
		type : 'get',
		url : Main.url+url,
		dataType : 'jsonp',
		data : data,
		success : function(response) {
			console.log(response);
			if(response.err==99){
				location.href=response.url
				return ;
			}
			success(response);
		}
	})
}
//post请求
Main.post = function(url, obj, call) {
	if (!/^http/.test(url)) {
		url = Backbone.url + url;
	}
	$.post(url, obj, function(response) {
		//console.log(response);
		if (call) {
			call(response)
		}
	}, 'json')
}