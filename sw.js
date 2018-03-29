
/* code to make web app work offline*/
var cacheName = 'downy';
var filesToCache = [
'/',
'/index.html?homescreen=1',
  '/css/bootstrap.css',
  '/css/about.css',
  '/css/checkout.css',
  '/css/contact.css',
  '/css/creditly.css',
  '/css/easy-responsive-tabs.css',
  '/css/flexslider.css',
  '/css/shop.css',
  '/css/style.css',
  '/css/style7.css',
  '/css/jquery-ui1.css',
  '/css/font-awesome.css',
  '/images/3.jpeg',
  '/images/Thumbs.db',
        '/images/ab.jpg',
        '/images/b1.jpg',
        '/images/b2.jpg',
        '/images/b3.jpg',
        '/images/b4.jpg',
        '/images/banner1.jpg',
        '/images/banner2.jpg',
        '/images/banner3.jpg',
        '/images/banner4.jpg',
        '/images/close.png',
        '/images/close_1.JPG',
        '/images/d1.jpg',
        '/images/d2.jpg',
        '/images/d3.jpg',
        '/images/g1.jpg',
        '/images/g2.jpg',
        '/images/g3.jpg',
        '/images/g4.jpg',
        '/images/g5.jpg',
        '/images/g6.jpg',
        '/images/left.png',
        '/images/left_black.png',
        '/images/move-top.png',
        '/images/overlay.png',
        '/images/right.png',
        '/images/right_black.png',
        '/images/s1.jpg',
        '/images/s2.jpg',
        '/images/s3.jpg',
        '/images/s4.jpg',
        '/images/s5.jpg',
        '/images/s6.jpg',
        '/images/s7.jpg',
        '/images/s8.jpg ',
        '/images/s9.jpg',
        '/images/search.png',
        '/images/t1.jpg',
        '/images/t2.jpg',
  '/images/t3.jpg ',
  '/images/t4.jpg',
  '/js/bootstrap-3.1.1.min.js',
  '/js/classie.js',
  '/js/creditly.js',
  '/js/demo1.js',
  '/js/easing.js',
  '/js/easy-responsive-tabs.js',
  '/js/imagezoom.js',
  '/js/jquery-2.1.4.min.js',
  '/js/jquery-ui.js',
  '/js/jquery.flexslider.js',
  '/js/minicart.js',
  '/js/modernizr-2.6.2.min.js',
  '/js/move-top.js',
  '/js/responsiveslides.min.js',
  '/js/search.js',
  '/about.html',
  '/shop.html',
  '/contact.html',
  '/single.html',
  '/checkout.html',
  '/404.html',
  'index.html'

];

//updating service worker
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

//useful for removing data that is no longer needed to avoid filling up too much disk space 
//used to do stuff that would have broken the previous version while it was still running, 
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

//for handling both cache and network requests
self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
