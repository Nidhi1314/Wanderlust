const inputs = document.getElementsByTagName('input');
const icons = document.getElementsByClassName('bi-caret-down-fill');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function() {
       
        icons[i].style.transform = 'rotate(180deg)';
        
    });

   
    inputs[i].addEventListener('blur', function() {
        icons[i].style.transform = 'rotate(0deg)';
    });
}
const loginbt=document.getElementById('login');
const popup=document.getElementById('popup');
const close=document.getElementById('close');

loginbt.onclick=function()
{
    popup.style.display="block";
}
close.onclick=()=>
{
    popup.style.display="none";
}

// slider code
let slideindex=0;
let intervalid=null;
const slides = document.querySelectorAll('.slides .slide');
const prevBtn = document.querySelector('.bi-arrow-left-circle-fill');
const nextBtn = document.querySelector('.bi-arrow-right-circle-fill');
console.log(slides);


document.addEventListener("DOMContentLoaded",initialiseslide);
function initialiseslide()
{    
    slides[slideindex].style.display='flex';
    slides[slideindex].classList.add('displayslide');
   intervalid= setInterval(nextslide, 5000);
   console.log(intervalid);
}
function showslide(index)
{
    if(index>=slides.length)
        {
            slideindex=0;
        }
    else if(index<0)
        {
            slideindex=slides.length-1;
        }
        else
            {
                slideindex=index;
            }
        slides.forEach(slide=>slide.style.display='none');
        slides[slideindex].style.display='flex';
        slides[slideindex].classList.add('displayslide');
}
function nextslide()
{
       slideindex++;
       showslide(slideindex);
}
function prevslide()
{
       slideindex--;
         showslide(slideindex);
}
nextBtn.addEventListener('click', nextslide);
prevBtn.addEventListener('click', prevslide);

// const slides = document.querySelectorAll('.slide');
// const prevBtn = document.querySelector('.bi-arrow-left-circle-fill');
// const nextBtn = document.querySelector('.bi-arrow-right-circle-fill');
// let slideIndex = 0;
// console.log(slides);

// // Initially hide all slides except the first
// slides.forEach((slide, index) => {
//   if (index !== 0) {
//     slide.style.display = 'none';
//   }
// });

// function showSlide(n) {
//     slides.forEach((slide, index) => {
//         slide.style.transform
//      = `translateX(${index * -100}%)`;
//         slide.classList.remove('active');
//       });
    
//       slides[slideIndex].classList.add('active');
// }

// // Initial slide
// showSlide(slideIndex);

// // Automatic slide change
// setInterval(() => {
//   showSlide(slideIndex + 1);
// }, 3000); // Change slide every 3 seconds

// prevBtn.addEventListener('click', () => {
//   showSlide(slideIndex - 1);
// });

// nextBtn.addEventListener('click', () => {
//   showSlide(slideIndex + 1);
// });