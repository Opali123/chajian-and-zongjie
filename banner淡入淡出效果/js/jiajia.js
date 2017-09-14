// JavaScript Document
$(function(){
	var index = 1;
	$('.num').text(index)
	$('.jia').click(function(){
		index++
		$('.num').text(index)
		})
	$('.jian').click(function(){
		
		
		if(index>0){
			index--
			}
		$('.num').text(index)
		})
	$('.qrsh').click(function(){
		$('.ddsh-tc').show()
		$('.ddsh-tcbj').show()
	
		$('.hhh').addClass('bbb')
		
		})
	$('.qx').click(function(){
		$('.hhh').removeClass('bbb')
		$('.ddsh-tc').hide()
		$('.ddsh-tcbj').hide()
		})
	})