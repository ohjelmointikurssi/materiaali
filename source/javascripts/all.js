window.onload = function() {
  if (bowser === undefined) {
    console.warn('Unable to detect browser!');
    return;
  }
  if (bowser.msie || bowser.msedge) {
    var browserWarningContainer = document.getElementById('warning-container');
    browserWarningContainer.className += ' visible';
  }
}
