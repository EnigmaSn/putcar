// объявление переменной
// поиск по всему DOM-дереву, возврат первого значения
var menu_button = $(".page-header__menu--close");
var menu = $(".page-header__menu--open");
var header = $(".page-header__wrapper");

// отлавливает событие
menu_button.click(function(event) {
  if (menu.hasClass("page-header__menu--open-show")) {
      // вывод в консоль
      console.log("клик таки");
      // без точки, Карл, ибо этот метод работает только с классами
      // menu.classList.remove("page-header__menu--open-show");
  } else {
      menu.addClass("page-header__menu--open-show");
  }
  return false;
});

// фон шапки
menu_button.click(function(event) {
  header.addClass("page-header__wrapper-show-menu");
});


var menu_close = $(".page-header__menu-close");
    menu_close.click(function(event) {
        menu.removeClass("page-header__menu--open-show");
        return false;
    });


// menu.addEventListener("click", function(event) {
//   if (header.classList.contains("page-header__wrapper-show-menu")) {
//       header.classList.remove("page-header__wrapper-show-menu");
//   }
//   else {
//       header.classList.add("page-header__wrapper-show-menu");
//   }
// });


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
$('.page-header__call-back').fancybox(fancyFormSettings);
$('.callback-modal__order').fancybox(fancyFormSettings);
