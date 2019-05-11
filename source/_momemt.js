var moment = require('moment');
var val;
val = moment().format('YYYY-mm-do');
val = moment().format('MMMM Do YYYY, h:mm:ss a');
val = moment().format('dddd');

val = moment().format('[Some String here] YYYY');

val = moment()
	.startOf('hour')
	.fromNow();

val = moment()
	.add(1, 'months')
	.calendar();

val = moment().format('LLLL');
console.log(val);
