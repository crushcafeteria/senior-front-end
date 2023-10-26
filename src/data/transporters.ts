import { random, sampleSize } from "lodash";
import { TransporterType } from "src/interfaces";
import CARGO_TYPES from "./cargo_types";

const sample = [
  {
    name: 'Gigashots',
    location: 'Enzan',
    cargo_types: 1,
    max_weight: 1000,
  },
  {
    name: 'Rhycero',
    location: 'Tengjia',
    cargo_types: 2,
    max_weight: 1000,
  },
  {
    name: 'Skyndu',
    location: 'Tobatí',
    cargo_types: 3,
    max_weight: 1000,
  },
  {
    name: 'Kamba',
    location: 'Mzimba',
    cargo_types: 4,
    max_weight: 1000,
  },
  {
    name: 'Jabberbean',
    location: 'Zahedan',
    cargo_types: 5,
    max_weight: 1000,
  },
  {
    name: 'Rhyzio',
    location: 'Montigny-lès-Metz',
    cargo_types: 6,
    max_weight: 1000,
  },
  {
    name: 'Babbleset',
    location: 'Moroni',
    cargo_types: 7,
    max_weight: 1000,
  },
  {
    name: 'Meezzy',
    location: 'Lanjaghbyur',
    cargo_types: 8,
    max_weight: 1000,
  },
  {
    name: 'Twitternation',
    location: "'s-Hertogenbosch",
    cargo_types: 9,
    max_weight: 1000,
  },
  {
    name: 'Quaxo',
    location: 'Henglin',
    cargo_types: 10,
    max_weight: 1000,
  },
  {
    name: 'Babbleopia',
    location: 'Sumaré',
    cargo_types: 11,
    max_weight: 1000,
  },
  {
    name: 'Skalith',
    location: 'Ocala',
    cargo_types: 12,
    max_weight: 1000,
  },
  {
    name: 'Yacero',
    location: 'Sidomulyo',
    cargo_types: 13,
    max_weight: 1000,
  },
  {
    name: 'Voolith',
    location: 'Burujul',
    cargo_types: 14,
    max_weight: 1000,
  },
  {
    name: 'Chatterpoint',
    location: 'Shahkot',
    cargo_types: 15,
    max_weight: 1000,
  },
  {
    name: 'Dabvine',
    location: 'Lancheng',
    cargo_types: 16,
    max_weight: 1000,
  },
  {
    name: 'Ailane',
    location: 'Raejeru',
    cargo_types: 17,
    max_weight: 1000,
  },
  {
    name: 'Photolist',
    location: 'Chanthaburi',
    cargo_types: 18,
    max_weight: 1000,
  },
  {
    name: 'Mynte',
    location: 'Szczaniec',
    cargo_types: 19,
    max_weight: 1000,
  },
  {
    name: 'Ntag',
    location: 'Belung Satu',
    cargo_types: 20,
    max_weight: 1000,
  },
  {
    name: 'Avavee',
    location: 'Pacaraos',
    cargo_types: 21,
    max_weight: 1000,
  },
  {
    name: 'Tazz',
    location: 'Malasila',
    cargo_types: 22,
    max_weight: 1000,
  },
  {
    name: 'Blogtags',
    location: 'Hejiaping',
    cargo_types: 23,
    max_weight: 1000,
  },
  {
    name: 'Meemm',
    location: 'Cipari',
    cargo_types: 24,
    max_weight: 1000,
  },
  {
    name: 'Roomm',
    location: 'Xinhuang',
    cargo_types: 25,
    max_weight: 1000,
  },
  {
    name: 'Thoughtstorm',
    location: 'Ḩarastā',
    cargo_types: 26,
    max_weight: 1000,
  },
  {
    name: 'Tagfeed',
    location: 'Shizikeng',
    cargo_types: 27,
    max_weight: 1000,
  },
  {
    name: 'Aibox',
    location: 'Gurbuki',
    cargo_types: 28,
    max_weight: 1000,
  },
  {
    name: 'Skynoodle',
    location: 'Vila Franca',
    cargo_types: 29,
    max_weight: 1000,
  },
  {
    name: 'Edgepulse',
    location: 'Sanjiao',
    cargo_types: 30,
    max_weight: 1000,
  },
  {
    name: 'Chatterpoint',
    location: 'Gayam',
    cargo_types: 31,
    max_weight: 1000,
  },
  {
    name: 'Vinder',
    location: 'Apeldoorn',
    cargo_types: 32,
    max_weight: 1000,
  },
  {
    name: 'Brainverse',
    location: 'Poretskoye',
    cargo_types: 33,
    max_weight: 1000,
  },
  {
    name: 'Oyoyo',
    location: 'Eskilstuna',
    cargo_types: 34,
    max_weight: 1000,
  },
  {
    name: 'Oyonder',
    location: 'Xiangjiazhai',
    cargo_types: 35,
    max_weight: 1000,
  },
  {
    name: 'Brainverse',
    location: 'Sigaozhuang',
    cargo_types: 36,
    max_weight: 1000,
  },
  {
    name: 'Linktype',
    location: 'Laval',
    cargo_types: 37,
    max_weight: 1000,
  },
  {
    name: 'Pixope',
    location: 'Negla',
    cargo_types: 38,
    max_weight: 1000,
  },
  {
    name: 'Devpoint',
    location: 'Liukou',
    cargo_types: 39,
    max_weight: 1000,
  },
  {
    name: 'Babbleset',
    location: 'Meicheng',
    cargo_types: 40,
    max_weight: 1000,
  },
  {
    name: 'Jabbersphere',
    location: 'Cartagena',
    cargo_types: 41,
    max_weight: 1000,
  },
  {
    name: 'Flipstorm',
    location: 'Lâm Thao',
    cargo_types: 42,
    max_weight: 1000,
  },
  {
    name: 'Dynava',
    location: 'Cuogang',
    cargo_types: 43,
    max_weight: 1000,
  },
  {
    name: 'Fivebridge',
    location: 'Zhoukou',
    cargo_types: 44,
    max_weight: 1000,
  },
  {
    name: 'Lajo',
    location: 'Sancha',
    cargo_types: 45,
    max_weight: 1000,
  },
  {
    name: 'Brightbean',
    location: 'Đoan Hùng',
    cargo_types: 46,
    max_weight: 1000,
  },
  {
    name: 'Zoomlounge',
    location: 'Rukem',
    cargo_types: 47,
    max_weight: 1000,
  },
  {
    name: 'Zoombox',
    location: 'Okinawa Número Uno',
    cargo_types: 48,
    max_weight: 1000,
  },
  {
    name: 'Edgetag',
    location: 'Detroit',
    cargo_types: 49,
    max_weight: 1000,
  },
  {
    name: 'Janyx',
    location: 'Zabrat',
    cargo_types: 50,
    max_weight: 1000,
  },
];

export const TRANSPORTERS: TransporterType[] = sample.map(tp=> {
    return {
        ...tp,
        max_weight: random(20, 5000),
        cargo_types: sampleSize(CARGO_TYPES, 2)
    }
})
