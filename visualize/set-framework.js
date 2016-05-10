// set-framework.js

function submitPasskey() {
    var passkey = $('#input-passkey').val();
    window.location.href = 'http://frame.y-gre.org/framework/?passkey=' + passkey;
}