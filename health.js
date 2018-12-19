document.activeElement.addEventListener('keydown',handleKeyDownEvent);
var focusElement = 1;
var target = document.getElementById('imagepicker')
target.focus();
function handleKeyDownEvent(e) {
  if(e.key === 'ArrowDown' && focusElement == 1){
    target = document.getElementById('submitbutton');
    target.focus();
    target.classList.add("primary");
    focusElement = 2;
  }
  else if(e.key === 'ArrowUp' && focusElement == 2){
    target.classList.remove("primary");
    target = document.getElementById('imagepicker');
    target.focus();
    focusElement = 1;
  }
  else if(e.key === 'Enter'){
    // console.log('[keyPath-optional]');

    switch (focusElement) {
      case 1:
        target = document.getElementById('imagepicker');
        target.click();
        break;
      case 2:
        target = document.getElementById('submitbutton');
        target.click();
        break;
      default:
        break;

    }
  }
  else {

  }
}
