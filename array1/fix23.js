// Array-1 -- fix23
// Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Return the changed array.

// Examples

// fix23([1, 2, 3]) → 1,2,0
// fix23([2, 3, 5]) → 2,0,5
// fix23([1, 2, 1]) → 1,2,1

function fix23(nums){
    let changed;
    for(i = 0; i < nums.length; i++){
      if(nums[i] == 2 && nums[i + 1] == 3){
        nums[i + 1] = 0;
        return nums
      }
    }return nums;
}