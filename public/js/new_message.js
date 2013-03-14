console.log('loaded');
//$("#sidebar a").click(loadContent);
$(document).ready(function() {
		console.log('ready');
		$('#ja').click(toggleButton);
		$('#nein').click(toggleButton);
		
});
currentDate();
timePicker();

function currentDate()
{
	//alert($.datepicker.formatDate('dd-mm-yy', new Date()));
	$('#datepick').attr('data-date', $.datepicker.formatDate('dd-mm-yy', new Date()));
	$('#datepick').attr('value', $.datepicker.formatDate('dd-mm-yy', new Date()));
}
function timePicker()
{
            $('#timepicker').timepicker({
                minuteStep: 1,
                template: 'modal',
                showSeconds: true,
                showMeridian: false
            });
}

function toggleButton()
{
	var value=$(this).attr('id');
	$('#cpl').empty();
	if (value === 'ja')
		{
			//Payload interface laden
			$('#cpl').load('custom_payloads.html');
			//Javascript hier neu laden
			$.getScript('js/controlpayload.js');
		}
	
}