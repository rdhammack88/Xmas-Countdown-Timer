$(document).ready(function() {

//	var tz = new Date(2017, 12, 25, 0, 0, 0, 0).toLocaleString("en-US", {timeZone: "America/New_York"})
	var tz = new Date(2018, 12, 25, 0, 0, 0, 0).getTimezoneOffset() / -60;
//	tz = toUTCString(tz);
	tz = parseInt(tz);
	console.log(tz);
	
	$('.my-countdown').countdown({
		until: $.countdown.UTCDate(
			//-4, 2061, 6, 28, 23, 0, 0, 0		haleys comet
			//-6, 2017, 12, 25, 0, 0, 0, 0		//xmas
			tz, 2018, 12, 25, 0, 0, 0, 0		//xmas
			//-7, 2018, 10, 10, 0, 0, 0
		),
		format: 'ydmhs',
		//layout: '<p>{dl}, {dn}</p>'
		
	});



//Date.toL


});