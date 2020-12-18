/* Candies https://scrimba.com/scrim/cod1d4da69a5f4c8b9b416429

https://scrimba.com/learn/adventcalendar/note-at-0-51-cod1d4da69a5f4c8b9b416429

DESCRIPTION:
n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child.
Determine how many pieces of candy will be eatin by all the children together.
Individual pieces of candy cannot be split.

Example:

For n = 3, m = 10, the output should be candies(n,m) = 9
Each child will eat 3 pieces, so the answer is 9.

Hints: Math.floor()
*/

const candies = (children, candy) => {
    const indPiecesCandy = Math.floor(candy / children)
    const allCandyPiece = indPiecesCandy * children
    return allCandyPiece
}



/**
* Test Suite 
*/
describe('candies()', () => {
    it('returns ammount of total equal candy to be eaten', () => {
        // arrange
        const children = 3;
        const candy = 10;
        
        // act
        const result = candies(children, candy);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(9);
    });
});