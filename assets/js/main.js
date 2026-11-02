(function () {
  // Nav border once the page scrolls
  var nav = document.querySelector('.site-nav');
  function onScroll() { nav.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Highlight the section currently in view
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && map[e.target.id]) {
          links.forEach(function (a) { a.classList.remove('is-active'); });
          map[e.target.id].classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }

  // If a PDF has not been uploaded yet, show a quiet "coming soon" label instead of a broken link
  if (location.protocol.indexOf('http') === 0 && window.fetch) {
    document.querySelectorAll('a[data-pdf]').forEach(function (a) {
      fetch(a.getAttribute('href'), { method: 'HEAD' }).then(function (r) {
        if (!r.ok) {
          var s = document.createElement('span');
          s.className = 'chip is-pending';
          s.textContent = 'PDF available on request';
          a.replaceWith(s);
        }
      }).catch(function () {});
    });
  }

  // Enlarge photos and maps
  var box = document.getElementById('lightbox');
  if (box && box.showModal) {
    var bigImg = box.querySelector('img');
    var cap = box.querySelector('.lightbox-caption');
    document.querySelectorAll('.shot-open').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var fig = btn.closest('figure');
        var small = btn.querySelector('img');
        var title = fig.querySelector('figcaption .map-title') || fig.querySelector('figcaption');
        bigImg.src = btn.getAttribute('data-full');
        bigImg.alt = small.alt;
        cap.textContent = title ? title.textContent.trim() : '';
        box.showModal();
      });
    });
    box.querySelector('.lightbox-close').addEventListener('click', function () { box.close(); });
    box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
    box.addEventListener('close', function () { bigImg.src = ''; });
  } else if (box) {
    // Older browsers: open the full image directly
    document.querySelectorAll('.shot-open').forEach(function (btn) {
      btn.addEventListener('click', function () { window.open(btn.getAttribute('data-full'), '_blank'); });
    });
  }
})();
