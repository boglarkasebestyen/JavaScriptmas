/* Rolling Dice

https://scrimba.com/scrim/coab241ebab0c921b1223fbf1

DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now, when the users click the 
dice on the screen, the dice is expected to show one of the faces randomly.

Hints: event listeners, Math.random()


DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as an integer alongside the dice face?
- Can you improve the overall design?
*/

const dotContainer = document.querySelectorAll("#dotContainer")
const dots = document.querySelectorAll("#dotContainer .dot")
// console.log(dots.length)
// console.log(dotContainer + " " + dotContainer[0])

dotContainer[0].onclick = function() {
    let randomDots = []
    let randomNum = Math.floor(Math.random() * 6) + 1
    console.log(randomNum)

    let dotNr = {
        1 : [4],
        2 : [0, 8],
        3 : [0, 4, 8],
        4 : [0, 2, 6, 8],
        5 : [0, 2, 6, 8, 4],
        6 : [0, 3, 6, 1, 4, 7, 2, 5, 8]
    }
    
    randomDots = dotNr[randomNum]
    // console.log(randomDots)
    for (let i = 0; i < dots.length; i++) {
        let dot = dots[i]
        dot.style.visibility = "hidden"
        // console.log(dot)
    }
    
    // console.log("randomDots:", randomDots)
    // console.log("randomDots:", dots)
    
    for (let i=0; i < randomDots.length; i++) {
        
        // console.log("randomDots["+i+"]" + "=" + randomDots[i])
        let dotIndex = randomDots[i]
        let dot = dots[dotIndex]
        dot.style.visibility = "visible"
        
        // console.log(dot)
    
    }
}

/*
HTML:

<html>
    <head>
        <link rel="stylesheet" href="style.css">
        <script src="index.pack.js"></script>
    </head>
    <body>
        <div id="mainContainer">
            <div id="dotContainer">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    </body>
</html>


CSS:

body {
    background-color: #AEB8FE;
    display: flex;
}

#mainContainer {
    
    border-radius: 20px;
    background-color: #EFE5DC;
    margin: auto;
    margin-top: 100px;
}

#dotContainer {
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    grid-template-rows: repeat(3, 1fr); 
    
    border-radius: 20px;
}

.dot {    
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: black;
    margin: 25px;
    
}

*/


