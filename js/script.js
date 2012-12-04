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
    pb.point = 0, pb.level = 1, pb.page = {};
    pb.setExp = function(point) {
        if(typeof point === 'number') pb.point += point;
        if(typeof point === 'string') {
            if( point.match('%') ) {
                pb.point += parseInt(point.split('%')[0], 10);
            }
            else {
                pb.point += parseInt(point, 10);
            }
        }

        if(pb.point >= 100) {
            pb.point -= 100;
            $('#playbasis_bar .bar').css('width', "100%");
            
            setTimeout(function() {
                pb.levelUp(pb.level + 1);
                console.log(pb.point);
                var progress = $('#playbasis_bar .bar').parent();
                $(progress).remove('#playbasis_bar .bar').append($('#playbasis_bar .bar'));
                $('#playbasis_bar .bar').css('width', "0%");
            }, 500);

            setTimeout(function() {
                $('#playbasis_bar .bar').css('width', pb.point + "%");
            }, 1000);
        }
        else {
            $('#playbasis_bar .bar').css('width', pb.point + "%");
        }
        console.log('setExp');
    }
    pb.levelUp = function(level) {
        console.log('levelUp');
        var level_name="";
        switch (level) {
            case 1 : level_name = 'Novice'; break;
            case 2 : level_name = 'Master'; break;
            default : return;
        }
        $('.level span').html(level_name);    
    }

    pb.scrollspy = function() {
        var lastActivate = [];
        $('#impress div div').on('impress:stepenter', function() { 
            console.log(this.id);
            $('#navbar li').removeClass('active');
            $('#navbar a[href$="'+this.id+'"]').parent().addClass('active');

            if(!pb.page[this.id]) { 
                pb.page[this.id] = true;
                pb.setExp(12)
            }
        });
    }
    pb.scrollspy();

    pb.showDialog = function(dialog,data) {
        var target;
        console.log(dialog);
        if(!dialog){
            console.log('Error , Some argument missing!');
            return false;
        }

        if(dialog == 'reward'){

            if(!$('#pb-root .notification.points-notify').length){
                var rootTarget = $('#pb-root');

                rootTarget.append('<div class="notification bg-dark points-notify clearfix">' + 
                                    '<div class="points pull-left bg-orange">' + 
                                        '<div class="points-bg">' + 
                                            '<div class="notify-title">40</div>' + 
                                            '<span class="small">Points</span>' +
                                        '</div>' + 
                                    '</div>' + 
                                    '<div class="points-notify-content">' + 
                                        '<a class="close"></a>' + 
                                        '<h2>Congratulations!</h2>' + 
                                        '<h4>description</h4>'+
                                    '</div>' + 
                                  '</div>');

                $('.notification.points-notify').hide();
                rootTarget.appendTo($('body'));
            }
            //return false;
            target = $('.notification.points-notify');

            if(data.type){
                switch(data.type){
                    case 'badge' : 
                        if(data.badge_image && data.badge_name){
                            $('.notification.points-notify .points-bg').removeClass('points-bg').addClass('points-bg-badge');
                            $('.notification.points-notify .points-bg-badge').html('<img src="'+data.badge_image+'" alt="'+data.badge_name+'" />');
                            $('.points-notify-content h4').text('You just earned '+data.badge_name+' badge');
                        }
                        else{   
                            console.log('Error [badge data] , require argument missing!');
                            return false;
                        }
                        break;

                    case 'point':
                    case 'exp':
                        if(data.value){
                            if($('.notification.points-notify .points-bg-badge').length){
                                $('.notification.points-notify .points-bg-badge').removeClass('points-bg-badge').addClass('points-bg');
                            }
                            $('.notification.points-notify .points-bg').html('<div class="notify-title">'+data.value+'</div><span class="small">'+data.type+'s</span></div>');
                             
                            $('.points-notify-content h4').text('You just earned '+data.value+' '+data.type+'s');
                        }
                        else{
                            console.log('Error [point data] , require argument missing!');
                            return false;                               
                        }
                        break;

                    case 'level' :
                        if(data.value){
                             if($('.notification.points-notify .points-bg-badge').length){
                                $('.notification.points-notify .points-bg-badge').removeClass('points-bg-badge').addClass('points-bg');
                            }
                            $('.notification.points-notify .points-bg').html('<div class="notify-title">'+data.value+'</div><span class="small">'+data.type+'s</span></div>');
                             
                            $('.points-notify-content h4').text('You just reached Level '+data.value);
                        }
                        else{
                            console.log('Error [level data] , require argument missing!');
                            return false;                               
                        }
                        break;
                    default :
                        break;
                }   
            }
            else{
                console.log('Error , reward type missing');
                return false;
            }
        }
        else if(dialog == 'event'){

            if(!$('#pb-root .notification.event-notify').length){
                var rootTarget = $('#pb-root');

                rootTarget.append('<div class="notification bg-dark event-notify clearfix">' + 
                                    '<div class="date pull-left bg-turq"><div class="event-bg"><div class="notify-title">02</div><span class="small">Nov 2012</span></div></div><div class="event-notify-content"><a class="close"></a><h2>The Special Event</h2><div class="time">12.00pm - 2.00pm</div><div class="location">Bangkok, Thailand</div><div class="event-notify-action"><a href="#" class="btn-turq">Attend</a><a href="#" class="btn-turq">Cancel</a></div></div></div>');

                $('.notification.event-notify').hide();
            }

            //var data = {'title':'Test Event','date':['05','dec','2012'],'time':'12.00pm - 2.00am','location':'Saraburi, Thailand'};
            if(data.title && data.date &&data.time && data.location){
                $('.notification.event-notify .notify-title').text(data.date[0]);
                $('.notification.event-notify .notify-title span.small').text(data.date[1] +' '+data.date[2]);
                $('.event-notify-content h2').text(data.title);
                $('.special-dialog-event div.time').text(data.time);
                $('.special-dialog-event div.location').text(data.location);
            }
            else{
                console.log('Error [event data] , require argument missing!');
                return false;   
            }

            target = $('.notification.event-notify');

        }

        else{
            console.log('Error , dialog not found!');
            return false;
        }

        target.slideDown(500,'swing', closeDialog(target,5000));
        return false
    }

    pb.blinkblink = function(elem, /* box-shadow config*/ config) {
        if(!config) {
            $(elem).css('box-shadow', 'rgb(0, 0, 0) 0px 0px 10px 0px');
        }
        else {
            $(elem).css('box-shadow', config);
        }
        
        setInterval(function() {
            $(elem).stop().animate({boxShadow: '0 0 30px #44f'}).animate({boxShadow: '0 0 10px #000'}) 
        }, 2000);
    }


// Slide 3 Content Integration 
$('#pbd_context_visit .context_button').on('click', function() { 
  console.log('visit');
  pb.showDialog('reward', {'type':'point', 'value': '10'});
});

$('#pbd_context_like .context_button').on('click', function() { 
  console.log('like');
  pb.showDialog('reward', {'type':'point', 'value': '15'});
});

$('#pbd_context_share .context_button').on('click', function() { 
  console.log('share');
  pb.showDialog('reward', {'type':'point', 'value': '20'});
});


// Slide 4 e-Commerce Integration 
$('#pbd_context_checkin .context_button').on('click', function() { 
  console.log('checkin');
  pb.showDialog('reward', {'type':'point', 'value': '10'});
});

$('#pbd_context_want .context_button').on('click', function() { 
  console.log('want');
  pb.showDialog('reward', {'type':'point', 'value': '15'});
});

$('#pbd_context_buy .context_button').on('click', function() { 
  console.log('buy');
  pb.showDialog('reward', {'type':'point', 'value': '20'});
});

// blink blink zone
pb.blinkblink('#pbd_context_visit > .pbd_action_text');
pb.blinkblink('#context_like_btn');
pb.blinkblink('#context_share_btn');
pb.blinkblink('#pbd_context_checkin_btn');
pb.blinkblink('.pbd_context_want_btn');
pb.blinkblink('.pbd_context_buy_btn');

});


//close dialog callback
function closeDialog(obj,time){
    var timer;
    if(timer){
        clearTimeout(timer);
    }
    
    timer = setTimeout(function(){
            $(obj).slideUp(500);
    },time)
    return false;
}

//close button listener
$('.notification a.close').live('click',function(){
    $(this).closest('div.notification').slideUp(500);
    return false;
});

// SLIDE 3.php
$(document).ready(function(){
    $('#pbd_context_visit').scroll(function(){ 
      if(isScrollBottom()){ 
        pb.showDialog('reward', {'type':'point', 'value': '10'});
      } 
    }); 

    function isScrollBottom() { 
        var elementHeight = $('#pbd_context_visit img').height(),
            scrollPosition = $('#pbd_context_visit').height() + $('#pbd_context_visit').scrollTop(); 
        return (elementHeight === scrollPosition-2); 
    }
});

// END SLIDE 3.php


// SLIDE 6 .PHP
var lock_path = './img/img_badges_blank.png',
    adspush_selectedIndex = 2,
    badges_collection_filled = false;

$('.pbd_context_demo_badges_shelf').children().each(function(){
    $(this).attr('src',lock_path);
})

function oprt_fill_badges(){
    var cnt=0;
    var cntx = 0;
    $('.pbd_context_demo_badges_shelf').children().each(function(){
        var object = $(this),
            time = ++cnt*150;

        setTimeout(function(){ 
            var classes = object.attr('class');
            if(classes.indexOf('pbd_locked') < 0) {
                object.hide();
                object.attr('src','./img/img_badges'+cntx+'.png')
                object.show('fast');
            }
            cntx++;
            cntx%=3; 
        }, time);
    });
}

function oprt_reload_exp(target){
    //
}


$(document).ready(function(){

    $('.pbd_context_demo_level').on('hover', function(){
        setTimeout(function() {
            $('.pbd_context_demo_level_bar_inner.bar').css('width', '30%');
        }, 1000);

        setTimeout(function() {
            $('.pbd_context_demo_level_bar_inner.bar').css('width', '60%');
        }, 3000);

        setTimeout(function() { 
            $('.pbd_context_demo_level_bar_inner.bar').css('width', '80%');
        }, 4000);
    });

    $('.pbd_context_demo_badges_shelf').hover(function(){

        //hover to filled badges
        if(!badges_collection_filled){
            badges_collection_filled = true;
            oprt_fill_badges();
        }
    });


    //Dropdown plugin data
    var ddData = [
        {
            text: "Ensogo",
            value: 1,
            selected: false,
            description: "Ensogo Ads. description here.",
            imageSrc: "./img/logo_ensogo.png"
        },
        {
            text: "What's new",
            value: 2,
            selected: false,
            description: "What's new Ads. description here.",
            imageSrc: "./img/logo_whatsnew.png"
        },
        {
            text: "Oishi",
            value: 3,
            selected: true,
            description: "Oishi Ads. description here.",
            imageSrc: "./img/logo_oishi.png"
        }
    ];


    $('#demoBasic').ddslick({
        data: ddData,
        width: 300,
        imagePosition: "left",
        selectText: "Select your favorite social network",
        onSelected: function (data) {
            console.log(data.selectedIndex);
            adspush_selectedIndex = data.selectedIndex;
        }
    });
})
// END SLIDE 6 .PHP


// SLIDE 7 .PHP
var pbd_name = [
        'friends_01.jpg|Siritra',
        'friends_02.jpg|PM_Master',
        'friends_03.jpg|Rob',
        'friends_04.jpg|Gus',
        'friends_05.jpg|Nupang'
    ],
    pbd_action_image = [
        'img_badges0.png|visit',
        'img_badges1.png|comment',
        'img_badges2.png|like',
        'img_badges0.png|share',
        'img_badges1.png|want'
    ];



$(document).ready(function(){
    setTimeout(function(){
        //Uncaught TypeError: Object [object Object] has no method 'mCustomScrollbar' 
        // Maybe because -> jsimpress
        $(".tabhost_noti_stream").mCustomScrollbar({
            scrollInertia:0
        });
    }, 3000);


    //Randomly Add Content
    var n = 0;
    var i = setInterval(function(){
        if(n++<1000){ 
            pushFeed(setUpFeedObject());
        }else{
            clearInterval(i);
        }
    },8000);


    //Set Time ago to feed
    var m = 0;
    var p = setInterval(function(){
         
         $('.tabhost_noti_stream').children().each(function(){
            
            //read Time 
            var readTime = $(this).find('.noti_stream_item_time_ago').attr('title');
            //Apply TimeAgo
            $(this).find('.noti_stream_item_time_ago').html(jQuery.timeago(parseInt(readTime)));
            
         });
    }, 30000);
});



function setUpFeedObject(){
     
    var text = pbd_name[Math.floor(Math.random()*5)].split('|'),
        img = './img/' + text[0],
        name = text[1];
                  
    var actz = pbd_action_image[Math.floor(Math.random()*5)].split('|'),
        act_img = './img/' + actz[0],
        act_text = actz[1];

    return forgeStreamListItem(img,name,act_text,act_img);
}

function pushFeed(object){
    console.log('Push Feed');
    console.log(object);
    object.hide().prependTo('.tabhost_noti_stream').slideDown("fast");
}




function forgeStreamAdsItem(img,name,message,link){
        var object = $('#noti_stream_ads_item_modal').clone();
        object.attr('id','');
            var timestamp = new Date().getTime();
            object.find('.noti_stream_item_time_ago').attr('title',timestamp);
            object.find('.noti_stream_item_time_ago').html('just now');

        object.find('.noti_stream_item_name h4').html(name);
        object.find('.noti_stream_item_info').html(message);
        object.find('.topic_img').attr('src',img);
        

        object.find('.noti_stream_item_action_info a').html(link);
        object.find('.noti_stream_item_badge').css('visibility','invisible');

        return object;                
}




function forgeStreamListItem(img,name,act,badge){

        var object = $('#noti_stream_item_modal').clone();
        object.attr('id','');
            var timestamp = new Date().getTime();
            object.find('.noti_stream_item_time_ago').attr('title',timestamp);
            object.find('.noti_stream_item_time_ago').html('just now');

        object.find('.noti_stream_item_name h4').html(name);
        object.find('.topic_img').attr('src',img);
        

        object.find('#noti_uname_act').html(name);
        object.find('#noti_action_act').html(act);
        object.find('.noti_stream_item_badge').attr('src',badge);

        return object;
}

$('#pbd_stream_ads_push_btn').click(function(){
            //if message and link != blank
            var img = '';
            var name = '';
            var link = '';
            var message = $('#pbd_stream_ads_message').val();//'test';

            switch(adspush_selectedIndex){
                case 0 : img = './img/logo_ensogo.png';
                 name = 'Ensogo';
                 link = 'playth.is/asdf';
                 break;
                case 1 : img = './img/logo_whatsnew.png'; 
                 name = "What's new";
                 link = 'playth.is/hjkl';
                 break;
                case 2 : img = './img/logo_oishi.png'; 
                 name = 'Oishi';
                 link = 'playth.is/qwert';
                 break;
                default: return;
            }


        
        pushFeed(forgeStreamAdsItem(img,name,message,link));                  


            // var img = $('#pbd_stream_ads_user_img').val();
            // if(img=='')return;
            // var name = $('#pbd_stream_ads_username').val();
            // var act_text = $('#pbd_stream_ads_action').val();
            // var act_img = $('#pbd_stream_ads_badges_img').val();

            // pushFeed(forgeStreamListItem(img,name,act_text,act_img));
})


// END SLIDE 7 .PHP







// SLIDE 8 .PHP
    $(document).ready(function(){
        

        $('.tab_indicator_fit li').live('click',function(){

            console.log('>> click');

            $('.tab_indicator_fit li').removeClass('pbd_r_active');
            $(this).addClass('pbd_r_active');

            var id = $(this).attr('id');            
            if(id=='buddy'){
                $('.pbd_leader-list').html($('#pbd_buddy_modal_mock').clone());
            }else if(id=='weekly'){
                $('.pbd_leader-list').html($('#pbd_weekly_modal_mock').clone());
            }else if(id=='global'){
                $('.pbd_leader-list').html($('#pbd_global_modal_mock').clone());
            }


        })

        // first time load 
        // $('.tab_indicator_fit li#buddy').trigger('click');
            $('.tab_indicator_fit li').removeClass('pbd_r_active');
            $('.tab_indicator_fit li#buddy').addClass('pbd_r_active');
            $('.pbd_leader-list').html($('#pbd_buddy_modal_mock').clone());



    });

// END SLIDE 8 .PHP
