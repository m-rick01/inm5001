

/* JavaScript, Ajax */

function dessinerChart(jsonObject) {
    var data = new google.visualization.DataTable(jsonObject);
    var table = new google.visualization.Table(document.getElementById('chartId'));
    
    table.draw(data, {showRowNumber: true});
    
    
}

function dessinerDataTable(jsonObject) {
    var data = new google.visualization.DataTable(jsonObject);
    var table = new google.visualization.Table(document.getElementById('dataTableId'));
    
    table.draw(data, {showRowNumber: true});
    
}

$(document).ready(function() {
   $.ajax({
       url: 'todo.php',
        success: function (jsonObject1) {
            dessinerChart(jsonObject1);
        }
       
       
   });
   
   $.ajax({
      url: 'todo.php',
        success: function (jsonObject2) {
            dessinerDataTable(jsonObject2);
        }
   });
    
    
});