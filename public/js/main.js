$('#register-button').click(function(event) {
  event.preventDefault();
  $('#register').removeClass('register-display');
  $('.login-form').hide('slow');
});

$('#sign-in').click(function() {
  console.log('sign me in please');
  $('#register').addClass('register-display');
  $('.login-form').show('slow');
});
