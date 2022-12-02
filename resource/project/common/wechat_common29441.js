function checkRequestFlag(retMap) {
	var requestFlag = false;
	var retcode = retMap.retcode;
	if (retcode == 0) {
		requestFlag = true
	}
	return requestFlag
}
function fenToYuan(fen) {
	if (fen == '') {
		return 0
	}
	var yuan = parseFloat(fen / 100);
	return yuan.toFixed(2)
}
function yuanToFen(yuan) {
	if (yuan == '') {
		return 0
	}
	var fen = (parseFloat(yuan)).toFixed(2) * 100;
	return Math.ceil(fen)
}
function getPaygwServiceTime(paytype, callback) {
	var url = createUrl("/basicQuery/getPaygwServiceTime");
	var param = {
		paytype : paytype
	};
	ajax(url, param, callback, false)
}
function getCardInfo(callback) {
	var url = createUrl("/basicQuery/getCardInfo");
	ajax(url, {}, callback, false)
}
function getXiaoYouCardInfo(sno, account, callback) {
	var url = createUrl("/basicQuery/getXiaoYouCardInfo");
	var param = {
		sno : sno,
		account : account
	};
	ajax(url, param, callback, false)
}
function getSubCardInfo(callback) {
	var url = createUrl("/basicQuery/querySubCardInfo");
	ajax(url, {}, callback, true)
}
function getCardInfo(callback, hideWait) {
	var url = createUrl("/basicQuery/getCardInfo");
	ajax(url, {}, callback, hideWait)
}
function getAccInfo(callback) {
	var url = createUrl("/basicQuery/getAccInfo");
	ajax(url, {}, callback, false)
}
function getAccInfo(callback, hideWait) {
	var url = createUrl("/basicQuery/getAccInfo");
	ajax(url, {}, callback, hideWait)
}
function getIdInfo(callback) {
	var url = createUrl("/basicQuery/getIdInfo");
	ajax(url, {}, callback, false)
}
function getRssList(callback) {
	var url = createUrl("/basicQuery/getRssList");
	ajax(url, {}, callback, false)
}
function queryFixcard(curpage, pagesize, callback) {
	var url = createUrl("/basicQuery/queryFixcard");
	var param = {
		curpage : curpage,
		pagesize : pagesize
	};
	ajax(url, param, callback, true)
}
function queryHisTotal(curpage, pagesize, acctype, query_start, query_end,
		callback) {
	var url = createUrl("/basicQuery/queryHisTotal");
	var param = {
		curpage : curpage,
		pagesize : pagesize,
		acctype : acctype,
		query_start : query_start,
		query_end : query_end
	};
	ajax(url, param, callback, true)
}
function queryHisConsume(curpage, pagesize, acctype, query_start, query_end,
		callback) {
	var url = createUrl("/basicQuery/queryHisConsume");
	var param = {
		curpage : curpage,
		pagesize : pagesize,
		acctype : acctype,
		query_start : query_start,
		query_end : query_end
	};
	ajax(url, param, callback, true)
}
function queryHisRecharge(curpage, pagesize, acctype, query_start, query_end,
		callback) {
	var url = createUrl("/basicQuery/queryHisRecharge");
	var param = {
		curpage : curpage,
		pagesize : pagesize,
		acctype : acctype,
		query_start : query_start,
		query_end : query_end
	};
	ajax(url, param, callback, true)
}
function querySub(curpage, pagesize, acctype, query_start, query_end, callback) {
	var url = createUrl("/basicQuery/querySub");
	var param = {
		curpage : curpage,
		pagesize : pagesize,
		acctype : acctype,
		query_start : query_start,
		query_end : query_end
	};
	ajax(url, param, callback, true)
}
function queryGdcMonthStat(acctype, month, callback) {
	var url = createUrl("/basicQuery/queryGdcMonthStat");
	var param = {
		acctype : acctype,
		month : month
	};
	ajax(url, param, callback, true)
}
function queryApplist(apptype, callback) {
	var url = createUrl("/basicQuery/queryApplist");
	var param = {
		apptype : apptype
	};
	ajax(url, param, callback, false)
}
function queryAppInfo(aid, callback) {
	var url = createUrl("/basicQuery/queryAppInfo");
	var param = {
		aid : aid
	};
	ajax(url, param, callback, false)
}
function queryNetInfo(aid, payacc, extdata, callback) {
	var url = createUrl("/basicQuery/queryNetInfo");
	var param = {
		aid : aid,
		payacc : payacc,
		extdata : extdata
	};
	ajax(url, param, callback, false)
}
function queryElecArea(aid, callback) {
	var url = createUrl("/basicQuery/queryElecArea");
	var param = {
		aid : aid
	};
	ajax(url, param, callback, false)
}
function queryElecBuilding(aid, area, callback) {
	var url = createUrl("/basicQuery/queryElecBuilding");
	var param = {
		aid : aid,
		area : area
	};
	ajax(url, param, callback, false)
}
function queryElecFloor(aid, area, building, callback) {
	var url = createUrl("/basicQuery/queryElecFloor");
	var param = {
		aid : aid,
		area : area,
		building : building
	};
	ajax(url, param, callback, false)
}
function queryElecRoom(aid, area, building, floor, callback) {
	var url = createUrl("/basicQuery/queryElecRoom");
	var param = {
		aid : aid,
		area : area,
		building : building,
		floor : floor
	};
	ajax(url, param, callback, false)
}
function queryElecRoomInfo(aid, area, building, floor, room, callback) {
	var url = createUrl("/basicQuery/queryElecRoomInfo");
	var param = {
		aid : aid,
		area : area,
		building : building,
		floor : floor,
		room : room
	};
	ajax(url, param, callback, false)
}
function allBill(account, fkaccount, page, rows, startDate, endDate, callback,
		errcallback) {
	var url = createUrl("/bill/all");
	var param = {
		account : account,
		fkaccount : fkaccount,
		page : page,
		rows : rows,
		startDate : startDate,
		endDate : endDate
	};
	ajaxs(url, param, callback, errcallback, true)
}
function hisRecharge(account, fkaccount, page, rows, startDate, endDate,
		callback, errcallback) {
	var url = createUrl("/bill/hisRecharge");
	var param = {
		account : account,
		fkaccount : fkaccount,
		page : page,
		rows : rows,
		startDate : startDate,
		endDate : endDate
	};
	ajaxs(url, param, callback, errcallback, true)
}
function hisConsume(account, fkaccount, page, rows, startDate, endDate,
		callback, errcallback) {
	var url = createUrl("/bill/hisConsume");
	var param = {
		account : account,
		fkaccount : fkaccount,
		page : page,
		rows : rows,
		startDate : startDate,
		endDate : endDate
	};
	ajaxs(url, param, callback, errcallback, true)
}
function hisSub(account, fkaccount, page, rows, startDate, endDate, callback,
		errcallback) {
	var url = createUrl("/bill/hisSub");
	var param = {
		account : account,
		fkaccount : fkaccount,
		page : page,
		rows : rows,
		startDate : startDate,
		endDate : endDate
	};
	ajaxs(url, param, callback, errcallback, true)
}
function hisRechargeTotal(account, fkaccount, startDate, endDate, callback,
		errcallback) {
	var url = createUrl("/bill/hisRecTotal");
	var param = {
		account : account,
		fkaccount : fkaccount,
		startDate : startDate,
		endDate : endDate
	};
	ajaxs(url, param, callback, errcallback, true)
}
function hisConsumeTotal(account, fkaccount, startDate, endDate, callback,
		errcallback) {
	var url = createUrl("/bill/hisConsumeTotal");
	var param = {
		account : account,
		fkaccount : fkaccount,
		startDate : startDate,
		endDate : endDate
	};
	ajaxs(url, param, callback, errcallback, true)
}
function hisSubTotal(account, fkaccount, startDate, endDate, callback,
		errcallback) {
	var url = createUrl("/bill/hisSubTotal");
	var param = {
		account : account,
		fkaccount : fkaccount,
		startDate : startDate,
		endDate : endDate
	};
	ajaxs(url, param, callback, errcallback, true)
}
function checkPwd(pwd, callback) {
	var url = createUrl("/basicTransaction/checkPwd");
	var param = {
		pwd : pwd
	};
	ajax(url, param, callback, false)
}
function modifyPwd(password, newpwd, callback) {
	var url = createUrl("/basicTransaction/modifyPwd");
	var param = {
		password : password,
		newpwd : newpwd
	};
	ajax(url, param, callback, false)
}
function modifyAcc(acctype, expire, autotrans_limite, autotrans_amt,
		autotrans_flag, callback) {
	var url = createUrl("/basicTransaction/modifyAcc");
	var param = {
		acctype : acctype,
		expire : expire,
		autotrans_limite : autotrans_limite,
		autotrans_amt : autotrans_amt,
		autotrans_flag : autotrans_flag
	};
	ajax(url, param, callback, false)
}
function lostCard(password, callback) {
	var url = createUrl("/basicTransaction/lostCard");
	var param = {
		password : password
	};
	ajax(url, param, callback, false)
}
function lostSubCard(password, sub_card_account, callback) {
	var url = createUrl("/basicTransaction/lostSubCard");
	var param = {
		password : password,
		account : sub_card_account
	};
	ajax(url, param, callback, false)
}
function unlostCard(password, callback) {
	var url = createUrl("/basicTransaction/unlostCard");
	var param = {
		password : password
	};
	ajax(url, param, callback, false)
}
function unlostSubCard(password, sub_card_account, callback) {
	var url = createUrl("/basicTransaction/unlostSubCard");
	var param = {
		password : password,
		account : sub_card_account
	};
	ajax(url, param, callback, false)
}
function modifyRss(consume_alert, balance_alert, rss, callback) {
	var url = createUrl("/basicTransaction/modifyRss");
	var param = {
		consume_alert : consume_alert,
		balance_alert : balance_alert,
		rss : rss
	};
	ajax(url, param, callback, false)
}
function transfer(password, tranamt, acctype, callback) {
	var url = createUrl("/basicTransaction/transfer");
	var param = {
		password : password,
		tranamt : tranamt,
		acctype : acctype
	};
	ajax(url, param, callback, false)
}
function wechatRecharge(order_amount, acctype,client_type, callback) {
	var url = createUrl("/basicTransaction/wechatRechargeCard");
	var param = {
		order_amount : order_amount,
		acctype : acctype,
		client_type : client_type
	};
	ajax(url, param, callback, false)
}
function xiaoyouWechatRecharge(account, sno, order_amount, acctype,client_type, callback) {
	var url = createUrl("/basicTransaction/xiaoyouWechatRechargeCard");
	var param = {
		account : account,
		sno : sno,
		order_amount : order_amount,
		acctype : acctype,
		client_type : client_type
	};
	ajax(url, param, callback, false)
}
function unionpayRecharge(order_amount, acctype, callback) {
	var url = createUrl("/basicTransaction/unionpayRechargeCard");
	var param = {
		order_amount : order_amount,
		acctype : acctype
	};
	ajax(url, param, callback, false)
}
function buildBankCard_Relation(password, bankacc, callback) {
	var url = createUrl("/basicTransaction/buildBankCard_Relation");
	var param = {
		password : password,
		bankacc : bankacc
	};
	ajax(url, param, callback, false)
}
function cancelBankCard_Relation(password, callback) {
	var url = createUrl("/basicTransaction/cancelBankCard_Relation");
	var param = {
		password : password
	};
	ajax(url, param, callback, false)
}
function payNetGdc(password, aid, acctype, tranamt, remark, netacc, pkgflag,
		pkg, extdata, callback) {
	var url = createUrl("/basicTransaction/payNetGdc");
	var param = {
		password : password,
		aid : aid,
		acctype : acctype,
		tranamt : tranamt,
		remark : remark,
		netacc : netacc,
		pkgflag : pkgflag,
		pkg : pkg,
		extdata : extdata
	};
	ajax(url, param, callback, false)
}
function payNetBank(password, aid, acctype, tranamt, remark, netacc, pkgflag,
		pkg, payment_acc, extdata, callback) {
	var url = createUrl("/basicTransaction/payNetBank");
	var param = {
		password : password,
		aid : aid,
		acctype : acctype,
		tranamt : tranamt,
		remark : remark,
		netacc : netacc,
		pkgflag : pkgflag,
		pkg : pkg,
		payment_acc : payment_acc,
		extdata : extdata
	};
	ajax(url, param, callback, false)
}
function payNetPaygw(aid, acctype, order_amount, netacc, pkgflag, pkg, extdata,
		client_type,callback) {
	var url = createUrl("/basicTransaction/payNetPaygw");
	var param = {
		aid : aid,
		acctype : acctype,
		order_amount : order_amount,
		netacc : netacc,
		pkgflag : pkgflag,
		pkg : pkg,
		extdata : extdata,
		client_type : client_type
	};
	ajax(url, param, callback, false)
}
function payElecGdc(password, aid, acctype, tranamt, remark, area, building,
		floor, room, meterflag, price, pkgflag, pkg, callback) {
	var url = createUrl("/basicTransaction/payElecGdc");
	var param = {
		password : password,
		aid : aid,
		acctype : acctype,
		tranamt : tranamt,
		remark : remark,
		area : area,
		building : building,
		floor : floor,
		room : room,
		meterflag : meterflag,
		price : price,
		pkgflag : pkgflag,
		pkg : pkg
	};
	ajax(url, param, callback, false)
}
function payElecBank(password, aid, acctype, tranamt, remark, area, building,
		floor, room, meterflag, price, pkgflag, pkg, payment_acc, callback) {
	var url = createUrl("/basicTransaction/payElecBank");
	var param = {
		password : password,
		aid : aid,
		acctype : acctype,
		tranamt : tranamt,
		remark : remark,
		area : area,
		building : building,
		floor : floor,
		room : room,
		meterflag : meterflag,
		price : price,
		pkgflag : pkgflag,
		pkg : pkg,
		payment_acc : payment_acc
	};
	ajax(url, param, callback, false)
}
function payElecPaygw(aid, acctype, order_amount, area, building, floor, room,
		meterflag, price, pkgflag, pkg,order_note,client_type, callback) {
	var url = createUrl("/basicTransaction/payElecPaygw");
	var param = {
		aid : aid,
		acctype : acctype,
		order_amount : order_amount,
		area : area,
		building : building,
		floor : floor,
		room : room,
		meterflag : meterflag,
		price : price,
		pkgflag : pkgflag,
		pkg : pkg,
		order_note : order_note,
		client_type : client_type
	};
	ajax(url, param, callback, false)
}
function mercaccBarcodePay(password, acctype, merc_barcode, tranamt, dineseq,
		remark, callback) {
	var url = createUrl("/basicTransaction/mercaccBarcodePay");
	var param = {
		password : password,
		acctype : acctype,
		merc_barcode : merc_barcode,
		tranamt : tranamt,
		dineseq : dineseq,
		remark : remark
	};
	ajax(url, param, callback, false)
}
function littlebagBankTransfer(password, tranamt, smallbag_id, remark, callback) {
	var url = createUrl("/basicTransaction/littlebagBankTransfer");
	var param = {
		password : password,
		tranamt : tranamt,
		smallbag_id : smallbag_id,
		remark : remark
	};
	ajax(url, param, callback, false)
}
function littlebagAccTransfer(password, acctype, tranamt, smallbag_id,
		consumetype, remark, callback) {
	var url = createUrl("/basicTransaction/littlebagAccTransfer");
	var param = {
		password : password,
		acctype : acctype,
		tranamt : tranamt,
		smallbag_id : smallbag_id,
		consumetype : consumetype,
		remark : remark
	};
	ajax(url, param, callback, false)
}