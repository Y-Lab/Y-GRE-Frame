// set-framework.js

function submitPasskey() {
    var passkey = $('#input-passkey').val();
    // var passkey = document.getElementById('input-passkey').value;
    window.location.href = window.location.href + '?passkey=' + passkey;
}