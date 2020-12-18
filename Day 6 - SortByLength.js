/*Sort By Length

https://scrimba.com/scrim/coe6b4796bcba3acea421b7e7

DESCRIPTION:
Given an array of strings, sort them in the order of increasing lengths.
If two strings have them same length, their relative order must be the same as in the initial array.

Example: 

For 

inputArray = ["abc", "", "a", "zz"]

the output should be

sortByLength(inputArray) = ["", "a", "zz", "abc", "aaa"]

Hints: sort()
*/

const sortByLength = (strs) => {
    const compare = (a, b) => {
        return a.length < b.length ? -1 : 1
    }
    return strs.sort(compare)
}

/**
* Test Suite 
*/
describe('sortByLength()', () => {
    it('sorts the strings from shortest to longest', () => {
        // arrange
        const strs = ["abc", "", "aaa", "a", "zz"];
        
        // act
        const result = sortByLength(strs);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
    });
});
