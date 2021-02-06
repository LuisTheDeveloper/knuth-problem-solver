// Given two arrays, find common unique elements.
//
// 1. First option is a O(n) time complexity solution and O(n) space complexity:
//
// Note: this one does not find unique elements.
//
let arr1 = [1,5,12,-15,20, 20, 88]
let arr2 = [2,10,-1,5,11,20,99]

const checkCommonElements = (array1, array2) =>{
  let results = [];

  for(var i=0; i<arr1.length; i++) {
    if(array2.includes(array1[i])) {
      results.push(array1[i])
    } 
  }
  return results
}

console.log(checkCommonElements(arr1, arr2))

// 2. Second option uses a hash table:
//
// Note: this one finds and stores unique elements
const checkCommon = (array1, array2) => {
  let hashT = {}
  let results = []
  
  for(var i=0; i<array1.length; i++) {
    if(!hashT.hasOwnProperty(array1[i])) {
      hashT[array1[i]] = 1
    }
  }
  
  console.log(hashT)
  
  for(var i=0; i<array2.length; i++){
    if(hashT[array2[i]] === 1){
      results.push(array2[i])        
    }
  }
  return results
}

console.log(checkCommon(arr1, arr2))
