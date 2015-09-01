function onThemeSelected(e) {
  var val = e.target.value;
  var lights = document.getElementById('letters');
  lights.className = val;
}

window.addEventListener('DOMContentLoaded', function(e) {
  var themeSelect = document.getElementById('theme');
  themeSelect.addEventListener('change', onThemeSelected);
});
