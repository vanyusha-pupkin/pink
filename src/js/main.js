var pageHeader = document.querySelector('.page-header');
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
pageHeader.classList.remove('page-header--nojs');

//открываем/закрываем выпадающее меню на мобильной версии
//при нажатии на кнопку "гамбургера"
navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
  } else {
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
  }

  if (pageHeader.classList.contains('page-header--open-menu')) {
      pageHeader.classList.remove('page-header--open-menu');
  } else {
      pageHeader.classList.add('page-header--open-menu');
  }
})
