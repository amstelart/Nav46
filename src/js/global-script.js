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

  $(".page-slider").owlCarousel({
    items: 1,
    nav: false,
    autoHeight: true,
    loop: true,
    center: true,
    dots: true,
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

  // Select all links with hashes
  $('a.anchor[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

    var menu_selector = ".sidebar-nav";

    function onScroll() {
      var scroll_top = $(document).scrollTop();
      $(menu_selector + " a").each(function() {
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top + 5 && target.position().top + target.outerHeight() > scroll_top) {
          $(menu_selector + " a.active").removeClass("active");
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      });
    }


    $(document).on("scroll", onScroll);

    $("a[href^=#]").click(function(e) {
        var hash = $(this).attr("href");
        var target = $(hash);

        if (target.length) {
            e.preventDefault();

            $(document).off("scroll");
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");

            $("html, body").animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                window.location.hash = hash;
                $(document).on("scroll", onScroll);
            });
        }

    });

});

// Изоляция без jQuery
if(window.matchMedia('(min-width: 991px)').matches)
{
  // do functionality on screens smaller than 768px
  (function(){  // анонимная функция (function(){ })(), чтобы переменные "a" и "b" не стали глобальными
  var a = document.querySelector('.page-cols__l-col'), b = null;  // селектор блока, который нужно закрепить
  window.addEventListener('scroll', Ascroll, false);
  document.body.addEventListener('scroll', Ascroll, false);  // если у html и body высота равна 100%
  function Ascroll() {
    if (b == null) {  // добавить потомка-обёртку, чтобы убрать зависимость с соседями
      var Sa = getComputedStyle(a, ''), s = '';
      for (var i = 0; i < Sa.length; i++) {  // перечислить стили CSS, которые нужно скопировать с родителя
        if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
          s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
        }
      }
      b = document.createElement('div');  // создать потомка
      b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
      a.insertBefore(b, a.firstChild);  // поместить потомка в цепляющийся блок первым
      var l = a.childNodes.length;
      for (var i = 1; i < l; i++) {  // переместить во вновь созданного потомка всех остальных потомков (итого: создан потомок-обёртка, внутри которого по прежнему работают скрипты)
        b.appendChild(a.childNodes[1]);
      }
      a.style.height = b.getBoundingClientRect().height + 'px';  // если под скользящим элементом есть другие блоки, можно своё значение
      a.style.padding = '0';
      a.style.border = '0';  // если элементу присвоен padding или border
    }
    if (a.getBoundingClientRect().top <= 0) { // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
      b.className = 'sidebar-nav--sticky';
    } else {
      b.className = '';
    }
    window.addEventListener('resize', function() {
      a.children[0].style.width = getComputedStyle(a, '').width
    }, false);  // если изменить размер окна браузера, измениться ширина элемента
  }
  })();
}

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
