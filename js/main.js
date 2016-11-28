GetNoun = function(number, one, two, five) {
    number = Math.abs(number);
    number %= 100;
    if (number >= 5 && number <= 20) {
        return five;
    }
    number %= 10;
    if (number == 1) {
        return one;
    }
    if (number >= 2 && number <= 4) {
        return two;
    }
    return five;
} 

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
	if($(this).parent().find('input[required]').filter(function() { return $(this).val() == "";}).length>0){
		$(this).parents('form').find('.questionnaire__form-btn-submit').click();
	}else{
	  var i=$(this).parent().removeClass("active").next("[data-id]").addClass("active").attr("data-id");
      $('.questionnaire__menu a').removeClass('active');
      $(".questionnaire__menu a[data-id='"+i+"']").addClass('active');
	}
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
  $('.page-header__call-back, .order__call, .faq__mail-back').fancybox(fancyFormSettings);

  // анимация калькулятора
  $('#credit-calc__cost').on("input",function(){
   var cost=parseInt($(this).val());   
   if(cost>=8000000){
    $('.credit-calc__results--light').addClass('credit-calc__results--bold').removeClass('credit-calc__results--normal');
   }else if(cost>=1000000){
    $('.credit-calc__results--light').removeClass('credit-calc__results--bold').addClass('credit-calc__results--normal');
   }else{
    $('.credit-calc__results--light').removeClass('credit-calc__results--bold').removeClass('credit-calc__results--normal');
   }
   $('.credit-calc__cost-max').text(cost.toString().replace(/./g, function(c, i, a) {return i && c !== "." && !((a.length - i) % 3) ? ' ' + c : c;}));
   updateCredit();
  }).trigger('input');
  $('#credit-calc__day').on("input",function(){
  	  var days=parseInt($('#credit-calc__day').val());  	  
  	  $('.credit-calc__day-max').text(days+GetNoun(days,' день',' дня',' дней'));  	  
  	  updateCredit();
  }).trigger('input');
  updateCredit();
  function updateCredit(){
  	  var cost=parseInt($('#credit-calc__cost').val());
  	  var days=parseInt($('#credit-calc__day').val());
  	  var credit=Math.ceil(cost*((days*2/30)/100+1));
  	  var permonth=Math.ceil(credit/Math.ceil(days/30));
  	  
	  $('.credit-calc__results-sum').text(cost.toString().replace(/./g, function(c, i, a) {return i && c !== "." && !((a.length - i) % 3) ? ' ' + c : c;})+' руб.');
	  $('.credit-calc__results-permonth').text(permonth.toString().replace(/./g, function(c, i, a) {return i && c !== "." && !((a.length - i) % 3) ? ' ' + c : c;})+' руб.');
  }

// открытие вопросов
$('.faq__questions-answers').click(function(){
  $('.faq__questions').slideToggle();
  return false;
  });

// анимация до пункта меню
$('.page-header__nav a, .order__questionnaire, .page-footer__menu a').click(function(){
	var hh=120;
	if($(window).width()<1150){
		hh=71;
	}
    $('html:not(:animated),body:not(:animated)').animate({scrollTop: $($(this).attr('href')).offset().top-hh}, 500);
    return false;
});

// отправка формы
$('form').submit(function(event){
	var form = this;
    $.ajax({
        type: "POST",
        url: "/post.php",
        data: $(this).serialize(),
        success: function(msg){
        	form.reset();
        	if($(form).hasClass('questionnaire__form')){
				$('.questionnaire__form-btn-prev',form).fist().click();
        	}
			$.fancybox({href:'#thanks'},fancyFormSettings);
        }
    });
    return false;
});

});
