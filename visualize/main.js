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

visualize_file = 'set-framework';

if (passkey) {
    data_file = 'data/' + passkey;

    require.config({
        paths: {
            'data': data_file,
            'visualize': visualize_file,
        }
    });

    $('#loading-progress-bar div span').html('正在下载数据……');
    require(
        ['data'],
        function (data) {
            $('#loading-progress-bar div span').html('努力渲染页面中 (｡•ˇ‸ˇ•｡)……');
            require(
                ['visualize'],
                function (visualize) {
                    $('#loading-progress-bar div').removeClass('progress-bar-striped');
                    $('#loading-progress-bar div span').html('加载完毕！~\(≧▽≦)/~');
                    $('#loading-progress-bar').delay(4000).fadeOut(1000, function() {$(this).remove()});
                },
                function (err) {
                    $('#loading-progress-bar div').removeClass('progress-bar-striped').removeClass('progress-bar-green').addClass('progress-bar-danger');
                    $('#loading-progress-bar div span').html('无法加载组件：' + visualize_file + '.js');
                }
            );
        },
        function (err) {
            $('#loading-progress-bar div').removeClass('progress-bar-striped').removeClass('progress-bar-green').addClass('progress-bar-danger');
            $('#loading-progress-bar div span').html('无法加载组件：' + data_file + '.js');
        }
    );
}
else {
    require.config({
        paths: {
            'visualize': visualize_file,
        }
    });

    $('#loading-progress-bar div span').html('努力渲染页面中 (｡•ˇ‸ˇ•｡)……');
    require(
        ['visualize'],
        function (visualize) {
            $('#loading-progress-bar div').removeClass('progress-bar-striped');
            $('#loading-progress-bar div span').html('加载完毕！~\(≧▽≦)/~');
            $('#loading-progress-bar').delay(4000).fadeOut(1000, function() {$(this).remove()});
        },
        function (err) {
            $('#loading-progress-bar div').removeClass('progress-bar-striped').removeClass('progress-bar-green').addClass('progress-bar-danger');
            $('#loading-progress-bar div span').html('无法加载组件：' + visualize_file + '.js');
        }
    );
};
