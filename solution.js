$(function() {

	var makeMessage = function(message, who) {

		// Build a new div tag with the message
		var html = $('<div>')
			.addClass('message')
			.addClass(who)
			.text(message);

		// Append the new div to the thread
		$('.thread').append(html);

	}

	$('button.submit').on('click', function() {

		// Get the message text from the textarea
		var message = $('textarea').val();
		if (message == '') return;

		// Make the message and clear the textarea
		makeMessage(message, 'self');
		$('textarea').val('');

	});

	// Server
	setInterval(function() {

		// Get a random number
		var random = Math.floor(Math.random() * 3);

		// Get the server data
		$.get('server.json', function(data) {
			makeMessage(data.messages[random], 'other');
		});

	}, 5000);

});