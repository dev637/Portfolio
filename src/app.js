"use strict";

const nav = document.querySelector('#Navbar');
const title = document.querySelector('.title').getBoundingClientRect().y*.33;

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

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
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