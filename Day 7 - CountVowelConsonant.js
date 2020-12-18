/*Count Vowel Consonant

https://scrimba.com/scrim/coc7c44a9a5601b43790f2982

DESCRIPTION:
You are given a string s that consist of only lowercase English letters.
If vowels ('a', 'e', 'i', 'o', 'u') are given a value of 1 and consonants are given a value of 2, return the sum of all of the letters in the input string.

Example:

For s = 'abcde', the output should be the countVowelConsonant(s) = 8

Hints: split(), reduce()
*/


function isVowel(character) {
    const vowels = ['a','e','i','o','u']
    return vowels.indexOf(character) == -1
}


function countVowelConsonant(str) {
    const arr = [...str]
    let sum = 0
    
    for(i = 0; i < arr.length; i++) {
        if(isVowel(arr[i])) {
            sum = sum + 2 
        } else {
            sum = sum + 1
        }
    }
    return sum
}


// or

function isVowel(character) {
    const vowels = ['a','e','i','o','u']
    return vowels.indexOf(character) != -1
}


function countVowelConsonant(str) {
    const arr = [...str]
    return arr.reduce((previous, current) => 
        isVowel(current) ? previous + 1 : previous + 2, 0)
}
    

/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});