var tableData = data;
// console.log(tableData);

// set a variable for the table body
var tbody = d3.select('tbody');

// find the UFO sighting values for each column and append a table row and cell for each value
tableData.forEach(function(sighting){
    console.log(sighting);
    var row = tbody.append('tr');

    Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
}); 