// creating chart for table1
function BuildChart(labels, datasets, chartTitle) {
  
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: datasets
      
    },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behavior of full-width/height 
    }
  });
  return myChart;
}



//selecting data from HTML document
let table1 = document.getElementById("table1");


// getting each dataset from table1 and storing them in datasets
var datasets1 = [];
var label = [];
var rawData = table1.rows
var lines = [];


//getting data from each row and storing them in datasets1 array
for (let i = 2; i < rawData.length; i++) {
  // console.log(datasetsRows.item(i)) //printing each row of my table
  // console.log(table1.rows[i].cells) // printing each column of my table
 
  var data1 = table1.rows.item(i);
  var data1Arr = Array.from(data1.children)
  
  data1Arr.shift();

  datasets1.push(data1Arr);
  
}
console.log(datasets1)

datasets1.forEach(row => {
  //generating random color
const randomColor = Math.floor(Math.random()*16777215).toString(16);

  var dataset = {
    label: row.shift().innerText, 
    data: [],
    borderColor: "#" + randomColor
};
  row.forEach(cell => {
    dataset.data.push(parseInt(cell.innerText))
  })
  console.log("raw finish")
  lines.push(dataset)
})


//getting each year from table1 and storing them in labels
var labels = []

var years = table1.rows.item(1);
var yearsArr = Array.from(years.children);
yearsArr.shift()
yearsArr.forEach(element => {
  var year = element.innerText;
  labels.push(year)
})





var datasets = [
  {
    label: "belgium", //here should be my second column
    data: [1012.8,	1007.8,	1013.7,	999.4, 1022.8,	1034.4,	1043.6,	1067.3,	1072.0,	1111.0,	1073.8],
    borderColor:"red",
  }
]

console.log(lines)
var chart = BuildChart(labels, lines, " Offences recorded by the police, 2002-12");






// Live Chart with API

// window.addEventListener("load", function () {
//   var dataPoints = [];
//   var chart;

//   fetch("https://canvasjs.com/services/data/datapoints.php", {cache: "no-store"})
//       .then((response) => {
//           return response.json()
//       })
//       .then((data) => {
//           data.forEach(element => {
//               dataPoints.push({ x: element[0], y: element[1] })
//           });
//           chart = new CanvasJS.Chart("remoteDataChart", {
//               title: {
//                   text: "Datapoints.php"
//               },
//               data: [{
//                   type: "line",
//                   dataPoints: dataPoints,
//               }]
//           });
//           console.log(chart)
//           chart.render();
//           // updateChart();

//       })

//   })

