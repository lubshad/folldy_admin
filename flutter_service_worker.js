'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aab0b2afc601e19b63383b19bd31b5ab",
".git/config": "fb63e9d451352a9508e9f15f5dbfffb1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c534616e556bc236c90a631d3b81d2d8",
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
".git/index": "f7acdc16002fb2f61361a8aa2a8bc753",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1ff5fa61fe721c93765d48766e5cb39",
".git/logs/refs/heads/master": "a1ff5fa61fe721c93765d48766e5cb39",
".git/logs/refs/remotes/origin/master": "e6993df2074dd464bbc3c67b47fa1a72",
".git/objects/01/cae628b74f3f8db3eb519dd1e73678e947fc31": "0de35ae95464cd00e3c96000b1b013d1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0a/3602406233c40eca80a924d9875b9807568441": "44777857e51b5e3483edfd704d388845",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/0f/1f69f7bff834eaf5e19345d9d25c3240e637d0": "855c931e80041411962d8757cdec2240",
".git/objects/11/5f5d3994ae9e6bacdd9497c2853e08deec9835": "9e0c1d964e3c1996d8218d43cdec5e72",
".git/objects/14/38de1a1fdb8202731489ec9e6022674772e473": "c6f3ce856c0fd0d56dcac3563614bbda",
".git/objects/16/01d38ea3185b6bacee52bc6af5ae343fcfbb62": "da27c2175b34b235e5ba385943a425eb",
".git/objects/18/5f9c7bd9941b101d738c0431073fccea32a887": "4e1b6b540e02cc08d5e25d79b68cff17",
".git/objects/18/dc5930add9bd525629aeceda09e16f7412e5b2": "e3a1484a7bcd5d7c3ac8eac261ce93e4",
".git/objects/1c/49fb1b1dc037a512de0e4e11fc865829916719": "e7942301d9da0e495f60ff877d33cc3c",
".git/objects/21/14aac5abd09015b3d81b35ff4923b53120fdb9": "8e2159e57ca5fef8eef7ec367c073431",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/1af7fd586d9f980006d0f08eb2ac76f3a61c56": "b9147804183f4d96946f334f1d103c47",
".git/objects/27/bbb2fa32a031caf97f0c422abe5977584799a6": "9a5e03376406ca0e8c58f4b4874af4e1",
".git/objects/2d/622d7f8491b5b11135f2e8e302b37906505c3b": "04170e761727eb9ff3e03c2f7a83357e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/ebb2032472fe741b6d3e6465a87d281bacd79e": "2a2181374487d18eda14687d3ed5fa68",
".git/objects/31/ae07d3b0d713b5f4f7457abd13f53fd6040d97": "e88688c5f5d6bee0bbb00e8a6f205620",
".git/objects/35/781c0b7bb87671bedf8de5f4c532e771d5f071": "68fdff750256c440a0a00069b4d68da4",
".git/objects/43/8384cface82584070ae668e408be5e90d4e0d0": "1290542c547ac5d751c942f4cdc9a4f1",
".git/objects/43/d17e25d8cefd6eee9ae8b3cfcdb2f5d8acc31c": "af9b1c8d84545e205b3dd7db1692bb40",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/b48288e4286b5625ac40e4393b6b5c55838642": "c363b373ebd948909df34516ef7f8797",
".git/objects/4c/6f377b7a227cb8dc30ac5ee83f23fd6317b247": "85e4530505df72d0da6441d64ddb3cc0",
".git/objects/4c/f08102fdc70409d6ada78737ee522ecd1017a6": "1b36990036e71d42e31fe3063c2dce01",
".git/objects/4d/2324e1f93fba41d913808ba801fded52e29c46": "5ef391e9c869e47a30c009864b2d35d2",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/d26cd42a545be2a31fcc4c5cc891be15db786b": "330921dfb02192f8d4132c83a50f5343",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/54/d679e45edf761a02d830169816d8d85352af4e": "ea80066f66bcf11ef519661d39827d90",
".git/objects/5b/48681fc813dc15057d202cb8ac3f1e62aa709e": "d23a559b606a57012c67de2763a4aebb",
".git/objects/5b/e15a7cc3bb969c97304a80a416af3995f37a00": "e708059c51a767541947daf5ca01f143",
".git/objects/5c/f648458aca93b3a2ac3120dfa9dfdb3722abd1": "e9ac1804068fc7b63829431e7178b941",
".git/objects/63/f704f427db92d1b2984f4d22862e2a62252cbf": "7e31243d469f5f8d22157523df7f0d44",
".git/objects/67/b84af3d9e0fdd6b411e1ba54b654f1baa1da0b": "f1c148e6b529ad4938cf2eaa97532aeb",
".git/objects/6a/d8e6dbc7a37ed3d44d410180b428927ba54bd8": "b7340e1d41ee4bd140d8c99a37bb1f23",
".git/objects/6b/f05c409eeeebf8c60fc7fcdc53f4e18d01e6c3": "b5c0f3bfa09af50cfe3f6baeaaff6e84",
".git/objects/6e/db1dae265f20e1e893b82f4cce4b24baa88b38": "05a2839e5b33e480b6333bb784fb9493",
".git/objects/6f/621a22acc8df77f7914dfc0f46228aacfa743a": "f327276dbed487861e406ccd09007189",
".git/objects/6f/c79efa2addd497eafbf60f1da795e9414e9e7f": "f282a3abf1aae42e88b0e38c393d5a6f",
".git/objects/70/a7b0a79967f54e18b6e07cc6cb05cc19907c11": "36805798cdbfbbb695ea6000ccdd9ab3",
".git/objects/72/af39a85bc87c52420daa2cbf9fac2e809d0bd4": "928f3a17936784ce9b11eb7eabc2b1f5",
".git/objects/76/3ac8447d2346186999ea3117c7e063e0b31055": "764e5ec950fd2a53eb099d23e806e2b9",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/80466d4b89f7a7e7b8b6ec7a6d7be67f452cb5": "68a3d1b72e4152d68f63f2f40969a0dc",
".git/objects/7f/522eee0afa0918e1db5ba7d41dbdc761375079": "00253fac776d9a363b1008cdd29f3a9c",
".git/objects/83/6d0c9edc5755b07834de6602844e4360a93a7c": "e9a21956b99019732bbe115d1a2694fd",
".git/objects/85/cc73b9c06db62f88e1a053829f255cf446bcd2": "33a215102397eb92e356a546616b6f0a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/46be927390a4cac8b76bb4bb1dd8db35a1c610": "5ea94ac6f1d3db7a7af8ad31767b7d80",
".git/objects/8c/90d653876b9c520056549363d4869d2caeeb99": "0682549fa4d7e6174b248542aa53aedf",
".git/objects/96/a91759a1b1f1d9c01ff0fafae007a123d89586": "916f72432c9d3fe7facac535ed88cb90",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/88f0f9ce7585d0025d5f8b9e26f61b8eb8522b": "f773683b46bca6ca80cf004635770c2e",
".git/objects/a4/2751dca1c7ddc6a6ed5f7a98a1e20400c7dad0": "43286ae68aac5ab896b0733c1c42dfc2",
".git/objects/aa/23f2667e4eea41bc4e25fc9fed2ce5a2c90e05": "53899ef1d7024ea54a4e967aa36e85e2",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/976d5c9d38ff48f95c548e435c2ba5c1b9d119": "8f911cc9882251f32c399157a80d3a70",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/b5185f15f617545cc19137aa0bd214bacf4f0e": "7b7bb1f22d0ac1b54722e8dde6004a20",
".git/objects/bf/d0ae77ff19aa417411c8d991c406c36fb3c037": "e46d13e9a1928abc5b864fc4c7fba757",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/ca/16bc8c5322ccb388e8304014141f57fce6a192": "b34badcdb4234cdfdff49a9ded740a24",
".git/objects/cf/a1c07a449a00376c25f7581787b65ec8a3950b": "23b7530a8ff8d93e745349003de233b6",
".git/objects/d2/3213877d7799901c1274eb210f1f2634a12c9b": "a3853b8a324a56fa77512f3f3866b822",
".git/objects/d5/6c8625c05c7fb2fb5458942b74094132158878": "c14659f0797bc9834fbd3fef13a89d5e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/a465e6293decf1e1b11e2c0489a252d42247a4": "43972e1654c97d85bfe70a66e0a62fee",
".git/objects/e1/9085651dd7fafa7a66408e8a08a5fa1d908102": "7ef833f414f942c485a1a24b1d4d0ebf",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/589058d7acf79d6de73103e7ab20a9241f4e3f": "7d0be2b0dd8ac5db78eaf1bd438bdb41",
".git/objects/e7/18101c8fc14eba9c9a7e048993bf9e0490306b": "0355c11ff474aed3463c374e86367dfd",
".git/objects/e8/d6938330347d4c7b7ba2380a3ecdb01fba164f": "e2c23c72e99b4fa719ab92d6f74422e4",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/cfd942ca30a239d8e46b4d668142183331f4c1": "46e079565b6f2b5ba799ae5ed744fc44",
".git/objects/f6/7e5a46b4bea4a24c4204c30b0da8196ea50204": "30e2c06fec637b8ec2367e1add570b33",
".git/objects/fd/348c8b8b52bae08219d47973b23cd39e0fd22c": "585c4be92b9585ad240a834de624fbdd",
".git/objects/fe/575c650d507278ecd764677d5fafd79452bcad": "310365e42710cc007e4673774f25fceb",
".git/objects/ff/e45685d3d4fcd542343590a7611f58296ad966": "1d56ac56ebb7cf85bd89a0741e0bc826",
".git/ORIG_HEAD": "17e94f73eba0f07ddf28b08adb177718",
".git/refs/heads/master": "fc7a25c5d3934949f5ece291b19f8259",
".git/refs/remotes/origin/master": "fc7a25c5d3934949f5ece291b19f8259",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "1a51d03d6694ac5205450f1380c8eb7e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3b337841bf5f03e11d20ebcd26a66e21",
"/": "3b337841bf5f03e11d20ebcd26a66e21",
"main.dart.js": "355c17842b93671433cc36a9bbc0703b",
"manifest.json": "1531fc2b024ce413a5b5402aee7ea426",
"version.json": "15479143f0cc73c4071f03f7e27b0eb9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
