// // SLIDE 6 .PHP
// 	var cnt = 0;
// 	var lock_path = './img/img_badges_blank.png';
	
// 	$('.pbd_context_demo_badges_shelf').children().each(function(){
// 		var classes = $(this).attr('class');
// 		if(classes.indexOf('pbd_locked') > -1){
// 			$(this).attr('src',lock_path);
// 		}else{
// 			$(this).attr('src','./img/img_badges'+cnt+'.png');
// 		}

// 		cnt++;
// 		cnt%=3;	
// 	})
// // END SLIDE 6 .PHP



























// // SLIDE 7 .PHP

//         var pbd_name = new Array();
//         pbd_name[0] = 'friends_01.jpg|Siritra';
//         pbd_name[1] = 'friends_02.jpg|PM_Master';
//         pbd_name[2] = 'friends_03.jpg|Rob';
//         pbd_name[3] = 'friends_04.jpg|Gus';
//         pbd_name[4] = 'friends_05.jpg|Nupang';


//         var pbd_action_image = new Array();
//         pbd_action_image[0] = 'img_badges0.png|visit';
//         pbd_action_image[1] = 'img_badges1.png|comment';
//         pbd_action_image[2] = 'img_badges2.png|like';
//         pbd_action_image[3] = 'img_badges0.png|share';
//         pbd_action_image[4] = 'img_badges1.png|want';



//         $(document).ready(function(){
//             // alert('kick start')

//              // jQuery("abbr.timeago").timeago();

//             setTimeout(function(){

//                 //Uncaught TypeError: Object [object Object] has no method 'mCustomScrollbar' 
//                 // Maybe because -> jsimpress
//                 $(".tabhost_noti_stream").mCustomScrollbar({
//                     scrollInertia:0
//                 });

//             },3000);




//             //Randomly Add Content
//             var n = 0;
//             var i = setInterval(function(){
//                 if(n++<1000){ 
//                     pushFeed(setUpFeedObject());
//                 }else{
//                     clearInterval(i);
//                 }
//             },8000);


//             //Set Time ago to feed
//             var m = 0;
//             var p = setInterval(function(){
                 
//                  $('.tabhost_noti_stream').children().each(function(){
                    
//                     //read Time 
//                     var readTime = $(this).find('.noti_stream_item_time_ago').attr('title');
//                     //Apply TimeAgo
//                     $(this).find('.noti_stream_item_time_ago').html(jQuery.timeago(parseInt(readTime)));
                    
//                  })
                 


//             },30000);




//             function setUpFeedObject(){
                 
//                     var rand_index = Math.floor((Math.random()*5)+1)-1;
//                     // console.log(' rand index >>>' +rand_index);

//                     var text = pbd_name[rand_index].split('|');
//                         var img = './img/'+text[0];
//                         var name = text[1];
//                     // console.log(name + ' >> '+ img);

//                     var rand_index_inv = Math.floor((Math.random()*5)+1)-1;                    
//                     // console.log(' rand_inv index >>>' +rand_index_inv);
//                     var actz = pbd_action_image[rand_index_inv].split('|');
//                         var act_img = './img/'+actz[0];
//                         var act_text = actz[1];
//                     // console.log(act_text + ' >> '+ act_img);


//                     return forgeStreamListItem(img,name,act_text,act_img);
//             }

//             function pushFeed(object){
//                 console.log('Push Feed');
//                 object.hide().prependTo('.tabhost_noti_stream').slideDown("fast");
//             }


//             function forgeStreamListItem(img,name,act,badge){

//                     var object = $('#noti_stream_item_modal').clone();
//                     object.attr('id','');
//                         var timestamp = new Date().getTime();
//                         object.find('.noti_stream_item_time_ago').attr('title',timestamp);
//                         object.find('.noti_stream_item_time_ago').html('just now');

//                     object.find('.noti_stream_item_name h4').html(name);
//                     object.find('.topic_img').attr('src',img);
                    

//                     object.find('#noti_uname_act').html(name);
//                     object.find('#noti_action_act').html(act);
//                     object.find('.noti_stream_item_badge').attr('src',badge);

//                     return object;
//             }

//             $('#pbd_stream_ads_push_btn').click(function(){
                        

//                         var img = $('#pbd_stream_ads_user_img').val();
//                         if(img=='')return;
//                         var name = $('#pbd_stream_ads_username').val();
//                         var act_text = $('#pbd_stream_ads_action').val();
//                         var act_img = $('#pbd_stream_ads_badges_img').val();

//                         pushFeed(forgeStreamListItem(img,name,act_text,act_img));
//             })


//         })


// // END SLIDE 7 .PHP