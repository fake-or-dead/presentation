<html lang='en'>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=1024" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <title>playbasis demo</title>
    
    <meta name="description" content="impress.js is a presentation tool based on the power of CSS3 transforms and transitions in modern browsers and inspired by the idea behind prezi.com." />
    <meta name="author" content="Bartek Szopka" />

    <link href="http://fonts.googleapis.com/css?family=Open+Sans:regular,semibold,italic,italicsemibold|PT+Sans:400,700,400italic,700italic|PT+Serif:400,700,400italic,700italic" rel="stylesheet" />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/joyride-2.0.2.css" rel="stylesheet" />
    <link href="css/impress-demo.css" rel="stylesheet" />
    
    <link rel="shortcut icon" href="favicon.png" />
    <link rel="apple-touch-icon" href="apple-touch-icon.png" />
</head>
<body class="impress-not-supported">
    <div id="playbasis_bar">
        <div id="logo"></div>
        <button class="btn btn-inverse pull-right start-here">login</button>
    </div>
    
    <div class="fallback-message">
        <p>Your browser <b>doesn't support the features required, so you are presented with a simplified version of this presentation.</p>
        <p>For the best experience please use the latest <b>Chrome</b>, <b>Safari</b> or <b>Firefox</b> browser.</p>
    </div>
    
    <div id="impress">

        <div id="bored" class="step slide" data-x="-1000" data-y="-1500">
            <q><center><span class="hello">Playbasis logo</span></center></q>
        </div>
        
        <div class="step slide" data-x="0" data-y="-1500">
            <q>Don't you think that presentations given <strong>in modern browsers</strong> shouldn't <strong>copy the limits</strong> of 'classic' slide decks?</q>
        </div>

        <div class="step slide" data-x="1000" data-y="-1500">
            <q>Would you like to <strong>impress your audience</strong> with <strong>stunning visualization</strong> of your talk?</q>
        </div>
        
        <div id="title" class="step" data-x="0" data-y="0" data-scale="4">
            <span class="try">then you should try</span>
            <h1>impress.js<sup>*</sup></h1>
            <span class="footnote"><sup>*</sup> no rhyme intended</span>
        </div>
        <div id="its" class="step" data-x="850" data-y="3000" data-rotate="90" data-scale="5">
            <p>It's a <strong>presentation tool</strong> <br/>
            inspired by the idea behind <a href="http://prezi.com">prezi.com</a> <br/>
            and based on the <strong>power of CSS3 transforms and transitions</strong> in modern browsers.</p>
        </div>

        <div id="big" class="step" data-x="3500" data-y="2100" data-rotate="180" data-scale="6">
            <p>visualize your <b>big</b> <span class="thoughts">thoughts</span></p>
        </div>
        
        <div id="tiny" class="step" data-x="2825" data-y="2325" data-z="-3000" data-rotate="300" data-scale="1">
            <p>and <b>tiny</b> ideas</p>
        </div>        
    </div>
    
      <!-- Tip Content -->
    <ol id="playbasisTour">
      <li data-button="login">
        <h2>Start Here</h2>
        <p>You can start the demo here by login via facebook</p>
      </li>
      <li data-id="numero2" data-button="Next" data-options="tipLocation:top;tipAnimation:fade">
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
      </li>
    </ol>    
    
    <script type="text/javascript" src='js/impress.js'></script>
    <script type="text/javascript" src='js/bootstrap.min.js'></script>
    <script type="text/javascript" src="js/jquery-1.8.2.js"></script>
    <script type="text/javascript" src="js/jquery.cookie.js"></script>
    <script type="text/javascript" src="js/modernizr.mq.js"></script>
    <script type="text/javascript" src="js/jquery.joyride-2.0.2.js"></script>    
    <script>
        impress().init();
        $(window).load(function() {
            $('#playbasisTour').joyride({'postStepCallback': function(index, tip){ console.log(tip); }});
        });

        function login() {

        }
    </script>
</body>
</html>