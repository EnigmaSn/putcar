$(function(){

// открытие меню
$(".page-header__menu-open, .page-header__menu-close").click(function(){
  $(".page-header__menu--open").toggleClass("page-header__menu--open-show");
  $(".page-header__wrapper").toggleClass("page-header__wrapper-show-menu");
  return false;
});

  // Слайдер
  $('.reviews__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
  });

  $('.questionnaire__form-btn-next').click(function(event) {
    // var i=$(this).parent().removeClass("active").next().addClass("active").index();
    //   $('.questionnaire__menu a').removeClass('active').eq(i).addClass('active');

    var i=$(this).parent().removeClass("active").next("[data-id]").addClass("active").attr("data-id");
      $('.questionnaire__menu a').removeClass('active');
      $(".questionnaire__menu a[data-id='"+i+"']").addClass('active');
    return false;
  });

  $('.questionnaire__form-btn-prev').click(function(event) {
    // var i=$(this).parent().removeClass("active").prev().addClass("active").index();
    //   $('.questionnaire__menu a').removeClass('active').eq(i).addClass('active');
    var i=$(this).parent().removeClass("active").prev("[data-id]").addClass("active").attr("data-id");
      $('.questionnaire__menu a').removeClass('active');
      $(".questionnaire__menu a[data-id='"+i+"']").addClass('active');
    return false;
  });

// модальные окна
  var fancyFormSettings={
      padding: 0,
      margin: 0,
      minWidth: 280,
      autoCenter: true,
      scrollOutside:true,
      scrolling:'no',
      fitToView:false,
      wrapCSS: 'fancyform-wrap',
      closeBtn:false,
  };
  $('.page-header__call-back, .order__call, faq__mail-back').fancybox(fancyFormSettings);

  // анимация калькулятора
  $('#credit-calc__cost').on("input",function(){
   var cost=$(this).val();
   $('.credit-calc__results-sum').text(cost.toString().replace(/./g, function(c, i, a) {return i && c !== "." && !((a.length - i) % 3) ? ' ' + c : c;})+' руб.');
   if(cost>=2000000){
    $('.credit-calc__results--light').addClass('credit-calc__results--bold').removeClass('credit-calc__results--normal');
   }else if(cost>=1000000){
    $('.credit-calc__results--light').removeClass('credit-calc__results--bold').addClass('credit-calc__results--normal');
   }else{
    $('.credit-calc__results--light').removeClass('credit-calc__results--bold').removeClass('credit-calc__results--normal');
   }
  });

// открытие вопросов
$('.faq__questions-answers').click(function(){
  $('.faq__questions').slideToggle();
  return false;
  });

// анимация до пункта меню
$('.page-header__nav a, .order__questionnaire, .page-footer__menu a').click(function(){
    $('html:not(:animated),body:not(:animated)').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
    return false;
});

// отправка формы
$('form').submit(function(event){
    $.ajax({
        type: "POST",
        url: "/post.php",
        data: $(this).serialize(),
        success: function(msg){

        }
    });
});

});
