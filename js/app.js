function addListItem() {
	var text = $("#inputbox").val();
	console.log(text)
	var row = '<tr><td><input type="checkbox" class="done" /></td><td>' + text +'</td><td><button class="delete" style="border: 0; background: transparent"><img src="images/delete.png" width="20px" height="20px"></button></td></tr>'
	$("#todolist").append(row);
	$("#inputbox").val('');
}
function deleteItem() {
	console.log($(this).parent().parent())
	$(this).parent().parent().remove();
}
function finishItem(){
	var sibling = $($(this).parent().siblings()[0])
	console.log(sibling)
	if( sibling.css('textDecoration') == 'line-through') {
		sibling.css('textDecoration','none');
	} else {
		sibling.css('textDecoration','line-through');
	}
}
$(function() {
	$("#add").on('click', addListItem);
	$('#inputbox').keypress(function (e) {
      if (e.which == 13) {
          addListItem();
          return false;
      }
});
	$(document).on('click','.delete',deleteItem);
	$(document).on('click','.done',finishItem);
});
	
