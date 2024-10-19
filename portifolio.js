// Contact form functionality
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! I will get back to you soon.');
});

// // Toggle hamburger menu and menu overlay
// document.getElementById('hamburger').addEventListener('click', function () {
//     const menuOverlay = document.getElementById('menu-overlay');
//     menuOverlay.classList.toggle('show');
//     this.classList.toggle('close'); // Toggle close (X) icon
// });

const hamburger = document.getElementById('hamburger');
const links = document.getElementById('nav-links');
const cross = document.getElementById('cross');

hamburger.addEventListener('click', () => {
    links.classList.add('active'); // Add 'active' class to show the menu
});

cross.addEventListener('click', () => {
    links.classList.remove('active'); // Remove 'active' class to hide the menu
});
