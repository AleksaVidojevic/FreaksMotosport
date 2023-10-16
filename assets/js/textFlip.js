function flipImage(element) {
    element.classList.toggle('flipped');
}

function zoomIn(element) {
    element.querySelector('#mainImage').classList.add('zoomed');
  }
  
  function zoomOut(element) {
    element.querySelector('#mainImage').classList.remove('zoomed');
  }
  