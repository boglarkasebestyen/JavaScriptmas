/*Array previous less

https://scrimba.com/scrim/cod3741dcb9da7acefae9c8b2

DESCRIPTION:
Given an array of integers, for each position i, search among the previous positions for the last (from the left) position
that contains a smaller value. Store that value at position i in the answer. If no such value can be found, store -1 instead.

Example:

For items = [3,5,2,4,5], the output should be [-1,3,-1,2,4]

Hints: unshift()
*/


function arrayPreviousLess(nums) {
    let result = []
    for(i=0; i < nums.length; i++) {
        let everythingBefore = nums.slice(0, i)
        //console.log(i + " " + nums[i] + " :" + everythingBefore)
    
        let r = findNumLowerThan(everythingBefore, nums[i])
        result[i] = r 
        console.log(r)
    }
    return result
}

function findNumLowerThan(arr, num) {
    let result = -1
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i]
        if (elem < num) {
            result = elem
        }
    }
    return result
}



/**
* Test Suite 
*/
describe('arrayPreviousLess()', () => {
    it('shift previous postions from the left to a smaller value or store -1', () => {
        // arrange
        
        const nums = [3, 5, 2, 4, 5];
        
        // act
        const result = arrayPreviousLess(nums);

        // // log
        console.log("result: ", result);
        
        // // assert
        expect(result).toEqual([-1, 3, -1, 2, 4]);
    });
});