(function ($) {
    $.extend({
        // 获取url参数值
        getParam: function (name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results == null) {
                return null;
            }
            else {
                return results[1] || 0;
            }
        },

        // 底部提示信息
        jTip: function (content, timeout) {
            var el = '<div style="position:fixed;bottom:50px;z-index:1100;text-align: center;left:20px;right:20px;"><div class="j-tip" style="border-radius:5px;padding:10px 20px;background:#222;color:#fff;">' + content + '</div></div>';

            if ($('.j-tip')) {
                $('.j-tip').parent().remove();
            }

            $('body').append(el);

            if (timeout != null) {
                window.setTimeout(function () {
                    $('.j-tip').parent().remove();
                }, timeout);
            }
        },

        // 关闭提示信息
        jTipHide: function () {
            $('.j-tip').parent().remove();
        },

        // 时间戳转换
        myTime: {
            /**
             * 当前时间戳
             * @return <int>        unix时间戳(秒)
             */
            CurTime: function(){
                return Date.parse(new Date())/1000;
            },
            /**
             * 日期 转换为 Unix时间戳
             * @param <string> 2014-01-01 20:20:20  日期格式
             * @return <int>        unix时间戳(秒)
             */
            DateToUnix: function(string) {
                var f = string.split(' ', 2);
                var d = (f[0] ? f[0] : '').split('-', 3);
                var t = (f[1] ? f[1] : '').split(':', 3);
                return (new Date(
                        parseInt(d[0], 10) || null,
                        (parseInt(d[1], 10) || 1) - 1,
                        parseInt(d[2], 10) || null,
                        parseInt(t[0], 10) || null,
                        parseInt(t[1], 10) || null,
                        parseInt(t[2], 10) || null
                    )).getTime() / 1000;
            },
            /**
             * 时间戳转换日期
             * @param <int> unixTime    待时间戳(秒)
             * @param <bool> isFull    返回完整时间(Y-m-d 或者 Y-m-d H:i:s)
             * @param <int>  timeZone   时区
             */
            UnixToDate: function(unixTime, isFull, timeZone) {
                if (typeof (timeZone) == 'number')
                {
                    unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
                }
                var time = new Date(unixTime * 1000);
                var ymdhis = "";
                ymdhis += time.getUTCFullYear() + "-";
                ymdhis += (time.getUTCMonth()+1) + "-";
                ymdhis += time.getUTCDate();
                if (isFull === true)
                {
                    ymdhis += " " + time.getUTCHours() + ":";
                    ymdhis += time.getUTCMinutes() + ":";
                    ymdhis += time.getUTCSeconds();
                }
                return ymdhis;
            }
        }
    });
})(jQuery);

$(function () {
    $(document).ajaxError(function (event, request, settings) {
        $.jTip('无法处理您的请求', 3000);
    });
});

// 发布接口
var textUrl = "http://ekang.ren/";

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}


function getQueryChinesesString(str){
    var LocString = window.location.search.substr(1)
    var rs = new RegExp("(^|)"+str+"=([^/&]*)(/&|$)","gi").exec(LocString);
    var tmp;
    if(tmp=rs){
        return tmp[2];
    }
    return "";
}

function obj2string(o){
    var r=[];
    if(typeof o=="string"){
        return "\""+o.replace(/([\'\"\\])/g,"\\$1").replace(/(\n)/g,"\\n").replace(/(\r)/g,"\\r").replace(/(\t)/g,"\\t")+"\"";
    }
    if(typeof o=="object"){
        if(!o.sort){
            for(var i in o){
                r.push(i+":"+obj2string(o[i]));
            }
            if(!!document.all&&!/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)){
                r.push("toString:"+o.toString.toString());
            }
            r="{"+r.join()+"}";
        }else{
            for(var i=0;i<o.length;i++){
                r.push(obj2string(o[i]))
            }
            r="["+r.join()+"]";
        }
        return r;
    }
    return o.toString();
}

//webViewJavaScript初始化
function connectWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge);
    } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function() {callback(WebViewJavascriptBridge);}, false);
    }
}
$(function(){
    $('.over-popup').on('touchmove', function (event) {
        event.preventDefault();
    });

})
function dropDown(obj,obj2){
    obj.on('click', function () {

        if ($$('.picker-modal.modal-in').length > 0) {
            myApp.closeModal('.picker-modal.modal-in');
        }
        myApp.pickerModal(
            '<div class="picker-modal" id="content-picker">' +
            '<div class="toolbar">' +
            '<div class="toolbar-inner">' +
            '<div class="left"></div>' +
            '<div class="right"><a href="#" class="close-picker">关闭</a></div>' +
            '</div>' +
            '</div>' +
            '<div class="picker-modal-inner">' +
            '<div class="content-block">' +
                // 数据
            '<div class="time-content" style="margin-top: -20px">'+
            '</div>'+

            '</div>' +
            '</div>' +
            '</div>'
        )
        var today = new Date();
        var pickerInline = myApp.picker({
            input: obj2,
            container: '.time-content',
            toolbar: false,
            rotateEffect: true,

            value: [today.getDate()],

            onChange: function (picker, values, displayValues) {
                var daysInMonth = new Date(picker.value[2], picker.value[0]*1 + 1, 0).getDate();
                if (values[1] > daysInMonth) {
                    picker.cols[1].setValue(daysInMonth);
                }
            },

            cols: [

                // Days
                {
                    values: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
                }

            ]
        });

        pickerInline;
    });
}