// set-footer.js

$.getJSON('http://frame.y-gre.org/json/footer-data.json', function(data) {
    $('#footer-info').append($('<p>').append($('<a>').attr('href', data.site.link).html(data.site.name)).append(' (' + data.site.version + ')'));
    $('#footer-info').append($('<p>').attr('id', 'powered-by').html('Powered by '));
    for (var i in data.powered_by) {
        if (i < 1) {
            $('#powered-by').append($('<a>').attr('href', data.powered_by[i].link).attr('target', '_blank').html(data.powered_by[i].name)).append(' ' + data.powered_by[i].version);
        }
        else {
            $('#powered-by').append(' &middot; ').append($('<a>').attr('href', data.powered_by[i].link).attr('target', '_blank').html(data.powered_by[i].name)).append(' ' + data.powered_by[i].version);
        };
    };
    $('#footer-info').append($('<p>').html(function(){var date = new Date(); return '&copy; ' +  date.getFullYear() + ' ';})
        .append(data.organization.prefix)
        .append($('<a>').attr('href', data.organization.link).attr('target', '_blank').html(data.organization.name))
        .append(data.organization.suffix)
    );
    $('#footer-info').append($('<p>').append($('<i>').attr('aria-hidden', 'true').addClass('fa fa-paper-plane')).append(' Contact: ').append($('<a>').attr('href', 'mailto:' + data.site.support + '?subject=Mail From Y-GRE Frame Website').html(data.site.support)));
    // Set site version
    $('#site-version').html(data.site.version);
});