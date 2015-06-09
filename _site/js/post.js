/**
 * Created by maispride786 on 9/6/15.
 */
$(document).ready(function(){
    if(getParameterByName("qa").length<1){
        $('body').hide();
    }else {
        var data = new Object();
        data["post_id"] = getParameterByName("qa");

        $.ajax({
            type: "POST",
            dataType: "json",
            url: "https://msocl.herokuapp.com/api/webviews.json",
            data: {command: 'post', body: data},
            success: function (data) {
                render_as_html(data.body);
            },
            error: function (data) {
                response = JSON.parse(data.responseText);
                alert(response.message);
            }
        });
    }

});

render_as_html= function(data){
    $("#postContent #content").html(data.content);
    $('span#tags').html("");
    $.map(data.tags,function(t){
        $('span#tags').append("<div class=tag>"+t+"</div>");
    });

    $.map(data.comments,function(c){
        comment(c);
    });

    $("#viewPost .row").show();
};

comment = function(arg){
    $('#comments').append("<div class='col-md-12 nopadding row-padding border-bottom'>" +
                        "<div class='col-md-1'>"+(arg.photo? "<img src="+arg.photo+" class='comment-profile'>" : "<div class='profilepic-placeholder'>"+ arg.initials +"</div>") +
                        "</div><div class='col-md-6 pull-left mleft'>" +
                        "<div>"+arg.text+"</div>" +
                        "<div class=time>"+arg.createdAt+"</div></div> " +
                        "<div class='col-md-3 pull-right'> <span class='light-color'>" +
                        "<img src='/img/icon-like-count.png' width=18 height=18>"+arg.upvote_count+" </span> <span class='pull-right'>" +
                        "<img src='/img/icon-comment-more.png' width=8 height=25> </span> </div>" +
                        "</div>" +
                        "<div class=clearfix></div>");

};

getParameterByName = function(name){
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};