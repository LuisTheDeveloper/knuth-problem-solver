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

// Problem solved applying two pointers technique
// Container With Most Water
/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
Notice that you may not slant the container.

Example: 
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

Explanation: 
The height is given by the input array [1,8,6,2,5,4,8,3,7]. 
The size of the array is 9 elements, so the maximum index is 8.
The width is calculated as the difference between two indexes and we start with the maximum width possible, i.e., index 8 - index 0 = 8.

Having the maximum width we calculate the height as the minimum height possible between array[0] and array[8]. 
Why the minimum? because the water will slant from the container if we use the maximum height.
Then we calculate the area, width x height and save the value.
We follow to the next element and do the same process again until we have the maxium area possible.

In this case, the max area of water (blue section) the container can contain is 49.

The given array

/**
 * @param {number[]} height
 * @return {number}
 */

//[1,8,6,2] => length 4, (0,1),(3,2) => w:3, h:1, a:3

var maxArea = function(height) {
  let start=0
  let end = height.length -1
  let area = 0
  
  while(start<end) {
      let w = end - start
      let h = Math.min(height[start], height[end])
      area = Math.max(area, w * h)
      height[end] > height[start] ? start++ : end--
  }
  
  return area
};
