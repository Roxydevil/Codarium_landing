/*Header_________________________________________________________ */
let mainNav = document.getElementById('mobileMenu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});