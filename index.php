
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=1024" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <title>playbasis demo</title>
    
    <meta name="description" content="impress.js is a presentation tool based on the power of CSS3 transforms and transitions in modern browsers and inspired by the idea behind prezi.com." />
    <meta name="author" content="Bartek Szopka" />

    <link href="http://fonts.googleapis.com/css?family=Open+Sans:regular,semibold,italic,italicsemibold|PT+Sans:400,700,400italic,700italic|PT+Serif:400,700,400italic,700italic" rel="stylesheet" />
    
    <link href="css/joyride-2.0.2.css" rel="stylesheet" />
    <link href="css/impress-demo.css" rel="stylesheet" />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    
    <!-- rokios -->
    <link href="css/pbd.css" rel="stylesheet" />
    <link href="css/pbd_common.css" rel="stylesheet" />
    <link href="css/pbd_component.css" rel="stylesheet" />
    <link href="css/text.css" rel="stylesheet" />
    <link href="css/jquery.mCustomScrollbar.css" rel="stylesheet" type="text/css" />


    <!-- end rokios -->
    
    <link rel="shortcut icon" href="favicon.png" />
    <link rel="apple-touch-icon" href="apple-touch-icon.png" />
</head>
<body class="impress-not-supported" data-spy="scroll" data-target=".navbar">
    <div id="fb-root"></div>
    <script>
        window.fbAsyncInit = function() {
            // init the FB JS SDK
            FB.init({
              appId      : '500595709974073', // App ID from the App Dashboard
              channelUrl : '//http://localhost/~Piya/presentation/channel.php', // Channel File for x-domain communication
              status     : true, // check the login status upon init?
              cookie     : true, // set sessions cookies to allow your server to access the session?
              xfbml      : true  // parse XFBML tags on this page?
            });

            // Additional initialization code such as adding Event Listeners goes here
            FB.getLoginStatus(function(response) {
                console.log(response);
                if (response.status === 'connected') {
                    // connected
                    $('.online').addClass('active');
                    $('.offline').removeClass('active');
                } 
                else {
                    $('.online').removeClass('active');
                    $('.offline').addClass('active');
                }
            });

            FB.Event.subscribe('auth.statusChange', function(response){
                if (response.status === 'connected') {
                    // connected
                    FB.api('/me', function(response) {
                        $('#user img').attr({'src': '//graph.facebook.com/​'+response.id+'/picture',
                                                     'width': '25px',
                                                     'height': '25px'
                                                    });

                        $('#user span').html(response.name);
                        console.log(response.name);
                    });

                    $('.online').toggleClass('active');
                    $('.offline').toggleClass('active');

                } 
                else {
                    $('.online').toggleClass('active');
                    $('.offline').toggleClass('active');
                }
            });
        };

      // Load the SDK's source Asynchronously
      // Note that the debug version is being actively developed and might 
      // contain some type checks that are overly strict. 
      // Please report such bugs using the bugs tool.
      (function(d, debug){
         var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement('script'); js.id = id; js.async = true;
         js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
         ref.parentNode.insertBefore(js, ref);
       }(document, /*debug*/ false));
    </script>

    <div id="playbasis_bar">
    <ul class="pull-left">
        <li class="logo"><div id="logo"></div></li>
        <li class="progressbar">
            <div class="level">
                <span>Novice</span>
            </div>
            <div class="progress">
                <div class="bar"></div>    
            </div>
        </li>
    </ul>li
        
        <ul class="pull-right">
            <li id="user" class="online">
                <img src="" alt="" class="">
                <span></span>
            </li>
            <li>
                <button id="login" class="btn btn-inverse start-here offline">login</button>
                <button id="logout" class="btn btn-inverse start-here online">logout</button> 
            </li>   
        </ul>
    </div>
    
    <div class="fallback-message">
        <p>Your browser <b>doesn't support the features required, so you are presented with a simplified version of this presentation.</p>
        <p>For the best experience please use the latest <b>Chrome</b>, <b>Safari</b> or <b>Firefox</b> browser.</p>
    </div>
    
    <div id="impress">

        <div id="bored" class="step slide" data-x="-1000" data-y="-1500">
            <?php include 'slide1.php';?>
        </div>
        
        <div id="sticky-bar" class="step slide" data-x="0" data-y="-1500">
           <?php include 'slide2.php';?>
        </div>

        <div id="basic-action" class="step slide" data-x="1000" data-y="-1500">
           <?php include 'slide3.php';?>
        </div>

        <div id="eccommerce-action" class="step slide" data-x="2000" data-y="-1500">
           <?php include 'slide4.php';?>
        </div>

        <div id="content-action" class="step slide" data-x="3000" data-y="-1500">
           <?php include 'slide5.php';?>
        </div>

        <div id="reward-system" class="step slide" data-x="4000" data-y="-1500">
           <?php include 'slide6.php';?>
        </div>

        <div id="stream" class="step slide" data-x="5000" data-y="-1500">
           <?php include 'slide7.php';?>
        </div>

        <div id="leader-board" class="step slide" data-x="6000" data-y="-1500">
           <?php include 'slide8.php';?>
        </div>

        <div id="dashboard" class="step slide" data-x="7000" data-y="-1500">
           <?php include 'slide9.php';?>
        </div>

        <div id="backend-system" class="step slide" data-x="8000" data-y="-1500">
           <?php include 'slide10.php';?>
        </div>


       <!--  <div class="step slide" data-x="2000" data-y="-1500">
            <q>Would you like to <strong>impress your audience</strong> with <strong>stunning visualization</strong> of your talk?</q>
        </div>
         -->
        <div id="title" class="step" data-x="0" data-y="0" data-scale="4">
            <h1>playbasis<sup>*</sup></h1>
        </div>
        <div id="its" class="step" data-x="850" data-y="3000" data-rotate="90" data-scale="5">
            <p>It's a <strong><a href="//twitter.com/search?q=%23gamification&src=typd" target="_blank">#gamification</a> platform</strong> <br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div id="big" class="step" data-x="3500" data-y="2100" data-rotate="180" data-scale="6">
            <p>visualize your <b>big</b> <span class="thoughts">thoughts</span></p>
        </div>
        
        <div id="tiny" class="step" data-x="2825" data-y="2325" data-z="-3000" data-rotate="300" data-scale="1">
            <p>and <b>tiny</b> ideas</p>
        </div>        
    </div>
    
    <div id="footer">
        <div id="navbar" class="navbar">
            <div class="navbar-inner">
                <a class="brand" href="#">Title</a>
                <ul class="nav">
                    <li class="active"><a href="#bored">bored</a></li>
                    <li><a href="#stream">stream</a></li>
                    <li><a href="#dashboard">dashboard</a></li>
                </ul>
            </div>
        </div>
    </div>
    
      <!-- Tip Content -->
    <ol id="playbasisTour">
      <li data-button="login">
        <h2>Start Here</h2>
        <p>You can start the demo here by login via facebook</p>
      </li>
<!--       <li data-id="numero2" data-button="Next" data-options="tipLocation:top;tipAnimation:fade">
        <h2>Stop #2</h2>
        <p>Get the details right by styling Joyride with a custom stylesheet!</p>
      </li>
      <li data-id="numero3" data-button="Next" data-options="tipLocation:right">
        <h2>Stop #3</h2>
        <p>It works right aligned.</p>
      </li>
      <li data-button="Next">
        <h2>Stop #4</h2>
        <p>It works as a modal too!</p>
      </li>
      <li data-id="numero5" data-button="Close">
        <h2>Stop #5</h2>
        <p>Now what are you waiting for? Add this to your projects and get the most out of your apps!</p>
      </li> -->
    </ol>
    
    <script type="text/javascript" src="js/jquery1.8.3.js"></script>
    <script type="text/javascript" src="js/jquery.mCustomScrollbar.js"></script>
    <script type="text/javascript" src="js/jquery.mousewheel.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/jquery.timeago.js"></script>
    <script type="text/javascript" src="js/basic_operation.js"></script>
    

    <script type="text/javascript" src='js/impress.js'></script>
    <script type="text/javascript" src='js/bootstrap.js'></script>
    <script type="text/javascript" src="js/jquery.cookie.js"></script>
    <script type="text/javascript" src="js/modernizr.mq.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <!-- <script type="text/javascript" src="js/jquery.joyride-2.0.2.js"></script>     -->
    <script>
        impress().init();
        $('#navbar').scrollspy()
        // $(window).load(function() {
        //     $('#playbasisTour').joyride({'postStepCallback': function(index, tip){ console.log(tip); }});
        // });

        function login() {

        }
    </script>
</body>
</html>