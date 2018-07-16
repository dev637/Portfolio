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

window.onload = fixNav()
window.addEventListener('scroll', fixNav);
window.addEventListener('resize', fixNav);


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

// Hamburger icon handler
var hamburger = document.querySelector(".hamburger");
var nav_menu = document.querySelector("ul");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  nav_menu.classList.toggle("menu-toggle");
});

// Inline skill svgs from img tags
$('img.svg').each((i, e) => {

  const $img = $(e);
  const imgID = $img.attr('id');

  const imgClass = $img.attr('class');

  const imgURL = $img.attr('src');

  $.get(imgURL, (data) => {
      // Get the SVG tag, ignore the rest
      let $svg = $(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', `${imgClass}replaced-svg`);
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, if the viewport is not set the SVG won't scale.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr(`viewBox 0 0  ${$svg.attr('height')} ${$svg.attr('width')}`);
      }

      // Replace image with new SVG
      $img.replaceWith($svg);
  }, 'xml');
});
