'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "c889aac3fdcce9e7271024c37f6c6dc2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.json": "4b70b2211e961e4da5baa4fdf04fb3e6",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/FontManifest.json": "9e95336a7b884ffe32279be600570a11",
"assets/assets/images/joystick_atack.png": "a525ebd6bd0a9014c513884b7811f019",
"assets/assets/images/joystick_atack_selected.png": "5196050c562862a670e7757392710c4d",
"assets/assets/images/emotes/emotes2.png": "b1af2a29117840902b21f9797d6d02d8",
"assets/assets/images/emotes/emotes5.png": "cb0fa154fa298051241e5e4aaf572884",
"assets/assets/images/emotes/emotes10.png": "634cd14f7f1c3acd26d45c3440e028df",
"assets/assets/images/emotes/emotes3.png": "0c91155772ecdf84e4e0a21b7108f50c",
"assets/assets/images/emotes/emotes9.png": "aa334e25878d0fc92bfc2e3dcdfa497b",
"assets/assets/images/emotes/emotes8.png": "941870ad989dd4f38b0588ba76ced5de",
"assets/assets/images/emotes/emotes1.png": "ceb46f2ad4396fc3f39f0547d3bf07c5",
"assets/assets/images/emotes/emotes6.png": "00bc02a01c38f330b46e51ab09cd55f2",
"assets/assets/images/emotes/emotes4.png": "54cbb4d1e740c8718bfa67edc73e7aca",
"assets/assets/images/emotes/emotes7.png": "0a5a071e8ea4e11bffa2ab0e089dd568",
"assets/assets/images/emote.png": "b2b88a8c9b5508e34c89c44efc2fc51d",
"assets/assets/images/joystick_background.png": "2eef7b32e484d81f07eeb405b39c83a4",
"assets/assets/images/heroes/hero8.png": "362d63a6c59c26d42a5b3109bb67e7d3",
"assets/assets/images/heroes/hero6.png": "58124e494ae57f9fde68e37c3e5b19c1",
"assets/assets/images/heroes/hero9.png": "5a38ce62ec643aa2982972a3320edc0a",
"assets/assets/images/heroes/hero11.png": "635b645fc62b7cca76ba99bca4a78279",
"assets/assets/images/heroes/hero7.png": "4fbdf2789aae98473b0248d9f9af3298",
"assets/assets/images/heroes/hero10.png": "bf949848b0a13de3a8bffe24611db304",
"assets/assets/images/heroes/hero3.png": "532057fbb31fe657b560e0c4610345e4",
"assets/assets/images/heroes/hero1.png": "08730d084495a7ccc2c7c283c3822d25",
"assets/assets/images/heroes/hero4.png": "2986340fbe9210b5edc3c28b4109cc07",
"assets/assets/images/heroes/hero12.png": "713e1261e45f5f1b15717b3f00c31fb7",
"assets/assets/images/heroes/hero5.png": "b22613563d10dfda5a835d6fed619b85",
"assets/assets/images/heroes/hero2.png": "d743fe1720c1562cfefe972d688d85ff",
"assets/assets/images/heroes/hero13.png": "557ec80f169401d429d3e065efb5bd93",
"assets/assets/images/tile/spritesheet.png": "de7eda3f898211a7c2b49309a9799886",
"assets/assets/images/joystick_knob.png": "c088b1ce385c20537c22dc2d4d39245a",
"assets/LICENSE": "8fa4fc871598fb9bc8d4c4aed499ff00",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "57287c4e955d6b7894b1c52c0cd8af31",
"/": "57287c4e955d6b7894b1c52c0cd8af31",
"main.dart.js": "991dc9b5a9e238b70575aadde2a31b88"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
