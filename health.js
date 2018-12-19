document.activeElement.addEventListener('keydown',handleKeyDownEvent);

var focusElement = 1;
var target = document.getElementById('imagepicker')
target.focus();
target = document.getElementById('btn')
target.classList.add("primary");

function handleKeyDownEvent(e) {
  if (e.key === 'SoftRight') 
    window.history.back();
  else if(e.key === 'ArrowDown' && focusElement == 1){
    target.classList.remove("primary");
    target = document.getElementById('submitbutton');
    target.focus();
    target.classList.add("primary");
    focusElement = 2;
  }
  else if(e.key === 'ArrowUp' && focusElement == 2){
    target.classList.remove("primary");
    target = document.getElementById('imagepicker');
    target.focus();
    target = document.getElementById('btn')
    target.classList.add("primary");
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


// $(document).ready(function(){

//     $("#submitbutton").click(function(){
//         // var fd = new FormData();
//         // var files = $("#file").files[0];
//         // fd.append('file',files);

//         // $.ajax({
//         //     url: 'http://10.159.3.221:5000/predict',
//         //     type: 'post',
//         //     data: fd,
//         //     contentType: 'multipart/form-data',
//         //     processData: false,
//         // }).done(function (response) {
//         //     document.getElementById('x').innerHTML = response;
//         // });


//         var image_file = $('#imagepicker').get(0).files[0];
//         var formData = new FormData();
//         formData.append("file", image_file);
//         // alert(image_file);
//         // $.post( "https://10.159.3.221:5000/predict", formData, function( data ) {
//         // //   // $( "#x" ).html( data );
//         // sleep(1000);
//         //   alert(data);
//         // } );
//         // $.ajax({
//         //       url: 'http://10.159.3.221:5000/predict',
//         //       type: 'POST',
//         //       data: formData,
//         //       contentType: 'multipart/form-data',
//         //       success: function (status) {
//         //         // do something on success
//         //         // alert(status);
//         //         // console.log(status.body);
//         //         // sleep(12000);
//         //       },
//         //       error: function (err) {
//         //         console.log(err);
//         //         console.log(err.lol);
//         //         console.log(err.body);
//         //         alert(5); 
//         //       }
//         //     });

//         // $.post('http://10.159.3.221:5000/predict', formData,'multipart/form-data');
//         // sleep(1000);
//         // var request = new XMLHttpRequ/est();
//         // request.open("POST", "http://10.159.3.221:5000/predict");
//         // request.onreadystatechange = function() { // Call a function when the state changes.
//         //     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//         //         // Request finished. Do processing here.
//         //         // console.log(request.response);
//         //     }
//         // }
//         // request.send(formData);

//         // $.ajax({
//         //        url: 'http://10.159.3.221:5000/predict',
//         //        data: formData,
//         //        processData: false,
//         //        type: 'POST',

//         //        // This will override the content type header, 
//         //        // regardless of whether content is actually sent.
//         //        // Defaults to 'application/x-www-form-urlencoded'
//         //        contentType: 'multipart/form-data', 

//         //        //Before 1.5.1 you had to do this:
//         //        beforeSend: function (x) {
//         //            if (x && x.overrideMimeType) {
//         //                x.overrideMimeType("multipart/form-data");
//         //            }
//         //        },
//         //        // Now you should be able to do this:
//         //        mimeType: 'multipart/form-data',    //Property added in 1.5.1

//         //        success: function (data) {
//         //            alert(data);
//         //        }
//         //    });

//         var xhr = new XMLHttpRequest();     
//         // Create a new XMLHttpRequest
//         xhr.open('POST','http://10.159.3.221:5000/predict',true);  
//         xhr.upload.onprogress = function(e) {
//            if (e.lengthComputable) {
//              var percentComplete = (e.loaded / e.total) * 100;
//              console.log(percentComplete + '% uploaded');
//            }
//          };
//          xhr.onload = function() {
//            if (this.status == 200) {
//              var resp = JSON.parse(this.response);
//            };
//          };
//         // File Location, this is where the data will be posted
//         xhr.send(formData);
//     });
// });