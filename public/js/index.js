toggleVisibility = function(id) {
  var e = document.getElementById(id);
  console.log(e);
  e.style.display = 'none';
  if (e.id === 'signin') {
    $('#signup').css('display', 'block');
  } else {
    $('#signin').css('display', 'block');
  }
  if (e.id === 'prefrences') {
    $('#prefrences').css('display', 'block');
  }
};
