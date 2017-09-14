var Main = {	iscrolls : []};
var textUrl = "http://ekang.ren/";

$(function(){
	$('.tijian_for .foot .right').click(function(){
		var val = $('.tijian_for .foot .left b').text()
		Main.get(textUrl+'wish/index/physical',{Val:val},function(res){

			if(res.errcode==0){

                //成功执行
			}else if(res.errcode==1){
				alert(res.msg);
			}
		})
	});

	$('.gj_examine .con').eq(0).css('marginTop','10%')
})
//zepto/jquery get
Main.get = function(url, data, success) {
	$.ajax({
		type : 'get',
		url : url,
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
/*
 * post 用于post大量数据不包括文件，执行后会返回数据
 * 如写成jsonp会默认为get方式，固服务器不需要接受callback
 *
 */
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

$(function(){
	//个人信息
	$('#next_step').click(function(){
		//laction.href='medicineInfor.html'

		var nameVal = $('#name').val();
		var sexVal=$('input:radio[name="sex"]:checked').val();
		var birthdayVal =$('#birthday').val();
		var phoneVal  = $('#phone').val();
		var addressVal = $('#address').val();
		if($('#man:radio[name="sex"]:checked').val()=='on'){
			sex = 1;
		}
		if($('#woman:radio[name="sex"]:checked').val()=='on'){
			sex = 0;
		};
		if(nameVal==''){

			alert('请填写姓名')
		}else if(sexVal!='on'){
			alert('请选性别')
		}else if(birthdayVal==''){
			alert('请填写生日')
		}else if(!obj.phone.test(phoneVal)){
			alert('请填写电话')
		}else if(addressVal==''){
			alert('请填写家庭住址')
		}else{
			$.ajax({
				type: 'post',
				url: textUrl+'doctor/international_medical/',
				data: {         // 需要于客户端同步
					uid:1,full_name:nameVal,sex:sex,birthday:birthdayVal,mobile:phoneVal,address:addressVal
				},
				dataType: 'jsonp',
				jsonp: 'callback',
				success: function (result) {
					if (result.ret == 0) {
						location.href="medicineInfor.html?mid="+result.data.mid;
					}else {
						alert(result.msg);
					}
				}
			});
		}
	});
	var sc = false;
	//就医详情
	$('#submit').click(function(){
		var bName = $('#bName').val();
		var hospital = $('#hospital').val();
		var medical_history = $('#medical_history').val();
		var jg = $('#jg').val();
		var zl = $('#zl').val();
		var zyVal=$('input:radio[name="zy"]:checked').val();
		var flVal=$('input:radio[name="fl"]:checked').val();
		var time =$('#time').val();
		var picval = $('#blessingpic').val();

		//判断radio是否选中
		if($('#zy_have:radio[name="zy"]:checked').val()=='on'){
			zy_val = 1;
		}else{
			zy_val = 2;
		}
		if($('#fl_have:radio[name="fl"]:checked').val()=='on'){

			fl_val = 1;
		}else{
			fl_val = 2;
		}
		if(bName==''){
			alert('请填写病名');
		}else if(hospital==''){
			alert('请填写医治医院');
		}else if(medical_history==''){
			alert('请填写病史');
		}else if(jg=='' || jg.length>300){
			alert('请输入得病经过及检查结果且不能多于300字');
		}else if(zl==''|| zl.length>300){
			alert('请填写治疗经过且不能多于300字');
		}else if(zyVal!='on'){
			alert('请选择有无转移');
		}else if(flVal!='on'){
			alert('请选择有无放疗');
		}else if(time==''){
			alert('请选择时间');
		}
		else if(sc==false){
			alert('请上传图片');
		}
		else{
			var mid = getQueryString("mid");
			$.ajax({
				type: 'post',
				url: textUrl+'doctor/international_medical/',
				data: {         // 需要于客户端同步
					uid:1,disease:bName,mid:mid,hospital_name:hospital,medical_history:medical_history,treatment_course:jg,sick_pass:zl,is_transfer:zy_val,is_radiation:fl_val,last_physical_date:time,pic:picval
				},
				dataType: 'json',
				success: function (result) {
					if (result.ret == 0) {
						location.href='http://www.ekangjiuyi.net/EKang2.0/index.html'
					}else {
						alert(result.msg);
					}
				}
			});
		};
	});
	// 预览上传图片
	var $container = $('.input-file');
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
				$('.upload').css('background','url(' + e.target.result + ') center center');
				$('.upload').css('backgroundSize','150px 150px');
				$('input[name="blessingpic"]').val(e.target.result);
				sc=true;
			}
		}
	});
	//医院详情banner

})
obj={
	"phone":/^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
	"email":/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
	"name":/^[\u4e00-\u9fa5]+$/,
	"num":/^[1-9]+[0-9]*]*$/,
	"Idnumber":/^\d{17}[\w\d]$/,
};
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}
function prompt(msg){
	$('body').append('<div class="prompt" style=" width:150px; height:30px; background:#000; line-height:30px; opacity:0.7; position: absolute; left: 50%; top: 50%; -webkit-transform: translate(-50%, -50%); z-index:9999999; border-radius:5px;"><p style=" height:30px; line-height:30px; text-align:center; color:#FFF;">'+msg+'</p></div>');
	setTimeout("$('.prompt').fadeOut(2000)",1000);
	setTimeout("$('.prompt').remove()",3000);
};