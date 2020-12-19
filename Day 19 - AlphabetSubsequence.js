/*Alphabet Subsequence

https://scrimba.com/scrim/coe1d4d189ecb6381a1e4edd2

Check whether the given string is a subsequence of the plaintext alphabet.

Example:

For s = "effg" or s = "cdce", the output should be the alphabetSubsequence(s) = false
For s = "ace" or s = "bxz", the output should be alphabetSubsequence(s) = true

Hints: size property(), charCodeAt(), split()
*/


function alphabetSubsequence(str) {
    for (i=0; i < str.length - 1; i++) {
        let currentElement = str.charCodeAt(i)
        let nextElement = str.charCodeAt(i+1)
        // console.log("current " + str[i] + "=" + currentElement)
        // console.log("next " + str[i+1] + "=" + nextElement)
        if (!(nextElement > currentElement)) {
          return false
        }
    }
  return true
}


/**
* Test Suite 
*/
describe('alphabetSubsequence()', () => {
    it('returns false when it has duplicate letters', () => {
        // arrange
        const str = 'effg';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when NOT in ascending a - z order', () => {
        // arrange
        const str = 'cdce';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(false);
    });
    
    it('returns true when no duplicates and is ascending a - z order ', () => {
        // arrange
        const str = 'ace';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 3: ", result);
        
        // assert
        expect(result).toBe(true);
    });
});