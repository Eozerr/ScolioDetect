const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// user.html's js

//Javascript things... the share btn is not working shaa... Please credit me anywhere u want to use my design. THANK YOU... Images gotten from awwwards.com
const $body = $('body');
const $btnMenu = $('.menu-toggle');
$btnMenu.click(function() {
  $body.toggleClass('menu-open');
});

const btnCloseBar = document.querySelector('.js-close-bar');
const btnOpenBar = document.querySelector('.js-open-bar');
const searchBar = document.querySelector('.searchbar');

btnOpenBar.addEventListener('click', () => {
  searchBar.classList.add('bar--is-visible');
});

btnCloseBar.addEventListener('click', () => {
  searchBar.classList.remove('bar--is-visible');
});