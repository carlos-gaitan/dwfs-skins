//---- js para interacutar con el local storage ----//

document.addEventListener('skin-changed', function(event) {
  localStorage.setItem('skin', event.detail);
});

document.addEventListener('skin-deleted', function() {
  localStorage.removeItem('skin');
});

window.addEventListener('load', function() {
  loadSkin();
});

function loadSkin() {
  var currentSkin = localStorage.getItem('skin');
  if (currentSkin) {
    var event = new CustomEvent('skin-loaded', { 'detail': currentSkin });
    document.dispatchEvent(event);
  }
}
