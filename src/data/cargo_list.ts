import { CargoType } from 'src/interfaces';
import CARGO_TYPES from './cargo_types';
import { random, sample } from 'lodash';

const samples = [
  {
    location: 'Houston',
    cargo_type: '',
    cargo_weight: 27,
    dimensions: {},
  },
  {
    location: 'Czerniejewo',
    cargo_type: '',
    cargo_weight: 36,
    dimensions: {},
  },
  {
    location: 'Homeyo',
    cargo_type: '',
    cargo_weight: 90,
    dimensions: {},
  },
  {
    location: 'Mchinji',
    cargo_type: '',
    cargo_weight: 59,
    dimensions: {},
  },
  {
    location: 'Chengbei',
    cargo_type: '',
    cargo_weight: 46,
    dimensions: {},
  },
  {
    location: 'Templeogue',
    cargo_type: '',
    cargo_weight: 79,
    dimensions: {},
  },
  {
    location: 'Sambilawang',
    cargo_type: '',
    cargo_weight: 56,
    dimensions: {},
  },
  {
    location: 'Oefau',
    cargo_type: '',
    cargo_weight: 90,
    dimensions: {},
  },
  {
    location: 'Olsztyn',
    cargo_type: '',
    cargo_weight: 25,
    dimensions: {},
  },
  {
    location: 'Koppies',
    cargo_type: '',
    cargo_weight: 73,
    dimensions: {},
  },
  {
    location: 'Póvoa de Santo António',
    cargo_type: '',
    cargo_weight: 29,
    dimensions: {},
  },
  {
    location: 'Muravlenko',
    cargo_type: '',
    cargo_weight: 21,
    dimensions: {},
  },
  {
    location: 'Buerarema',
    cargo_type: '',
    cargo_weight: 55,
    dimensions: {},
  },
  {
    location: 'Huolongmen',
    cargo_type: '',
    cargo_weight: 16,
    dimensions: {},
  },
  {
    location: 'Silihe',
    cargo_type: '',
    cargo_weight: 47,
    dimensions: {},
  },
  {
    location: 'Kostakioí',
    cargo_type: '',
    cargo_weight: 57,
    dimensions: {},
  },
  {
    location: 'Almaznyy',
    cargo_type: '',
    cargo_weight: 38,
    dimensions: {},
  },
  {
    location: 'Pasarbaru',
    cargo_type: '',
    cargo_weight: 11,
    dimensions: {},
  },
  {
    location: 'Batgrām',
    cargo_type: '',
    cargo_weight: 59,
    dimensions: {},
  },
  {
    location: 'Saint Augustine',
    cargo_type: '',
    cargo_weight: 21,
    dimensions: {},
  },
  {
    location: 'Timrå',
    cargo_type: '',
    cargo_weight: 50,
    dimensions: {},
  },
  {
    location: 'Yangkang',
    cargo_type: '',
    cargo_weight: 25,
    dimensions: {},
  },
  {
    location: 'Māwiyah',
    cargo_type: '',
    cargo_weight: 14,
    dimensions: {},
  },
  {
    location: 'Bergen',
    cargo_type: '',
    cargo_weight: 57,
    dimensions: {},
  },
  {
    location: 'Novogornyy',
    cargo_type: '',
    cargo_weight: 66,
    dimensions: {},
  },
  {
    location: 'Kālīganj',
    cargo_type: '',
    cargo_weight: 7,
    dimensions: {},
  },
  {
    location: 'Tugela Ferry',
    cargo_type: '',
    cargo_weight: 67,
    dimensions: {},
  },
  {
    location: 'Ludbreg',
    cargo_type: '',
    cargo_weight: 20,
    dimensions: {},
  },
  {
    location: 'Peredovaya',
    cargo_type: '',
    cargo_weight: 11,
    dimensions: {},
  },
  {
    location: 'Beiwa',
    cargo_type: '',
    cargo_weight: 98,
    dimensions: {},
  },
  {
    location: 'Jiaqu',
    cargo_type: '',
    cargo_weight: 71,
    dimensions: {},
  },
  {
    location: 'Dongshan',
    cargo_type: '',
    cargo_weight: 81,
    dimensions: {},
  },
  {
    location: 'Labuan',
    cargo_type: '',
    cargo_weight: 36,
    dimensions: {},
  },
  {
    location: 'Longuita',
    cargo_type: '',
    cargo_weight: 56,
    dimensions: {},
  },
  {
    location: 'Gandara',
    cargo_type: '',
    cargo_weight: 85,
    dimensions: {},
  },
  {
    location: 'Álftanes',
    cargo_type: '',
    cargo_weight: 12,
    dimensions: {},
  },
  {
    location: 'Venado Tuerto',
    cargo_type: '',
    cargo_weight: 8,
    dimensions: {},
  },
  {
    location: 'Belverde',
    cargo_type: '',
    cargo_weight: 10,
    dimensions: {},
  },
  {
    location: 'Strasbourg',
    cargo_type: '',
    cargo_weight: 78,
    dimensions: {},
  },
  {
    location: 'Zamarski',
    cargo_type: '',
    cargo_weight: 9,
    dimensions: {},
  },
  {
    location: 'Sandvika',
    cargo_type: '',
    cargo_weight: 60,
    dimensions: {},
  },
  {
    location: 'Södertälje',
    cargo_type: '',
    cargo_weight: 29,
    dimensions: {},
  },
  {
    location: 'Qal‘ah-ye Shāhī',
    cargo_type: '',
    cargo_weight: 5,
    dimensions: {},
  },
  {
    location: 'Shilu',
    cargo_type: '',
    cargo_weight: 92,
    dimensions: {},
  },
  {
    location: 'Gaoling',
    cargo_type: '',
    cargo_weight: 93,
    dimensions: {},
  },
  {
    location: 'Krasnyy Kholm',
    cargo_type: '',
    cargo_weight: 67,
    dimensions: {},
  },
  {
    location: 'Ise',
    cargo_type: '',
    cargo_weight: 86,
    dimensions: {},
  },
  {
    location: 'Vrbovec',
    cargo_type: '',
    cargo_weight: 13,
    dimensions: {},
  },
  {
    location: 'Calheta de Nesquim',
    cargo_type: '',
    cargo_weight: 20,
    dimensions: {},
  },
  {
    location: 'Bergamo',
    cargo_type: '',
    cargo_weight: 83,
    dimensions: {},
  },
];

const CARGO_LIST: CargoType[] = samples.map((cargo) => {
  return {
    ...cargo,
    cargo_type: sample(CARGO_TYPES) as string,
    dimensions: {
      l: random(1, 99),
      w: random(1, 99),
      h: random(1, 99),
    },
  };
});

export default CARGO_LIST;
