/*Different symbols Naive

https://scrimba.com/scrim/coadc4ae4a9ce2fc50709ca5d

DESCRIPTION:

Given a string, find the number of different characters in it.

Example:

For s = "cabca", the output should be 3
These are 3 different characters: a, b and c.

Hints: includes(), split(), push()
*/

function differentSymbolsNaive(str) {
    let splitStr = str.split("")          
    let unique = splitStr.length          

    for(i=0; i < splitStr.length; i++) {
        // console.log("unique:" + " " + unique)
        // console.log(splitStr[i])
        // console.log("slice:" + " " + splitStr.slice(i+1))
        if (splitStr.slice(i+1).includes(splitStr[i])) {   
            // console.log(splitStr.slice(i+1) + " includes " + splitStr[i])
            unique = unique - 1
        }
    }
    return unique
}

/* or: 

function differentSymbolsNaive(str) {
    let splitStr = str.split("")
    let diffChar = {} 

    for(i=0; i < splitStr.length; i++) {
        if (diffChar[splitStr[i]] === undefined) {
            diffChar[splitStr[i]] = 0
        }
        diffChar[splitStr[i]]++
    }
    console.log(diffChar)
    return Object.keys(diffChar).length
    */

      
/**
* Test Suite 
*/
describe('differentSymbolsNaive()', () => {
    it('returns count of unique characters', () => {
        // arrange
        const str = 'cabca';
        
        // act
        const result = differentSymbolsNaive(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    });
});





