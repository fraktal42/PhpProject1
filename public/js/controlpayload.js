$('#addbutton').click(addRow);

function addRow()
{
	$('#pltable').append("<tr><td><select><option>product_id</option><option>open_app</option><option>open_flyer</option><option>category_id</option></select></td><td><input type='number'></td><td><button class='btn removebutton' onClick='return false'><i class='icon-minus'></i></button></td></tr>");
	$.getScript('js/removerow.js');
}