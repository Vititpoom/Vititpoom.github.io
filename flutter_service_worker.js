'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "910e81dc75c11a9df8dd2f24de8f90bf",
"assets/AssetManifest.bin.json": "3288032fc86a4386ab96a507ec65b47d",
"assets/AssetManifest.json": "807e9015abb423259e60fc69d6f8443e",
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
"assets/NOTICES": "a520eb84b8447f88d4a3a25786b3da8b",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/thaiqr/assets/header.png": "2c15316e0c790e3b72deacafb140414e",
"assets/packages/thaiqr/assets/logo.png": "8d5b7c4c3707fa7bb35dd7881c3b9e93",
"assets/packages/thaiqr/assets/template.png": "455eba8904f20f399c7f880a45cd0d69",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "538e00fff9daf7322729cb0714068981",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-chrome-192x192.png": "092468ae79a1f176569f09872d533e09",
"icons/android-chrome-512x512.png": "697f70407cf1b3d8139758cec5ded7b7",
"icons/apple-touch-icon.png": "aad69339f8038efaf3771c4639ddd3fc",
"index.html": "424e5d9b84a223705b1ac5b3ba5502a0",
"/": "424e5d9b84a223705b1ac5b3ba5502a0",
"main.dart.js": "fc726a375ef81070ac67436a903a63c1",
"manifest.json": "8d3be58572398181bdc2cb7094e8dd4b",
"version.json": "92ab5b480774132d501453dc99721a55"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
