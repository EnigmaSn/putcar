$(function(){

$(".page-header__menu--close, .page-header__menu-close").click(function(){
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

  // var i=$(this).parent().removeClass("active").next().addClass("active").index();
  //   $('.questionnaire__menu a').removeClass('active').eq(i).addClass('active');


  // $(document).ready(function(){
  //     $(".callback-modal").fancybox();
  //     $("#callback").submit(function(){ return false; });
  //     $("#f_send").on("click", function(){
  //
  //         // тут дальнейшие действия по обработке формы
  //         // закрываем окно, как правило делать это нужно после обработки данных
  //         $("#f_contact").fadeOut("fast", function(){
  //             $(this).before("<p><strong>Ваше сообщение отправлено!</strong></p>");
  //             setTimeout("$.fancybox.close()", 1000);
  //         });
  //     });
  // });

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
  $('.page-header__call-back, .order__call').fancybox(fancyFormSettings);

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


$('.faq__questions-answers').click(function(){
  $('.faq__questions').slideToggle();
  return false;
  });

$('.page-header__nav a, .order__questionnaire').click(function(){
    $('html:not(:animated),body:not(:animated)').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
    return false;
});

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
