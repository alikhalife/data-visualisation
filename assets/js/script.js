// charts build 
function BuildChart(labels, values, chartTitle) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012',], // Our labels
            datasets: [{
                label: labels,
                data: values,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
            [{
                label: labels,
                data: values,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            legend: false
        }
    });
    return myChart;
}

// HTML To JSON Script 
// *Forked* from https://johndyer.name/html-table-to-json/
var table1 = document.getElementById('table1');
var json = []; // first row needs to be headers 
var headers = [];
for (var i = 0; i < table1.rows[0].cells.length; i++) {
    headers[i] = table1.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
}

// go through cells 
for (var i = 1; i < table1.rows.length; i++) {
    var tableRow = table1.rows[i];
    var rowData = {};
    for (var j = 0; j < tableRow.cells.length; j++) {
        rowData[headers[j]] = tableRow.cells[j].innerHTML;
    }
    json.push(rowData);
}
console.log(json);

// Map json values back to label array
var labels = json.map(function (e) {
    return e.country;
});
console.log(labels);

// Map json values back to values array
var values = json.map(function (e) {
    return e['number(inthousands)'];
});
console.log(values);
var chart = BuildChart();









// Live Updating Charts from JSON Data API

window.onload = function() {
	var dataPoints = [];
	var chart;
	$.getJSON("https://canvasjs.com/services/data/datapoints.php", function(data) {  
		$.each(data, function(key, value){
			dataPoints.push({x: value[0], y: parseInt(value[1])});
		});
		chart = new CanvasJS.Chart("chartContainer",{
			title:{
				text:"Datapoints.php"
			},
			data: [{
                type: "line",
				dataPoints : dataPoints,
			}]
		});
		chart.render();
		updateChart();
	});

    function updateChart() {
    $.getJSON("https://canvasjs.com/services/data/datapoints.php" + (dataPoints.length + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json", function(data) {
        $.each(data, function(key, value) {
            dataPoints.push({
            x: parseInt(value[0]),
            y: parseInt(value[1])
            });
        });
        chart.render();
        setTimeout(function(){updateChart()}, 1000);
    });
    }

}