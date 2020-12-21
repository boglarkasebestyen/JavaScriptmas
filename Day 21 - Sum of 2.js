/* Sum of 2

https://scrimba.com/scrim/co40e47ae8fc3d510615205e2

DESCRIPTION:
You have two integer arrays, and b, and an integer target value v. Determine whether there is a pair of numbers, where
one is taken from a and the other from b that can be added together to get a sum of v. Return true if such a pair exists,
otherwise return false.

Example:

For a = [1,2,3], b = [10, 20, 30, 40] and v = 42, the output should be sumOfTwo(a,b,v) = true

Hints: hasOnwProperty()
*/



function sumOfTwo(nums1, nums2, value) {
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if ((nums1[i] + nums2[j]) == value ) {
                return true
            }
        }
    }
    return false
}

/* or (old solution):

function sumOfTwo(nums1, nums2, value) {
    let result = 0
    let bool = false
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let add = nums1[i] + nums2[j]
            if (add == value ) {
                result = add
                bool = true
            }
        }
    }
    return bool
}


/**
* Test Suite 
*/
describe('sumOfTwo()', () => {
    it('returns true if a value can be found that by adding one number from each list', () => {
        // arrange
        const nums1 = [1, 2, 3];
        const nums2 = [10, 20, 30, 40];
        const value = 42;
        
        // act
        const result = sumOfTwo(nums1, nums2, value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(true);
    });
});