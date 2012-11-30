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

	window.pb = pb = {};
	pb.getExp = function(percent) {
		if( !String(percent).match('%') ) percent = percent + '%';
		$('.bar').css('width', percent);
		console.log('getExp');
	}

	pb.scrollspy = function() {
		var lastActivate;
		$('#impress div div').on('impress:stepenter', function() { 
			console.log(this.id);
			$('#navbar li').removeClass('active');
			$('#navbar a[href$="'+this.id+'"]').parent().addClass('active');
		});
	}
	pb.scrollspy();
});