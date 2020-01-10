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

  //Validation modal form
  $('.modal__form').validate({
    rules: {
      // simple rule, converted to {required:true}
      userName: "required",
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: "Имя обязательно",
      userPhone: "Телефон обязательно",
      userEmail: {
        required: "Укажите ваш email",
        email: "Введите в формате: name@domain.com"
      }
    }
  });

  //Validation control form
  $('.control__form').validate({
    rules: {
      // simple rule, converted to {required:true}
      userName: "required",
      userPhone: "required"
    },
    messages: {
      userName: "Имя обязательно",
      userPhone: "Телефон обязательно",
    }
  });

  //Validation footer form
  $('.footer__form').validate({
    rules: {
      // simple rule, converted to {required:true}
      userName: "required",
      userPhone: "required"
    },
    messages: {
      userName: "Имя обязательно",
      userPhone: "Телефон обязательно",
    }
  });

  //Mask
  $('[type=tel]').mask('+7(000)-000-00-00');
});
