
/*Reverse A String

https://scrimba.com/scrim/cod6d46b4952302e01dee63aa

DESCRIPTION:
Reverse the provided string. You may need to turn the string into an array before you reverse it.
Your result must be a string.

Example:

reverseAString('hello') returns 'olleh'
reverseAString('Howdy') returns 'ydwoH'

Hints: join(), split(), reverse()
*/



const reverseAString = (str) => {
    const arr = [...str]
    const reversedArr = arr.reverse()
    const joinedArr = reversedArr.join("")
    return joinedArr
}


/**
* Test Suite 
*/
describe('reverseAString()', () => {
    it('returns original string reversed', () => {
        // arrange
        const str = 'hello';
        
        // act
        const result = reverseAString(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe('olleh');
    });
});