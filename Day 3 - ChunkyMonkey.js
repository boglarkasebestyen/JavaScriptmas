/*Chunky Monkey

https://scrimba.com/learn/adventcalendar/note-at-0-36-cofef491c9584b734fa64ba1d

DESCRIPTION:
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
Example:

chunkyMonkey(["a", "b", "c", "d"],2) should return [["a", "b"], ["c", "d"]]
chunkyMonkey([0,1,2,3,4,5],4) should return [[0,1,2,3], [4,5]]

Hints: slice()
*/

const chunkyMonkey = (values, size) => {
    const result = []
    
        for(i=0; i < values.length; i += size) {
            result.push(values.slice(i, i + size))
        }
        return result
}


/**
* Test Suite 
*/
describe('chunkyMonkey()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const values = ["a", "b", "c", "d"];
        const size = 2;
        
        // act
        const result = chunkyMonkey(values, size);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([["a", "b"], ["c", "d"]]);
    });
});
