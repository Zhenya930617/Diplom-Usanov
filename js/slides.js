const slides = document.querySelectorAll('.i-need-2'),
prev = document.querySelector('.ec-button-prev'),
next = document.querySelector('.ec-button-next');
let slideIndex = 1;

function showSlides(n){
    if (n>slides.length){
        slideIndex = 1;
    }
    if (n<1){
        slideIndex = slides.length;
    }
slides.forEach(item => item.style.display = 'none');
slides[slideIndex - 1].style.display = 'block';
}
showSlides (slideIndex);

    function plusSlide(n){
        showSlides(slideIndex +=n);
    }
    next.addEventListener('click', () =>{
        plusSlide(1);
    })
    prev.addEventListener('click', () =>{
        plusSlide(-1);
    })

    const slides2 = document.querySelectorAll('.i-need'),
    prev2 = document.querySelector('.tc-button-prev'),
    next2 = document.querySelector('.tc-button-next'),
    current = document.querySelector('.testi-number');
    let slideIndex2 = 1;

function showSlides2(n){
    if (n>slides2.length){
        slideIndex2 = 1;
    }
    if (n<1){
        slideIndex2 = slides2.length;
    }
slides2.forEach(item => item.style.display = 'none');
slides2[slideIndex2 - 1].style.display = 'block';
if (slides2.length < 10) {
    current.textContent = `0${slideIndex2}.`;
} else{
    current.textContent = `${slideIndex2}.`;
}
}
showSlides2 (slideIndex2);

    function plusSlide2(n){
        showSlides2(slideIndex2 +=n);
    }
    next2.addEventListener('click', () =>{
        plusSlide2(1);
    })
    prev2.addEventListener('click', () =>{
        plusSlide2(-1);
    })