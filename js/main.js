$( document ).ready(function() { 
let modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close'),
    upBtn = $('.button__up');

    modalBtn.on('click', function (){
      modal.toggleClass('modal--visible')
    });
    closeBtn.on('click', function (){
      modal.removeClass('modal--visible')
    });
    
    $(window).scroll(function(event){
      event.preventDefault();
      upBtn.toggleClass('button__up--visible');
      //console.log('Крути колесо');
    });
    upBtn.on('click', function (){
      $('html, body').animate({scrollTop: 0}, 1500);
    })
  //console.log(modal);
  let mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
  let next = $('.swiper-button-next');
  let prev = $('.swiper-button-prev');
  let bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();
});
