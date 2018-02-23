"use strict";

const nav = document.querySelector('.navbar_custom');
let topOfNav = nav.offsetTop;

function fixNav() {
  if(window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);

// Navbar smooth scrolling
$(".navbar_custom a").click(function (e) {
  e.preventDefault();
  var target = this.hash, $target = $(target);
  $('html, body').stop().animate({
    'scrollTop': $target.offset().top - nav.offsetHeight
    }, 900, 'swing');
})

// Navbar scrollspy
var section = document.querySelectorAll(".section");
var sections = {};
var i = 0;

Array.prototype.forEach.call(section, function(e){
  sections[e.id] = e.offsetTop - nav.offsetHeight;
});

window.onscroll = function() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  for (i in sections) {
    if (sections[i] <= scrollPosition) {
      document.querySelector('.active').setAttribute('class', ' ');
      document.querySelector(`a[href*=${i}]`).setAttribute('class', 'active');
    }
  }
}

// Hover icon color

var devicons = document.querySelectorAll("[class^=devicon]");
$(devicons).hover(
  function(){
    $(this).addClass("colored");
  },
  function(){
    $(this).removeClass("colored");
  }
);