'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "15479143f0cc73c4071f03f7e27b0eb9",
"index.html": "813ea5019bc8efb65ba47e740cb52a68",
"/": "813ea5019bc8efb65ba47e740cb52a68",
"main.dart.js": "c317f24d4272600211dfa025067a5e7d",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1452e23fc5848aa5729bbef417765a13",
".git/ORIG_HEAD": "59337501e90ea00b224bd74ffe7a0130",
".git/config": "468fb1ef044ec4ac1d5bfbe5a40cf7f5",
".git/objects/0d/a2f2d8ddefb8f4f5acc70eee69b6e01d87c11a": "7f27bb99048ea7f56dffbae4a76614f1",
".git/objects/92/a4c42a3b82a4ae07be02eed9d62ebf02107734": "054dbf46cce34df7d48d20053d57cc79",
".git/objects/92/5f4b57f7acf5725f1fd9ef5726cd416b2b30ee": "57d7e813a64cfe3b4c10420947b8e22e",
".git/objects/66/0a8398da6b545850b34e950c91ea06dd4b7af5": "ad6d2c82bde34a39081f2b8113d08198",
".git/objects/66/3667cdf6b4655fb04fc05d1ae3f4795a712c21": "11b686509bc77f0e2d5745961214b0ae",
".git/objects/66/4fd65644badb82c6b0375111bc6d0f999c4ea4": "ee65a3ad4483b89531974810333227c3",
".git/objects/68/531f77e660b264a529a4f14f831b65e9007b43": "a6020e722a0fea58dc590224b37e5da7",
".git/objects/68/779e8d9db46b60437cfb7f9b3dacd8dd0ec34b": "cd5c12c89c8d6ff22a75901af7791f05",
".git/objects/6f/5b57d749a3db8d86294933e8379582d81f3e99": "54214ce9b654ecdcfbc18bda3ee37d26",
".git/objects/9e/f1f0d8673c873891202e322dc5a7a4284f9a12": "6a54199c2106b4ad8edf2bb33ec0dbfb",
".git/objects/32/f68faca2dc1c38343dd592048de0202df13b17": "2587e4768c0cc799e17f4f0a4e449ff3",
".git/objects/69/4ae35a75e30915332a5c7d21e20485b6d5917e": "9f43c536f5b203a412acfe27e9516b73",
".git/objects/3c/08e97cd82bed9a40fc8fcf14cc4654b995e2b0": "e02dc9dff68bcf54f1e7fa08d9dc77d4",
".git/objects/58/d6b845838999a4c10cbfe316e5a4cd4ebd71dc": "fad313e3f5cd1c76b9e37253278744d1",
".git/objects/93/c7dcecc8c6474df818cf942d8274ed0fd6a8ff": "aaac045fd7e64da822b72e98c2fae0a5",
".git/objects/94/7974389bb78cdb4a31ce1ca674a21702f597e3": "d60b843cf783c447c1e8784aabe0459d",
".git/objects/34/01e3430d2b0fc0184060670a6fc44fd44687a2": "ed813e2482daf2fd811edd55613c865b",
".git/objects/9d/5410d118763d22d2e068e79103dc4e3c8c5091": "6e0058953cec20f40d86e0d24ef5e666",
".git/objects/9d/8774a5f81983629fbe31e685d245acc8fe43e1": "2e1c199e2456c604a46ae9c811a2d213",
".git/objects/9c/6b421864a837a5e8f9cc0931ce79a8d2084ac8": "4ed554cae00157c75512d6d058291170",
".git/objects/ac/4d20e84a6134cec56a88ff77730106bb3a177a": "6b7f649ab17729e4f26d682bb1d12437",
".git/objects/ad/6f7f0a0ab82065051086e8893591c608fabf3e": "7828d70d565a2c58c28702173d4f71af",
".git/objects/d7/957b752b4984357ca4983e6c7f03b7c7d59596": "fc584565dc111c04e2bc08126dae2d52",
".git/objects/b3/ec04f2d709cc2a2cdc7332ef61c230fa817a12": "2d190475f97983777898fc81e9630814",
".git/objects/b3/e18e6109ff9622141793259a871151814d1647": "b9826cf683b32ee85f2c17393ccad152",
".git/objects/da/800aa2bf8856c911ea1b6b6aba7f93aed45ede": "721bfa7cb61e8efbffc089a16e5b529d",
".git/objects/bd/af610415aaf8ea4d8a68f288107e9d26a3b019": "4f899b28a1db7f78a6f472637ceb50a9",
".git/objects/bd/4387c8a7307b5c75c33084bf37a8f442e07527": "98de8c622abf13b2d86343626adbcfce",
".git/objects/bc/c039dbb46fab2fbb4d4f0bd1fc2cc12850f9ac": "1f8f1ad59dd6a8dba8960e4d4f76abc3",
".git/objects/d8/ca829533ab6cb296b4c3cece324b88bb531a1e": "af2e750bb9bbce51b908881d740b03d5",
".git/objects/e2/a6125b64be4709377b44b20326b95393e243b3": "0849c450689bf97fe27b1c60f5399462",
".git/objects/eb/103ab80792e6353ddc31675b2ddff8f1d11adc": "2f25ef5357a35e96a67f8d770e28f738",
".git/objects/f5/d61074cebb9db9bb21c6f3a33893138d7b7463": "463db6a116a0de71337acb10301d29ad",
".git/objects/e3/3f4e10fc20f8ebc43d36d92a26dd7d75fe580b": "984e2422567ade7e6dbb50bb8a57a178",
".git/objects/fe/31d4e979914228e88aecea3abe4e4c02c274d6": "9e6934bb12fa7fad309bcfa12677931c",
".git/objects/fb/01bfa536da7e45c41078e7982ebfe66abf344b": "5316fd4861ca8dc28f7a141d072d3715",
".git/objects/ed/c69c9d99caea06090468d1fe4dccbc1b54fdc9": "b8a6a2e7a98a940a5e33f7f0bb229f85",
".git/objects/c1/ae7f40fff77960d8a13dc2d63939cec22e42ce": "b552258e9926613e11bb0611da4237a9",
".git/objects/4e/fb9005aa6b04d64e05f379e7e4d989dfc4397f": "9cbadb2bdb52a2f79c966d0e4c31adc1",
".git/objects/27/2bee099436fd8b188b6af82ba81f327324ad9d": "bff859658747cfe796042ccf73e98d3b",
".git/objects/27/3ccef2b9ddc8a6d1ad253255bc56f3355dd47f": "dff12bd4a371fd353c00ffa28aa01884",
".git/objects/4b/4e251e70742d0cde9a2a5c99630af1d6d18e7b": "7e0a6c4013569355668d14dabe437321",
".git/objects/pack/pack-90356d0335fd3f443736d91e2a27c1c57a8bc8ec.idx": "836de507b9b3cb5e8553ad965da5a1ad",
".git/objects/pack/pack-90356d0335fd3f443736d91e2a27c1c57a8bc8ec.pack": "4fc6ff69fff7165838c7d0041b25ef66",
".git/objects/7d/a6d68cde1020db8e3b8449c286cb725ccf00ca": "cbba69b96e1c6c84470336646b5523dc",
".git/objects/7d/069805684e1ab6a4e87408d25dfc0bfd00c68d": "e5f55447f8732350c7b0dfe38a03a8e5",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/42/41bd4b7e6eb3850443157004be900dfcd18509": "401c251baae07c5255e069705861114b",
".git/objects/42/4529ac235294a87b3a8a8f6b2d80d47c464224": "b7668433b5b30738ce64b8ecc37470a2",
".git/objects/45/16cb316daad8d9255ae029645b31abd83a1ca8": "aa6ebd6cdba7197f3cdaf5f0d830ccca",
".git/objects/1a/6b59586d6abbaf476bddf3520fa71cd63d0c6a": "2dbdc5eb7d668661e59cbf2771f408d7",
".git/objects/28/58fba80563d546880d5f63f3b2ae442bb7e484": "8a1131e1b1d12cd4f70e8e9db50bee03",
".git/objects/28/63fc64c5417d28ec6455da32f4b7fba63ee956": "4e3490b08a63e6228bac3121f5c92809",
".git/objects/7b/71fbcb7b16ebefca8ed131b5e7ac22f6ddfe9b": "cd790bfed0498b47b03b247f8ac8067f",
".git/objects/10/b49db241f9fd5cac301b4d8d77209a22e9a362": "1514a99c68aebf6c09f842c21349c21c",
".git/objects/4d/4fcc61a6443c00dc05f97f6a2d2c826d707690": "790b22aa2081660dfa353347743c329c",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/75/a3fdccb0d3561bf5ee88c11987a8e98f224a25": "7847a8424272a86f495f1aadc280ebde",
".git/objects/75/b4517eb611c1311962ecc46b9e61fd498e2473": "5a6c9c1f2a8e9e6cf4bc3ba3587b9506",
".git/objects/43/eb6752efc52cbb77cebc436156a57cecd056ec": "3785171efd99e2f595c5343f5ae38b7e",
".git/objects/88/b4fac2494af456ca8098d08fcdf85723042a7a": "deedf4c5309d86ba95daa4ffd5916e7f",
".git/objects/6b/dc3b696749e5db5aa170c429d4c4c29519d548": "c3e32958b4f21e8683561bfa248d6dbf",
".git/objects/6b/4fe86c38b2765609991fe2459326c3b6c9de24": "201374240dc198e0919ddfb08a9a25cf",
".git/objects/07/690fbad32f83d03ae7c03d38c0df397cd7ae1c": "1bc46b9626f65bcde31ec74a8f91a75a",
".git/objects/07/6684f8fd558daaacd48bcff24b139a270a578f": "991a825f67f9be7787d5c3767e8a0089",
".git/objects/09/784e504c26885ff1f0af8c7fdf449feb01856c": "ff59c0a7dd78b6e3d5fcd25520b3c255",
".git/objects/09/6b7cb2f71bbf9f0be800e60a5a4829350c6fef": "e3d9c1ccd6a7eb845c607a80f256f174",
".git/objects/09/24de8a1b6a7ed4187d062efdc761f6cbd2522f": "786796f60459d41e817423c9b438e411",
".git/objects/5d/6a9a7b75e5945772ec5cfff798f2f38e11a43a": "e3d956807c01cdfed4fbb29e4e6fbd1d",
".git/objects/5d/c73a76d9fa0dec1cd79582d143f9cb084d720a": "6703d38e910ed14e6522438cfd260e4b",
".git/objects/5d/eaff767ca71ced041eef24f765211542ead85d": "f87b29cde8f83b2051f6ab40873b55b0",
".git/objects/31/a3ce9c9b96a2d1ded21fd89a786ea7b41ff738": "1f27f1407b0c31cc4e7d931ad777caa2",
".git/objects/31/b6d51b0f508dfef44d9c8b30fa0e298dd21044": "0133b2119b3c8829d98d6194b138dcaa",
".git/objects/91/ca5626e2fb1ad442eb96a9285e763760018991": "8f5c5c503fa641ca8bb8cf113daeefcc",
".git/objects/96/c90a4324bcc76bba593309504f2b6e598c546d": "2734ff4b9f0ec3696f4c23029e1f364f",
".git/objects/3a/ee79630908cfda98cb019354102ef04ffcccea": "41e7d4ba3d67050b0d14b4f4fc3942b2",
".git/objects/54/a66d1b05d6ee5c635f1e731e31ba190ce17883": "85acfbce41fad951effa82e4fcc5917d",
".git/objects/98/9f9d19dfb9b29f734be22d15b2ed4cb4685eef": "1d906d1751f9e9802bff69936f5f9f66",
".git/objects/98/e187cf6c7e8534b16c2e5196f10a1b77fdac7e": "3a743807b25fb7a9d8a4f677ea3ce72b",
".git/objects/3f/a72815ac54f02a65cf9577e9ae0132b7e1a90e": "160456f1c34c744ec6f736be941463c3",
".git/objects/5e/2b40e1a00904a6c400cb9275526566397b4bc2": "36d395523094ce665379d338ec4c3475",
".git/objects/5e/d20e35222eda0607d36996475a10970f45a5ef": "5ba5a6a3b7f1ed4cf79f26ec5d5e258b",
".git/objects/37/d6e32fc15d00e76250fdd1b6bdef14beae88b5": "ba862474b746c341480435a11095478c",
".git/objects/08/ddadccedf4faf0b148cb9fd8f90104870d7ac1": "4d0db1b6c8e4e2620feae6275b6f44cf",
".git/objects/6d/12db14edc510da7a74abbfae184982af38c9af": "8614e21acc036b5149bfaec9f5c60199",
".git/objects/06/b7dd7f5ec263e169f735428cfbab3e0eead068": "f29414723610daecb605e1b5604448ed",
".git/objects/6c/a34d873ae0f676533fcea7f807a3ded2e796cf": "1adc8c9c6704eb209014fb11e5e2dc75",
".git/objects/99/3a5fda16df924936271fe4c7b75039ad5b0816": "26e1640c3aae567ccf19f37d1268b99a",
".git/objects/63/d9cb8c5ee13ad62646551dcd7bd6446edf2ce1": "f1363d9d2f277658b8aa10fe78307b2d",
".git/objects/0f/bf124e1c2ba50d0eb9aa0f6ed819e0e5644cb4": "c10d0198ef2048225fcd9a0f1fc90f71",
".git/objects/0f/3ae1b7715e61fe3db4d760d2cf19b8e2cdf812": "3c014ff279c6a0a5726cd0a7aa838228",
".git/objects/bf/ba1d52d349b9851cc615680a27df3b8203bf3b": "8579e43ba27c754e70226b5c40a319bf",
".git/objects/a0/fcf61debaa2812af3ddb7e8475d14685c0d21a": "fbb3769e4aee72c80ddf28d65bd436a6",
".git/objects/b8/cb557cace344a4026e3838aabac04c45c50d9c": "117d0530d65233c7461ae825ebb2e3aa",
".git/objects/dc/843f464e5725ad53fa74b1e0f43df1a4fece5b": "dd440bd78a85d02b38a59e50cdf2c184",
".git/objects/a9/a40b574772ab9a8026875587a0fa6189d33731": "83b2bed24a4390c82502be5c0c17fde4",
".git/objects/d5/a77e43a20a282845646928b1018f3fc2cf568c": "07ba74f5462094a74c3069101b61014b",
".git/objects/af/e51d50d85e7dae1027c9f4fff56824c95ad084": "9e5bad64638150566d6828e41f9be2f7",
".git/objects/de/20dc171981146834dd8f4d097a248aa8dd1bc1": "3d3ed25d453f067237011fa4849a468b",
".git/objects/b0/e8fe23e22a129702b53deddc6c6183763b3c76": "8ba58d5bfdbe6fc52d3a368b1ade5ec5",
".git/objects/b9/248737d04238e1d686e1134652fb96aeb6de89": "90f8901d62a82992c4f4ea2b94a5ef6c",
".git/objects/ef/261b73aa9dbd546ea3c1c994fb1bd685fba1c3": "ceae9641638a3119bed87dc31b9ca401",
".git/objects/c4/f5c1eb7bef0d10083af7acdc04f5c106020df9": "5e5168e1358a86bc8588c3f438aa53c7",
".git/objects/ea/b79f962b0890743e81910ddfc269ebe56026b8": "82459ec3d5ac6f04991ef02cf64c02fa",
".git/objects/ea/9ef97e39227db04b0ceef5c56f9505283a14f8": "468d68803f9a0f069abcfa6701612ae1",
".git/objects/ea/1f7d46657f190f5a62b5c4135993d478d212fd": "3eae96567af0fc6710ec5efba39c9692",
".git/objects/e6/f42d1b07e520737620aa49153c53d6e28097af": "8b670127ca81d1b148c6f9786658d188",
".git/objects/f7/19f7edf00dd50ee1dd58a8c885dddad230423b": "31f7c533fd8b8fabcad7f0817171881d",
".git/objects/f7/11b16a57e0a50386cd14fab05c6237dc248efd": "33cf0ff1e7d94b79d087ad78409601a1",
".git/objects/ff/a6668185e49741a81b50bec40d734fc6bf6f2a": "b817eefabba98c6cdd3b9e899e2d88e6",
".git/objects/c2/3ba08ca3a071f96dea913627d0d80645ee4894": "54251d0eaea1674c90a472c048bf7fcd",
".git/objects/f6/a16bc64a29de36248137ce57e8ed4857a1ec1f": "7cb696e73908f956163d12279a3661b6",
".git/objects/e7/a9a00d2bca65077420aa6637319463eab0822a": "e8e1dff84feee5c21437d0e51866c463",
".git/objects/ce/d8792ea69c0516173cb68ba4b20f99e0844260": "84652c36772a2eb220c30e91c4efc458",
".git/objects/83/5ddf34f8d094e1baf7518ae9d1fe41369b2d9f": "d0d7166892d560cadb55e3b0e8aefef1",
".git/objects/77/e73317ce16326f603b6f895591470466a5c280": "b3a135712c565e6a37e2b3a2549079d8",
".git/objects/4a/00ee0bb6dcaa4d8b60df516eed335478b5d8d9": "2a6d2f472f0bec3204126321585b7595",
".git/objects/23/09fafbd0554ca133d12a0a4e18c6b5b3ffdc90": "369f6485ab68dae19a77385b6bc46266",
".git/objects/23/356dea37faf109bea90af47b94d97a61f866cc": "fb7ac01342e8245cdfd4fa5486297233",
".git/objects/4f/f3b20575e88f75a986c52d413682b211e68b22": "24853c6acecdf19234022a357770ec73",
".git/objects/8d/09d52c2eab12d18d16f85403afabe82cae6835": "01ba36e30b02b45852f474081490cafc",
".git/objects/12/826d5cf3ee173d565a75cbf8a2c41542eba355": "7bc1da665bc830f4969d3ca7df707285",
".git/objects/76/3452a4431f39e35ed4a56fccd77b56bb69c468": "78847dd4ccd8a910fe010fc43b4249d9",
".git/objects/78/77143b164a64ff1626056947d0ba9fd4731d94": "a344c1eb48f7025d562faf9f44e4dcb0",
".git/objects/78/f28b87a2b62e6418a9bf9defcbba3e928ce215": "5dec37cebb889aebf56a4dde56779971",
".git/objects/13/01feee4cf7af8439b374a227b7b52dc66871a6": "c5ba32d276e624311bb939ebf80dfdcf",
".git/objects/7f/3f8bdde5984b12d22294ede669f1070e21ff85": "3824181a5a55af762e0bfd5c0ab958af",
".git/objects/7f/c4238056b66de71a860619c303786a4c1a0d3b": "73b7e4a7ca680e7f3519c228a50a76fe",
".git/objects/14/a5d45428ebe57c7e668c746a84daf89a684690": "6a0113e0b579845c13de980275ae62c0",
".git/objects/8e/99652c968228d9303f83726f771c808deaea75": "39f4fc35339ea8b8b13cbf3b35fd1265",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "966f46145b6850bcbed00ee7e2dc13be",
".git/logs/refs/heads/master": "966f46145b6850bcbed00ee7e2dc13be",
".git/logs/refs/remotes/origin/master": "bbd98509532cfe4b28603425646283a8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "59337501e90ea00b224bd74ffe7a0130",
".git/refs/remotes/origin/master": "59337501e90ea00b224bd74ffe7a0130",
".git/index": "fa2121d6fcfb8a116c2b14544c208b39",
".git/COMMIT_EDITMSG": "06a786ea001acbc37098fb7c1b2482f4",
".git/FETCH_HEAD": "699e9035e96bb87d9c22798709145698",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "d4d0c1fb4e180472e7dc5ab8e91d27ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
