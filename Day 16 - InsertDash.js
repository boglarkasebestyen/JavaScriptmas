/*Insert Dashes

https://scrimba.com/scrim/co03e4eef94443d50bf215e1e

DESCRIPTION:
Transform a given sentence into a new one with dashes between each two consecutive letters.

Example: 

For input = "aba caba", the output should be "a-b-a c-a-b-a"

Hints: join(), split()
*/

function isLetter(inputText) {
    const regex = /^[A-Za-z]+$/
    return regex.test(inputText) 
}

function insertDashes(arr) {
    let newString = ""
    
    for (let i=0; i < arr.length; i++) {
        // console.log(i + " " + arr[i] + " " + arr[i+1])
        newString = newString + arr[i]
        if (i < arr.length - 1 &&      
            isLetter(arr[i]) &&        
            isLetter(arr[i+1])) {      
            newString = newString + "-"
        }
    }
    return newString
}



/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});