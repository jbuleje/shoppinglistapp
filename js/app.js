$(document).ready(function() {
	$('#userinput').submit(function(event) {
		event.preventDefault();
		var something = $('#inputbox').val();
		//if user input nothing and hits enter, alert will pop up, nothing is appended
		if (something === "") {
			alert('Please enter an item!');
		}
	});

		
