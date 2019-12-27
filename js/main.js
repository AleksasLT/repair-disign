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
});