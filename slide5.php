    <script src="//www.google.com/jsapi" type="text/javascript"></script>
    <script type="text/javascript">
      google.load("swfobject", "2.1");
    </script>    
    <script type="text/javascript">

    function getFrameID(id) {
        var elem = document.getElementById(id);
        if (elem) {
            if(/^iframe$/i.test(elem.tagName)) return id;//Frame, OK
            // else: Look for frame
            var elems = elem.getElementsByTagName("iframe");
            if (!elems.length) return null; //No iframe found, FAILURE
            for (var i=0; i<elems.length; i++) {
               if (/^https?:\/\/(?:www\.)?youtube(?:-nocookie)?\.com(\/|$)/i.test(elems[i].src)) break;
            }
            elem = elems[i]; //The only, or the best iFrame
            if (elem.id) return elem.id; //Existing ID, return it
            // else: Create a new ID
            do { //Keep postfixing `-frame` until the ID is unique
                id += "-frame";
            } while (document.getElementById(id));
            elem.id = id;
            return id;
        }
        // If no element, return null.
        return null;
    }

    // Define YT_ready function.
    var YT_ready = (function(){
        var onReady_funcs = [], api_isReady = false;
        /* @param func function     Function to execute on ready
         * @param func Boolean      If true, all qeued functions are executed
         * @param b_before Boolean  If true, the func will added to the first
                                     position in the queue*/
        return function(func, b_before){
            if (func === true) {
                api_isReady = true;
                for (var i=0; i<onReady_funcs.length; i++){
                    // Removes the first func from the array, and execute func
                    onReady_funcs.shift()();
                }
            }
            else if(typeof func == "function") {
                if (api_isReady) func();
                else onReady_funcs[b_before?"unshift":"push"](func); 
            }
        }
    })();
    // This function will be called when the API is fully loaded
    function onYouTubePlayerAPIReady() { YT_ready(true) }

    // Load YouTube Frame API
    (function(){ //Closure, to not leak to the scope
      var s = document.createElement("script");
      s.src = "//www.youtube.com/player_api"; /* Load Player API*/
      var before =document.getElementsByTagName("script")[0];
      before.parentNode.insertBefore(s, before);
    })();


    var player;
    YT_ready(function(){
        var frameID = getFrameID("yt");
        if (frameID) { //If the frame exists
            player = new YT.Player(frameID, {
                events: {
                    "onStateChange": function(event){
                        if(event.data == "0") {
                            //The video has finished
                            // alert("The video has finished!");
                            $('#youtube_status').html('you already watched it !!');
                            //Do something, example: play again
                            pb.showDialog('reward', {'type':'point', 'value': '30'});
                            // player.playVideo();
                        }
                        if(event.data == "1") {
                          $('#youtube_status').html('is playing now ...');
                          // console.log('video is playing');
                        }                        
                    }
                }
            });
        }
    });
    </script>
    <div class="pbd_slide_wrapper trace">
        <div class="pbd_top_panel pbd_cover_panel">
          <div class="pbd_right_panel pbd_panel">
            <div class='pbd_sample_context' id='pbd_context_video'>
          <div class="pbd_context_content">
            <!-- <div id="videoDiv">Laoding ...</div> -->
            <!-- <iframe id="yt" width="360" height="203" src="//www.youtube.com/v/9bZkp7q19f0&enablejsapi=1" frameborder="0" allowfullscreen=""></iframe> -->
            <iframe id="yt" width="360"height="203"frameborder="0"title="YouTube video player"type="text/html"src="https://www.youtube.com/embed/9bZkp7q19f0?enablejsapi=1"></iframe>
          </div>
          <div class="pbd_context_action"></div>
        </div>
          </div>


          <div class="pbd_left_panel pbd_panel">
            
            <h1 class="pbd_topic_header">Custom Actions</h1>
            <div style='display:none' id="youtube_status" class='pbd_topic_content'><strong>Please watch the video to get point ..</strong></div>  
            <div class="pbd_topic_content">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you have a website where users can take special actions such as uploading music, bookmarking interesting content, completing quizzes, or making purchases, you can reward them for completing these high-value actions.
            </div>
          </div>
      </div>



      <div class="pbd_bottom_panel pbd_cover_panel">
          
      <div class="pbd_right_panel pbd_panel ">
            
            <h1 class="pbd_topic_header">Social Comments Integration</h1>
              <div style='display:none'  id="comment_status" class="pbd_topic_content">Please leave your comment ;)</div>
            <div class="pbd_topic_content" style='display:none'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation
            </div>
          </div>

          <style type="text/css">
            #pbd_context_comment{
              overflow: auto;
              background: #fff;
              width: 380px;
              height: 330px;
              overflow-x: hidden;
              margin-top: -70px;
            }          
          </style>

          <div class="pbd_left_panel pbd_panel">
            <div class='pbd_sample_context' id='pbd_context_comment'>
          <div class="pbd_context_content">
            <div class="fb-comments" data-href="//pbapp.net/demo" data-width="360" data-num-posts="1" data-colorscheme="dark"></div>
          </div>
          <div class="pbd_context_action"></div>
        </div>
          </div>

      </div>


    </div>
