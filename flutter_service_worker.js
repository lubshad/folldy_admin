'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "fddb4f7738a353e8d8670fca8e9e9aff",
".git/config": "fb63e9d451352a9508e9f15f5dbfffb1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "99c02b0aa29b86b1f66364afbca737ab",
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
".git/index": "1768ad3c0f9e756bf86faafdf96643e4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fce12f4e6b31ed509247c4a2af1acb09",
".git/logs/refs/heads/master": "fce12f4e6b31ed509247c4a2af1acb09",
".git/logs/refs/remotes/origin/master": "8ff0dd5db314d57e740da06edbec5b8f",
".git/objects/07/6684f8fd558daaacd48bcff24b139a270a578f": "991a825f67f9be7787d5c3767e8a0089",
".git/objects/09/24de8a1b6a7ed4187d062efdc761f6cbd2522f": "786796f60459d41e817423c9b438e411",
".git/objects/13/01feee4cf7af8439b374a227b7b52dc66871a6": "c5ba32d276e624311bb939ebf80dfdcf",
".git/objects/27/3ccef2b9ddc8a6d1ad253255bc56f3355dd47f": "dff12bd4a371fd353c00ffa28aa01884",
".git/objects/28/58fba80563d546880d5f63f3b2ae442bb7e484": "8a1131e1b1d12cd4f70e8e9db50bee03",
".git/objects/28/63fc64c5417d28ec6455da32f4b7fba63ee956": "4e3490b08a63e6228bac3121f5c92809",
".git/objects/34/01e3430d2b0fc0184060670a6fc44fd44687a2": "ed813e2482daf2fd811edd55613c865b",
".git/objects/37/d6e32fc15d00e76250fdd1b6bdef14beae88b5": "ba862474b746c341480435a11095478c",
".git/objects/4b/4e251e70742d0cde9a2a5c99630af1d6d18e7b": "7e0a6c4013569355668d14dabe437321",
".git/objects/4e/fb9005aa6b04d64e05f379e7e4d989dfc4397f": "9cbadb2bdb52a2f79c966d0e4c31adc1",
".git/objects/4f/f3b20575e88f75a986c52d413682b211e68b22": "24853c6acecdf19234022a357770ec73",
".git/objects/54/a66d1b05d6ee5c635f1e731e31ba190ce17883": "85acfbce41fad951effa82e4fcc5917d",
".git/objects/58/d6b845838999a4c10cbfe316e5a4cd4ebd71dc": "fad313e3f5cd1c76b9e37253278744d1",
".git/objects/5d/6a9a7b75e5945772ec5cfff798f2f38e11a43a": "e3d956807c01cdfed4fbb29e4e6fbd1d",
".git/objects/5d/c73a76d9fa0dec1cd79582d143f9cb084d720a": "6703d38e910ed14e6522438cfd260e4b",
".git/objects/5d/eaff767ca71ced041eef24f765211542ead85d": "f87b29cde8f83b2051f6ab40873b55b0",
".git/objects/5e/2b40e1a00904a6c400cb9275526566397b4bc2": "36d395523094ce665379d338ec4c3475",
".git/objects/5e/d20e35222eda0607d36996475a10970f45a5ef": "5ba5a6a3b7f1ed4cf79f26ec5d5e258b",
".git/objects/66/0a8398da6b545850b34e950c91ea06dd4b7af5": "ad6d2c82bde34a39081f2b8113d08198",
".git/objects/66/4fd65644badb82c6b0375111bc6d0f999c4ea4": "ee65a3ad4483b89531974810333227c3",
".git/objects/6b/4fe86c38b2765609991fe2459326c3b6c9de24": "201374240dc198e0919ddfb08a9a25cf",
".git/objects/75/a3fdccb0d3561bf5ee88c11987a8e98f224a25": "7847a8424272a86f495f1aadc280ebde",
".git/objects/78/77143b164a64ff1626056947d0ba9fd4731d94": "a344c1eb48f7025d562faf9f44e4dcb0",
".git/objects/7b/71fbcb7b16ebefca8ed131b5e7ac22f6ddfe9b": "cd790bfed0498b47b03b247f8ac8067f",
".git/objects/7f/c4238056b66de71a860619c303786a4c1a0d3b": "73b7e4a7ca680e7f3519c228a50a76fe",
".git/objects/88/b4fac2494af456ca8098d08fcdf85723042a7a": "deedf4c5309d86ba95daa4ffd5916e7f",
".git/objects/8d/09d52c2eab12d18d16f85403afabe82cae6835": "01ba36e30b02b45852f474081490cafc",
".git/objects/94/7974389bb78cdb4a31ce1ca674a21702f597e3": "d60b843cf783c447c1e8784aabe0459d",
".git/objects/98/e187cf6c7e8534b16c2e5196f10a1b77fdac7e": "3a743807b25fb7a9d8a4f677ea3ce72b",
".git/objects/99/3a5fda16df924936271fe4c7b75039ad5b0816": "26e1640c3aae567ccf19f37d1268b99a",
".git/objects/9d/5410d118763d22d2e068e79103dc4e3c8c5091": "6e0058953cec20f40d86e0d24ef5e666",
".git/objects/a9/a40b574772ab9a8026875587a0fa6189d33731": "83b2bed24a4390c82502be5c0c17fde4",
".git/objects/af/e51d50d85e7dae1027c9f4fff56824c95ad084": "9e5bad64638150566d6828e41f9be2f7",
".git/objects/b3/ec04f2d709cc2a2cdc7332ef61c230fa817a12": "2d190475f97983777898fc81e9630814",
".git/objects/bd/4387c8a7307b5c75c33084bf37a8f442e07527": "98de8c622abf13b2d86343626adbcfce",
".git/objects/bd/af610415aaf8ea4d8a68f288107e9d26a3b019": "4f899b28a1db7f78a6f472637ceb50a9",
".git/objects/bf/ba1d52d349b9851cc615680a27df3b8203bf3b": "8579e43ba27c754e70226b5c40a319bf",
".git/objects/c1/ae7f40fff77960d8a13dc2d63939cec22e42ce": "b552258e9926613e11bb0611da4237a9",
".git/objects/f6/a16bc64a29de36248137ce57e8ed4857a1ec1f": "7cb696e73908f956163d12279a3661b6",
".git/objects/f7/19f7edf00dd50ee1dd58a8c885dddad230423b": "31f7c533fd8b8fabcad7f0817171881d",
".git/objects/fe/31d4e979914228e88aecea3abe4e4c02c274d6": "9e6934bb12fa7fad309bcfa12677931c",
".git/objects/pack/pack-7ac19a6fb3c5ef59f3f41eda96d640c60d5d109b.idx": "6ed21d46373e59a51412533e1f2b33cc",
".git/objects/pack/pack-7ac19a6fb3c5ef59f3f41eda96d640c60d5d109b.pack": "c8bbaf56d17302f57dd9b6ab0856d383",
".git/ORIG_HEAD": "f9c809961b8454d67c5f777669105ae2",
".git/refs/heads/master": "b9ef3881d6f62bf718398dcdf4fe5074",
".git/refs/remotes/origin/master": "b9ef3881d6f62bf718398dcdf4fe5074",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "74ad878eb6497ad9bbe8a87cca20bf2a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4adec68920e4943f6ee274667d892adf",
"/": "4adec68920e4943f6ee274667d892adf",
"main.dart.js": "897cec7f83172b1d70d73327024bd6ae",
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
