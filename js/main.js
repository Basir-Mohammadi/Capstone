
const openBtn = document.querySelector ('.hamburger-btn');
const navMenu = document.querySelector ('.menu-js');
const CloseBtn =document.querySelector ('#close-btn');
const links =document.querySelectorAll ('.link');

openBtn.addEventListener ('click' , () =>{
    navMenu.style.display = 'inline-block';
    openBtn.style.display ='none';
})

CloseBtn.addEventListener ('click', () => {
    navMenu.style.display ='none';
    openBtn.style.display ='block';
})

links.forEach((link)=> {
    link.addEventListener('click' , ()=>{
        navMenu.style.display ='none';
        openBtn.style.display ='block';
    });
}); 



