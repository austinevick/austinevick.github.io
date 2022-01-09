'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e9eabaeb9c81b438565952491de68eb7",
".git/config": "9f58c13cd59c036d5d3b857cca9d5b07",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b8c62efa22ffc0a87095e96456d9751d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "49027cf766622e22d1f593f86efffd25",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c4cfb8f77ac61f4826a728cdcdc968d7",
".git/logs/refs/heads/main": "98725b1a1eb99416d38fefc690b588c2",
".git/logs/refs/remotes/origin/main": "dfd1dfdea7f61086dda63bbc00ffbbaf",
".git/objects/05/c1caa37ab8a7e20b3b8408df9764557cfb82bc": "ce70201bd66bc09f8560189572dc7726",
".git/objects/18/56ef8b6e87161ed6abe55464115ccc2dc76765": "0e02fc04e79a1094a49afb1cc01074d4",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/1e/49392e987e28004918c803f03299557bcff2e8": "bf59ce8846b9db80ff68133d9b6ffc6d",
".git/objects/1f/a78c9ecfa70061f7e0ac68afd47d375ff69f49": "631cb16882799c6535bfa0778bc03f3f",
".git/objects/20/ae4b415e2806c183d9a93e22b5284676988c1d": "30517e4c435e939d049f867efaeb2839",
".git/objects/25/a7e8b1ad8bb3dbeae535c8c58f125087713a3f": "9add33d284bf5b0eec8261d1668220d6",
".git/objects/25/d2d5741ef89c008cd1146b1202613e67487d1e": "d94900e72a124816c63e2cea63bec17d",
".git/objects/31/8d039bb5e0bfea8fa4dd88f50e8fb4bf4e8bf1": "7fdd770709a6a55e8dd9aac50eb57dc2",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/1c3254fbccef015e6d62181bd5bcf1e1788376": "54bfdde169368b78d53a080f179e5138",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/38/d08c4b956c35bd08782faf2bba6c5e2216057e": "b52af5d50011a3939113f5b4d08e434e",
".git/objects/3c/b92ef36bad0544e37f8722a4b32a880cf9ee8f": "9c711044ec10c557d473fdee56564773",
".git/objects/3f/bdd623b4f8d2e8484bff13d4b21504b159f021": "82492726c012b931b8b706e1407e2c49",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/a5d784dd7ba874e68b0daf87c96e9cc7c6f609": "4e2c1bbd9b6211bd328833431079c261",
".git/objects/47/63d9c64b4d78925d45f5a4c73e781d847264e9": "e3d42c8a5c807a3581d2801d29b3d1f2",
".git/objects/51/e35a3fc970ff39da92a0d667a6f994249dda96": "7d883c118a259320d0025ce34573e797",
".git/objects/53/def55cb2c6e367f53aa237c98f8f35473a5a20": "1b7032604fd2e91cb60d3458eaca826f",
".git/objects/73/17ec9b0ce4509cb2892f983fc6d0d42fe9d6fb": "3cb65273f74ada3dde694190dfd15363",
".git/objects/74/92533aca94ff93d5f452d4de93c6d083a16fa3": "cc5d34b5c392bcf6c22ab9e06c3470a5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/d393cf8653da1f4732fd4a6b0bfe7679b225a1": "a4129ef95e4898c42059392e3dc461f9",
".git/objects/7b/730c3779aea915dd5b56986dba6e959c55c414": "7c6de1005e57dd39f4dd44e78ebfc7ad",
".git/objects/80/3443763047a007f2f35aa78ae10a48ebfd9ca0": "3021234338daf61c92e391d08910e99e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ea4be0afe1cbb5fe1843caeaeb168225a5f0df": "4528a623f50db43531a34e701149f063",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/f0a3fef820e2fb08c869600e3098bab1f66edf": "e50301f91a4df5a4c285eabaa6851c25",
".git/objects/aa/230fe952a94cbbf28c4d77bdf4afca7eb4edd8": "5b39e102ee8ba400a4e84501b14506f3",
".git/objects/aa/2988d77d129d12ddd554ba5a9679f29f78a2b0": "677156b82f61cdb009e456df020e4255",
".git/objects/aa/8a0c0b043d28cd5ac68a9ef0e5abe252d15869": "028ba789036f8523400a7bf9d605ab59",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b4/bb8be5d8e8fa2273891d4015c75b9b17fdfea3": "b21e7078a563da6906a6cd586fab9740",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/3e239b65d6e02906311dbd0241b81f2f00c761": "6e1285df45ec9504f34e8309b9425ab1",
".git/objects/c3/1cfb56cc6246bd3c07e4aa6772841f7abcb875": "234049c5377ed518dc5dc358a8fdb020",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/7bcad4e34e36dce2614e93ecc4613eb446f60d": "1fde40dec419706378a085a1cfd06b36",
".git/objects/e2/65d5f308cd9887149e6f8d3ab8348d35852077": "4021969ff8563b7c4afae8b694ae2c8b",
".git/objects/e5/6b101a8496dd64f237eaba6247299dc6f60675": "476dea7bfc6f2825fabc255081034015",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/3ec7a47e23367450c32289ed53c3b8275962e9": "4ac2258f8a3eb5a24c192b1a8a2145ab",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/22f46fcf022ec8cbd33e42cb9c427c196a2b86": "2a54504d898b745de205a4f1293c99e6",
".git/objects/f2/2f080b7b3e10787cb0c5e9dd423e612e61a8ea": "f3c72f26efbd910a1cec6fb52bb4a38f",
".git/objects/f7/644ae1574f6041540f3c1eec71f1244146b297": "ce8a263744f927b0a45e863ae867bc50",
".git/objects/f7/c5a8b288ae3067de0be95f452f114f60f77e23": "be1988f39ffaca020225fba07e424e89",
".git/objects/fa/088b8b4ee2117ac31b07aa2add5fc9a51909a4": "b1737dfda29828f8a036908ccfcfc597",
".git/objects/fe/44de48308498a9014c886dc4cd649a0b886a2c": "11c7c58b39f4a5c2c120a50c64c1d436",
".git/refs/heads/main": "42eb8dd6822a1240469e39d304aa0981",
".git/refs/remotes/origin/main": "42eb8dd6822a1240469e39d304aa0981",
"assets/AssetManifest.json": "df55c8cc32f613560c75c479eaa6ed65",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/images/gmail.png": "8ac3b5d4477a35d7c4e9f75fc077358d",
"assets/images/img.png": "5ea15ad6005da6cf4625ec6421d1f02c",
"assets/images/linkedIn.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/images/movie_app.png": "09bfb8635669389ae8c586f2e1245dd3",
"assets/images/reminder_app.png": "acc8698a73436c68487f3f449bf4d12f",
"assets/NOTICES": "15d804d51ece4a4b07d8ed02c5645a1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.ico": "9027b4885589285022f12e54be494fb8",
"icons/Icon-192.png": "59e8824c836e01b0b5f1a8386ad10d27",
"icons/Icon-512.png": "84243be9d7d442bef39d96c62cdde6a8",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "35ee43022aab79c8d9348b95dfcc461b",
"/": "35ee43022aab79c8d9348b95dfcc461b",
"main.dart.js": "be0211757b580fce70545bfb72c6e3d1",
"manifest.json": "c9f1e48bdfb08f3be29a2ff782f5803f",
"style.css": "2d6d3f67ed9db77440f132afec530fb4",
"version.json": "e99c2dcac90f2c1b2f9f5c802fce2712"
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
