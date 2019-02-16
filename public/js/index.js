toggleVisibility = function(id) {
  var e = document.getElementById(id);

  if (e.id === 'signin') {
    e.style.display = 'none';
    $('#signup').css('display', 'block');
  } else {
    e.style.display = 'none';
    $('#signin').css('display', 'block');
  }

  if (e.id === 'userprofile') {
    console.log(e.style.display);
    if (e.style.display === 'none') {
      $('#userprofile').css('display', 'block');
    } else {
      $('#userprofile').css('display', 'none');
    }
  }
};
