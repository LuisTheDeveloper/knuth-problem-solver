// Arrays problems and solutions with an optimal solution as possible


/*
FIND DUPLICATES

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements that appear twice in this array.
Could you do it without extra space and in O(n) runtime?

The important point is: 1 ≤ a[i] ≤ n (n = size of array), so we can use the value of each element in the array as an index,
to optimize the final solution in O(n) time complexity without any increase in space complexity apart from the results array.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
var findDuplicates = function(nums) {
    let result = []
    
    arrLength = nums.length
    
    for(let i=0; i<arrLength; i++) {
        let index = Math.abs(nums[i]) -1
        if(nums[index] < 0) {
            result.push(Math.abs(nums[i]))
        } else {
            nums[index] *= -1
        }
    }
    
    return result
};
