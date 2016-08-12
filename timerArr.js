/**
 * [getTimeList description] 生成事件列表
 * @param  {[type]} hours [description] 小时
 * @param  {[type]} step  [description] 分段
 * @return {[type]}       [description] 时间段列表
 */
function getTimeList(hours, step){
 	var minutes = 60
 	hours = hours
	step = step
	var timeArr = []

	for(var i = 0; i < hours; i++){
		var str = ''
		if(i < 10) {
			str = 0 + '' + i
		} else {
			str = '' + i
		}

		for(var j = 0; j < minutes; j++) {
			if(j % step == 0){
				var s = j < 10 ? ':' + 0 + '' + j : ':' +  j;
				s = str + s
				timeArr.push(s)
			}
		}
	}

	return timeArr;

}

getTimeList(12, 15)
