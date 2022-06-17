'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "687382d7f9e158f9c9b20dbaad0f9ad8",
".git/config": "fb63e9d451352a9508e9f15f5dbfffb1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5789f0ee75af33f418e8f8aee02aecf4",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a39a25b74ab35f32d4cd66b85fe0ff71",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f1bf6a6328964e74a05b8a8c3b87fbb9",
".git/logs/refs/heads/master": "f1bf6a6328964e74a05b8a8c3b87fbb9",
".git/logs/refs/remotes/origin/master": "9612059623d4a191d24bead9b4b67ca1",
".git/objects/06/b7dd7f5ec263e169f735428cfbab3e0eead068": "f29414723610daecb605e1b5604448ed",
".git/objects/09/784e504c26885ff1f0af8c7fdf449feb01856c": "ff59c0a7dd78b6e3d5fcd25520b3c255",
".git/objects/0f/3ae1b7715e61fe3db4d760d2cf19b8e2cdf812": "3c014ff279c6a0a5726cd0a7aa838228",
".git/objects/0f/bf124e1c2ba50d0eb9aa0f6ed819e0e5644cb4": "c10d0198ef2048225fcd9a0f1fc90f71",
".git/objects/10/b49db241f9fd5cac301b4d8d77209a22e9a362": "1514a99c68aebf6c09f842c21349c21c",
".git/objects/12/826d5cf3ee173d565a75cbf8a2c41542eba355": "7bc1da665bc830f4969d3ca7df707285",
".git/objects/23/09fafbd0554ca133d12a0a4e18c6b5b3ffdc90": "369f6485ab68dae19a77385b6bc46266",
".git/objects/23/356dea37faf109bea90af47b94d97a61f866cc": "fb7ac01342e8245cdfd4fa5486297233",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/31/a3ce9c9b96a2d1ded21fd89a786ea7b41ff738": "1f27f1407b0c31cc4e7d931ad777caa2",
".git/objects/3a/ee79630908cfda98cb019354102ef04ffcccea": "41e7d4ba3d67050b0d14b4f4fc3942b2",
".git/objects/3c/08e97cd82bed9a40fc8fcf14cc4654b995e2b0": "e02dc9dff68bcf54f1e7fa08d9dc77d4",
".git/objects/43/eb6752efc52cbb77cebc436156a57cecd056ec": "3785171efd99e2f595c5343f5ae38b7e",
".git/objects/63/d9cb8c5ee13ad62646551dcd7bd6446edf2ce1": "f1363d9d2f277658b8aa10fe78307b2d",
".git/objects/69/4ae35a75e30915332a5c7d21e20485b6d5917e": "9f43c536f5b203a412acfe27e9516b73",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/75/b4517eb611c1311962ecc46b9e61fd498e2473": "5a6c9c1f2a8e9e6cf4bc3ba3587b9506",
".git/objects/77/e73317ce16326f603b6f895591470466a5c280": "b3a135712c565e6a37e2b3a2549079d8",
".git/objects/78/f28b87a2b62e6418a9bf9defcbba3e928ce215": "5dec37cebb889aebf56a4dde56779971",
".git/objects/7d/a6d68cde1020db8e3b8449c286cb725ccf00ca": "cbba69b96e1c6c84470336646b5523dc",
".git/objects/8e/99652c968228d9303f83726f771c808deaea75": "39f4fc35339ea8b8b13cbf3b35fd1265",
".git/objects/91/ca5626e2fb1ad442eb96a9285e763760018991": "8f5c5c503fa641ca8bb8cf113daeefcc",
".git/objects/92/a4c42a3b82a4ae07be02eed9d62ebf02107734": "054dbf46cce34df7d48d20053d57cc79",
".git/objects/96/c90a4324bcc76bba593309504f2b6e598c546d": "2734ff4b9f0ec3696f4c23029e1f364f",
".git/objects/9e/f1f0d8673c873891202e322dc5a7a4284f9a12": "6a54199c2106b4ad8edf2bb33ec0dbfb",
".git/objects/b0/e8fe23e22a129702b53deddc6c6183763b3c76": "8ba58d5bfdbe6fc52d3a368b1ade5ec5",
".git/objects/b8/cb557cace344a4026e3838aabac04c45c50d9c": "117d0530d65233c7461ae825ebb2e3aa",
".git/objects/c2/3ba08ca3a071f96dea913627d0d80645ee4894": "54251d0eaea1674c90a472c048bf7fcd",
".git/objects/c4/f5c1eb7bef0d10083af7acdc04f5c106020df9": "5e5168e1358a86bc8588c3f438aa53c7",
".git/objects/d5/a77e43a20a282845646928b1018f3fc2cf568c": "07ba74f5462094a74c3069101b61014b",
".git/objects/d7/957b752b4984357ca4983e6c7f03b7c7d59596": "fc584565dc111c04e2bc08126dae2d52",
".git/objects/d8/ca829533ab6cb296b4c3cece324b88bb531a1e": "af2e750bb9bbce51b908881d740b03d5",
".git/objects/da/800aa2bf8856c911ea1b6b6aba7f93aed45ede": "721bfa7cb61e8efbffc089a16e5b529d",
".git/objects/e6/f42d1b07e520737620aa49153c53d6e28097af": "8b670127ca81d1b148c6f9786658d188",
".git/objects/ea/b79f962b0890743e81910ddfc269ebe56026b8": "82459ec3d5ac6f04991ef02cf64c02fa",
".git/objects/f5/d61074cebb9db9bb21c6f3a33893138d7b7463": "463db6a116a0de71337acb10301d29ad",
".git/objects/f7/11b16a57e0a50386cd14fab05c6237dc248efd": "33cf0ff1e7d94b79d087ad78409601a1",
".git/objects/fb/01bfa536da7e45c41078e7982ebfe66abf344b": "5316fd4861ca8dc28f7a141d072d3715",
".git/objects/pack/pack-198271f96a338cd97b5aec7214f9e280eef83325.idx": "89c700410e2e95bf3cf3cb22bc5f491e",
".git/objects/pack/pack-198271f96a338cd97b5aec7214f9e280eef83325.pack": "39e68a6a9481d92482ee9e649565b918",
".git/ORIG_HEAD": "6cb1441b911db93f33d6c1d05c7ad5a2",
".git/refs/heads/master": "19e25dd92f96d6b26e8938d8cfa27d27",
".git/refs/remotes/origin/master": "19e25dd92f96d6b26e8938d8cfa27d27",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2947faba441db8a89efd2df0ce5253b1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d309af938615a84ef9b0028fe48989c1",
"/": "d309af938615a84ef9b0028fe48989c1",
"main.dart.js": "4708d7a05b34d18f623f68c39ae03e90",
"manifest.json": "1531fc2b024ce413a5b5402aee7ea426",
"version.json": "15479143f0cc73c4071f03f7e27b0eb9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
