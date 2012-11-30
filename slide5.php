    <script src="//www.google.com/jsapi" type="text/javascript"></script>
    <script type="text/javascript">
      google.load("swfobject", "2.1");
    </script>    
    <script type="text/javascript">
      /*
       * Chromeless player has no controls.
       */
      
      // Update a particular HTML element with a new value
      function updateHTML(elmId, value) {
        document.getElementById(elmId).innerHTML = value;
      }
      
      // This function is called when an error is thrown by the player
      function onPlayerError(errorCode) {
        alert("An error occured of type:" + errorCode);
      }
      
      // This function is called when the player changes state
      function onPlayerStateChange(newState) {
        // updateHTML("playerState", newState);
        if(newState === 0)	alert('You watch all of these!!');
        if(newState === 1) console.log('you are watching video. Great !!');
      }
      
      // Display information about the current state of the player
      function updatePlayerInfo() {
        // Also check that at least one function exists since when IE unloads the
        // page, it will destroy the SWF before clearing the interval.
        if(ytplayer && ytplayer.getDuration) {
        //   updateHTML("videoDuration", ytplayer.getDuration());
        //   updateHTML("videoCurrentTime", ytplayer.getCurrentTime());
        //   updateHTML("bytesTotal", ytplayer.getVideoBytesTotal());
        //   updateHTML("startBytes", ytplayer.getVideoStartBytes());
        //   updateHTML("bytesLoaded", ytplayer.getVideoBytesLoaded());
        //   updateHTML("volume", ytplayer.getVolume());
        }
      }
      
      // Allow the user to set the volume from 0-100
      function setVideoVolume() {
        var volume = parseInt(document.getElementById("volumeSetting").value);
        if(isNaN(volume) || volume < 0 || volume > 100) {
          alert("Please enter a valid volume between 0 and 100.");
        }
        else if(ytplayer){
          ytplayer.setVolume(volume);
        }
      }
      
      function playVideo() {
        if (ytplayer) {
          ytplayer.playVideo();
        }
      }
      
      function pauseVideo() {
        if (ytplayer) {
          ytplayer.pauseVideo();
        }
      }
      
      function muteVideo() {
        if(ytplayer) {
          ytplayer.mute();
        }
      }
      
      function unMuteVideo() {
        if(ytplayer) {
          ytplayer.unMute();
        }
      }
      
      
      // This function is automatically called by the player once it loads
      function onYouTubePlayerReady(playerId) {
        ytplayer = document.getElementById("ytPlayer");
        // This causes the updatePlayerInfo function to be called every 250ms to
        // get fresh data from the player
        setInterval(updatePlayerInfo, 250);
        updatePlayerInfo();
        ytplayer.addEventListener("onStateChange", "onPlayerStateChange");
        ytplayer.addEventListener("onError", "onPlayerError");
        //Load an initial video into the player
        ytplayer.cueVideoById("9bZkp7q19f0");
      }
      
      // The "main method" of this sample. Called when someone clicks "Run".
      function loadPlayer() {
        // Lets Flash from another domain call JavaScript
        var params = { allowScriptAccess: "always" };
        // The element id of the Flash embed
        var atts = { id: "ytPlayer" };
        // All of the magic handled by SWFObject (http://code.google.com/p/swfobject/)
        swfobject.embedSWF("//www.youtube.com/apiplayer?" +
                           "version=3&enablejsapi=1&playerapiid=player1", 
                           "videoDiv", "360", "203", "9", null, null, params, atts);
      }
      function _run() {
        loadPlayer();
      }
      google.setOnLoadCallback(_run);
    </script>
 	 	<div class="pbd_slide_wrapper trace">
        <div class="pbd_top_panel pbd_cover_panel">
	        <div class="pbd_right_panel pbd_panel">
	        	<div class='pbd_sample_context' id='pbd_context_visit'>
					<div class="pbd_context_content">
						<div id="videoDiv">Laoding ...</div>
						<!-- <iframe width="360" height="203" src="//www.youtube.com/embed/9bZkp7q19f0" frameborder="0" allowfullscreen=""></iframe> -->
					</div>
					<div class="pbd_context_action"></div>
				</div>
	        </div>


	        <div class="pbd_left_panel pbd_panel">
	        	
	        	<h1 class="pbd_topic_header">Video Content Integration</h1>
	        	<div class="pbd_topic_content">
	        		Lorem ipsum dolor sit amet, consectetur adipisicing elit,
	        		 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	        		  Ut enim ad minim veniam, quis nostrud exercitation
	        	</div>
	        </div>
	    </div>



	    <div class="pbd_bottom_panel pbd_cover_panel">
	        
			<div class="pbd_right_panel pbd_panel ">
	        	
	        	<h1 class="pbd_topic_header">Comments Integration</h1>
	        	<div class="pbd_topic_content">
	        		Lorem ipsum dolor sit amet, consectetur adipisicing elit,
	        		 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	        		  Ut enim ad minim veniam, quis nostrud exercitation
	        	</div>
	        </div>

	        <div class="pbd_left_panel pbd_panel">
	        	<div class='pbd_sample_context' id='pbd_context_visit'>
					<div class="pbd_context_content"></div>
					<div class="pbd_context_action"></div>
				</div>
	        </div>

	    </div>


    </div>
