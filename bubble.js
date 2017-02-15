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
    bubbleSort(arr);
  }
  return arr;

  // wrapping return in an else statement causes return to be undefined, but the inner console.log to work.  why?
  // else{
  //   console.log(arr);
  //   return arr;
  // }
}


console.log(bubbleSort([2,4,6,1,3,5]));
