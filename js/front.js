//---- js para interactuar con los eventos que dispara el navegador ----//

window.addEventListener('load', function() {
  var select = document.getElementById('current-skin');
  select.addEventListener('change', cambiarSkin);
});

function cambiarSkin(event){
  var skin = event.target.value;
  var event;

  if (skin) {
    event = new CustomEvent('skin-changed', { 'detail': skin });
  } else {
    event = new Event('skin-deleted');
  }

  document.dispatchEvent(event);
}

