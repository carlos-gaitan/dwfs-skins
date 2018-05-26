//---- js para aplicar el skin en el HTML ----//

document.addEventListener('skin-changed', function(event) {
  applySkin(event.detail);
});

document.addEventListener('skin-loaded', function(event) {
  var select = document.getElementById('current-skin');
  var currentSkin = event.detail;
  select.value = currentSkin;
  applySkin(currentSkin);
});

document.addEventListener('skin-deleted', function(event) {
  applySkin();
});

function applySkin(skin) {
  document.body.className = skin;
}

