// set-footer.js

$('#footer-info').append($('<p>').html(footer_data.site.name + ' (' + footer_data.site.version + ')'));
$('#footer-info').append($('<p>').attr('id', 'powered-by').html('Powered by '));
for (var i in footer_data.powered_by) {
    powered_by = footer_data.powered_by[i]
    if (i < 1) {
        $('#powered-by').append($('<a>').attr('href', powered_by.link).attr('target', '_blank').html(powered_by.name)).append(' ' + powered_by.version);
    }
    else {
        $('#powered-by').append(' &middot; ').append($('<a>').attr('href', powered_by.link).attr('target', '_blank').html(powered_by.name)).append(' ' + powered_by.version);
    }
}
$('#footer-info').append($('<p>').html('&copy; ' + footer_data.copyright.year + ' ')
    .append(footer_data.copyright.organization.prefix)
    .append($('<a>').attr('href', footer_data.copyright.organization.link).attr('target', '_blank').html(footer_data.copyright.organization.name))
    .append(footer_data.copyright.organization.suffix)
);
$('#footer-info').append($('<p>').append('<a>').attr('href', footer_data.site.link).html(footer_data.site.link.slice(9, -2)));
$('#footer-info').append($('<p>').append('Email: ').append('<a>').attr('href', 'mailto:' + footer_data.site.support).html(footer_data.site.support));