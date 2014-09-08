$(function(){
$('.loginBtn').click(function(){
FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    console.log('Logged in.');
  }
  else {
    FB.login();
  }
});
});
$('#loginBtn').click(function(){
console.log("test2");
})
})
