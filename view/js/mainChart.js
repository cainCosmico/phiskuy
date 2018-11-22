// var source = document.getElementById('source');

function randomNumber(min, max) {
   return Math.random() * (max - min) + min;
}

function randomBar(date, lastClose) {
   var open = randomNumber(lastClose * 0.95, lastClose * 1.05);
   var close = randomNumber(open * 0.95, open * 1.05);
   return {
      t: date.valueOf(),
      y: close
   };
}

var dateFormat = 'MMMM DD YYYY';
var date = moment('April 01 2017', dateFormat);
console.log('date: ',date);

// -------------------
var data = [randomBar(date, 30)];
console.log('Data: ',data);


var labels = [date];
console.log('labels: ',labels);


while (data.length < 60) {
   date = date.clone().add(1, 'd');
   if (date.isoWeekday() <= 5) {
      data.push(randomBar(date, data[data.length - 1].y));
      labels.push(date);
   }
}


console.log('labels:: ', labels);
console.log('data:: ', data);

// var date2 = new Date('02 Feb 1996 03:04:05 GMT');
// console.log(date2.valueOf());
// expected output: 823230245000

var ctx = document.getElementById('source').getContext('2d');

var color = Chart.helpers.color;
var cfg = {
   type: 'bar',
   data: {
      labels: labels,
      datasets: [{
         label: 'CHRT - Chart.js Corporation',
         data: data,
         type: 'line',
         pointRadius: 0,
         fill: false,
         lineTension: 0,
         borderWidth: 2
      }]
   },
   options: {
      scales: {
         xAxes: [{
            type: 'time',
            distribution: 'series',
            ticks: {
               source: 'labels'
            }
         }],
         yAxes: [{
            scaleLabel: {
               display: true,
               labelString: 'Closing price ($)'
            }
         }]
      }
   }
};
var chart = new Chart(ctx, cfg);





// function randomNumber(min, max) {
//    return Math.random() * (max - min) + min;
// }

// function randomBar(date, lastClose) {
//    var open = randomNumber(lastClose * 0.95, lastClose * 1.05);
//    var close = randomNumber(open * 0.95, open * 1.05);
//    return {
//       t: date.valueOf(),
//       y: close
//    };
// }

// var dateFormat = 'MMMM DD YYYY';
// var date = moment('April 01 2017', dateFormat);
// var labels = [date];
// var data = [];

// while (data.length < 60) {
//    date = date.clone().add(1, 'd');
//    data.push(3);
// }

// var datasets = {
//    labels: labels,
//    data: data
// }

// var sourceChart = new Chart(source, {
//    type: 'line',
//    data: datasets,
//    type: 'line',
//    options: {
//       elements: {
//           line: {
//               tension: 0, // disables bezier curves
//           }
//       }
//   }
// });