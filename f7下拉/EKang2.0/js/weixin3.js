/**
 * Created by Administrator on 2016/3/22.
 *
 */
$(function(){
    var wechat = wx;
    var nowUrl = location.href;
    docterId = getQueryString("docterId");
    $.ajax({
        type: 'GET',
        url: textUrl+"/doctor/info",
        data: {
            uid: '',
            doctor_id: docterId
        },
        dataType: 'jsonp',
        jsonp: 'callback',
        success: function (result) {
            if (result.ret == 0) {
                console.log(result.data)
                var hospitalName =  result.data.hospital_name;
                var departmentName = result.data.department_name;
                var userName = result.data.user_name;
                tagContent = result.data.tag_content;
                fximg = result.data.avatar_file
                fxtit = hospitalName+' '+departmentName+userName+'——'+'易康就医';
            }else{
                alert(result.msg)
            }
        }
    });
    $.ajax({
        type: 'GET',
        url: 'http://ekang.ren/wish/index/getWechatToken',
        data: {
            url:nowUrl
        },
        dataType: 'jsonp',
        jsonp: 'callback',
        success: function (result) {
            if (result.ret == 0) {
                appId_val = result.data.appId;
                nonceStr_val= result.data.nonceStr;
                timestamp_val = result.data.timestamp;
                signature_val = result.data.signature;

                wechat.config({
                    debug: false,
                    appId:appId_val,
                    timestamp:timestamp_val,
                    nonceStr: nonceStr_val,
                    signature:signature_val,
                    jsApiList: [
                        "onMenuShareTimeline",
                        "onMenuShareAppMessage",
                        "onMenuShareQQ",
                        "onMenuShareWeibo",
                        "onMenuShareQZone",
                    ]
                });
                wechat.ready(function(){

                    wechat.onMenuShareTimeline({
                        title: fxtit,
                        link: 'http://www.ekangjiuyi.net/EKang2.0/chooseDoctor/docterDetail.html?docterId='+docterId,
                        imgUrl: fximg,
                        success: function () {
                            //alert('success')
                        },
                        cancel: function () {
                           // alert('cancel');
                        }
                    });
                    wechat.onMenuShareAppMessage({
                        title: fxtit,
                        desc: tagContent,
                        link: 'http://www.ekangjiuyi.net/EKang2.0/chooseDoctor/docterDetail.html?docterId='+docterId,
                        imgUrl: fximg,
                        type: '',
                        dataUrl: '',
                        success: function () {
                             // 用户确认分享后执行的回调函数
                            //alert(12)
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                            //alert(12)
                        }
                    });
                    wechat.onMenuShareQQ({
                        title: fxtit, // 分享标题
                        desc: tagContent, // 分享描述
                        link: 'http://www.ekangjiuyi.net/EKang2.0/chooseDoctor/docterDetail.html?docterId='+docterId, // 分享链接
//            link: 'http://ekang.ren/wechat/index/coupon/', // 分享链接
                        imgUrl: fximg, // 分享图标
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                    wechat.onMenuShareWeibo({
                        title: fxtit, // 分享标题
                        desc: tagContent, // 分享描述
                        link: 'http://www.ekangjiuyi.net/EKang2.0/chooseDoctor/docterDetail.html?docterId='+docterId, // 分享链接
//            link: 'http://ekang.ren/wechat/index/coupon/', // 分享链接
                        imgUrl: fximg, // 分享图标
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                    wechat.onMenuShareQZone({
                        title: fxtit, // 分享标题
                        desc: tagContent, // 分享描述
                        link: 'http://www.ekangjiuyi.net/EKang2.0/chooseDoctor/docterDetail.html?docterId='+docterId, // 分享链接
//            link: 'http://ekang.ren/wechat/index/coupon/', // 分享链接
                        imgUrl: fximg, // 分享图标
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                });
                wechat.error(function(res){
                    //alert(333)
                    //alert(res.errMsg);
                });
            }else{
                //alert(result.msg)
            }
        }
    });

});
