"use strict";

const nav = document.querySelector('#Navbar');
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

// window.addEventListener('scroll', fixNav);

// Navbar smooth scrolling
var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - nav.offsetHeight + 1
    }, 800, 'swing');
    return false;
});

// Navbar scrollspy
var section = document.querySelectorAll(".page-section");
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

var devicons = document.querySelectorAll("path");
$(devicons).hover(
  function(){
    $(this).removeClass("svg-mask");
  },
  function(){
    $(this).addClass("svg-mask");
  },
);