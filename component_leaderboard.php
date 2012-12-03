<div class="pbd_right-panel trace">
            
                <div class="pbd_leaderboard">

                <!-- <h3><span>Leaderboard</span></h3> -->
                <!-- rokios -->
                <style type="text/css">
                    #pbd_context_gradient_h_leaderboard{background-color:rgb(24, 100, 213);border: 1px solid rgb(24, 100, 213); }
                    #pbd_context_gradient_h_leaderboard .pbd_context_gradient_head_inner{text-align: left}
                    .pbd_context_gradient_head_inner img{margin-top:0px;}
                </style>
                <div class="pbd_context_gradient_head  round-top " id='pbd_context_gradient_h_leaderboard'>
                                <div class='pbd_context_gradient_head_inner mini-round' >
                                    <img src='./img/img_notification.png' width='28' style='float:left'>
                                    Leader board
                                </div>
                </div>
        <!-- end rokios -->
                
                    <div class="pbd_navigation">
                        <!-- <ul class="pbd_nav-tabs pbd_clearfix">
                            <li class="pbd_buddy"><a href="#">Buddy</a></li>
                            <li class="pbd_weekly"><a href="#">Weekly</a></li>
                            <li class="pbd_global"><a href="#">Global</a></li>
                        </ul> -->
                        
                        <!-- rokios -->
                        <style type="text/css">
                          
                            ul.tab_indicator_fit li {
                                float: left;
                                min-width: 92px;
                                margin: 0 0 2px 2px;
                                cursor: pointer;
                                line-height: 36px;
                                background: #ddd;
                                }
                            ul.tab_indicator_fit li img {
                                margin: -10px 0px 0px 26px;

                            }

                            ul.tab_indicator_fit li.pbd_r_active{ background: #fff;}

                        </style>


                        <ul class='tab_indicator_fit'  id='leaderboard_fit_indicator'>
                                
                                <li class='line' id='buddy'>
                                    <img src='./images/ico_leader_buddy.png' width='42'/>
                                </li>
                                <li class='line' id='weekly'>
                                    <img src='./images/ico_leader_weekly.png' width='42'/> 
                                </li>
                                <li class='line' id='global'>
                                    <img src='./images/ico_leader_global.png' width='42'/>
                                </li>
                        </ul>
                        <!-- end rokios -->


                    </div>
                    <div class="pbd_the-content pbd_leaderboard-content">
                        <ul class="pbd_unstyled pbd_leader-list">


                            <?php for ($i=0; $i < 10 ; $i++) { ?>
                            <li>
                                <div class="pbd_left-col">
                                    <div class="pbd_user-avatar pbd_pull-left">
                                        <img src="images/avatar.png">
                                    </div>
                                    <div class="pbd_user-content">
                                        <div class="pbd_user-name"><a href="#">John Appleseed</a></div>
                                        <div class="pbd_user-rating pbd_clearfix">
                                            <span class="pbd_like"><a href="#">10</a></span>
                                            <span class="pbd_star"><a href="#">10</a></span>
                                        </div>
                                    </div>
                                    <div class="pbd_clear"></div>
                                </div>
                                <div class="pbd_right-col">
                                    <a class="pbd_add-friend-mini" href="#" title="Add Friend"><span>Add Friend</span></a>
                                </div>

                                <div class="pbd_clear"></div>
                            </li>
                            <?php } ?>
                            
                        </ul>
                    </div>
                </div><!-- end .leaderboard (sidebar) -->
                
                <div class = 'pbd_modal-mock' style='display:none'>
                    <div id='pbd_buddy_modal_mock'>
                        <?php mockx('buddy')?>
                    </div>
                    <div id='pbd_weekly_modal_mock'>
                        <?php mockx('weekly')?>
                    </div>
                    <div id='pbd_global_modal_mock'>
                        <?php mockx('global')?>
                    </div>
                </div>

            </div>
            <!-- end .right-panel -->


            <?php 
                function mockx($name=''){
                        for ($i=0; $i < 10 ; $i++) { ?>
                            <li>
                                <div class="pbd_left-col">
                                    <div class="pbd_user-avatar pbd_pull-left">
                                        <img src="images/avatar.png">
                                    </div>
                                    <div class="pbd_user-content">
                                        <div class="pbd_user-name"><a href="#">John Appleseed(<?php echo $name;?>)</a></div>
                                        <div class="pbd_user-rating pbd_clearfix">
                                            <span class="pbd_like"><a href="#">10</a></span>
                                            <span class="pbd_star"><a href="#">10</a></span>
                                        </div>
                                    </div>
                                    <div class="pbd_clear"></div>
                                </div>
                                <div class="pbd_right-col">
                                    <a class="pbd_add-friend-mini" href="#" title="Add Friend"><span>Add Friend</span></a>
                                </div>

                                <div class="pbd_clear"></div>
                            </li>
                            <?php }//END FOR
                }
            ?>