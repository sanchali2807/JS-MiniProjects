
// create a nodelist

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initialiizeSlider();
document.addEventListener("DOMContentLoaded",initialiizeSlider);
// preffered for all the dom elements to first load properly
function initialiizeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide,3000);
    }
// console.log(intervalId);
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }else if(index<0)
{
    slideIndex = slides.length - 1;
}
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

}

function prevSlide(){
    clearInterval(intervalId);
slideIndex--;
showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}