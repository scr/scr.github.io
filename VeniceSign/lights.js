function addClass(element, className) {
  if (element.className)
    element.className += ' ' + className;
  else
    element.className = className;
}

function removeClass(element, className) {
  element.className = element.className.split(' ').filter(function(c) {
    return c !== className;
  }).join(' ');
}

function addLights(letterEl) {
  var id = letterEl.id;
  console.log('id=', id);
  var i;
  var count = parseInt(letterEl.attributes['num-lights'].value, 10);
  console.log('count=', count);
  for(i = 1; i <= count; i++) {
    var light = document.createElement('div');
    light.className = 'light ' + id + '-' + i;;
    letterEl.appendChild(light);
  }
}

function addLetters(lettersEl) {
  var letters = lettersEl.querySelectorAll('.letter');
  console.log('letters=', letters)
  for (var i = letters.length; --i >= 0;) {
    addLights(letters.item(i));
  }
}

window.addEventListener('DOMContentLoaded', function(e) {
  addLetters(document.getElementById('letters'));
});
