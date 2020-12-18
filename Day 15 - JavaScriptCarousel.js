/*JavaScript Carousel

https://scrimba.com/scrim/coa834afa96b433095713d4b6

DESCRIPTION:
- Use JS to make it function
- Left & right arrows should work
- Bonus: use CSS transitions
*/

const previous = document.getElementById("previous")
const next = document.getElementById("next")
const img = document.getElementsByTagName("img")
let imageIndex = 0

function moveToIndex(index) {
    let gallery = document.getElementById("gallery")
    let imgWidth = gallery.getElementsByTagName("img")[0].width
    let offset = window.getComputedStyle(gallery.getElementsByClassName("card")[0]).marginRight
    offset = parseInt(offset.replace("px", ""))
    let targetDisplacement = index * (-1 * (imgWidth + offset));
    let transform = `transform: translateX(${targetDisplacement}px)`
    document.getElementById('gallery').setAttribute('style', transform)
}

function imageCount() {
    return gallery.getElementsByTagName("img").length;
}

function resetButtonState() {
    previous.classList.remove("disabled")
    next.classList.remove("disabled")
}

previous.onclick = function previousBtn() {
    if (imageIndex == 0) {
        return
    }  

    imageIndex--
    moveToIndex(imageIndex)
    resetButtonState()
    if (imageIndex == 0) {
        previous.classList.add("disabled")
    }
}

next.onclick = function nextBtn() {
    if (imageIndex == imageCount() - 1) {
        return
    }

    imageIndex++
    moveToIndex(imageIndex)
    resetButtonState()
    if (imageIndex == imageCount() - 1) {
        next.classList.add("disabled")
    }
}



/*
Thanks to these fine individuals from Unsplash:
https://unsplash.com/photos/AmzKuEnr1VY
https://unsplash.com/photos/eDnJQL21amc
https://unsplash.com/photos/LXy2DOOxESQ
https://unsplash.com/photos/KBKHXjhVQVM
https://unsplash.com/photos/PxM8aeJbzvk


@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');
---------------------

CSS:

html, body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: 'Playfair Display';
    display: grid;
    justify-content: center;
}

img {
    width: 200px;
}

.disabled {
    opacity: .3;
}

.container {
    display: grid;
    grid-template-columns: 20% 200px 20%;
    place-content: center;
}

.gallery-wrapper {
    overflow: hidden;
    width: 100%;
}

#previous, #next {
    justify-self: center;
    align-self: center;
    cursor: pointer;
    width: 35px;
}

#gallery {
    transform-style: preserve-3d;
    display: grid;
    grid-template-columns: repeat(5, auto);
    transform: translateX(0);
    transition: all 0.5s ease-in-out;
}

.card {
    margin-right: 20px;
    align-self: center;
    opacity: 100;
}


---------------------------
HTML:

<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        
        <div class="container">
            <img src="previous.svg" id="previous" class="disabled" alt="previous image" onclick="previousBtn()">
            <div class="gallery-wrapper">
                <div id="gallery">
                    <img class="card current" src="presents.jpg" alt="Christmas Cookies">
                    <img class="card" src="cookies.jpg" alt="Christmas Cookies">
                    <img class="card" src="santa.jpg" alt="Christmas Cookies">
                    <img class="card" src="candycane.jpg" alt="Christmas Cookies">
                    <img class="card" src="reindeer.jpg" alt="Christmas Cookies">
                </div>
            </div>
            <img src="next.svg" id="next" alt="next image" onclick="nextBtn()">
        
        </div>
        
        <script src="index.pack.js"></script>
    
    </body>
</html>

*/