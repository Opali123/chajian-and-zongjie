var Main = {	iscrolls : []};
$(function(){

})
//验证正则
obj={
	"phone":/^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
	"email":/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
	"name":/^[\u4e00-\u9fa5]+$/,
	"num":/^[1-9]+[0-9]*]*$/,
	"Idnumber":/^\d{17}[\w\d]$/,
};
//获取URL参数
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}
//get
Main.get = function(url, data, success) {
	$.ajax({
		type : 'get',
		url : url,
		dataType : 'jsonp',
		data : data,
		success : function(res) {
			if(res.ret==99){
				//location.href=response.url
				return ;
			}
			success(response);
		}
	})
}
//post
Main.post = function(url, obj, call) {
	if (!/^http/.test(url)) {
		url = url;
	}
	$.post(url, obj, function(response) {
		//console.log(response);
		if (call) {
			call(response)
		}
	}, 'json')
}
//加载
function Load(msg){
	$('body').append('<div style=" width:100px; height:100px; background:#000; opacity:0.7; position: absolute; left: 50%; top: 50%; -webkit-transform: translate(-50%, -50%); z-index:9999999; border-radius:5px;"><img src="images/loader.gif" style="width:40%; margin-left:30%; margin-top:5%;"><p style=" text-align:center; margin-top:10px; color:#FFF;">'+msg+'</p></div>');
};
//验证
function prompt(msg){
	$('body').append('<div class="prompt" style=" width:100px; height:30px; background:#000; opacity:0.7; position: absolute; left: 50%; top: 50%; -webkit-transform: translate(-50%, -50%); z-index:9999999; border-radius:5px;"><p style=" text-align:center; margin-top:10px; color:#FFF;">'+msg+'</p></div>');
	setTimeout("$('.prompt').fadeOut(2000)",1000);
	setTimeout("$('.prompt').remove()",3000);
};
//弹层
function layer(obj){
	obj.append('<div class="con"><div class="name"><p>姓名</p><input type="text"></div><div class="phone"><p>手机号</p><input type="text"></div><b>请填写您报名时所填写的手机号码<br/>如有疑问请致电010-111111</b><button>确认</button></div>')
};