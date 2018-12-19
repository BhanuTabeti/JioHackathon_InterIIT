document.activeElement.addEventListener('keydown',handleKeyDownEvent);

function handleKeyDownEvent(e) {
  if (e.key === 'SoftRight') 
    window.history.back();
}

// Builds the HTML Table out of myList.
function buildHtmlTable(selector) {
  var rows$;

  $.get("http://api.openweathermap.org/data/2.5/forecast?lat=19.13&lon=72.91&units=metric&APPID=1b6ae70fc6fe8fa6c3876d2ad8ce731d",function(data){
    var row$ = $('<tbody>');
    for (var i = 0; i < 5*8; i = i + 8) {
    var row = $('<tr>');
      // row$.append('<tr>');
      var key = data.list[i];
      var cellValue = [];
      cellValue.push(key.dt_txt.substr(0,10));
      row.append($('<td>').html(cellValue));
      var cellValue = [];
      cellValue.push(key.main.temp);
      row.append($('<td>').html(cellValue));
      var cellValue = [];
      cellValue.push(key.weather[0].description);
      row.append($('<td>').html(cellValue)); 
      row$.append(row);    
    }
    $(selector).append(row$);    
  });
}
