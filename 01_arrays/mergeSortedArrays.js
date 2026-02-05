//Given 2 sorted arrays, can you merge the two arrays into one sorted array

//own answer
function mergeSortedArr(arr1,arr2){
  
  if (arr1.length < 1) return arr2;
  if (arr2.length < 1) return arr1;
  if (!arr1 ||!arr2) return null; 
 
  // this is an ok answer, but in this case we are ignoring the fact that the 2 arrays have already been sorted
  return ([...arr1,...arr2]).sort((a,b) => (a-b) ); 
}


//better answer
function mergeSortedArr2(arr1,arr2){
  const merged = []; 
  if (arr1.length < 1) return arr2;
  if (arr2.length < 1) return arr1;
  if (!arr1 ||!arr2) return null; 

  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1; 
  let j = 1;

  //now we compare each value of each array to each other
  //add the smaller value to the resut array
  //then move on to the next value on the same array that just hold the lesser value by reassigning the arrItem 
  //NOTE: you should also account for case when one array is longer than the other
  while (arr1Item ||arr2Item){
    console.log(arr1Item, arr2Item)
    //!array2Item: encounter for cases when one array is longer than the other
    if (!array2Item || arr1Item <= arr2Item){
      merged.push(arr1Item);

      //this is better than arr1Item = arr1[i+1],because index will likely go out of bound
      arr1Item = arr1[i];
      //i is incremented before the next loop starts, therefore in the next loop, arr1[i] is already the next value
      i++; 
    } else {
      merged.push(arr2Item); 
      arr2Item = arr2[j]; 
      j++;
    }
  }

  return merged; 
}

//example answer
function mergeSortedArrays(array1, array2){

    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if(array1.length === 0) {
      return array2;
    }
    if(array2.length === 0) {
      return array1;
    }
  
    while (array1Item || array2Item){
     if(array2Item === undefined || array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
    }
    return mergedArray;
  }
  
console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30,40]));