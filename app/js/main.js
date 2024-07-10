$(function () {
    $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
     });

     $('.manufacturer-slider__box').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: '.manufacturer-slider__arrows'
     });

     $('.customers-slider__box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: '.customers-slider__arrows'
     });

     $('.portfolio-slider__box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: '.portfolio-slider__arrows'
     });

     $('.certificates-slider__box').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: '.certificates-slider__arrows'
     });
     
     
})

window.addEventListener('DOMContentLoaded', () => {
    const accardionBtn = document.querySelectorAll('.questions-accardion__btn');

    
   accardionBtn.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open')
    });
   });


});