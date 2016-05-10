// main.js

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i=0; i<vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

passkey = getQueryVariable('passkey');

if (passkey) {
    data_file = 'data/' + passkey;
    visualize_file = 'set-framework';

    require.config({
        paths: {
            'data': data_file,
            'visualize': visualize_file,
        }
    });

    $('#loading-progress-bar div span').html('Loading data...');
    require(
        ['data'],
        function (data) {
            $('#loading-progress-bar div span').html('Rendering page... (｡•ˇ‸ˇ•｡)');
            require(
                ['visualize'],
                function (visualize) {
                    $('#loading-progress-bar div').removeClass('progress-bar-striped');
                    $('#loading-progress-bar div span').html('Well done! ~\(≧▽≦)/~');
                    $('#loading-progress-bar').delay(4000).fadeOut(1000, function() {$(this).remove()});
                },
                function (err) {
                    $('#loading-progress-bar div').removeClass('progress-bar-striped').removeClass('progress-bar-blue').addClass('progress-bar-danger');
                    $('#loading-progress-bar div span').html('Unable to load component: ' + visualize_file + '.js');
                }
            );
        },
        function (err) {
            $('#loading-progress-bar div').removeClass('progress-bar-striped').removeClass('progress-bar-blue').addClass('progress-bar-danger');
            $('#loading-progress-bar div span').html('Unable to load component: ' + data_file + '.js');
        }
    );
}
else {
    visualize_file = 'set-framework-empty';

    require.config({
        paths: {
            'visualize': visualize_file,
        }
    });

    $('#loading-progress-bar div span').html('Rendering page... (｡•ˇ‸ˇ•｡)');
    require(
        ['visualize'],
        function (visualize) {
            $('#loading-progress-bar div').removeClass('progress-bar-striped');
            $('#loading-progress-bar div span').html('Well done! ~\(≧▽≦)/~');
            $('#loading-progress-bar').delay(4000).fadeOut(1000, function() {$(this).remove()});
        },
        function (err) {
            $('#loading-progress-bar div').removeClass('progress-bar-striped').removeClass('progress-bar-blue').addClass('progress-bar-danger');
            $('#loading-progress-bar div span').html('Unable to load component: ' + visualize_file + '.js');
        }
    );
};
