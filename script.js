// PSEUDOCODE

// Menu toggle
    // when clicked on the burger menu icon, navigation page will slide from the right side.
    // when clicked on the X icon, navigation page retreats away from the right side.

// storing button elements in variables
const menuToggle = document.querySelector('.menu-toggle');
const closeButton = document.querySelector('.close-button');
// storing .slide-out-nav in a variable
const slideOutNav = document.querySelector('.slide-out-nav');
// when clicked on the burger menu icon, navigation page will slide from the right side.
menuToggle.addEventListener('click', function() {
    slideOutNav.classList.toggle('show-slide-nav');
})
// when clicked on the X icon, navigation page retreats away from the right side.
closeButton.addEventListener('click', function() {
    slideOutNav.classList.toggle('show-slide-nav');
})
 

// Add/DISPLAY Comment from USER Input
    // after user submits comment:
    // 1. the comment input gets added after the last comment.

// FORM SUBMISSION
// storing form element in a variable
const formEl = document.getElementById('form-blog');
const commentSection = document.getElementById('comment-section');
// Listen for the submit on the form
formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    // store the textarea element in a variable
    const textareaEl = document.querySelector('textarea');
    // get the value of the value property and save it in a variable 
    const comment = textareaEl.value;
    // store the timeStamp value in a variable
    const date = event.timeStamp;

    if (comment) {
        // create article element
        const articleEl = document.createElement('article');
        articleEl.classList.add('comment-post');
        // create div element
        const div1 = document.createElement('div');
        div1.classList.add('comment-image');
        // create img element
        const imgEl = document.createElement('img');
        imgEl.src = "https://source.unsplash.com/random/80x80";

        const div2 = document.createElement('div');
        div2.classList.add('comment');
        // create p element
        const paraDate = document.createElement('p');

        const paraComment = document.createElement('p');
        
        // add the div1 element in the artile element
        articleEl.appendChild(div1);

        // add imgEl to the divEl element
        articleEl.appendChild(div1).appendChild(imgEl);

        // add another div to the article element
        articleEl.appendChild(div2);

        // update paraDate with the timeStamp
        paraDate.textContent = date;

        // add paraDate to the div2
        articleEl.appendChild(div2).appendChild(paraDate);
        
        // update the paragraph text with the user comment submit
        paraComment.textContent = comment;

        // add paraComment to the div2
        articleEl.appendChild(div2).appendChild(paraComment);
        
        // append the article to the section page
        document.querySelector('#comment-section').appendChild(articleEl);

        // clearing our input by setting it back to an empty string
        textareaEl.value = '';
    }
    else {
        alert("please write some comment.");
    }
})
