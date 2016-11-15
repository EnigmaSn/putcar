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
