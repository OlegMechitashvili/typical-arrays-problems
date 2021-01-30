exports.min = function min (arr) {
   if (!arr || arr.length == 0) {
      return 0;
   } else {
      function compNum (a, b) {return a - b};
      return arr.sort(compNum)[0];
   }   
}

exports.max = function max (arr) {
  if (!arr || arr.length == 0) {
      return 0;
   } else {
      function compNum (a, b) {return a - b};
      return arr.sort(compNum)[arr.length - 1];
   }   
}

exports.avg = function avg (arr) {
   let sum = 0;
  if (!arr || arr.length == 0) {
      return 0;
   } else {
      return arr.reduce((a, b) => a + b) / arr.length;
    }   
}