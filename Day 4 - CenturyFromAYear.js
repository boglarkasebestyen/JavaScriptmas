/*Century From A Year

https://scrimba.com/learn/adventcalendar/note-at-0-30-co836436e940c8b0a68d55316

DESCRIPTION:
Given a year, return the century it is in. 
The first century spans from the year 1 up to and including the year 100.
The second from the year 101 up to and including the year 200, etc.

Example:

For year = 1905, the output should be centuryFromyEAR(YEAR) = 20
For year = 1700, the output should be centuryFromYear(year) = 17

Hints: Math.floor()
*/

const centuryFromYear = (num) => {
    let divResult = num / 100
    if (num % 100 == 0) {
        return divResult
    } 
    return Math.floor(divResult) + 1
}


/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
    it('returns current century', () => {
        // arrange
        const year = 1905;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(20);
    });
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1700;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(17);
    });    
});