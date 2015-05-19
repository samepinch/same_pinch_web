$(function(){
    $('#news-container').vTicker({
        speed: 1000,
        pause: 4000,
        animation: 'fade',
        mousePause: false,
        showItems: 3
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
        url : "https://msocl.herokuapp.com/api/posts.json",
        data:{command: "web_view"},
        success: function(data){
            //alert(JSON.stringify(data));
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
