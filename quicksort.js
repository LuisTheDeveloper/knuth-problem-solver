let arr = [9,2,6,4,3,5,1]  //[20,6,8,53,23,87,42,19]

const quickSort = (array, left, right) => {
    left = left || 0                                //0
    right = right || array.length -1                //3
  
    const pivot = partition(array, left, right)    
  
    if(left < pivot -1) {
      quickSort(array, left, pivot -1)
    }
  
    if(right > pivot) {
      quickSort(array, pivot, right)
    }
  
  return array
}

const partition = (array, left, right) => {
    let pivot = array[Math.floor((left + right) /2)];
    while(left <= right) {
        while(array[left] < pivot){
            left++
        }
        while(array[right] > pivot){
            right--
        }


        if(left <= right) {
            [array[left], array[right]] = [array[right], array[left]]
            left++
            right--
        }
    }
    return left;
}


console.log(quickSort(arr, 0, arr.length-1))
