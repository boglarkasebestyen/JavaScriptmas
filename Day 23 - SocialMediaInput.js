/* Social Media Input

https://scrimba.com/scrim/coef148d7b261bfbb3f375955


DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.

Using the keydown() event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. 

If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the count of the characters

Let your imagination run wild! You can use the provided styling or you can take it to another level!
Make sure you share your solution using the "Share solution!" button at the top!
There will be multiple winners that I select!

Follow me on twitter @DThompsonDev so you can find who who is selected! 
I hope it's YOU!

*/

(() => {
    
    const button = document.getElementById("button")
    let text_field = document.getElementById("text_field")
    const counter = document.getElementById("counterFooter")
    const header = document.getElementById("header")

    const maxLength = 140

    function disableButton(disabled) {
        header.classList = ""
        if (disabled) {
            button.disabled = true
            header.classList.remove("headerActive")
            header.classList.add("headerInactive")
        } else {
            button.disabled = false
            header.classList.remove("headerInactive")
            header.classList.add("headerActive")
        }
    }
    
    function updateRemainingCharacters() {
        let remainingChar = maxLength - text_field.value.length
        counter.innerText = remainingChar
        
        if (remainingChar < 0) {
            counter.classList.add("subZeroCounter")
            disableButton(true)
        } else {
            counter.classList.remove("subZeroCounter")
            disableButton(false)
        }
        
        if (remainingChar == maxLength) {
            disableButton(true)
        }    
    }

    disableButton(true)
    text_field.addEventListener("keydown", function(event) {
        if (event.repeat) {
            updateRemainingCharacters()
        }   
    })

    text_field.addEventListener("keyup", function(event) {    
        updateRemainingCharacters()
    })
})()

/*

HTML:

<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
   <div class="container">
  <textarea type="text" id="text_field" placeholder="What's happening?"></textarea>
  <div id="counterFooter">140</div>
    <span>/ 140</span>
    <button id="button"><h2 id="header">Tweet</h2></button>
</div>
        <script src="index.pack.js"></script>
    </body>
</html>

CSS:
body {
    background-color: #17202A;
    font-family: sans-serif;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2em;
}

textarea {
    padding-top: 0.5em;
    padding-left: 0.7em;
    width: 80%;
    height: 23vh;
    background-color: #1C2733;
    color: #EEEEEE;
    border-radius: 1em;
    border-color: #7A7A7A;
    font-size: 1em;
    outline: none;
}

textarea::placeholder {
    color: #BABDC1;
    opacity: .6;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1em;
}

#counterFooter {
    margin-top: 0.6rem;
    margin-left: 52%;
    font-size: 0.8rem;
    color: #C5C8CB;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#counterFooter.subZeroCounter {
    color:red;
}

span {
    margin-top: -0.91rem;
    margin-left: 68%;
    font-size: 0.8rem;
    color: #C5C8CB;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 8em;
    height: 40px;
    margin-top: 2.5em;
    border-radius: 1.8em;     
    background-color: #59BC6D; 
    -webkit-appearance: button-bevel;
}

#button:disabled {
    background-color: #386E4C; 
}

#button:active {
    background-color: #3F9B3B; 
}

.header {
    color: #fff;
    font-size: 1.3em;   
}

.headerActive {
    color: #fff;
    font-size: 1.3em;   
}

.headerInactive {
    color: #8B9095;
    font-size: 1.3em; 
}


*/