console.log('loaded');
//$("#sidebar a").click(loadContent);
$(document).ready(function() {
		console.log('ready');
	$('#content').load('ueberblick_main.html');
	$('#sidebar a').click(loadContent);
	$('#sidebar li').click(loadContent);
	$('.cpl').click(checkPayload);	
});
function loadContent()
{

	var a_href = $(this).attr('href');
	if (a_href !== '#')
	{
		$("#sidebar li").removeClass("active");
		$("#content").load(a_href);
		var elm = $(this).parent().parent().parent();
		if (elm.hasClass('submenu'))
		{
			elm.addClass('active');
		}
		else
		{
			$(this).parent().addClass('active');
		}
		//$(this).parent().parent().parent().addClass('active');
	}
	return false;

}

function checkPayload()
{
	console.log('');
	if($('.cpl').val(on))
		{
			$('#cpl').load(custom_paylods.html);
		}
}