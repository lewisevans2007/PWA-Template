var CACHE_NAME = 'pwgen-cache-v1';
var urlsToCache = [
    './?v3',
    'sw.js?v3',
    'manifest.json?v3',
    'icons/apple-splash-2048-2732.jpg?v3',
    'icons/apple-splash-2732-2048.jpg?v3',
    'icons/apple-splash-1668-2388.jpg?v3',
    'icons/apple-splash-2388-1668.jpg?v3',
    'icons/apple-splash-1536-2048.jpg?v3',
    'icons/apple-splash-2048-1536.jpg?v3',
    'icons/apple-splash-1668-2224.jpg?v3',
    'icons/apple-splash-2224-1668.jpg?v3',
    'icons/apple-splash-1620-2160.jpg?v3',
    'icons/apple-splash-2160-1620.jpg?v3',
    'icons/apple-splash-1284-2778.jpg?v3',
    'icons/apple-splash-2778-1284.jpg?v3',
    'icons/apple-splash-1170-2532.jpg?v3',
    'icons/apple-splash-2532-1170.jpg?v3',
    'icons/apple-splash-1125-2436.jpg?v3',
    'icons/apple-splash-2436-1125.jpg?v3',
    'icons/apple-splash-1242-2688.jpg?v3',
    'icons/apple-splash-2688-1242.jpg?v3',
    'icons/apple-splash-828-1792.jpg?v3',
    'icons/apple-splash-1792-828.jpg?v3',
    'icons/apple-splash-1242-2208.jpg?v3',
    'icons/apple-splash-2208-1242.jpg?v3',
    'icons/apple-splash-750-1334.jpg?v3',
    'icons/apple-splash-1334-750.jpg?v3',
    'icons/apple-splash-640-1136.jpg?v3',
    'icons/apple-splash-1136-640.jpg?v3',
    'https://fonts.googleapis.com/css?family=Special+Elite'
];
console.log('loading sw');

self.addEventListener('install', function(event) {
    // Perform install steps
    console.log('installing sw');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                var x = cache.addAll(urlsToCache);
                console.log('cache added');
                return x;
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
