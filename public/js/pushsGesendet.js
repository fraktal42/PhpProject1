var data = [{"headline": "Test\u00dc1", "sentDate": "2012-12-10 14:00", "sentAmount": {"iphone": {"total": 1500000, "recieved": 1000000, "read": 500000}, "android": {"total": 0, "recieved": 0, "read": 0}}},
	{"headline": "Test\u00dc2", "sentDate": "2012-12-10 14:00", "sentAmount": {"iphone": {"total": 3000000, "recieved": 2000000, "read": 12345}, "android": {"total": 456789, "recieved": 234567, "read": 123456}}},
	{"headline": "Test\u00dc3", "sentDate": "2012-12-10 14:00", "sentAmount": {"iphone": {"total": 0, "recieved": 0, "read": 0}, "android": {"total": 4000000, "recieved": 2300000, "read": 1300000}}}];

var aCheck = 1;
var iCheck = 1;

var application = "Beispiel App";
var headlineApplication = application+" Statistiken (Android & iPhone)";



tableRefresh();

function alle()
{
	aCheck = 1;
	iCheck = 1;
	headlineApplication = application+" Statistiken (Android & iPhone)";
	tableRefresh();
}

function iOS()
{
	aCheck = 0;
	iCheck = 1;
	headlineApplication = application+" Statistiken (iPhone)";
	tableRefresh();
}

function and()
{
	aCheck = 1;
	iCheck = 0;
	headlineApplication = application+" Statistiken (Android)";
	tableRefresh();
}



function tableRefresh()
{
	//allgemeine Statistiken leeren
	$('#accept').empty();
	$('#deny').empty();
	
	var aDeny=0;
	var aAccept=0;
	
	//delete Table
	$('.appTable').empty();

	//Überschrift setzten
	$('.headlineApp').empty();
	$('<h3>', {
		text:headlineApplication
	}).appendTo($('.headlineApp'));

	//write Table
	$.each(data, function(i)
	{
		var amountTotalIos = data[i].sentAmount.iphone.total*iCheck;
		var amountTotalAnd = data[i].sentAmount.android.total*aCheck;
		var amountRecievedIos = data[i].sentAmount.iphone.recieved*iCheck;
		var amountRecievedAnd = data[i].sentAmount.android.recieved*aCheck;
		var amountReadIos = data[i].sentAmount.iphone.read*iCheck;
		var amoundReadAnd = data[i].sentAmount.android.read*aCheck;
		
		var tempDeny = (amountTotalIos+amountTotalAnd)-(amountRecievedIos+amountRecievedAnd);
		aDeny += tempDeny;
		aAccept += (amountTotalIos+amountTotalAnd)-tempDeny;

		//Abfrage, ob Nachricht an OS gesendet wurde
		if ((amountTotalIos * iCheck + amountTotalAnd * aCheck) !== 0)
		{
			$tr = $("<tr>", {class:"gradeA"});
			$td1 = $("<td>", {
				text: data[i].headline
			}).appendTo($tr);
			$td2 = $("<td>", {
				text: data[i].sentDate
			}).appendTo($tr);
			$td3 = $("<td>", {
				text: (amountTotalIos+amountTotalAnd),
				class:"center"
			}).appendTo($tr);
			$td4 = $("<td>", {
				text: (amountRecievedIos+amountRecievedAnd)
			}).appendTo($tr);
			$td5 = $("<td>", {
				text: (amountReadIos+amoundReadAnd)
			}).appendTo($tr);
			$tr.appendTo('.appTable');
		}
	});
	
	//allgemeine Statistiken setzten
	$('#accept').text(aAccept);
	$('#deny').text(aDeny);
	$('#sent').text(aAccept+aDeny);
}