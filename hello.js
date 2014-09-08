$(function(){
$('.loginBtn').click(function(){
FB.login(function(response) {
   // handle the response
 }, {scope: 'public_profile,email'});
});
$('#loginBtn').click(function(){
console.log("test2");
})
})
