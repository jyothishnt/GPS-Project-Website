import React, { Component } from 'react';
/*import { runInThisContext } from 'vm';
/*import ReactDOM from 'react-dom';
/*import React from 'react';*/


const list = [
    {
        title: 'GPSC1',
        url: 'https://microreact.org/project/rypwR0oi-',
        image: 'Cluster0.png',
        height: '220px',
        width: '150px',
        microreactStatus: 'available',
        num_GPSsamples: 504,
        ST: [202, 236, 237, 257, 271, 320, 420, 651, 652, 925, 1396, 1412, 1421, 1428, 1451, 1464, 1937, 2514, 2706, 2834, 2920, 2998, 3259, 3791, 4251, 4768, 5053, 5459, 6141, 6844, 7132, 7915, 8678, 9356, 9744, 9906, 9933, 10143, 10223, 10683, 10731, 10822, 10825, 10829, 11101, 11116, 11129, 11326, 11396, 11696, 12134, 12136, 12185, 12186, 12189, 12228, 12229, 12308, 12526, 12533, 12534, 12536, 12537, 12543, 12560, 12586, 12591, 12617, 12686, 12706, 12709, 12712, 12728, 12730, 12822, 12825, 12827, 13934, 13948],
        serotype: ['3', '6C', '14', '19A', '19F', '23F'],
        countries: ['Poland'],
        objectID: 0,
    },
    {
        title: 'GPSC2',
        url: 'https://microreact.org/project/HksMFKosZ',
        image: 'Cluster1.png',
        height: '60px',
        width: '90px',
        microreactStatus: 'available',
        num_GPSsamples: 782,
        ST: [217, 303, 611, 612, 615, 618, 2084, 2296, 3081, 3575, 3579, 3581, 5002, 5012, 5044, 5191, 5802, 6983, 8158, 8314, 9067, 9231, 9529, 10649, 10996, 11046, 11104, 11740, 11743, 11745, 12150, 12165, 12333, 12470, 12546, 12556, 12739, 12781],
        serotype: ['1'],
        countries: ['The Gambia'],
        objectID: 1,
      },
      {
        title: 'GPSC3',
        url: 'https://microreact.org/project/B12CSUCQb',
        image: 'Cluster2.png',
        height: '120px',
        width: '150px',
        microreactStatus: 'available',
        num_GPSsamples: 358,
        ST: [53, 60, 62, 100, 445, 496, 662, 673, 717, 1012, 1050, 2223, 2420, 2705, 3000, 3276, 3308, 3778, 3847, 6360, 7507, 8989, 9029, 9750, 10068, 10145, 10711, 10857, 10920, 11074, 11124, 11686, 12148, 12542, 12547, 12574, 12715, 12735, 12754, 12755, 12823, 13888, 13889, 13947],
        serotype: ['3', '8', '31', '11A', '15A', '18C', '22F', '23F', '33A', '33F'],
        objectID: 2,
      },
      {
        title: 'GPSC4',
        url: 'https://microreact.org/project/rJmWZBUXX',
        image: 'Cluster3.png',
        height: '70px',
        width: '90px',
        microreactStatus: 'available',
        num_GPSsamples: 203,
        ST: [199, 200, 201, 411, 416, 419, 645, 667, 668, 876, 1200, 1673, 1756, 1757, 1936, 2081, 2154, 2220, 2269, 2273, 2344, 2540, 3934, 8290, 9763, 12376, 12711, 12729, 12731],
        serotype: ['14', '15BC', '19A', '19B', '19F'],
        objectID: 3,
    },
    {
        title: 'GPSC5',
        url: 'https://microreact.org/project/r1JlObW2-',
        image: 'Cluster4.png',
        height: '150px',
        width: '130px',
        microreactStatus: 'available',
        num_GPSsamples: 453,
        ST: [172, 277, 337, 338, 361, 387, 988, 1131, 1150, 1373, 1447, 1526, 1535, 2218, 2345, 2372, 2777, 2904, 3163, 4028, 4104, 4293, 5242, 5547, 5814, 6140, 6849, 6980, 7096, 7480, 8197, 9488, 9913, 9914, 10149, 10150, 10542, 10599, 10603, 10650, 10652, 10724, 10732, 10744, 10767, 10809, 10817, 10889, 11119, 11704, 11715, 11716, 11717, 11899, 12126, 12164, 12327, 12329, 12352, 12525, 12541, 12580, 12593, 12594, 12672, 12742, 12761, 12835, 13873, 13916, 13919],
        serotype: ['3', '6A', '6C', '7B', '7C', '15BC', '17F', '19A', '19F', '23A', '23B', '23F', '29', '35B', '35D'],
        objectID: 4,
    },
    {
        title: 'GPSC6',
        url: 'https://microreact.org/project/SJlD_ujUW',
        image: 'Cluster5.png',
        height: '70px',
        width: '90px',
        microreactStatus: 'available',
        num_GPSsamples: 393,
        ST: [44, 143, 156, 162, 166, 379, 466, 608, 643, 671, 933, 1206, 1227, 1269, 1556, 1569, 1836, 1857, 2128, 2335, 2722, 2733, 3811, 4026, 7427, 7432, 7456, 8398, 8488, 9910, 9912, 10174, 10449, 10834, 11921, 12505, 12506, 12507, 12508, 12554, 12704, 12758, 12830, 12834, 12839, 13932, 13933],
        serotype: ['9V', '11A', '14', '15A', '15BC', '19A', '19F', '23A', '23B', '23F', '35B'],
        objectID: 5,
    },
    {
        title: 'GPSC7',
        url: 'https://microreact.org/project/Bkz5V7xmW',
        image: 'Cluster6.png',
        height: '80px',
        width: '140px',
        microreactStatus: 'available',
        num_GPSsamples: 166,
        ST: [33, 36, 37, 42, 264, 311, 355, 436, 438, 439, 507, 628, 629, 692, 945, 992, 1011, 1389, 1839, 1847, 2319, 5473, 7318, 7336, 7461, 8802, 9452, 9749, 9751, 10727, 11063, 12122, 12139, 12251, 12733, 12762, 12826, 13874],
        serotype: ['23A', '23B', '23F'],
        countries: [''],
        objectID: 6,
    },
    {
        title: 'GPSC8',
        url: 'https://microreact.org/project/S1ArzY5iW',
        image: 'Cluster7.png',
        height: '70px',
        width: '90px',
        microreactStatus: 'available',
        num_GPSsamples: 390,
        ST: [245, 289, 3339, 3404, 4219, 5659, 7050, 7222, 9935, 10999] ,
        serotype: ['5'],
        objectID: 7,
    },
          
    {
        title: 'GPSC9',
        url: 'https://microreact.org/project/ry_xet8oZ',
        image: 'Cluster8.png',
        height: '130px',
        width: '90px',
        microreactStatus: 'available',
        num_GPSsamples: 277,
        ST: [63, 782, 861, 1191, 2100, 2414, 2447, 2613, 2675, 2678, 3310, 3816, 4532, 4652, 4902, 4907, 5004, 5187, 5285, 5435, 6043, 7061, 7551, 7552, 7645, 8324, 9352, 9468, 9939, 10608, 10737, 10758, 10894, 11018, 11022, 11029, 11030, 11041, 11399, 11687, 12260, 12334, 12360, 12364, 12555, 12559, 12576, 12723, 12738, 12787, 13952],
        serotype: ['3', '14', '15A', '19A', '19F', '23B', '23F', '33F', 'NT'],
        objectID: 8,
    },
    {
        title: 'GPSC10',
        url: 'https://microreact.org/project/ByQzAE8m7',
        image: 'Cluster9.png',
        height: '80px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 287,
        ST: [230, 276, 319, 700, 1047, 1087, 1553, 2013, 2037, 2307, 2355, 2707, 3135, 3772, 3936, 4253, 4677, 5033, 5034, 5567, 6227, 6353, 6741, 8374, 8509, 8812, 8857, 9540, 10696, 10745, 10811, 10879, 10917, 10921, 11021, 11052, 11100, 11106, 11748, 11749, 12473, 12474, 12498, 12499, 12684, 12790, 12794, 12819, 13877, 13880, 13885, 13925],
        serotype: ['3', '7B', '10A', '14', '17F', '19A', '19F', '23A', '23F', '24'],
        objectID: 9,
    },
    {
        title: 'GPSC11',
        url: 'https://microreact.org/project/Sk9O_GrQb',
        image: 'Cluster10.png',
        height: '160px',
        width: '100px',
        microreactStatus: 'available',
        num_GPSsamples: 228,
        ST: [193, 410, 889, 1228, 1262, 1358, 2575, 2927, 3065, 3689, 4893, 4990, 5281, 5848, 6031, 6237, 6444, 7068, 7435, 7436, 7600, 7619, 7723, 9516, 9517, 9692, 9975, 10065, 10227, 10721, 10774, 10783, 10854, 10885, 10951, 11003, 11023, 11031, 11035, 11059, 11730, 11760, 11920, 12138, 12517, 12518, 12602, 12838, 13871],
        serotype: ['3', '6A', '9N', '11A', '14', '15A', '15BC', '17F', '18A', '18B', '18C', '19A', '19F', '21', '33C'],
        objectID: 10,
    },
    {
        title: 'GPSC12',
        url: 'https://microreact.org/project/ryGSGFIoW',
        image: 'Cluster11.png',
        height: '80px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 205,
        ST: [180, 505, 2049, 3798, 4655, 4735, 6012, 6013, 9060, 10179, 10768, 11873, 12206, 12319, 12734],
        serotype: ['3'],
        objectID: 11,
    },
    {
        title: 'GPSC13',
        url: 'https://microreact.org/project/BJ1Ki8on-',
        image: 'Cluster12.png',
        height: '160px',
        width: '250px',
        microreactStatus: 'available',
        num_GPSsamples: 351,
        ST: [471, 473, 497, 660, 690, 1096, 1717, 1876, 2285, 2295, 3822, 4087, 4957, 5073, 5470, 5501, 5611, 5679, 6372, 6373, 6382, 6390, 7073, 7310, 7313, 7423, 7736, 7744, 8003, 8696, 9506, 9532, 9533, 9575, 9915, 9920, 9923, 10630, 10664, 10671, 10704, 10713, 10717, 10718, 10736, 10748, 10750, 10773, 10844, 10847, 10888, 10898, 10915, 10934, 10948, 10955, 11042, 11099, 11121, 11123, 11125, 12225, 12227, 12338, 12493, 12503, 12516, 12529, 12545, 12548, 12561, 12568, 12570, 12605, 13901, 13902, 13922],
        serotype: ['6A', '6B', '6C', '6D', '23F', '29', '35B'],
        objectID: 12,
      },
      {
        title: 'GPSC14',
        url: 'https://microreact.org/project/HJx66R4h-',
        image: 'Cluster13.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 338,
        ST: [240, 242, 805, 880, 1444, 1445, 2059, 2651, 3140, 5653, 6279, 6285, 6305, 6344, 8299, 8327, 8334, 8335, 8337, 8716, 8741, 9911, 9932, 10571, 10604, 10653, 10735, 10738, 10791, 10796, 10816, 10818, 10859, 10936, 11056, 11069, 11088, 11092, 12147, 12347, 12405, 12562, 12612],
        serotype: ['6B', '11A', '14', '19A', '19F', '23F'],
        objectID: 13,
      },
      {
          title: 'GPSC15',
          url: 'https://microreact.org/project/ByptxShib',
          image: 'Cluster14.png',
          height: '70px',
          width: '70px',
          microreactStatus: 'available',
          num_GPSsamples: 221,
          ST: [191, 1589, 5782, 10162, 10765, 11728],
          serotype: ['7F', '19F'],
          objectID: 14,
      },
      {
        title: 'GPSC16',
        url: 'https://microreact.org/project/SJPsrFQmQ',
        image: 'Cluster15.png',
        height: '110px',
          width: '140px',
        microreactStatus: 'available',
        num_GPSsamples: 231,
        ST: [66, 67, 70, 71, 72, 73, 81, 83, 282, 517, 632, 737, 1591, 2216, 2346, 3800, 4913, 5593, 6216, 7452, 8809, 9257, 9747, 9904, 9905, 10869, 11683, 12173, 12175, 12483, 12487, 12703, 12837, 12840, 13878, 13939],
        serotype: ['6A', '7C', '9N', '13', '14', '24', '15A', '15BC', '18C', '19A', '19F', '23F', '40',],
        objectID: 15,
    }, 
    {
          title: 'GPSC17',
          url: 'https://microreact.org/project/HkGOXp7BZ',
          image: 'Cluster16.png',
          height: '70px',
          width: '80px',
          microreactStatus: 'available',
          num_GPSsamples: 320,
          ST: [2057, 2062, 4869, 4872, 4873, 6121, 6255, 6258, 6262, 6266, 6268, 7056, 7057, 7072, 7895, 7897, 7899, 7903, 8303, 8307, 9457, 9900, 10628, 10634, 10690, 10693, 10741, 10756, 10790, 10843, 10870, 10952, 11065, 11076, 11085, 11114, 11122, 11677, 11678, 12152, 12154, 12226, 12521, 12564],
          serotype: ['9L', '19A', '19F'],
          objectID: 16,
    },
    {
          title: 'GPSC18',
          url: 'https://microreact.org/project/H1Iga1q77',
          image: 'Cluster17.png',
          height: '150px',
          width: '150px',
          microreactStatus: 'available',
          num_GPSsamples: 228,
          ST: [9, 13, 15, 16, 25, 423, 721, 733, 984, 1201, 1492, 1797, 2258, 2652, 3162, 3907, 4191, 5468, 6144, 6809, 7448, 7485, 8006, 8753, 9054, 9898, 9899, 10747, 10814, 11675, 12232, 12552, 12699, 12836, 13867, 13931],
          serotype: ['7C', '14', '16F', '19A', '19F'],
          objectID: 17,
    },
    {
        title: 'GPSC19',
        url: 'https://microreact.org/project/rknjJ_IQW',
        image: 'Cluster18.png',
        height: '70px',
        width: '80px',
        microreactStatus: 'available',
        num_GPSsamples: 118,
        ST: [433, 1337, 1955, 4334, 4553, 7314, 9456, 10163, 10164, 10226, 12708, 12710],
        serotype: ['22F', '23B', '31', '42'],
        objectID: 18,
    },
    {
        title: 'GPSC20',
        url: 'https://microreact.org/project/SJym0hUmZ',
        image: 'Cluster19.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 92,
        ST: [802, 6120, 6856, 9530, 9535, 10644, 10887, 12355, 12520, 12724, 12842, 12845],
        serotype: ['23F'],
        objectID: 19,
    },
    {
        title: 'GPSC21',
        url: 'https://microreact.org/project/Hy58vXxXZ',
        image: 'Cluster20.png',
        height: '70px',
        width: '90px',
        microreactStatus: 'available',
        num_GPSsamples: 242,
        ST: [347, 2715, 5179, 6095, 6277, 7142, 9547, 9548, 9927, 9930, 10536, 10553, 10572, 10598, 10619, 10622, 10632, 10655, 10709, 10752, 10784, 10794, 10798, 10842, 10896, 10932, 10933, 10935, 10941, 10943, 10949, 10974, 10988, 11086, 11115, 11747, 12130, 12146, 12157, 12183, 12332, 12339, 12585, 12598, 12601, 12609, 12700, 12740],
        serotype: ['14', '19A', '19F'],
        objectID: 20,
    },
    {
        title: 'GPSC22',
        url: 'https://microreact.org/project/BJgsPEtjZ',
        image: 'Cluster21.png',
        height: '130px',
        width: '130px',
        microreactStatus: 'available',
        num_GPSsamples: 240,
        ST: [840, 2052, 4984, 5408, 5722, 5902, 8817, 9518, 10545, 10547, 10544, 10597, 10602, 10654, 10677, 10734, 10753, 10761, 10856, 10861, 10874, 10906, 10968, 10991, 11060, 11078, 11083, 11108, 11110, 11724, 11725, 11726, 11727, 11732, 11733, 11778, 12179, 12293, 12294, 12297, 12309, 12313, 12315, 12324, 12331, 12492, 12540, 12565, 12575, 12583, 12616],
        serotype: ['6A', '9V', '11A', '15A', '19A', '19F', '20A', '35A'],
        objectID: 21,
    },
    {
        title: 'GPSC23',
        url: 'https://microreact.org/project/SyGNtlfa-',
        image: 'Cluster22.png',
        height: '150px',
        width: '130px',
        microreactStatus: 'available',
        num_GPSsamples: 180,
        ST: [90, 93, 94, 95, 145, 146, 273, 384, 640, 641, 1121, 1129, 1394, 1509, 1518, 1624, 1661, 1792, 2156, 2456, 3051, 4039, 4236, 5628, 6410, 6457, 7416, 7417, 7418, 7460, 8052, 10904, 10912, 10965, 11237, 11305, 11700, 12495, 12721, 12732, 12756, 12757, 13905, 13942],
        serotype: ['6A', '6B', '19A'],
        objectID: 22,
    },
    {
        title: 'GPSC24',
        url: 'https://microreact.org/project/BJZf_SUXQ',
        image: 'Cluster23.png',
        height: '80px',
        width: '80px',
        microreactStatus: 'available',
        num_GPSsamples: 86,
        ST: [138, 176, 469, 639, 2459, 4241, 4598, 6389, 6774, 7430, 10723, 10725, 10742, 12172, 12358, 12760, 12763],
        serotype: ['6A', '6B', '6C', '19A'],
        objectID: 23,
    },
    {
        title: 'GPSC25',
        url: 'https://microreact.org/project/rycuXeFj-',
        image: 'Cluster24.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 112,
        ST: [4209, 7522, 8687, 11019, 12615],
        serotype: ['15BC'],
        objectID: 24,
    },
    {
          title: 'GPSC26',
          url: 'https://microreact.org/project/HkhQRvUXb',
          image: 'Cluster25.png',
          height: '70px',
          width: '70px',
          microreactStatus: 'available',
          num_GPSsamples: 195,
          ST: [989, 3334, 3377, 4187, 5026, 6058, 7110, 8798, 9544, 11027, 11075, 11105, 11780, 12342, 12784, 12813],
          serotype: ['9V', '12A', '12F', '40', '46'],
          objectID: 25,
    },
    {
            title: 'GPSC27',
            url: 'https://microreact.org/project/S14ez4bQZ',
            image: 'Cluster26.png',
            height: '70px',
            width: '90px',
            microreactStatus: 'available',
            num_GPSsamples: 118,
            ST: [205, 206, 244, 246, 247, 695, 853, 899, 2365, 5660, 9557, 9561, 9934, 10612, 12714],
            serotype: ['4', '14', '19A', '19F'],
            objectID: 26,
    },
    {
        title: 'GPSC28',
        url: '',
        image: 'Cluster27.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 'unknown',
        objectID: 27,
    },
    {
        title: 'GPSC29',
        url: '',
        image: 'Cluster28.png',
        height: '70px',
        width: '100px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 25,
        ST: [327, 395, 1398, 1692, 2611, 9451, 9453, 9743, 11310, 13915],
        serotype: ['6A', '6B', '6C', '19F'],
        objectID: 28,
    },
    {
        title: 'GPSC30',
        url: 'https://microreact.org/project/HytjLvcsZ',
        image: 'Cluster29.png',
        height: '80px',
        width: '90px',
        microreactStatus: 'available',
        num_GPSsamples: 120,
        ST: [3735, 4084, 4900, 5521, 7055, 7062, 7533, 8151, 8157, 8714, 8774, 9174, 9475, 10177, 10555, 10586, 10810, 10892, 10910, 10997, 11050, 11690, 12133, 12180, 12182, 12245, 12491, 12600],
        serotype: ['6A', '6B', '9V', '10A', '10B', '10F', '19F', '33D', '35B', '35F'],
        objectID: 29,
    },
    {
        title: 'GPSC31',
        url: 'https://microreact.org/project/B1xe1sUsb',
        image: 'Cluster30.png',
        height: '65px',
        width: '65px',
        microreactStatus: 'available',
        num_GPSsamples: 111,
        ST: [227, 304, 306, 4752, 5316, 5784, 13923],
        serotype: ['1'],
        objectID: 30,
    },
    {
        title: 'GPSC32',
        url: 'https://microreact.org/project/HkqubCwiW',
        image: 'Cluster31.png',
        height: '90px',
        width: '150px',
        microreactStatus: 'available',
        num_GPSsamples: 124,
        ST: [218, 220, 405, 1176, 2178, 2233, 2331, 3544, 4666, 5455, 10663, 11901],
        serotype: ['7F', '8', '9N', '12F'],
        objectID: 31,
    },
    {
        title: 'GPSC33',
        url: 'https://microreact.org/project/ByLWkElQ-',
        image: 'Cluster32.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 170,
        ST: [4088, 5072, 7888, 9568, 10543, 10548, 10592, 10635, 10651, 10667, 10670, 10800, 10853, 10862, 10950, 10981, 11055, 11072, 11080, 11089, 11090, 11111, 11113, 11770, 11771, 11772, 12137, 12143, 12550, 12551, 12592, 12743],
        serotype: ['16F', '19A', '19F'],
        countries: ['Malawi', 'South Africa'],
        objectID: 32,
      },
      {
        title: 'GPSC34',
        url: 'https://microreact.org/project/HyHUNZ6jb',
        image: 'Cluster33.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 151,
        ST: [1778, 3583, 4038, 4832, 5641, 7067, 7319, 9546, 10544, 10615, 10662, 10679, 10680, 10697, 10710, 10865, 10940, 10960, 10963, 10982, 10987, 11064, 11746, 12588, 12597, 12719, 12805],
        serotype: ['15A', '22F', '23F', '34'],
        countries: [''],
        objectID: 33,
      },
      {
        title: 'GPSC35',
        url: 'https://microreact.org/project/H1GHIrno-',
        image: 'Cluster34.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 41,
        ST: [97, 585, 1282, 1551, 4753, 8821, 8825, 10938, 10978, 12282, 12741],
        serotype: ['10A'],
        countries: [''],
        objectID: 34,
      },
      {
        title: 'GPSC36',
        url: 'https://microreact.org/project/Bk8-3tLib',
        image: 'Cluster35.png',
        height: '100px',
        width: '90px',
        microreactStatus: 'available',
        num_GPSsamples: 40,
        ST: [446, 498, 816, 1635, 2068, 10864, 10919, 10954, 12705],
        serotype: ['10A', '35F'],
        countries: [''],
        objectID: 35,
      },
      {
        title: 'GPSC37',
        url: 'https://microreact.org/project/SJ2Gt19m7',
        image: 'cluster37.png',
        height: '120px',
        width: '140px',
        microreactStatus: 'available',
        num_GPSsamples: 148,
        ST: [2421, 2909, 4929, 6290, 6393, 6527, 7084, 7306, 8379, 8391, 8771, 9902, 10659, 10707, 10743, 10751, 10760, 10763, 10770, 10775, 10788, 10815, 10959, 10976, 11067, 11695, 12557, 12607],
        serotype: ['6B', '23F'],
        countries: [''],
        objectID: 36,
      },
      {
        title: 'GPSC38',
        url: 'https://microreact.org/project/rkhQPSLmX',
        image: 'cluster38.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 92,
        ST: [310, 393, 755, 5475, 6355, 9325, 11082, 12764, 13935, 13945],
        serotype: ['38'],
        countries: [''],
        objectID: 37,
      },
      {
        title: 'GPSC39',
        url: 'https://microreact.org/project/H1QOsrLmm',
        image: 'Cluster39.png',
        height: '120px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 67,
        ST: [124, 129, 656, 2215, 9917, 10831],
        serotype: ['14'],
        countries: [''],
        objectID: 38,
      },
      {
        title: 'GPSC40',
        url: 'https://microreact.org/project/HkHZKtosZ',
        image: 'Cluster40.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 112,
        ST: [910, 5266, 7054, 9459, 9470, 9522, 9903, 10600, 10605, 10626, 10636, 10638, 10939, 10983, 11057, 11697, 12158, 12162, 12252, 12613, 12844],
        serotype: ['6B', '10A', '11A', '15A', '15BC', '17F', '18C', '22A', '23F'],
        countries: [''],
        objectID: 39,
      },
      {
        title: 'GPSC41',
        url: 'https://microreact.org/project/By9Dope3W',
        image: 'Cluster41.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 125,
        ST: [1094, 4941, 7251, 8690, 8766, 9909, 10656, 10691, 10708, 10729, 10749, 10785, 10820, 11091, 11117, 12538, 12566, 12569],
        serotype: ['6A', '6B', '23B'],
        countries: [''],
        objectID: 40,
      },
      {
        title: 'GPSC42',
        url: '',
        image: 'cluster42.png',
        height: '140px',
        width: '140px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 'unknown',
        ST: '',
        serotype: '',
        countries: '',
        objectID: 41,
      },
      {
        title: 'GPSC43',
        url: 'https://microreact.org/project/Sk9ISB8QX',
        image: 'cluster43.png',
        height: '100px',
        width: '120px',
        microreactStatus: 'available',
        num_GPSsamples: 111,
        ST: [239, 280, 1263, 2039, 3214, 4128, 4661, 4745, 5492, 5719, 6011, 6053, 7664, 10901, 11739, 11758, 12304, 12404, 13912, 13937],
        serotype: ['3', '9V', '11A', '18C', '18F', '19A', '20B', '35A'],
        countries: [''],
        objectID: 42,
      },
      {
        title: 'GPSC44',
        url: '',
        image: 'Cluster44.png',
        height: '60px',
        width: '90px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 49,
        ST: [177, 179, 646, 3013, 7431, 12317, 12510, 12512, 12513, 13906, 13911, 13943],
        serotype: ['19F', '24'],
        countries: [''],
        objectID: 43,
      },
      {
        title: 'GPSC45',
        url: '',
        image: 'Cluster45.png',
        height: '100px',
        width: '90px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 25,
        ST: [547, 743, 1439, 1884, 2832, 3783, 4560, 5447, 10157, 12204, 12373],
        serotype: ['34'],
        countries: [''],
        objectID: 44,
      },
      {
        title: 'GPSC46',
        url: '',
        image: 'cluster46.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 33,
        ST: [30, 570, 1500, 3450, 10584, 10673, 10733, 10858, 11054, 11079, 11120, 12464, 13949],
        serotype: ['16F', '23F'],
        countries: [''],
        objectID: 45,
      },
      {
        title: 'GPSC47',
        url: 'https://microreact.org/project/SJP_UBUXm',
        image: 'cluster47.png',
        height: '80px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 101,
        ST: [149, 315, 386, 457, 2040, 3324, 4220, 4378, 5060, 6046, 6361, 6984, 8599, 9600, 10672, 10681, 10966, 11315, 13890],
        serotype: ['6A', '6B', '6C', '9A', '9V'],
        countries: [''],
        objectID: 46,
      },
      {
        title: 'GPSC48',
        url: 'https://microreact.org/project/HJ4ltrLQ7',
        image: 'cluster48.png',
        height: '80px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 83,
        ST: [346, 1203, 1835, 3201, 3557, 7052, 12127, 12614, 12816],
        serotype: ['15BC', '19F'],
        countries: [''],
        objectID: 47,
      },
      {
        title: 'GPSC49',
        url: '',
        image: 'cluster49.png',
        height: '80px',
        width: '70px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 36,
        ST: [392, 440, 739, 6189, 10564, 10962, 11708, 13918],
        serotype: ['17F', '23F'],
        countries: [''],
        objectID: 48,
      },
      {
        title: 'GPSC50',
        url: 'https://microreact.org/project/HJMcUvcj-',
        image: 'cluster50.png',
        height: '100px',
        width: '90px',
        microreactStatus: 'available',
        num_GPSsamples: 61,
        ST: [113, 123, 133, 638, 1073, 1515, 1516, 1711, 1844, 3060, 9511, 9512, 9513, 9565, 9921, 10833, 11900],
        serotype: ['13', '17F', '18B', '18C'],
        countries: [''],
        objectID: 49,
      },
      {
        title: 'GPSC51',
        url: 'https://microreact.org/project/SkSnuK8sb',
        image: 'cluster51.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 94,
        ST: [458, 7545, 11128, 11332, 12142, 12590, 12606],
        serotype: ['3'],
        countries: [''],
        objectID: 50,
      },
      {
        title: 'GPSC52',
        url: 'https://microreact.org/project/HJc2XCssZ',
        image: 'cluster52.png',
        height: '80px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 100,
        ST: [5647, 8713, 10595, 10702, 10849, 10937, 11757, 12581, 12595],
        serotype: ['6B','13'],
        countries: [''],
        objectID: 51,
      },
      {
        title: 'GPSC53',
        url: 'https://microreact.org/project/Hkas03L7b',
        image: 'cluster53.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 99,
        ST: [847, 5262, 11714, 12191, 12292],
        serotype: ['19A'],
        countries: [''],
        objectID: 52,
      },
      {
        title: 'GPSC54',
        url: '',
        image: 'cluster54.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 97,
        ST: [706, 3454, 4881, 5778, 6314, 6317, 6530, 7058, 7059, 7889, 8763, 9473, 10688, 10789, 10797, 10876, 10895, 10944, 11680, 12326, 12532, 12558, 12567],
        serotype: ['9V', '23F', '28F'],
        countries: [''],
        objectID: 53,
      },
      {
        title: 'GPSC55',
        url: '',
        image: 'cluster55.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 90,
        ST: [3524, 3774, 3776, 13950],
        serotype: ['12F'],
        countries: ['Israel'],
        objectID: 54,
      },
      {
        title: 'GPSC56',
        url: '',
        image: 'cluster56.png',
        height: '100px',
        width: '90px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 'unknown',
        ST: [2416, 5027, 5068, 7048, 7141, 8672, 9531, 10675, 10792, 11767, 11768, 11769, 11915, 12151, 12820, 12951],
        serotype: ['7F', '12F', '18C'],
        countries: [''],
        objectID: 55,
      },
      {
        title: 'GPSC57',
        url: 'https://microreact.org/project/rykFUvqs-',
        image: 'cluster57.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 56,
        ST: [444, 568, 1111, 1766, 1994, 3358, 3548, 6029, 8289, 10479, 10821, 12144, 12582, 12682],
        serotype: ['31'],
        countries: [''],
        objectID: 56,
      },
      {
        title: 'GPSC58',
        url: 'https://microreact.org/project/Sk9Wp2IXb',
        image: 'cluster58.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 88,
        ST: [4036, 5516, 5715, 5716, 5734, 10546, 10613, 11689, 11691, 11762],
        serotype: ['6A', '6B', '19A'],
        countries: ['The Gambia'],
        objectID: 57,
      },
      {
        title: 'GPSC59',
        url: 'https://microreact.org/project/H1wrUPqoZ',
        image: 'cluster59.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 37,
        ST: [558, 10175, 10222, 10493, 10766, 12713, 12809],
        serotype: ['35B', '35D'],
        countries: [''],
        objectID: 58,
      },
      {
        title: 'GPSC60',
        url: '',
        image: 'cluster60.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 13,
        ST: [448, 3265, 7593, 9810],
        serotype: ['NT'],
        countries: [''],
        objectID: 59,
      },
      {
        title: 'GPSC61',
        url: 'https://microreact.org/project/SJEp9l6sW',
        image: 'cluster61.png',
        height: '120px',
        width: '140px',
        microreactStatus: 'available',
        num_GPSsamples: 40,
        ST: [214, 698, 1794, 4160, 5469, 5474, 6403, 8829, 8835, 9526, 9537, 9926, 10593, 10668, 10689, 10715, 10781, 10946, 11097, 11737, 11738, 11744, 12579, 13868],
        serotype: ['17F', '18A', '20A', '20B', '22F', '35A', '35C'],
        countries: [],
        objectID: 60,
      }, 
      {
        title: 'GPSC62',
        url: 'https://microreact.org/project/rJw1qHUXQ',
        image: 'cluster62.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 79,
        ST: [913, 914, 1736, 1737, 4940, 6547, 9489, 10801],
        serotype: ['6A', '6B'],
        countries: [''],
        objectID: 61,
      },
      {
        title: 'GPSC63',
        url: '',
        image: 'cluster63.png',
        height: '130px',
        width: '90px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 3,
        ST: [4377, 6767, 6768],
        serotype: ['6A'],
        countries: ['China'],
        objectID: 62,
      },
      {
        title: 'GPSC64',
        url: '',
        image: 'cluster64.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 'unknown',
        ST: [65, 460, 9001, 10830, 12759],
        serotype: ['6A'],
        countries: [''],
        objectID: 63,
      },
      {
        title: 'GPSC65',
        url: '',
        image: 'cluster65.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 'unknown',
        ST: [2053],
        serotype: ['13', '19A'],
        countries: ['Malawi'],
        objectID: 64,
      },
      {
        title: 'GPSC66',
        url: '',
        image: 'cluster66.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 'unknown',
        ST: [],
        serotype: [''],
        countries: [''],
        objectID: 65,
      },
      {
        title: 'GPSC67',
        url: 'https://microreact.org/project/SyUPIPqj-',
        image: 'cluster67.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 61,
        ST: [1233, 1381, 4350, 6145, 6239, 8316, 10779, 10994, 12544, 12596],
        serotype: ['18B', '18C', '21'],
        countries: [''],
        objectID: 66,
      },
      {
        title: 'GPSC68',
        url: 'https://microreact.org/project/SJ3j8q8i-',
        image: 'cluster68.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 66,
        ST: [102, 542, 1016, 2192, 6236, 6245, 7262, 8317, 8681, 9280, 9484, 10746, 11096, 11698, 11699, 12141, 12584],
        serotype: ['17F', '18B', '18C'],
        countries: [],
        objectID: 67,
      },
      {
        title: 'GPSC69',
        url: '',
        image: 'cluster69.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 25,
        ST: [2647, 3824, 4965, 5448, 5452, 5453, 6011, 7429, 9762],
        serotype: ['15A', '19A'],
        countries: [''],
        objectID: 68,
      },
      {
        title: 'GPSC70',
        url: 'https://microreact.org/project/SyiyYsLs-',
        image: 'cluster70.png',
        height: '120px',
        width: '90px',
        microreactStatus: 'available',
        num_GPSsamples: 32,
        ST: [1221, 7026, 13938, 13944, 13954],
        serotype: ['4'],
        countries: [],
        objectID: 69,
      },
      {
        title: 'GPSC71',
        url: 'https://microreact.org/project/B10oAgpsZ',
        image: 'cluster71.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 30,
        ST: [5103, 11735],
        serotype: ['21'],
        countries: [''],
        objectID: 70,
      },
      {
        title: 'GPSC72',
        url: 'https://microreact.org/project/B1ygoqIoW',
        image: 'cluster72.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 57,
        ST: [198, 3329, 7425, 7426, 10777, 11721, 12689, 12811, 13881],
        serotype: ['35B', '35D'],
        countries: [''],
        objectID: 71,
      },
      {
        title: 'GPSC73',
        url: '',
        image: 'cluster73.png',
        height: '100px',
        width: '90px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 6,
        ST: [99],
        serotype: ['11A'],
        countries: ['China'],
        objectID: 72,
      },
      {
        title: 'GPSC74',
        url: 'https://microreact.org/project/BylB1WTi-',
        image: 'cluster74.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 29,
        ST: [],
        serotype: [],
        countries: '',
        objectID: 73,
      },
      {
        title: 'GPSC75',
        url: 'https://microreact.org/project/SktASv9sZ',
        image: 'cluster75.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 4,
        ST: [452],
        serotype: ['35B'],
        countries: ['USA'],
        objectID: 74,
      },
      {
        title: 'GPSC76',
        url: 'https://microreact.org/project/rkM1do8j-',
        image: 'cluster76.png',
        height: '100px',
        width: '90px',
        microreactStatus: 'available',
        num_GPSsamples: 37,
        ST: [76, 490, 681, 793, 1092, 3403, 4363, 4724, 6808, 10913, 11693],
        serotype: ['6A', '6B', '6C', '19F'],
        countries: [],
        objectID: 75,
      },
      {
        title: 'GPSC77',
        url: '',
        image: 'cluster77.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 'unknown',
        ST: [185, 7307, 7738, 10661, 10686, 10720, 10726, 10845, 10846, 10871, 11719, 12528],
        serotype: ['6A', '6B'],
        countries: ['South Africa'],
        objectID: 76,
      },
      {
        title: 'GPSC78',
        url: 'https://microreact.org/project/HkY6Bw5ib',
        image: 'cluster78.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 27,
        ST: [5511, 5706, 9931, 12291],
        serotype: ['23B'],
        countries: ['The Gambia', 'Togo'],
        objectID: 77,
      },
      {
        title: 'GPSC79',
        url: 'https://microreact.org/project/B1h3TK5oW',
        image: 'cluster79.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 52,
        ST: [5410, 7071, 7370, 7376, 12539, 12571],
        serotype: ['4', '14', '19A'],
        countries: [''],
        objectID: 78,
      },
      {
        title: 'GPSC80',
        url: 'https://microreact.org/project/SyZpl-6i-',
        image: 'cluster80.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 26,
        ST: [917, 10594, 10618, 10629, 10903, 11711, 11712, 12312, 12749],
        serotype: ['13', '15A', '16F', '19A', '19F', '7C'],
        countries: ['The Gambia'],
        objectID: 79,
      },
      {
        title: 'GPSC81',
        url: 'https://microreact.org/project/r1mst_1hW',
        image: 'cluster81.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 38,
        ST: [344, 2315, 4047, 7611, 9809, 10241, 10993, 11084, 11093, 11731, 11878, 12720],
        serotype: ['NT'],
        countries: [],
        objectID: 80,
      },
      {
        title: 'GPSC82',
        url: 'https://microreact.org/project/ByJojnwjb',
        image: 'cluster82.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 6,
        ST: [982, 4384, 12378],
        serotype: ['6A', '6C'],
        countries: [''],
        objectID: 81,
      },
      {
        title: 'GPSC83',
        url: 'https://microreact.org/project/H1Sq-Zpj-',
        image: 'cluster83.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 25,
        ST: [232, 260, 378, 1220, 1377, 6014, 7369, 11931],
        serotype: ['3'],
        countries: [],
        objectID: 82,
      },
      {
        title: 'GPSC84',
        url: 'https://microreact.org/project/B1tsHP9s-',
        image: 'cluster84.png',
        height: '90px',
        width: '180px',
        microreactStatus: 'available',
        num_GPSsamples: 24,
        ST: [2014, 2931, 3518, 4194, 5702, 7526, 7622, 10589, 10669, 11013, 11017, 11034, 12307, 12725, 12789, 13865, 13936],
        serotype: ['19A', '19F'],
        countries: [''],
        objectID: 83,
      },
      {
        title: 'GPSC85',
        url: 'https://microreact.org/project/HJi8RnPj-',
        image: 'cluster85.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 24,
        ST: [1871, 4424, 5726, 5964, 10625, 11010, 11902, 12800, 13921, 13929],
        serotype: ['9V', '11A', '20A', '35C'],
        countries: [],
        objectID: 84,
      },
      {
        title: 'GPSC86',
        url: 'https://microreact.org/project/HJt-MZTs-',
        image: 'cluster86.png',
        height: '90px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 24,
        ST: [2036, 2213, 2712, 9438, 9554, 10757, 10839, 11000, 11024, 12744, 13941],
        serotype: ['4'],
        countries: [],
        objectID: 85,
      },
      {
        title: 'GPSC87',
        url: '',
        image: 'cluster87.png',
        height: '70px',
        width: '80px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 'unknown',
        ST: [],
        serotype: [],
        countries: [''],
        objectID: 86,
      },
      {
        title: 'GPSC88',
        url: '',
        image: 'cluster88.png',
        height: '120px',
        width: '90px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 'unknown',
        ST: [1264, 1735, 4108, 5509, 6985, 9486, 11702, 11703, 11705, 12316, 12377, 12799],
        serotype: ['9L', '19A', '15BC', '46'],
        countries: [],
        objectID: 87,
      },
      {
        title: 'GPSC89',
        url: 'https://microreact.org/project/H1gLyIco-',
        image: 'cluster89.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 22,
        ST: [1292, 1379, 2064, 9455],
        serotype: ['6C'],
        countries: [],
        objectID: 88,
      },
      {
        title: 'GPSC90',
        url: 'https://microreact.org/project/HJ_VIDco-',
        image: 'cluster90.png',
        height: '100px',
        width: '90px',
        microreactStatus: 'available',
        num_GPSsamples: 39,
        ST: [7860, 8326, 8328, 8332, 8660, 9928, 10558, 10641, 10648, 10678, 10703, 10714, 10827, 11070, 11109, 11118, 11681, 12145, 12522],
        serotype: ['14', '15BC', '19A', '19F'],
        countries: ['South Africa'],
        objectID: 89,
      },
      {
        title: 'GPSC91',
        url: 'https://microreact.org/project/r1ijxccjZ',
        image: 'cluster91.png',
        height: '80px',
        width: '120px',
        microreactStatus: 'available',
        num_GPSsamples: 27,
        ST: [373, 5097, 8958, 9574, 10992, 11012],
        serotype: ['24', '40', '19B', '23F', '35B', '35D'],
        countries: [],
        objectID: 90,
      },
      {
        title: 'GPSC93',
        url: 'https://microreact.org/project/BkwXIw9oZ',
        image: 'cluster93.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 38,
        ST: [4956, 8838, 10639, 11126, 11713],
        serotype: ['7C'],
        countries: ['South Africa'],
        objectID: 91,
      },
      {
        title: 'GPSC94',
        url: 'https://microreact.org/project/ByiHU1IzW',
        image: 'cluster94.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 37,
        ST: [2174, 6857, 9509, 10607, 10905, 11718, 12238],
        serotype: ['10A', '19A', '19F', '23F'],
        countries: [],
        objectID: 92,
      },
      {
        title: 'GPSC97',
        url: 'https://microreact.org/project/rJE9Sw9oZ',
        image: 'cluster97.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 23,
        ST: [376, 1339, 2268, 2270, 8207, 10159, 10178],
        serotype: ['6A', '19A'],
        countries: ['USA'],
        objectID: 93,
      },
      {
        title: 'GPSC103',
        url: 'https://microreact.org/project/HJvzIw9sb',
        image: 'cluster103.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 32,
        ST: [3407, 10778, 10805, 10908, 11764],
        serotype: ['14', '16F', '19F'],
        countries: ['The Gambia'],
        objectID: 94,
      },
      {
        title: 'GPSC105',
        url: 'https://microreact.org/project/ryeeUDcsZ',
        image: 'cluster105.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 30,
        ST: [5449, 5623, 5625, 5626, 6148, 6348, 7433, 7457, 8008],
        serotype: ['6A', '6B', '6D'],
        countries: ['Peru'],
        objectID: 95,
      },
      {
        title: 'GPSC108',
        url: 'https://microreact.org/project/HkEhVsDsb',
        image: 'cluster108.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 29,
        ST: [915, 9487, 9938],
        serotype: ['14'],
        countries: ['Senegal', 'The Gambia', 'USA'],
        objectID: 96,
      },
      {
        title: 'GPSC115',
        url: 'https://microreact.org/project/SJhdAkKsW',
        image: 'cluster115.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 26,
        ST: [],
        serotype: ['6B'],
        countries: ['Brazil', 'Ghana', 'Niger', 'Peru', 'Poland', 'The Gambia', 'USA'],
        objectID: 97,
      },
      {
        title: 'GPSC117',
        url: 'https://microreact.org/project/rJHnrDqjb',
        image: 'cluster117.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 26,
        ST: [6103, 11755, 11756, 12266],
        serotype: ['38'],
        countries: ['Malawi', 'The Gambia'],
        objectID: 98,
      },
      {
        title: 'GPSC131',
        url: 'https://microreact.org/project/rJgQmbpsb',
        image: 'cluster131.png',
        height: '60px',
        width: '80px',
        microreactStatus: 'available',
        num_GPSsamples: 22,
        ST: [766, 3669, 8495, 13869, 13875],
        serotype: ['15BC'],
        countries: ['Brazil', 'Peru', 'South Africa', 'USA'],
        objectID: 99,
      },
  ];

const matches = searchTerm => item =>
    item.title.match(RegExp(searchTerm + '\\b'));

const isSearched = searchTerm => item =>
    item.title.toLowerCase().match(searchTerm.toLowerCase());

const microStatus = searchTerm => item =>
    item.microreactStatus.toLowerCase().match(searchTerm.toLowerCase());

const seroSearch = searchTerm => item =>
    item.serotype.some.toLowerCase().match(searchTerm.toLowerCase());


class GpsApp extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          /*show: true,*/
          list,
          searchTerm: 'GPS',
          category: 'title',
        };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value });
      }

    handleChange(event) {
        this.setState({category: event.target.value});
      }

    render() {

        const {searchTerm, list, category} = this.state;
    	return (
        <div className="container">
        <Dropdown
          value={category}
          onChange={this.handleChange}
          
        >
        </Dropdown>
        
        <Serotypedropdown
            value={searchTerm}
            onChange={this.onSearchChange}
            choice={category}
        >
        </Serotypedropdown>
        <Microdropdown
            value={searchTerm}
            onChange={this.onSearchChange}
            choice={category}
        >
        </Microdropdown>
        <Search 
          value={searchTerm}
          /*onChange={this.handleChange}*/
          onChange={this.onSearchChange}
          choice={category}
        >
        </Search>
            
        <Table
            list={list}
            pattern={searchTerm}
            value={category}
        />
        {/*<Datatable
        list={list}
        pattern={searchTerm}
        value={category}
        >
        </Datatable> */}
    	</div>
        
        );
    }
}

class Search extends Component {
    render() {
      const { value, onChange, children, pattern, searchTerm, list, choice } = this.props;
      if (choice.includes('title'||'ST')) {
      return (
        <form>
            <span>Search by: </span> 
          {children} 
          <input
            className="borderset"
            type="text"
            value={value}
            onChange={onChange}
          />
        </form>
      );
    }
    if (choice.includes('ST')) {
        return (
          <form>
              <span>Search by: </span> 
            {children} 
            <input
              type="text"
              value={value}
              onChange={onChange}
            />
          </form>
        );
      }
    else {
        return (
        <span></span>
        );}
    }
    }
  

class Dropdown extends Component {
render() {
  const { value, onChange, children } = this.props;
  return (
    <form>
        {children}
      <label>
        Select a category:
        <select value={value} onChange={onChange}>
          <option value="title">GPSC</option>
          <option value="serotype">Serotype</option>
          <option value="ST">ST</option>
          <option value="micro">Microreact Status</option>
        </select>
      </label>
    </form>
  );
}
}

class Microdropdown extends Component {
    render() {
      const { value, onChange, children, choice } = this.props;
      if (choice.includes('micro')) {
      return (
        <form>
            {children}
          <label>
            Select status:
            <select value={value} onChange={onChange}>
              <option value="available">Microreact available</option>
              <option value="unavailable">Microreact unavailable</option>
            </select>
          </label>
        </form>
      );
    }
    else {
        return (
        <span></span>
        );}
    }
}

class Serotypedropdown extends Component {
    render() {
      const { value, onChange, children, choice } = this.props;
      if (choice.includes('serotype')) {
      return (
        <form>
            {children}
          <label>
            Select Serotype:
            <select value={value} onChange={onChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6A">6A</option>
              <option value="6B">6B</option>
              <option value="6C">6C</option>
              <option value="6D">6D</option>
              <option value="7B">7B</option>
              <option value="7C">7C</option>
              <option value="7F">7F</option>
              <option value="8">8</option>
              <option value="9A">9A</option>
              <option value="9L">9L</option>
              <option value="9N">9N</option>
              <option value="9V">9V</option>
              <option value="10A">10A</option>
              <option value="10B">10B</option>
              <option value="10C">10C</option>
              <option value="10F">10F</option>
              <option value="10X">10X</option>
              <option value="11A">11A</option>
              <option value="11B">11B</option>
              <option value="11C">11C</option>
              <option value="12A">12A</option>
              <option value="12B">12B</option>
              <option value="12F">12F</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15A">15A</option>
              <option value="15BC">15BC</option>
              <option value="15F">15F</option>
              <option value="16F">16F</option>
              <option value="17A">17A</option>
              <option value="17F">17F</option>
              <option value="18A">18A</option>
              <option value="18B">18B</option>
              <option value="18C">18C</option>
              <option value="18F">18F</option>
              <option value="19A">19A</option>
              <option value="19B">19B</option>
              <option value="19F">19F</option>
              <option value="20">20</option>
              <option value="20A">20A</option>
              <option value="20B">20B</option>
              <option value="21">21</option>
              <option value="22A">22A</option>
              <option value="22F">22F</option>
              <option value="23A">23A</option>
              <option value="23B">23B</option>
              <option value="23F">23F</option>
              <option value="24">24</option>
              <option value="25F">25F</option>
              <option value="27">27</option>
              <option value="28A">28A</option>
              <option value="28F">28F</option>
              <option value="29">29</option>
              <option value="31">31</option>
              <option value="33A">33A</option>
              <option value="33B">33B</option>
              <option value="33C">33C</option>
              <option value="33D">33D</option>
              <option value="33F">33F</option>
              <option value="34">34</option>
              <option value="35A">35A</option>
              <option value="35B">35B</option>
              <option value="35C">35C</option>
              <option value="35D">35D</option>
              <option value="35F">35F</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="42">42</option>
              <option value="45">45</option>
              <option value="46">46</option>
              <option value="48">48</option>
              <option value="NT">NT</option>
            </select>
          </label>
        </form>
      );
    }
    else {
        return (
        <span></span>
        );}
    }
}

class Table extends Component {
    render() {
        const { list, pattern, constant, searchTerm, value } = this.props;
        if (pattern.match('GPSC')) {
        return (
        <div>
        {/*{list.filter(isSearched(pattern)).map(item =>*/}
        {list.filter(matches(pattern)).map(item =>
            /*{this.state.list.map(item =>*/   
            <div key={item.objectID} className="clusterContainer">
            
            <div className="popover__wrapper">
                <img src={item.image} height={item.height} width={item.width} className="clusterImg"
                    /*className="popover__title"*/
                />
                <div className="push popover__content">
                    <p className="popover__message"><strong>{item.title}</strong></p>
                    <p className="popover__message">Number of GPS samples: {item.num_GPSsamples}</p>
                    {/*if ({item.url} !== '') {*/} 
                    <p><a href={item.url} target="_blank">Microreact</a> {item.microreactStatus}</p>
                    {/*}}*/}
                </div>
            </div>
            </div>
            )}
        </div>
        );}
        if (value.includes('micro')) {
            return (
            <div>
            {/*{list.filter(isSearched(pattern)).map(item =>*/}
            {list.filter(microStatus(pattern)).map(item =>
                /*{this.state.list.map(item =>*/   
                <div key={item.objectID} className="clusterContainer">
                
                <div className="popover__wrapper">
                    <img src={item.image} height={item.height} width={item.width} className="clusterImg"
                        /*className="popover__title"*/
                    />
                    <div className="push popover__content">
                        <p className="popover__message"><strong>{item.title}</strong></p>
                        <p className="popover__message">Number of GPS samples: {item.num_GPSsamples}</p>
                        {/*if ({item.url} !== '') {*/} 
                        <p><a href={item.url} target="_blank">Microreact</a> {item.microreactStatus}</p>
                        {/*}}*/}
                    </div>
                </div>
                </div>
                )}
            </div>
            );}
            
            {/*for(var i = 0; i < list[item][k].length())*/
            if (value.includes('serotype')) {
                return ( 
                <div>
                {list.filter(item => item.serotype && item.serotype.includes(pattern)).map(item =>  
                    <div key={item.objectID} className="clusterContainer">
                    
                    <div className="popover__wrapper">
                        <img src={item.image} height={item.height} width={item.width} className="clusterImg"
                            /*className="popover__title"*/
                        />
                        <div className="push popover__content">
                            <p className="popover__message"><strong>{item.title}</strong></p>
                            <p className="popover__message">Number of GPS samples: {item.num_GPSsamples}</p>
                            {/* if ({item.url} !== '') { */}
                            <p><a href={item.url} target="_blank">Microreact</a> {item.microreactStatus}</p>
                            
                        </div>
                    </div>
                    </div>
                    )}
                </div>
                );} 

                if (value.includes('ST')) {
                    return (
                    <div>
                    {list.filter(item => item.ST && item.ST.includes(parseInt(pattern))).map(item =>
                    /*{list.filter(item => item.ST == parseInt(pattern)).map(item => */
                        /*{this.state.list.map(item =>*/   
                        <div key={item.objectID} className="clusterContainer">
                        
                        <div className="popover__wrapper">
                            <img src={item.image} height={item.height} width={item.width} className="clusterImg"
                                /*className="popover__title"*/
                            />
                            <div className="push popover__content">
                                <p className="popover__message"><strong>{item.title}</strong></p>
                                <p className="popover__message">Number of GPS samples: {item.num_GPSsamples}</p>
                                {/*if ({item.url} !== '') {*/} 
                                <p><a href={item.url} target="_blank">Microreact</a> {item.microreactStatus}</p>
                            </div>
                        </div>
                        </div>
                        )}
                    </div>
                    );}

                else {
                    return (
                    <div>
                    {/*{list.filter(isSearched(pattern)).map(item =>*/}
                    {list.filter(isSearched(pattern)).map(item =>
                        /*{this.state.list.map(item =>*/   
                        <div key={item.objectID} className="clusterContainer">
                        
                        <div className="popover__wrapper">
                            <img src={item.image} height={item.height} width={item.width} className="clusterImg"
                                /*className="popover__title"*/
                            />
                            <div className="push popover__content">
                                <p className="popover__message"><strong>{item.title}</strong></p>
                                <p className="popover__message">Number of GPS samples: {item.num_GPSsamples}</p>
                                {/*if ({item.url} !== '') {*/} 
                                <p><a href={item.url} target="_blank">Microreact</a> {item.microreactStatus}</p>
                                {/*}}*/}
                            </div>
                        </div>
                        </div>
                        )}
                    </div>
                    );}
    }
}
}

class Datatable extends Component {
    render() {
        const { list, pattern, constant, searchTerm, value } = this.props;
        if (pattern.match('GPSC')) {
        return (
        <div> 
        {list.filter(matches(pattern)).map(item => 
            /*{this.state.list.map(item =>*/   
        <div className='datainfo' key={item.objectID}>   
            <table>
                <thead>
                <tr>
                <th>Data Table</th>
                </tr>
                </thead>
            <tbody>    
            <tr>
            <td>Cluster name: {item.title}</td>
            </tr>
            <tr>
            <td>Number of samples: {item.num_GPSsamples}</td>
            </tr>
            <tr>
            <td>Microreact: {item.microreactStatus}</td>
            </tr>
            </tbody>
            </table>    
         </div>   
            )}
        </div>
        );}
        if (value.includes('serotype')) {
            return (
            <div className='datainfotitle'>
                <table>
                    <thead>
                    <tr>
                    <th>Data Table</th>
                    </tr>
                    </thead>
                </table>
            
            <table>
            <tbody>  
            <tr><th>Serotype: {pattern}</th></tr>  
            </tbody>
            </table>  
            {list.filter(item => item.serotype && item.serotype.includes(pattern)).map(item =>
            /*{list.filter(item => item.serotype == pattern).map(item => */
                /*{this.state.list.map(item =>*/  
            /*if (list.filter(item => item.serotype == pattern)) {*/
            <div className='datainfo' key={item.objectID}>   
                <table>
                <tbody>  
                <tr>
                <td>Cluster: {item.title}</td>
                </tr>
                </tbody>
                </table>    
             </div>   
                )}
            </div>
            );}
        else {
            return (
                <span></span>
            )
        }
    }
}

export default GpsApp;