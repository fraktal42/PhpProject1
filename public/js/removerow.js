$('.removebutton').click(removeRow);

function removeRow()
{
	$(this).parent().parent().remove();
	$.getScript('js/removerow.js');
}