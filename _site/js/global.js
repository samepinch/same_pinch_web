
$(function() {
    $('a.footer_anchor').bind('click', function(event) {
        event.preventDefault();
        var location = '/'
        switch ($(this).attr('href')) {
            case '#T&C':
                location = 't&c'
                break;
            case '#sys_status':
                location = "systemstatus"
                break;
            case '#app_rules':
                location = 'rules'
            case '#privacy-p':
                location = 'rules'
                break;
        }
        window.location = location
    });
});


$('.carousel').carousel({
    interval: 3000,
    pause:"false"
})

$( document ).ready(function() {

    $.ajax({
        type : "POST",
        dataType : "json",
        url : "https://samepinch.herokuapp.com/api/webviews.json",
        data:{command: "posts"},
        success: function(data){
            $('.dynamic_scrol').html("");
            $.each(data.body.posts, function( index, value ) {
                $(".dynamic_scrol").append('<li><div class="post-wrap"><div class="post-box">'+
                '<div class="col-md-2"><div class="profilepic-position">' +
                ( value.photo ? '<img src="'+ value.photo +'" width="43" height="43" class="profile-pic" alt=""/>' : '<div class="profilepic-placeholder">'+ value.initials +'</div>') +
                '</div></div>'+
                '<div class="col-md-10"><h4 style="display:inline-block; padding-left: 10px;">'+( value.name ? value.name : "") +'</h4> <span class="pull-right txt-light">'+ value.createdAt +'</span></div>'+
                '<div class="clearfix"></div>'+
                '<div class="col-md-10 col-md-offset-2"> '+ value.content +' </div>'+
                '</div></div></li>')
            });
            $(function(){
                $('#news-container').vTicker({
                    speed: 1000,
                    pause: 4000,
                    animation: 'fade',
                    mousePause: false,
                    showItems: 3
                });
            });
        }
    });
});

/*

var ajax_call = function() {
    //your jQuery ajax code
};

var interval = 1000 * 60 * 5; // where X is your every X minutes

setInterval(ajax_call, interval);

*/
