/* Test Your Agility

https://scrimba.com/scrim/coa20470eae40b42c525beb79


DESCRIPTION:
Make a counter that increments every 75 miliseconds in the spin() function and displays 
whether the player wins or loses in the stop() function.

Be sure to use the sleep() function that already exists.
Show the player the numbers with .innerHTML
Don't forget, var pushed is defined globally and changes to true after the STOP button is pushed
*/


//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning') //The spinning number

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed() {
    pushed = true
}

//set the target Int
function setTargetInt(){
    var targetElem = document.getElementById('targetNum')
    targetInt = Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


//EDIT THIS FUNCTION
const spin = async () => {
    //WRITE YOUR CODE HERE
        // stop(i) //Trigger this function when the STOP button has been pushed
        // await sleep(75) //Paste this wherever you need to sleep the incrimentor 

     let i = 0
     while(!pushed) {
         spinningElem.innerHTML = i
         await sleep(120)
         i++
     }
  
     stop(i-1)
}

//EDIT THIS FUNCTION
function stop(i) {
    //WRITE YOUR CODE HERE
    var remainder = Math.abs(targetInt-(i))
    var result = document.getElementById('result') //display your result message here
    if (i === targetInt) {
        result.innerHTML = "You win!"
    } else {
        result.innerHTML = "Uh-oh, you lose! You were off by" + " " + remainder.toString() + "."
    }
}


//main
setTargetInt()
spin()