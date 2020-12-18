/*Adjacent Elements Product

https://scrimba.com/scrim/co4da467cb762a1d6c28310a6

DESCRIPTION:
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example:

For inputArray = [3,6,-2,-5,7,3], the output should be adjacentElementsProduct(inputArray) = 21

7 and 3 reproduce the largest product
*/


function adjacentElementsProduct(nums) {
    let defaultMax = nums[0] * nums[1]

    for(i=0; i<nums.length-1; i++) { 
        if(currentMax > defaultMax) { 
            defaultMax = currentMax   
        }
    }
    return defaultMax
}


/**
* Test Suite 
*/
describe('adjacentElementsProduct()', () => {
    it('returns largest product of adjacent values', () => {
        // arrange
        const nums = [3, 6, -2, -5, 7, 3];
        
        // act
        const result = adjacentElementsProduct(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(21);
    });
});