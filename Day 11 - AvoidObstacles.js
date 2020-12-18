/*Avoid Obstacles

https://scrimba.com/scrim/coabc4ce2aba0f1f0adf8874c

DESCRIPTION:
You are given an array of integers representing coordinates of obstacles situated on a straight line.
Assume that you are jumping from the point with coordinate 0 to the right. Ypu are allowed only to make jumps
of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example:

For inputArray = [5,3,6,7,9], the output should be avoidObstacles(inputArray) = 4

Hints: sort(), every()
*/


const avoidObstacles = (nums) => {
        let maxNum = Math.max(...nums);

        for (let i=1; i<maxNum; i++) {
            if(nums.every((currentNumber) => currentNumber % i !== 0)) {
                return i;
            } 
        }
}



/**
* Test Suite 
*/
describe('avoidObstacles()', () => {
    it('returns minimal number of jumps in between numbers', () => {
        // arrange
        const nums = [5, 3, 6, 7, 9];
        
        // act
        const result = avoidObstacles(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(4);
    });
});