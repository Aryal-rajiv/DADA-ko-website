const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function)
{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle
}
function addText(){
    document.getElementById("Research__card1").innerText= "This will direct you to my research on Machine Learning";
}
function removeText(){
    document.getElementById("Research__Card1").innerText= "";
}

//Scroll to top button

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}