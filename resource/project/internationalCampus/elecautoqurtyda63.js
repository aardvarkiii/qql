var aidwater = '0030000000004901';
var aidcoolair = '0030000000011201';
var aidelec = '0030000000011101';
$(function () {
    indexAutoQuery(aidwater, '0');
    indexAutoQuery(aidelec, '1');
    indexAutoQuery(aidcoolair, '2');
	setInterval(setBalInfo,120000);
});
function setBalInfo(){
	 indexAutoQuery(aidwater, '0');
    indexAutoQuery(aidelec, '1');
    indexAutoQuery(aidcoolair, '2');
}
function indexAutoQuery(aid, type) {
    var url = createUrl("/icinfo/autoQuery");
    var param = {type: type};
    ajax(url, param, setIndex, true);

    function setIndex(ret) {
        if (ret != '1') {
            var icInfo = ret;
            var areas = (icInfo.schoolId).split('&&&');
            var buildings = icInfo.building.split('&&&');
            var floors = icInfo.floor.split('&&&');
            var rooms = icInfo.room.split('&&&');

            var area = '{"area":"","areaname":""}';
            var building = '{"building":"","buildingid":""}';
            var floor = '{"floorid":"","floor":""}';
            var room = '{"room":"","roomid":""}';
            if (areas.length > 0) {
                area = '{"area":"' + areas[0] + '","areaname":"' + areas[1] + '"}';
            }
            if (buildings.length > 0) {
                building = '{"building":"' + buildings[0] + '","buildingid":"' + buildings[1] + '"}';
            }
            if (floors.length > 0) {
                floor = '{"floor":"' + floors[0] + '","floorid":"' + floors[1] + '"}';
            }
            if (rooms.length > 0) {
                room = '{"room":"' + rooms[0] + '","roomid":"' + rooms[1] + '"}';
            }
            queryElecRoomInfo(aid, area, building, floor, room, setElecRoomInfo);

            function setElecRoomInfo(retMap) {
                if (checkRequestFlag(retMap)) {
                    var errmsg = retMap.errmsg;
                    var reg = /(\-|\+)?\d+\.*\d*$/g;
                    var retVal = errmsg.match(reg);
                    if (retVal != null && retVal != '') {
                        retVal = parseFloat(retVal).toFixed(2)+" 元";
                        if (type == '0') {
                            $('#querywater').html(retVal);
                        } else if (type == '1') {
                            $('#queryelec').html(retVal);
                        } else {
                            $('#querycoolair').html(retVal);
                        }
                    }

                }
            }
        }
    }
}

