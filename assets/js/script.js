// chart 1 build 
function BuildChart(labels, values, chartTitle) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012',], 
            datasets: [{
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


// build chart 2
var ctx2 = document.getElementById('chart2').getContext('2d')

var chart2 = new chart(ctx2, {    
    data : {
        type : 'line',
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },
        options: {
            responsive : true,
        }
})







// Live Updating Charts from JSON Data API
window.onload = function() {
	var dataPoints = [];
	var chart;
    var ctxLive = document.getElementById("chartContainer").getContext('2d')
	$.getJSON("https://canvasjs.com/services/data/datapoints.php", function(data) {  
		$.each(data, function(key, value){
			dataPoints.push({x: value[0], y: parseInt(value[1])});
		});
		chart = new Chart(ctxLive,{
			title:{
				text:"Live Chart with dataPoints from External JSON"
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