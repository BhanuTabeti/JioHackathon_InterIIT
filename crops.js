document.activeElement.addEventListener('keydown',handleKeyDownEvent);

function handleKeyDownEvent(e) {
  if (e.key === 'SoftRight') 
    window.history.back();
}

function flatToHierarchy (flat) {

      var roots = [] // things without parent

      // make them accessible by guid on this map
      var all = {}

      flat.forEach(function(item) {
        all[item.guid] = item
      })

      // connect childrens to its parent, and split roots apart
      Object.keys(all).forEach(function (guid) {
          var item = all[guid]
          if (item.parent === null) {
              roots.push(item)
          } else if (item.parent in all) {
              var p = all[item.parent]
              if (!('Children' in p)) {
                  p.Children = []
              }
              p.Children.push(item)
          }
      })

      console.log(roots);
      // done!
      return roots
  }

// Builds the HTML Table out of myList.
function buildHtmlTable(selector) {
  var rows$;

  $.get("https://data.gov.in/node/86943/datastore/export/json",function(data){
    flatToHierarchy(data);
    // var row$ = $('<tbody>');
    // for (var i = 0; i < 5*8; i = i + 8) {
    // var row = $('<tr>');
    //   // row$.append('<tr>');
    //   var key = data.list[i];
    //   var cellValue = [];
    //   cellValue.push(key.dt_txt.substr(0,10));
    //   row.append($('<td>').html(cellValue));
    //   var cellValue = [];
    //   cellValue.push(key.main.temp);
    //   row.append($('<td>').html(cellValue));
    //   var cellValue = [];
    //   cellValue.push(key.weather[0].description);
    //   row.append($('<td>').html(cellValue)); 
    //   row$.append(row);    
    // }
    // $(selector).append(row$);    
  });
}

