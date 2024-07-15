$(function () {
    $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
     });

     $('.manufacturer-slider__box').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: '.manufacturer-slider__arrows',
       
     });

     $('.manufacturer-slider__box--mobile').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      appendArrows: '.manufacturer-slider__arrows--mobile',
      responsive: [
       {
         breakpoint: 1250,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1
         },
       },
       {
         breakpoint: 650,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1
         },
       },
       {
         breakpoint: 430,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         },
       },
     ],
   });

     $('.customers-slider__box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: '.customers-slider__arrows'
     });

     $('.customers-slider__box--mobile').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      appendArrows: '.customers-slider__arrows--mobile',
      responsive: [
         {
           breakpoint: 800,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1
           },
         },
         {
           breakpoint: 550,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           },
         },
       ],
   });




     $('.portfolio-slider__box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: '.portfolio-slider__arrows'
     });

     $('.portfolio-slider__box--mobile').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      appendArrows: '.portfolio-slider__arrows--mobile',
      responsive: [
         {
           breakpoint: 1050,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1
           },
         },
         {
           breakpoint: 500,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           },
         },
       ],
      });



     $('.certificates-slider__box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: '.certificates-slider__arrows'
     });

     $('.certificates-slider__box--mobile').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      appendArrows: '.certificates-slider__arrows--mobile',
      responsive: [
         {
           breakpoint: 1050,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 1
           },
         },
         {
           breakpoint: 700,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1
           },
           
         },
         {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            },
            
          },
       ],
   });
     
     
})

window.addEventListener('DOMContentLoaded', () => {
    const accardionBtn = document.querySelectorAll('.questions-accardion__btn');

    
   accardionBtn.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open')
    });
   });


   const workBtn = document.querySelector('.work__btn');
   const workHidden = document.querySelector('.work-block__hidden');
   if(workBtn){
      workBtn.addEventListener('click', (e) => {
         e.preventDefault();
         workHidden.classList.add('show');
      })
   }

   const metallicheskiehidden = document.querySelector('.metallicheskie-box__wrapper--hidden');
   const metallicheskieBtn = document.querySelector('.metallicheskie-box__wrapper-btn');
   

   if(metallicheskieBtn){
    metallicheskieBtn.addEventListener('click', () => {
      metallicheskiehidden.classList.add('show-mettal');
    })
   }


   //MENU
  const menu = document.querySelector(".menu");
  const mobile = document.querySelector(".nav-icon");

  mobile.addEventListener("click", function () {
   document.body.classList.toggle('mobile-class');
    this.classList.toggle("nav-icon--active");
    menu.classList.toggle("nav--active");
  });


  const filter = document.querySelector('.search__wrapper-filter');
const sidebar = document.querySelector('.sidebar--mobile');

filter.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-show')
})

});