'use strict';

function bubbleSort(arr){
  var rerun = false;
  for (var i = 1; i < arr.length; i++) {
    if(arr[i-1] > arr[i]){
      [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
      rerun = true;
    }
  }
  if(rerun === true){
    return bubbleSort(arr);
  }
  else {
    return arr;
  }
}


console.log(bubbleSort([2,4,6,1,3,5]));
