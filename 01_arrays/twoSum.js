/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const finalArray = [];
    const objIndices = {};

    for (let i = 0; i < nums.length; i++) {
        if (objIndices.hasOwnProperty(target - nums[i])) {
            finalArray.push(objIndices[target - nums[i]]);
            finalArray.push(i);
        } else {
            objIndices[nums[i]] = i;
        }
    }

    return finalArray;
};

//console.log(twoSum([3, 2, 4], 6));

//This is not an ideal solution
var twoSum2 = function(nums, target) {
    if (nums.length <= 1) return undefined;

    for (let i=0; i < nums.length; i++){
        let remaining = target - nums[i];
        let j = nums.indexOf(remaining,i+1) //start the search from index i+1 
        if (j !== -1) return [i,j]; 
    }
};

console.log(twoSum2([3,4,2], 6));

var twoSumUseMap = function(nums,target){
    let indices = new Map(); 
    let result = []; 

    for (let i=0; i < nums.length; i++){
        let remaining = target - nums[i];
        if (indices.has(remaining)){
            result.push(indices.get(remaining),i)
        } else {
            indices.set(nums[i], i); 
        }
    }
    
    return result; 
}
console.log(twoSumUseMap([3,4,2], 6));