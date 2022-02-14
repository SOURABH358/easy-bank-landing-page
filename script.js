const bars = document.querySelector('.bars');
const close = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const ul = document.querySelector('.navbar ul');
const heroImage1 = document.querySelector('.hero-image1 img')

let widthMatch = window.matchMedia("(max-width: 376px)");
widthMatch.addEventListener('change',(mm)=>{
    if(mm.matches){
        heroImage1.setAttribute('src','/images/bg-intro-mobile.svg');
        bars.addEventListener('click',()=>{
            overlay.style.display = "block";
            ul.style.display = "block";
            bars.style.display = "none";
            close.style.display = "block";
        })
        close.addEventListener('click',()=>{
            overlay.style.display = "";
            ul.style.display = "";
            bars.style.display = "block";
            close.style.display = "none";
        })
    }
    else{
        heroImage1.setAttribute('src','/images/bg-intro-desktop.svg');
    }
})
console.log(heroImage1);
console.log(innerWidth)