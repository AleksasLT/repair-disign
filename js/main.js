$( document ).ready(function() { 
let modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');

    modalBtn.on('click', function (){
      modal.toggleClass('modal--visible')
    });
    closeBtn.on('click', function (){
      modal.removeClass('modal--visible')
    }); 
  //console.log(modal);
});