
document.activeElement.addEventListener('keydown',handleKeyDownEvent);
var focusElement = 1;
var prev = document.getElementById('health');
prev.style.opacity = 1;

console.log('idiot');
function handleKeyDownEvent(e) {

    if (e.key === 'Enter') {
      console.log('Stupid!');
      switch(focusElement) {
        case 1:
                document.getElementById('healthlink').click();
                break;
        case 2:
                document.getElementById('weatherlink').click();
                break;
        case 3:
                document.getElementById('croplink').click();
                break;
        case 4:
                document.getElementById('callhelpline').click();
      }
    }
    else if(e.key === 'ArrowDown') {
      switch (focusElement) {
        case 1:
          var target = document.getElementById('crop');
          target.focus();
          focusElement = 3;
          target.style.opacity = 1;
          prev.style.opacity = 0.5;
          prev = target;
          break;
        case 2:
          var target = document.getElementById('helpline');
          target.focus();
          focusElement = 4;
          target.style.opacity = 1;
          prev.style.opacity = 0.5;
          prev = target;
          break;
        default :
          break;
        }
      }
    else if(e.key === 'ArrowUp') {
      switch (focusElement) {
        case 3:
          var target = document.getElementById('health');
          target.focus();
          focusElement = 1;
          target.style.opacity = 1;
          prev.style.opacity = 0.5;
          prev = target;
          break;
        case 4:
          var target = document.getElementById('weather');
          target.focus();
          focusElement = 2;
          target.style.opacity = 1;
          prev.style.opacity = 0.5;
          prev = target;
          break;
        default :
          break;
        }
      }
    else if(e.key === 'ArrowRight') {
      switch (focusElement) {
        case 1:
          var target = document.getElementById('weather');
          target.focus();
          focusElement =2;
          target.style.opacity = 1;
          prev.style.opacity = 0.5;
          prev = target;
          break;
        case 3:
          var target = document.getElementById('helpline');
          target.focus();
          focusElement = 4;
          target.style.opacity = 1;
          prev.style.opacity = 0.5;
          prev = target;
          break;
        default :
          break;
        }
      }
    else if(e.key === 'ArrowLeft') {
      switch (focusElement) {
        case 2:
          var target = document.getElementById('health');
          target.focus();
          focusElement = 1;
          target.style.opacity = 1;
          prev.style.opacity = 0.5;
          prev = target;
          break;
        case 4:
          var target = document.getElementById('crop');
          target.focus();
          focusElement = 3;
          target.style.opacity = 1;
          prev.style.opacity = 0.5;
          prev = target;
          break;
        default :
          break;
        }
      }
    else {
      var target = document.getElementById('health');
      target.focus();
      focusElement = 1;
      target.style.opacity = 1;
      prev.style.opacity = 0.5;
      prev = target;
  }


}

function display() {
  var pickimage = new MozActivity({
   name: "pick",
   data: {
   type: ["image/png", "image/jpg", "image/jpeg"] }
    });
    pickimage.onsuccess = function () {
 var img = document.createElement("img");
if (this.result.blob.type.indexOf("image") != -1) { img.src = window.URL.createObjectURL(this.result.blob);
} };
pickimage.onerror = function () {
    var displayName = document.getElementById('displayName');
    displayName.value = "Irfan";
};

}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
console.log('lo2l');

  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude : ${crd.latitude}');
  console.log('Longitude: ${crd.longitude}');
  console.log('More or less ${crd.accuracy} meters.');
}

function error(err) {
console.log('lol');

  console.log('ERROR(${err.code}): ${err.message}');
}

console.log('lol');
navigator.geolocation.getCurrentPosition(success);