'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d78bf39792d1a5b96c2b9c2e2e2a4c90",
"version.json": "d0a48268da7d6d22817913b9a373b4a9",
"index.html": "1c52a2d009e8a9bc2185751d920d006a",
"/": "1c52a2d009e8a9bc2185751d920d006a",
"main.dart.js": "e7676658beb5dac8f5f029f21e0702e0",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "19d9f27dcaf0733d1083e5ccf06adebe",
"assets/AssetManifest.json": "43c11b4ca00acca672d61de1e50a5c0b",
"assets/NOTICES": "2fd7859f4c55e833914ae0bd8a38ee1c",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/AssetManifest.bin.json": "53b2139c2f19b07de7221ee9f78ebd78",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_osm_plugin/assets/default_pin.png": "7679c39b09843c8bbea9add45fb6dd87",
"assets/packages/flutter_osm_plugin/assets/dynamic-styles.yaml": "0ee8b2f249be023fb6cb4e55d5961959",
"assets/packages/flutter_osm_web/src/asset/map.html": "13ee6f89d57e00b2e6692ada7d673918",
"assets/packages/flutter_osm_web/src/asset/osm_interop.js": "41641d2154632983f79b53602f1776da",
"assets/packages/flutter_osm_web/src/asset/map.js": "63c8de9df82417c5905e2a8d5fd14115",
"assets/packages/routing_client_dart/src/assets/de.json": "75f261f48361c6ad0f987d669dc279be",
"assets/packages/routing_client_dart/src/assets/en.json": "006f10a887beeb7207fc58db61426a4e",
"assets/packages/routing_client_dart/src/assets/es.json": "006019fa2630f52d73040764ad461fab",
"assets/packages/routing_client_dart/src/assets/ar.json": "45e29bd513d54467b03fe5c10c85cc14",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "351d51f3d5b14c4cbcbbcd10ed913ad2",
"assets/fonts/MaterialIcons-Regular.otf": "626e541c6a58e5d9bd23ea98e55ff301",
"assets/assets/images/ft-cujupe.png": "292b269115e683efa7fbe3034c43cd67",
"assets/assets/images/em3.png": "4b331ad349fad763b2f568b718e5e80e",
"assets/assets/images/em2.png": "b89876d2a9f25a567f87d0f0d5265b54",
"assets/assets/images/Ponta%2520da%2520Espera%25201.png": "a026af9251878cde6dbfb9b7d81dd1e2",
"assets/assets/images/em1.png": "5e72ef0a600648df4b814cb4c069c469",
"assets/assets/images/logo/_Logotipo512.png": "32113c462b81e0fb337e122e268ef2a9",
"assets/assets/images/logo/Logotipo512.png": "e40593672f08d91fe0301f76d38eea99",
"assets/assets/images/logo/featuregrafics.png": "7600a6b4f03fd12c60c40611a05b739f",
"assets/assets/images/logo/Logotipo512%2520-%2520co%25CC%2581pia.png": "42eb836ee90adbc68742521dff8487ae",
"assets/assets/images/logo/Logotipo512_novo.png": "e40593672f08d91fe0301f76d38eea99",
"assets/assets/images/logo/Logotipo512_for.png": "f880ba527ca6ca74c71311a7a24854cd",
"assets/assets/images/contribuidores/breno_profile.jpg": "eabc068bc4fc20c13ba3340ac23ccbd6",
"assets/assets/images/contribuidores/daniel_profile.jpg": "9bddd2063e77175f0f337abeb275cfb5",
"assets/assets/images/contribuidores/lucasg_profile.jpg": "b7a152c3a920c486055e158c6ca78aef",
"assets/assets/images/contribuidores/pedroh_profile.jpeg": "9b5e303ead750ee7fd6500625224b732",
"assets/assets/images/contribuidores/robert_profile.jpg": "00c74ab5ed8f224eadf842f0cade8cb5",
"assets/assets/images/contribuidores/adrian_profile.jpg": "73b38ac9a20035faccee0fa0364c943d",
"assets/assets/images/contribuidores/lucas_profile.jpeg": "60f9c90daf23eda495d64c1d1515adc4",
"assets/assets/images/contribuidores/bertodetacio_profile.jpeg": "b8ca31602d4a919601cffa9259a9f38c",
"assets/assets/images/contribuidores/nycole_profile.jpg": "033284980ca812720c7b5045bba036a1",
"assets/assets/images/contribuidores/francisco_profile.jpg": "24856b22f31cb84631ddc7645b4e15cb",
"assets/assets/images/contribuidores/izadora_profile.jpg": "0d41378f8e17e66d4fa58f5d1a02da77",
"assets/assets/images/contribuidores/renef_profile.jpeg": "d20a60108b742f4bebf4ce948fea5c2f",
"assets/assets/images/contribuidores/grace_profile.jpg": "a9d8b5b395d551cb4c41e3cce089e234",
"assets/assets/images/contribuidores/pedrol_profile.jpg": "f23592868d4e20f25080155da4fd7909",
"assets/assets/images/contribuidores/bruno_profile.png": "81127039c08dc673648d5e186c966583",
"assets/assets/images/ft-pontadaespera.jpg": "7c1aece6bb920bcad47f3b0c1326b558",
"assets/assets/images/bus.jpg": "9b99ceccb59e9d65b73b0ee90724c82e",
"assets/assets/images/image%2520fundo2.png": "92ce80ef463709ae2113f22a66568349",
"assets/assets/images/image.png": "ce1b84478339c4cc301ed050f653d4a6",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
