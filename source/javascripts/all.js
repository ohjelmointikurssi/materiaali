var warned = false;
function browserCheck() {
  if (bowser === undefined) {
    console.warn('Unable to detect browser!');
    return;
  }
  if (bowser.msie && !warned) {
    warned = true;
    var browserWarningContainer = document.getElementById('warning-container');
    browserWarningContainer.className += ' visible';
  }
}


window.onload = browserCheck;
