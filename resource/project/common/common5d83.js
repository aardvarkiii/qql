var ctxpath = '/wechat';
var ctrlSuffix = '.html';
function sum (m,n){
	var num = Math.floor(Math.random()*(m - n) + n);
	return num;
}
function createUrl(url) {
	return ctxpath + url + ctrlSuffix+"?v="+sum(1,100);
}
$.ajaxSetup({
	cache : false
});
function ajax(url, param, callback, hideWait) {
	var options = {};
	options['url'] = url;
	options['param'] = param;
	options['callback'] = callback;
	options['hideWait'] = hideWait;
	options['dataType'] = 'json';
	commonAjax(options);
}
function ajaxs(url, param, callback, errcallback, hideWait) {
	var options = {};
	options['url'] = url;
	options['param'] = param;
	options['callback'] = callback;
	options['errcallback'] = errcallback;
	options['hideWait'] = hideWait;
	options['dataType'] = 'json';
	commonAjax(options);
}
function commonAjax(options) {
	$.ajaxSetup({
		cache : false
	});
	if (options == null || !options.url) {
		return false;
	}
	var param = options.param;
	var _callback = options.callback;
	var _errcallback = options.errcallback;
	var callback = function(msg) {
		if (jQuery.type(_callback) == "function") {
			_callback(msg);
		}
	};
	var errcallback = function(msg) {
		if (jQuery.type(_errcallback) == "function") {
			_errcallback(msg);
		}
	};
	if (!options.hideWait) {
		showWaitingDiv();
	}
	try {
		$.ajax({
			type : "post",
			url : options.url,
			data : param,
			dataType : 'html',
			success : function(msg) {
				if (msg.indexOf('REQUESTERROR') != -1) {
					$('body').html(msg);
				} else if (msg.indexOf('USERNOTLOGINYET') != -1) {
					window.open("/wechat_login.jsp", "_self");
				} else {
					if (options.dataType && options.dataType == 'json') {
						msg = $.parseJSON(msg);
					}
					if (options.target) {
						$(options.target).html(msg);
					}
					if (!options.hideWait) {
						hideWaitingDiv();
					}
					if (jQuery.type(callback) == "function") {
						callback(msg);
					}
				}
			},
			error : function(data) {
				if (jQuery.type(errcallback) == "function") {
					errcallback(data);
				}
				hideWaitingDiv();
			}
		});
	} catch (e) {
	}
}
function showMsgDiv(msg, confirmFunciton, isShowCancelBtn) {
	$("#tipMsg").html(msg);
	$('#msgDivCancel').hide();
	$('#msgBtnDiv').css('width', '65px');
	if (isShowCancelBtn != undefined && isShowCancelBtn) {
		$('#msgDivCancel').show();
		$('#msgBtnDiv').css('width', '130px');
	}
	var dlg = new Dialog({
		type : "id",
		value : "actionTip"
	}, {
		showTitle : false,
		width : '400'
	});
	dlg.show();
	$(".dialog-close,.dlg-cancel").click(function() {
		dlg.hide();
	});
	$("[id^='dialog']").find("#msgDivConfirm").click(function() {
		if (confirmFunciton && typeof (confirmFunciton) == 'function') {
			confirmFunciton();
		}
		dlg.hide();
	})
}
var loading;
function showWaitingDiv(msg) {
	msg = msg ? msg : '请稍候';
	loading = weui.loading(msg);
}
function hideWaitingDiv() {
	if (loading) {
		loading.hide();
	}
}
function loader(val) {
	var LoaderHtml = '<div class="loader"><em class="l"></em><div class="transdiv"></div><img src="'
			+ ctxpath
			+ '/resource/themes/default/images/loader.gif" class="ico-loading" alt="'
			+ val
			+ '" /><span id="globalWaitingDivMsg">'
			+ val
			+ '...</span><em class="r"></em></div>';
	return LoaderHtml;
}
function emailValidation(value) {
	var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z\.]{2,10})+$/;
	return reg.test(value);
}
function loginfo(msg) {
	if (window.console && window.console.info) {
		console.info(msg);
	}
}