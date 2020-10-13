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

//filtering the data

var button = d3.select("#filter-btn");
button.on("click", function() {
    
    // reset table
    d3.select("tbody").html("");

    // prevent the page from refreshing
    d3.event.preventDefault();

    var inputValue = d3.select("#datetime").property("value");
    console.log(inputValue);

    // filter and display the rows and cells of the results
    var filteredData = tableData.filter(result => result.datetime === inputValue);
    console.log(filteredData);
    
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");

        Object.entries(sighting).forEach(([key, value]) => {
            console.log(key, value)
            var cell = row.append("td");
            cell.text(value);
        });
    });
});