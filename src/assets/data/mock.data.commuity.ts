export const communities = [
  {
    id: 1,
    name: 'Test',
    edrpou_code: '012345',
    region: 'test',
    district: 'test',
    center_settlement: 'test',
    postal_index: 'test',
    email: 'test',
    phone: '013245798',
    website: 'test',
    photos: [],
    history: '',
    settlements: [],
    geography: [],
    population: {},
    economy: {},
    infrastructure: {},
    argiculture_places: [],
    education_places: [],
  },
  {
    id: 2,
    name: 'Test2',
    edrpou_code: '012345',
    region: 'test2',
    district: 'test2',
    center_settlement: 'test2',
    postal_index: 'test2',
    email: 'test2',
    phone: '013245798',
    website: 'test2',
    photos: [],
    history: '',
    settlements: [],
    geography: [],
    population: {},
    economy: {},
    infrastructure: {},
    argiculture_places: [],
    education_places: [],
  },
];

export const createDTO = {
  name: 'new community',
  edrpou_code: '012345',
  region: 'test',
  district: 'test',
  center_settlement: 'test',
  postal_index: 'test',
  email: 'test',
  phone: '013245798',
  website: 'test',
  photos: [],
  history: '',
  settlements: [],
};

export const createFullDTO = {
  name: 'new community',
  edrpou_code: '012345',
  region: 'test',
  district: 'test',
  center_settlement: 'test',
  postal_index: 'test',
  email: 'test',
  phone: '013245798',
  website: 'test',
  photos: [],
  history: '',
  settlements: ['Test name'],
  argiculture: [
    {
      name: 'Test name',
      details: 'test name',
      communityId: 3,
    },
    {
      name: 'Test name',
      details: 'test name',
      communityId: 3,
    },
  ],
  economy: {
    budget: 12345789,
    industry_amount: 23,
    trade_amount: 10,
    enterprises_amount: 5,
    communityId: 3,
  },
  education_places: [],
  geography: [],
  infrastructure: {
    roads: true,
    railway: true,
    busses: true,
    stations: 5,
    communityId: 3,
  },
  population: {
    amount: 5224,
    preschool_age: 384,
    school_age: 1111,
    working_age: 3082,
    retired: 647,
    voters: 123245,
    nationalities: [],
    communityId: 3,
  },
};
