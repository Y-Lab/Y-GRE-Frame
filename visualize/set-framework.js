// set-framework.js

function enterPasskey(e) {
    var e = e || window.event;
    if (e.keyCode == 13) {
        var passkey = $('#input-passkey').val();
        window.location.href = 'http://frame.y-gre.org/framework/?passkey=' + passkey;
    };
};

function submitPasskey() {
    var passkey = $('#input-passkey').val();
    window.location.href = 'http://frame.y-gre.org/framework/?passkey=' + passkey;
};
