// set-framework.js

// Title
document.title = frame_data.general.basics.name + ' · Y-English GRE Test Preparation Framework';
$('#site-version').html(footer_data.site.version + ' for ' + frame_data.general.basics.name);

// General
$('#main-container').append($('<div>').attr('id', 'general-div').addClass('bs-docs-section')
    .append($('<h1>').attr('id', 'general-h1').addClass('page-header').html('General'))
    .append($('<h3>').attr('id', 'general-basics-h3').html('Basics'))
    .append($('<div>').attr('id', 'general-basics-div'))
);