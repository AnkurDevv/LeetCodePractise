/**
 * @param {number[]} nums
 * @return {number[]}
 **/
var runningSum = function(nums) {
    // initialize the result array with first element in nums. 
    var result = [nums[0]];
    
    /**
     * The TRICK was to start the loop with index number 1 since we dont need to take 
     * care of the number at 0 index and 
     */
    for(var i=1; i< nums.length; i++){
        // result at index 'i' is the sum of result at 'i-1' and element at 'i'
        result.push(result[i-1] + nums[i])
    }    
    return result; 

};
console.log(runningSum([1,2,3,4])); // output : [1,3,6,10]

