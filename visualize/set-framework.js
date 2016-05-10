// set-framework.js

// function enterPasskey(e) {
//     var e = e || window.event;
//     if (e.keyCode == 13) {
//         var passkey = $('#input-passkey').val();
//         window.location.href = 'http://frame.y-gre.org/framework/?passkey=' + passkey;
//     };
// };

// function submitPasskey() {
//     var passkey = $('#input-passkey').val();
//     window.location.href = 'http://frame.y-gre.org/framework/?passkey=' + passkey;
// };

// function urlJump() {
//     var passkey = $('#input-passkey').val();
//     window.location.href = 'http://frame.y-gre.org/framework/?passkey=' + passkey;
// };


// $('#submit-passkey').click(
//     function() {
//         urlJump();
//     }
// );

// $('#input-passkey').keydown(
//     function(event) {
//         if (event.keyCode == '13') {
//             urlJump();
//             // $('#submit-passkey').click()
//         }
//     }
// );


// $(function(){
//   $(document).keydown(function(event){
//     if(event.keyCode==13){
//        $("#submit-passkey").click();
//     }
//  });

//  $("#submit-passkey").click(function(){
//      alert("nihao");
//  });
// })