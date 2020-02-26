function rangeHandler(start, end) {
  const resultArr = [];
  for (let i = start; i <= end; i++) {
    resultArr.push(i);
  }
  return resultArr;
}

function range(start, end) {
  if (end) console.log(rangeHandler(start, end));
  return function(end) {
    start <= end ? console.log(rangeHandler(start, end)) : console.log([]);
  };
}

range(3, 3); // [3]
range(3, 8); // [3,4,5,6,7,8]
range(3, 0); // []

var start3 = range(3);
var start4 = range(4);

start3(3); // [3]
start3(8); // [3,4,5,6,7,8]
start3(0); // []

start4(6); // [4,5,6]
