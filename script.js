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
 

// Add Comment