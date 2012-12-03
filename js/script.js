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
    pb.point = 0, pb.level = 1;
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
            $('.bar').css('width', "100%");
            
            setTimeout(function() {
                pb.levelUp(pb.level + 1);
                console.log(pb.point);
                var progress = $('.bar').parent();
                $(progress).remove('.bar').append($('.bar'));
                $('.bar').css('width', "0%");
            }, 500);

            setTimeout(function() {
                $('.bar').css('width', pb.point + "%");
            }, 1000);
        }
        else {
            $('.bar').css('width', pb.point + "%");
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
        var lastActivate;
        $('#impress div div').on('impress:stepenter', function() { 
            console.log(this.id);
            $('#navbar li').removeClass('active');
            $('#navbar a[href$="'+this.id+'"]').parent().addClass('active');
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
