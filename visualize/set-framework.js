// set-framework.js

function submitPasskey() {
    var passkey = $('#input-passkey').val();
    window.location.href= window.location.href + '?passkey=' + passkey;
}