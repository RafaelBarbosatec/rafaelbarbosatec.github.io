'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "00e0b69b49487ce4f9ff0c5fac8fda49",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.json": "e43e6b10d4f549348bed59c0db79dd22",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/FontManifest.json": "9e95336a7b884ffe32279be600570a11",
"assets/assets/images/blue_button2.png": "b2ac54312d3b566d324f461aa50b8f5b",
"assets/assets/images/joystick_atack.png": "0f5325cb2ddcba703e4c9d7d2dd266df",
"assets/assets/images/health_ui.png": "219e39516312f2f6bc264357497b99cb",
"assets/assets/images/enemy/atack_effect_right.png": "15831f9ccee22a845e854ccb3d18f6e5",
"assets/assets/images/enemy/goblin_run_right.png": "565c2f9a0bb01a9c56975664f8cd375c",
"assets/assets/images/enemy/goblin_idle.png": "8c97e935786b994c3cff4008212381b9",
"assets/assets/images/enemy/atack_effect_left.png": "9c99ad913fcc75ce253f8db53faa846f",
"assets/assets/images/enemy/goblin_run_left.png": "05863189b562610b17a062114c7849a9",
"assets/assets/images/enemy/atack_effect_top.png": "df3eeb246450bf06de6dfc325d0bdbd0",
"assets/assets/images/enemy/goblin_idle_left.png": "a7563675f85ed259b2d0aae50ded196b",
"assets/assets/images/enemy/atack_effect_bottom.png": "aaeb1a8e791a0f15ba911e1d2540ab32",
"assets/assets/images/joystick_background.png": "8c9aa78348b48e03f06bb97f74b819c9",
"assets/assets/images/itens/barrel.png": "dc4d5a9e456b6f1c6ec6fdcc66af7727",
"assets/assets/images/itens/flag_green.png": "1a5a7df4b10a84b0a722b3b6600198dd",
"assets/assets/images/itens/chest_spritesheet.png": "bcc8785d27d816e23eca114dd4e708ed",
"assets/assets/images/itens/flag_red.png": "6aca7b9e01f86f1b1a45e262e65821b8",
"assets/assets/images/itens/prisoner.png": "45dcdd9a419bcd1f39cfd78024865578",
"assets/assets/images/itens/table.png": "5e22fb237c60943f46ba18d5e176c10c",
"assets/assets/images/itens/potion_life.png": "825b71a3532854e849d512683dba06b0",
"assets/assets/images/itens/torch_spritesheet.png": "858f57abd642f0303de50d719532f198",
"assets/assets/images/itens/bookshelf.png": "ce2fc17cb8251da9966a3e91bb0b2272",
"assets/assets/images/joystick_atack_range.png": "8994f23fc67442c8361432f0cc9a2fa1",
"assets/assets/images/player/knight_run.png": "9cac5c91f943ba81915573bd93060d4d",
"assets/assets/images/player/knight_idle_left.png": "e4ddca181210b0cf9555331aaf2af512",
"assets/assets/images/player/atack_effect_right.png": "39b3d8583205c90284cd60f0e018f29d",
"assets/assets/images/player/knight_idle.png": "191737282656dd3c8851a2dd3dfc1c0c",
"assets/assets/images/player/fireball_top.png": "e9a76f3ea950d6bc22f8f4cd3a22d7e3",
"assets/assets/images/player/atack_effect_left.png": "5b5475da758d76f79c34429f70f7f6af",
"assets/assets/images/player/fireball_left.png": "cb3370c9039ec112af7bee6edf3e342d",
"assets/assets/images/player/fireball_bottom.png": "05522f950d8d60e15615ee9705ff2ef0",
"assets/assets/images/player/atack_effect_top.png": "7b01845d595c3803a07567ee87710658",
"assets/assets/images/player/fireball_right.png": "aaa2c18fe241c16e95be131619693b80",
"assets/assets/images/player/atack_effect_bottom.png": "e2406062be291971a034123fdd1757f9",
"assets/assets/images/player/emote_exclamacao.png": "8b1897ae92f3a077e0aadaef2626d65a",
"assets/assets/images/player/explosion_fire.png": "81a3691935a18a30572870b759ad1683",
"assets/assets/images/player/crypt.png": "8e55febc1e2563a9d7ba4b48625ba88d",
"assets/assets/images/player/knight_run_left.png": "ce9f3ad71135b459f6b66c892b5b9e30",
"assets/assets/images/tile/floor_6.png": "d464c18724611d109498d4c4e57316c4",
"assets/assets/images/tile/floor_4.png": "2685b25c2471a762ff6f900b496c9e29",
"assets/assets/images/tile/wall_left.png": "b4ee6ba9d296a18fa532119ef8cb6157",
"assets/assets/images/tile/wall_bottom_right.png": "dd6772364441f0f2ea76c532fb4031dc",
"assets/assets/images/tile/wall_top_inner_left.png": "484e3c33e8559ff61f560e5f32791c5a",
"assets/assets/images/tile/wall_turn_left_top.png": "c9d8c9116dd5570fb87b6e1328cb0ee3",
"assets/assets/images/tile/wall_left_and_top.png": "5e7c81163a737dad7ed4a626d76a0b73",
"assets/assets/images/tile/wall_right.png": "aca869be30facbfd420754e870a78f58",
"assets/assets/images/tile/floor_2.png": "10968e74b671f14aab19e13a76da334d",
"assets/assets/images/tile/wall_right_and_bottom.png": "533d830adf7d86b810481118ed7aa2f9",
"assets/assets/images/tile/floor_1.png": "00c3bd0c3d76a954f3f0a648cb13c3b3",
"assets/assets/images/tile/floor_9.png": "2b4e26d91d8f632bf4eaa5400cb7d748",
"assets/assets/images/tile/wall_left_and_bottom.png": "6583c02205abb0c84aef143379eb9bed",
"assets/assets/images/tile/floor_10.png": "baf86a2272c83bd904bc25b4af03aa29",
"assets/assets/images/tile/wall_bottom.png": "31d2b04aca916c16bd31574d7134a853",
"assets/assets/images/tile/floor_8.png": "28692ad0c494efc5bc0f9669579006fe",
"assets/assets/images/tile/wall_bottom_left.png": "7e83621a422ddd0e7b4425abe8ac3ec8",
"assets/assets/images/tile/floor_5.png": "6d63b1d77dcc35d4f7beb91125851e29",
"assets/assets/images/tile/floor_3.png": "3fa52d5af2a38dede0142f5c3dcaab55",
"assets/assets/images/tile/wall.png": "7a6ce85ad0ebd6694dd57e9fdca7535b",
"assets/assets/images/tile/floor_7.png": "7ba4503a62a1b242f05b5244e7b0dae4",
"assets/assets/images/tile/wall_top_inner_right.png": "b26bd1cad50d0201d41ab18200976cfc",
"assets/assets/images/tile/wall_top.png": "845ed35ef1482e21857c8bd70061c810",
"assets/assets/images/blue_button1.png": "c5ac9ffc08055cdbb731e6bfb0d2593a",
"assets/assets/images/joystick_knob.png": "bb0811554c35e7d74df6d80fb5ff5cd5",
"assets/assets/images/smoke_explosin.png": "555a8a42b72e662af232dc2092103c2a",
"assets/LICENSE": "8fa4fc871598fb9bc8d4c4aed499ff00",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "926cd8008bef60a4e735ba8d18fbac9c",
"/": "926cd8008bef60a4e735ba8d18fbac9c",
"main.dart.js": "85b9a0daf3ce235f08f763d50ecbd7e1"
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
