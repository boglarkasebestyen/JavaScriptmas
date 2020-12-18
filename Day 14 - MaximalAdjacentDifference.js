
/*Maximal Adjacent Differencec

https://scrimba.com/scrim/coa104bbe90b7d734889eb3ce

Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example:

For inputArray = [2,4,1,0], the output should be arrayMaximalAdjacentDifference(inputArray) = 3
For input Array = [2,9,1,0], the output should be arrayMaximalAdjacentDifference(inputArray) = 8

Hints: Math.abs()
*/


function arrayMaximalAdjacentDifference(nums) {
    let max = 0
    
    for(i=0; i<nums.length-1; i++) {
        let absDiff = Math.abs(nums[i] - nums[i+1])
        
        if(absDiff > max) {
            max = absDiff
        }
    }
    return max
}

//or:
/*function arrayMaximalAdjacentDifference(nums) {
    let max = 0
    
    for(i=0; i<nums.length-1; i++) {
        let diff = nums[i] - nums[i+1]
        let absDiff = Math.abs(diff)
    
        if(absDiff > max) {
            max = absDiff
        }
    }
    return max
}
*/ 


/**
* Test Suite 
*/
describe('arrayMaximalAdjacentDifference()', () => {
    it('returns largest difference between adjacent values', () => {
        // arrange
        const nums = [2, 4, 1, 0];
        
        // act
        const result = arrayMaximalAdjacentDifference(nums);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(3);
    });

    it('returns largest difference between adjacent values example 2', () => {
        // arrange
        const nums = [2, 9, 1, 0];
        
        // act
        const result = arrayMaximalAdjacentDifference(nums);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});


