/*Test création d'un tableau*/


/*const barCanvas = document.getElementById("barCanvas");

const barChart = new Chart(barCanvas, {
    type: "bar",
    data: {
        labels: ["Beijing","Tokyo","Seoul", "Honk Kong"],
        datasets: [{
            data: [240,120,140,130],
            backgroundColor: [
                "crimson",
                "lightgreen",
                "lightblue",
                "violet"
            ]
        }]
    },
    options: {
        scales: {
            y: {
                suggestedMax: 300,
                ticks: {
                    font: {
                        size : 20
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 20
                    }
                }
            }

        }
    }
})*/

/////////////////////////////////////////////PREMIER GRAPH (non fonctionnel)////////////////////////////////////////////////////////////////////



/*let table1 = document.getElementById("table1");
let tdTable1 = table1.querySelectorAll("td");
let thTable1 = table1.querySelectorAll("th")


///// création de sous-tableaux 
let paysTable1 = [];
let dateTable1 = [];
let date2Table1 = [];
let données1Table1 = [];

///// Boucle
for(let x = 0 ; x < tdTable1.length ; x++) {
    if (x % 3 == 0) {
        paysTable1.push(tdTable1[x].innerText)
    }
    if (x % 3 == 1) {
        dateTable1.push(tdTable1[x].innerText)
    }
    if (x % 3 == 2) {
        date2Table1.push(tdTable1[x].innerText)
    }
    if (x % 4 == 3) {
        données1Table1.push(thTable1[x].innerText)
    }
}

//Chart
const barCanvas = document.getElementById("barCanvas")
const barChart = new Chart(barCanvas, {
    type: "bar", 
    data: {
        labels: paysTable1,
        datasets: [{
            data:dateTable1,
            label: "2002 -> 2010",
            backgroundColor : "green"
        }, {
            data:date2Table1, 
            label: "2010 -> 2012", 
            backgroundColor: "yellow"
        }]
    }, 
    options: {
        responsive : true,
        scales:{
            y: {
                ticks :{
                    font:{
                        size:18
                    }
                }
            },
            x: {
                ticks :{
                    font:{
                        size:15
                    }
                }
            }
        }
    }
})*/




///////////if et modulo 0/////////////////////////////////////////////////////////////////////////////////////////////


let table2 = document.getElementById("table2");
let tdTable2 = table2.querySelectorAll("td");


///// Tableaux 
let paysTable2 = [];
let date1Table2 = [];
let date2Table2 = [];

///// Boucle for 
for(let x = 0 ; x < tdTable2.length ; x++) {
    if (x % 3 == 0) {
        paysTable2.push(tdTable2[x].innerText)
    }
    if (x % 3 == 1) {
        date1Table2.push(tdTable2[x].innerText)
    }
    if (x % 3 == 2) {
        date2Table2.push(tdTable2[x].innerText)
    }
}

//Chart
const CanvasLine = document.getElementById("CanvasLine")
const lineChart = new Chart(CanvasLine, {
    type: "line", 
    data: {
        labels: paysTable2,
        datasets: [{
            data:date1Table2,
            label: "2007 -> 2009",
            backgroundColor : "violet"
        }, {
            data:date2Table2, 
            label: "2010 -> 2012", 
            backgroundColor: "blue"
        }]
    }, 
    options: {
        responsive : true,
        scales:{
            y: {
                ticks :{
                    font:{
                        size:18
                    }
                }
            },
            x: {
                ticks :{
                    font:{
                        size:10
                    }
                }
            }
        }
    }
})