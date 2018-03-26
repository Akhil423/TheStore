
var CACHE_NAME = 'DownyShoes';
var urlsToCache = [
  '/',
  'css/bootstrap.css',
  'css/about.css',
  'css/checkout.css',
  'css/contact.css',
  'css/creditly.css',
  'css/easy-responsive-tabs.css',
  'css/flexslider.css',
  'css/shop.css',
  'css/style.css',
  'css/style7.css',
  'css/jquery-ui1.css',
  'css/font-awesome.css',
  'fonts/FontAwesome.otf',
  'fonts/fontawesome-webfont.eot',
  'fonts/fontawesome-webfont.svg',
  'fonts/fontawesome-webfont.ttf',
  'fonts/fontawesome-webfont.woff',
  'fonts/fontawesome-webfont.woff2',
  'fonts/glyphicons-halflings-regular.eot',
  'fonts/glyphicons-halflings-regular.svg',
  'fonts/glyphicons-halflings-regular.ttf',
  'fonts/glyphicons-halflings-regular.woff',
   'fonts/glyphicons-halflings-regular.woff2',
  'images',
  'js',
  '404.html'
  'index.html',
  'about.html',
  'shop.html',
  'checkout.html',
  'contact.html',
  'payment.html',
  'single.html',
  'index.html',
  
  
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
