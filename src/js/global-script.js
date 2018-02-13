// Если на проекте jQuery
$( document ).ready(function() {

  // MAIN слайдер
  $(".main-slider").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    center: true,
    dots: false,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>']
  });

  var owl = $('.gallery-carousel');
  owl.owlCarousel({
      loop: true,
      items: 1,
      thumbs: true,
      thumbImage: true,
      thumbContainerClass: 'owl-thumbs',
      thumbItemClass: 'owl-thumb-item'
  });

  // Контентный слайдер изображений
  $(".image-carousel").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    center: true,
    dots: false,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>']
  });

  // Контентный слайдер изображений с описанием
  $(".caption-carousel").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    center: true,
    dots: false,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>']
  });
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
