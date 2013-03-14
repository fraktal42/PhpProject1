$('#sendenja').click(createJSON);
var x;
function createJSON()
{
	//Radiobutton auf Grund von Komplexität falls Checkbox
	var OS = $('#devicetype').find('.checked').find('input').data('type');
	//Überschrift
	var headline = $('#headline').val();
	//Inhalt
	var message = $('#text').val();

	console.log('intput: ', OS);
	
	//Mehr oder weniger statische Daten
	//Normalerweise erst in DB eintragen und dann von dort mit Zend verarbeiten
	var dataArray = [];
	dataArray[0] = OS;
	dataArray[1] = headline;
	dataArray[2] = message;
	dataArray[3] = '1db2559dbb944b0b1b01726515ad04e2';
	dataArray[4] = 'dfasdfasd9055';

	var json = {
		'os': OS,
		'headline':headline,
		'message': message,
		'apikey': dataArray[3],
		'deviceid': dataArray[4]
	};
	console.log('output: ', json.os);
}