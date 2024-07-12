'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0e4856066101012c471ea832fc87940b",
"assets/AssetManifest.bin.json": "f4c231aa712a9c45e4079efa19bfa8e4",
"assets/AssetManifest.json": "ae9e503f932e2fe29b800ede2948f3e7",
"assets/assets/font/ibm_plex/IBMPlexSansThai-Bold.ttf": "349b7a81784d32544b940eef1b732d61",
"assets/assets/font/ibm_plex/IBMPlexSansThai-ExtraLight.ttf": "94176889157e8cbf070a04f0ecebb8e2",
"assets/assets/font/ibm_plex/IBMPlexSansThai-Light.ttf": "ff4e85b8a5479112c66053957ec7ee73",
"assets/assets/font/ibm_plex/IBMPlexSansThai-Medium.ttf": "1a97ab43394a81f589e1998d872a5afb",
"assets/assets/font/ibm_plex/IBMPlexSansThai-Regular.ttf": "fc735dbc25f53b2e86fa1bc9b48dcd07",
"assets/assets/font/ibm_plex/IBMPlexSansThai-SemiBold.ttf": "0957429280bd077b91df947b7da608f7",
"assets/assets/font/ibm_plex/IBMPlexSansThai-Thin.ttf": "d43db428ddfb9d112cb7bcbdd818c1cb",
"assets/assets/images/full_logo.png": "532c63e42bfcf62260d048d397f28a52",
"assets/assets/images/login_pic.png": "3211d4db3bdb701452d6f2f7aa3602ab",
"assets/assets/images/pendulum.jpg": "5532e18b3423b782fc82a175d5f9bbf5",
"assets/assets/images/ruby.jpg": "4c3d17235628fe1c6155a57f187c004d",
"assets/assets/images/show1.png": "0de1451228833dbb218ce728f98048cf",
"assets/assets/images/show2.png": "3d5c0b08c7106efc4a314e170c8b9085",
"assets/assets/images/space_bg_mobile.png": "87a57a0ae31bb09184c0fd176fc9ed85",
"assets/assets/images/space_bg_pc.png": "569f99d47a5a5d6786591b7bf8985384",
"assets/assets/images/star_pur.png": "f010a93d4dc3ef4b3abe9c1903c2a9a0",
"assets/assets/images/star_w.png": "f8d1898a9d11f0518179b602e31a591d",
"assets/assets/images/tarot_back.png": "d05ab56bad4b31f1bd25a9073bd25cce",
"assets/FontManifest.json": "8eeb53a1bbb18f4014432c5e111fe340",
"assets/fonts/MaterialIcons-Regular.otf": "5c0dc0fa240e0af03080296d3cbb4a16",
"assets/NOTICES": "60436b30f229154a853c3297baf5add6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/thaiqr/assets/header.png": "2c15316e0c790e3b72deacafb140414e",
"assets/packages/thaiqr/assets/logo.png": "8d5b7c4c3707fa7bb35dd7881c3b9e93",
"assets/packages/thaiqr/assets/template.png": "455eba8904f20f399c7f880a45cd0d69",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "538e00fff9daf7322729cb0714068981",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "31f9ad29bd6c97d8898a2189003cf12f",
"icons/android-chrome-192x192.png": "092468ae79a1f176569f09872d533e09",
"icons/android-chrome-512x512.png": "697f70407cf1b3d8139758cec5ded7b7",
"icons/apple-touch-icon.png": "aad69339f8038efaf3771c4639ddd3fc",
"index.html": "c35ba71680b804686a9cafceff5bf7ca",
"/": "c35ba71680b804686a9cafceff5bf7ca",
"main.dart.js": "7a9e3ffcb9cd7333713ce3a0a8041927",
"manifest.json": "8d3be58572398181bdc2cb7094e8dd4b",
"version.json": "92ab5b480774132d501453dc99721a55"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
