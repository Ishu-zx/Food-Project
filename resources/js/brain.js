// sticking nav bar to the top
const nav = document.querySelector('nav');
window.addEventListener('scroll',stickToTop)
function stickToTop(){
    let verticalScroll = window.scrollY;
if(verticalScroll>=550){
    nav.classList.add('sticky');
}
if(verticalScroll<=550){
    nav.classList.remove('sticky');
}
}
/* sidebar  */
const navLink = document.querySelector('.nav-link');
const checkbox = document.querySelector('#navbar input');
navLink.addEventListener('click',()=>{
    checkbox.checked = false;
})
