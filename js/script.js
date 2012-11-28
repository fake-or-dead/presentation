$(document).ready(function() {
	
	// FB login
	$('#login').on('click', function() {
		FB.login(function(response) {
	        if (response.authResponse) {
	            // connected
	        } else {
	            // cancelled
	        }
    	});
	});

	// FB logout
	$('#logout').on('click', function() {
		FB.logout(function(response) {
	        if (response.authResponse) {
	            // logout success
	        } else {
	            // cancelled
	        }
    	});
	});
	console.log('hello script');
});