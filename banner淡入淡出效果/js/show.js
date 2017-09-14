// JavaScript Document
$(function(){
	//var index = $('.yi>li').index();
	$('.yi>li').hover(function(){
		$(this).toggleClass('hover').prevAll().toggleClass('hover');
		if($(this).index()>=2){
			$('.yi>li').removeClass('fl');
			}else{
				$('.yi>li').eq(0).addClass('fl');
				$('.yi>li').eq(1).addClass('fl');
				}
		var index = $(this).index();
		
		$('.yi>li').eq(index).children().toggle();
		})
	$('.yi>li').eq(0).hover(function(){
		var b =  '<b></b>';
		$(this).push(b);	
		})
	$('.er>li').hover(function(){
		$(this).toggleClass('hover').prevAll().toggleClass('hover');
		if($(this).index()>=2){
			$('.er>li').removeClass('fl');
			}else{
				$('.er>li').eq(0).addClass('fl');
				$('.er>li').eq(1).addClass('fl');
				}
	    var index = $(this).index();
		
		$('.er>li').eq(index).children().toggle();
		})
	$('.er>li').eq(0).hover(function(){
		var b =  '<b></b>';
		$(this).push(b);
		
		})
	$('.san>li').hover(function(){
		$(this).toggleClass('hover').prevAll().toggleClass('hover');
		if($(this).index()>=2){
			$('.san>li').removeClass('fl');
			}else{
				$('.san>li').eq(0).addClass('fl');
				$('.san>li').eq(1).addClass('fl');
				}
	    var index = $(this).index();
		
		$('.san>li').eq(index).children().toggle();
		})
	$('.san>li').eq(0).hover(function(){
		var b =  '<b></b>';
		$(this).push(b);
		
		})
	
		
	
	})