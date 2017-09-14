// JavaScript Document
$(function(){
	
	
	
	var $container = $('.input-file');
	// 预览上传图片
		$container.on('change','input[name="photoFile"]',function(e){
            
			var $this = $(this),
				file = null,
				freader = null;
			for(var i=0;i<e.target.files.length;i++){
				
				file = e.target.files.item(i);

				//不是图片 跳出这一次循环
				if(!(/^image\/.*$/i.test(file.type)))
				{
				    continue;
				}
				
				//实例化FileReader API
				freader = new FileReader();
               
				freader.readAsDataURL(file);
				freader.onload = function(e){
					
				     $('.paizhao').attr('src','' + e.target.result + '');
                   
				    $('input[name="blessingpic"]').val(e.target.result);
				}
	        }
		});
});