
if (window.addEventListener && window.requestAnimationFrame && document.getElementsByClassName) window.addEventListener('load', function() {

  // start
  var pItem = document.getElementsByClassName('progressive replace'), timer;
  
  window.addEventListener('scroll', scroller, false);
  window.addEventListener('resize', scroller, false);
  inView();

  // throttled scroll/resize
  function scroller() {
    timer = timer || (function() {
      timer = null;
      requestAnimationFrame(inView);
    })();
  }

  // image in view?
  function inView() {
    var wT = window.pageYOffset, wB = wT + window.innerHeight, cRect, pT, pB, p = 0;
    while (p < pItem.length) {

      cRect = pItem[p].getBoundingClientRect();
      pT = wT + cRect.top;
      pB = pT + cRect.height;

      if (wT < pB && wB > pT) {
        loadFullImage(pItem[p]);
      }
      else p++;
    }
  }

  // replace with full image
  function loadFullImage(item) {
    item.classList.remove('replace');

    if (!item || !item.href) return;

    // load image
    var img = new Image();
    if (item.dataset) {
      img.srcset = item.dataset.srcset || '';
      img.sizes = item.dataset.sizes || '';
    }
    
    img.src = item.href;
    img.className = 'reveal';
    if (img.complete) addImg();
    else img.onload = addImg;

    // replace image
    function addImg() {
      item.classList.add('drop-shadow');

      // disable click
      item.addEventListener('click', function(e) { e.preventDefault(); }, false);

      // add full image
      item.appendChild(img).addEventListener('animationend', function(e) {

        // remove preview image
        var pImg = item.querySelector && item.querySelector('img.preview');
        if (pImg) {
          e.target.alt = pImg.alt || '';
          item.removeChild(pImg);
          e.target.classList.remove('reveal');
        }
      });
    }
  }
}, false);
