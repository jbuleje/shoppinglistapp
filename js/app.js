function addListItem() {
	var text = $("#inputbox").val();
	$("#todolist").append('<tr><td><input type="checkbox" class="done"/></td>'+text+'<td><button class="delete" style="border: 0; background: transparent"><img src="images/delete.png" width="20px" height="20px"></button></td></tr>');
	$("#inputbox").val('');
}
function deleteItem() {
	$(this).parent().remove();
}
function finishItem(){
	if( $(this).parent().css('textDecoration') == 'line-through') {
		$(this).parent().css('textDecoration','none');
	} else {
		$(this).parent().css('textDecoration','line-through');
	}
}
$(function() {
	$("#add").on('click', addListItem);
	$(document).on('click','.delete',deleteItem);
	$(document).on('click','.done',finishItem);
});
	
$('#inputbox').keypress(function (e) {
      if (e.which == 13) {
          addListItem();
          return false;
      }
});