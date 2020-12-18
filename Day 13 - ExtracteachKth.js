/*Extract Each Kth

https://scrimba.com/scrim/coc534d6cb36fae15e6d67bcf

DESCRIPTION:
Given an array of integers, remove each kth element from it.

Example:

For inputArray = [1,2,3,4,5,6,7,8,9,10] and k = 3, the output should be extractEachkth(inputArray, k) = [1,2,4,5,7,8,10]

Hints: filter() --> The filter() method creates a new array with all elements that pass the test implemented by the provided function.

*/

function extractEachKth (arr, element) {   
    
    function division (value, index) { 
        return (index + 1) % element !== 0     
    }      
    const result = arr.filter(division) 
    return result
}

//or:

function extractEachKth(arr, element) {     
   return arr.filter((value, index) => (index + 1) % element !== 0)
}



/**
* Test Suite 
*/
describe('extractEachKth()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const index = 3;
        
        // act
        const result = extractEachKth(nums, index);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([1, 2, 4, 5, 7, 8, 10]);
    });
});


