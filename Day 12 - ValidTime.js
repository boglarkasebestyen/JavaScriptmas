/*Valid Time

https://scrimba.com/scrim/coa294366a7472bb78e443774

DESCRIPTION:
Check if the given string is a correct time representation of the 24-hour clock.

Example:

For time = "13:58", the output should be validTime(time) = true
For time  - "25:51", the output should be validTime(time) = false
For time = "02:76", the output should be validTime(time) = false

Hints: parseInt(), split()
*/


const validTime = (str) => {
  let arr = str.split(":")

  arr.length != 2 ? false : true
 
  let hour = parseInt(arr[0])
  let minute = parseInt(arr[1])
  
  return hour > 24 ? false : minute > 59 ? false : true
  
  }

  
/**
* Test Suite 
*/
describe('validTime()', () => {
    it('returns true for valid time', () => {
        // arrange
        const str = '13:58';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });

    it('returns false when invalid hours', () => {
        // arrange
        const str = '25:51';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when invalid minutes', () => {
        // arrange
        const str = '02:76';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });
});