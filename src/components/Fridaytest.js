import React from 'react'

const Fridaytest = () => {
  
  const urlAs = (val) =>{
    const path = {
      a : "this is article first",
      b : "this is article second",
      c : "this is article third",
      default : "wrong article chosen"
    }
    return path[val] || path.default;
  }

  const array = [5, 8, 2, 10, 3];
  //find second largest element from an array
  const secondLargest = (arr) =>{
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let i = 0; i<arr.length; i++){
      if(arr[i] > largest){
        secondLargest = largest;
        largest = arr[i];
      }
      else if(arr[i] > secondLargest && arr[i] !== largest){
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  }

  const secondLargestvalue = secondLargest(array);
  console.log(secondLargestvalue) 

  return (
    <div>fridaytest
      <div>
        {urlAs("b")}
      </div>
    </div>
  )
}

export default Fridaytest