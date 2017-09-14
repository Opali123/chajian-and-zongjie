// JavaScript Document
$(function(){
 
 	
  
  $(".but button").click(function(){
		var index = $(this).index()
		//alert(index)
         $("html,body").stop().animate({"scrollTop":1000*index},1200);
		 $(this).addClass('hover').siblings().removeClass('hover')
		
   })
   $(window).scroll(function(){
	 var st = $(document).scrollTop();
	if(st>=0){
		$(".but button").eq(0).css('background','red')
		
			}
	if(st>=1000){
		$(".but button").eq(0).css('background','#FFF')
		$(".but button").eq(1).css('background','red')
		}else{
		$(".but button").eq(1).css('background','#FFF')	
			}   
    if(st>=2000){
		$(".but button").eq(0).css('background','#FFF')
		
		$(".but button").eq(1).css('background','#FFF')
		$(".but button").eq(2).css('background','red')
		}else{
		$(".but button").eq(2).css('background','#FFF')	
			}
	if(st>=3000){
		$(".but button").eq(0).css('background','#FFF')
		
		$(".but button").eq(1).css('background','#FFF')
		$(".but button").eq(2).css('background','#FFF')
		
		$(".but button").eq(3).css('background','red')
		}else{
		$(".but button").eq(3).css('background','#FFF')	
			}
	if(st>=4000){
		$(".but button").eq(0).css('background','#FFF')
		$(".but button").eq(1).css('background','#FFF')
		$(".but button").eq(2).css('background','#FFF')
		$(".but button").eq(3).css('background','#FFF')
		$(".but button").eq(4).css('background','red')
		}else{
		$(".but button").eq(4).css('background','#FFF')	
			} 
    })
  
  
})