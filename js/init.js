(function() {

  // Prevent scrolling on touch
  window.ontouchmove = function() {
    return false;
  }

  // Fix scroll position on orientation change
  window.onorientationchange = function() {
    document.body.scrollTop = 0;
  }
})();
