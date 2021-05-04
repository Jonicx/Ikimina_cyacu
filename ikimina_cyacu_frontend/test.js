const members = [
  {
    lastName: "Devothe",
    parentMemberId: "0",
    firstName: "NYIRAMANA",
    id: 1,
    phoneNumber: "789551152",
    memberId: "593E63",
    members: 2,
    createdAt: "2021-04-07T22:41:02",
    level: 0,
  },
  {
    lastName: "Pascal",
    parentMemberId: "593E63",
    firstName: "HAKIZIMANA",
    id: 2,
    phoneNumber: "0788500092",
    memberId: "2A3823",
    members: 2,
    createdAt: "2021-04-16T13:25:27",
    level: 0,
  },
  {
    lastName: "Theoneste ",
    parentMemberId: "593E63",
    firstName: "NISINGIZWE",
    id: 3,
    phoneNumber: "0788800939",
    memberId: "273723",
    members: 2,
    createdAt: "2021-04-16T13:29:19",
    level: 0,
  },
  {
    lastName: "Sangano",
    parentMemberId: "2A3823",
    firstName: "RUDAKEMWA",
    id: 4,
    phoneNumber: "0783347932",
    memberId: "5839A3",
    members: 2,
    createdAt: "2021-04-16T13:32:51",
    level: 0,
  },
  {
    lastName: "Placide",
    parentMemberId: "2A3823",
    firstName: "TWAGIRAYEZU",
    id: 5,
    phoneNumber: "0788288267",
    memberId: "243D83",
    members: 2,
    createdAt: "2021-04-16T13:34:48",
    level: 0,
  },
  {
    lastName: "Chriss",
    parentMemberId: "273723",
    firstName: "HAVUGIMANA",
    id: 6,
    phoneNumber: "0788540765",
    memberId: "D73263",
    members: 2,
    createdAt: "2021-04-16T13:38:45",
    level: 0,
  },
  {
    lastName: "Claire",
    parentMemberId: "273723",
    firstName: "MUKAMWIZA",
    id: 7,
    phoneNumber: "0788829628",
    memberId: "BA3423",
    members: 2,
    createdAt: "2021-04-16T13:39:58",
    level: 0,
  },
  {
    lastName: "Justine",
    parentMemberId: "5839A3",
    firstName: "MWIGEME",
    id: 8,
    phoneNumber: "0788590973",
    memberId: "7A3A83",
    members: 0,
    createdAt: "2021-04-16T13:44:22",
    level: 0,
  },
  {
    lastName: "Oliver",
    parentMemberId: "5839A3",
    firstName: "NTIHINYUZWA",
    id: 9,
    phoneNumber: "0785249090",
    memberId: "4D3673",
    members: 1,
    createdAt: "2021-04-16T13:46:04",
    level: 0,
  },
  {
    lastName: "Celine",
    parentMemberId: "243D83",
    firstName: "MUREKATETE",
    id: 10,
    phoneNumber: "0787782031",
    memberId: "4D3523",
    members: 1,
    createdAt: "2021-04-16T13:49:39",
    level: 0,
  },
  {
    lastName: "Francois",
    parentMemberId: "243D83",
    firstName: "HABIRYAYO",
    id: 11,
    phoneNumber: "0788491573",
    memberId: "A3B593",
    members: 1,
    createdAt: "2021-04-16T13:51:40",
    level: 0,
  },
  {
    lastName: "Gaston",
    parentMemberId: "D73263",
    firstName: "NGARATE",
    id: 12,
    phoneNumber: "0788451328",
    memberId: "93E663",
    members: 2,
    createdAt: "2021-04-16T13:54:00",
    level: 0,
  },
  {
    lastName: "Frank",
    parentMemberId: "D73263",
    firstName: "MASENGESHO",
    id: 13,
    phoneNumber: "0782026090",
    memberId: "A38523",
    members: 1,
    createdAt: "2021-04-16T13:55:01",
    level: 0,
  },
  {
    lastName: "Jean Damascene",
    parentMemberId: "BA3423",
    firstName: "AZAKURISHAKA",
    id: 14,
    phoneNumber: "0788491573",
    memberId: "737D23",
    members: 0,
    createdAt: "2021-04-16T13:58:01",
    level: 0,
  },
  {
    lastName: "Odette",
    parentMemberId: "BA3423",
    firstName: "MUREKATETE",
    id: 15,
    phoneNumber: "0788561588",
    memberId: "839BA3",
    members: 0,
    createdAt: "2021-04-16T14:01:11",
    level: 0,
  },
  {
    lastName: "Ange Ritha",
    parentMemberId: "4D3673",
    firstName: "UCYEYE ",
    id: 16,
    phoneNumber: "0788520220",
    memberId: "43D683",
    members: 0,
    createdAt: "2021-04-16T14:03:33",
    level: 0,
  },
  {
    lastName: "Queen",
    parentMemberId: "4D3523",
    firstName: "UMUTESI",
    id: 17,
    phoneNumber: "0782790515",
    memberId: "732863",
    members: 0,
    createdAt: "2021-04-16T14:06:54",
    level: 0,
  },
  {
    lastName: "Gaia",
    parentMemberId: "A3B593",
    firstName: "RURANGIRWA ",
    id: 18,
    phoneNumber: "0782588657",
    memberId: "A34723",
    members: 0,
    createdAt: "2021-04-16T14:08:31",
    level: 0,
  },
  {
    lastName: "Justin",
    parentMemberId: "93E663",
    firstName: "NSENGIMANA",
    id: 19,
    phoneNumber: "0783799966",
    memberId: "A3A783",
    members: 2,
    createdAt: "2021-04-16T14:10:24",
    level: 0,
  },
  {
    lastName: "Louise",
    parentMemberId: "93E663",
    firstName: "BATAMURIZA",
    id: 20,
    phoneNumber: "0788665994",
    memberId: "D36873",
    members: 2,
    createdAt: "2021-04-16T14:11:56",
    level: 0,
  },
  {
    lastName: "Epiphanie",
    parentMemberId: "A3A783",
    firstName: "UWANYIRIGIRA",
    id: 21,
    phoneNumber: "0788740557",
    memberId: "D35723",
    members: 0,
    createdAt: "2021-04-16T14:13:36",
    level: 0,
  },
  {
    lastName: "Gorette",
    parentMemberId: "A3A783",
    firstName: "TWAGIRUMUKIZA ",
    id: 22,
    phoneNumber: "0782863733",
    memberId: "A3BD93",
    members: 0,
    createdAt: "2021-04-16T14:15:01",
    level: 0,
  },
  {
    lastName: "Cecile",
    parentMemberId: "D36873",
    firstName: "MUSANASE",
    id: 23,
    phoneNumber: "0789239966",
    memberId: "93ED63",
    members: 0,
    createdAt: "2021-04-16T14:18:29",
    level: 0,
  },
  {
    lastName: "Agnes",
    parentMemberId: "D36873",
    firstName: "INGABIRE",
    id: 24,
    phoneNumber: "0788624133",
    memberId: "A38223",
    members: 0,
    createdAt: "2021-04-16T14:20:39",
    level: 0,
  },
  {
    lastName: "Violette",
    parentMemberId: "A38523",
    firstName: "UMUTONI ",
    id: 25,
    phoneNumber: "0788813355",
    memberId: "737E23",
    members: 0,
    createdAt: "2021-04-16T14:25:16",
    level: 0,
  },
];

const _queryTreeSort = function (options) {
  let cfi, e, i, id, o, pid, rfi, ri, thisid, _i, _j, _len, _len1, _ref, _ref1;
  id = options.id || "id";
  pid = options.parentMemberId || "parentMemberId";
  ri = [];
  rfi = {};
  cfi = {};
  o = [];
  _ref = options.q;
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    e = _ref[i];
    rfi[e[id]] = i;
    if (cfi[e[pid]] == null) {
      cfi[e[pid]] = [];
    }
    cfi[e[pid]].push(options.q[i][id]);
  }
  _ref1 = options.q;
  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
    e = _ref1[_j];
    if (rfi[e[pid]] == null) {
      ri.push(e[id]);
    }
  }
  while (ri.length) {
    thisid = ri.splice(0, 1);
    o.push(options.q[rfi[thisid]]);
    if (cfi[thisid] != null) {
      ri = cfi[thisid].concat(ri);
    }
  }
  return o;
};

_queryTreeSort(members);
