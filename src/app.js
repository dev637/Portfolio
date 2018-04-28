"use strict";

const nav = document.querySelector('#Navbar');
const title = document.querySelector('.title').getBoundingClientRect().y*.8;

let topOfNav = nav.offsetTop;

function fixNav() {
  if(window.scrollY >= title) {
    nav.classList.add('dark-nav');
  } else {
    nav.classList.remove('dark-nav');
  }
}

window.addEventListener('scroll', fixNav);

// Navbar smooth scrolling
var $root = $('html, body');
var mobile_check = window.innerWidth < 660;

window.onresize = function(){
  mobile_check = window.innerWidth < 660;
  return mobile_check;
};

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800, 'swing');

    if (mobile_check) {
      hamburger.classList.toggle("is-active");
      nav_menu.classList.toggle("menu-toggle");
    }
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

// Hamburger icon handler
var hamburger = document.querySelector(".hamburger");
var nav_menu = document.querySelector("ul");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  nav_menu.classList.toggle("menu-toggle");
});
