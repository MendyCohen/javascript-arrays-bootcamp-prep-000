var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a, b) {
  return [b , ...a];
}

 function destructivelyAddElementToBeginningOfArray(a, b) {
      a.unshift(b);
      return a;
} 

 function addElementToEndOfArray(a, b) {
   return [...a , b];
   //return a;
 }
function destructivelyAddElementToEndOfArray(a ,b) {
  a.push(b);
  return a;
}

function removeElementFromEndOfArray(a) {
  a.slice;
}




function accessElementInArray(a, b) {
  return (a[2]);
}

function destructivelyRemoveElementFromBeginningOfArray(a, b) {
   a.shift();
  return a;
}

 function removeElementFromBeginningOfArray(a) {
  return a.slice(1);
 }

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop();
  return a;
}
 
function removeElementFromEndOfArray(a) {
 return a.slice( a.length -1);
}


