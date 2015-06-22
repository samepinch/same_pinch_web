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
                break;
            case '#privacy-policy':
                location = 'privacy-policy'
                break;
        }
        window.location = location
    });
});
