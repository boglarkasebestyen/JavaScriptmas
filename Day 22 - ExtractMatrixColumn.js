/* Extract Matrix Column

https://scrimba.com/scrim/co3214604b3337800d868111b

Given a rectangular matrix and an integer column, return an array containing the elements 
of the columnth column of the give matrix (the leftmost column is the 0th one).

Example:

For matrix = [[1,1,1,2], [0,5,0,4], [2,1,3,6]] and column = 2, the output should be 
extractMatrixColumn(matrix, column) = [1,0, 3]

Hints: push()
}

*/

function extractMatrixColumn(matrix, column) {
    let arr = []
    for (let i = 0; i < matrix.length; i++) {        
        // console.log("matrix length:" + " " + matrix.length)
        // console.log("matrix index:" + " " + matrix[i])
        arr.push(matrix[i][column])
    }
    return arr
}


/**
* Test Suite 
*/
describe('extractMatrixColumn()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
        const column = 2;
        
        // act
        const result = extractMatrixColumn(matrix, column);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([1, 0, 3]);
    });
});