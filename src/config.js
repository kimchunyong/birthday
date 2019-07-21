const gallery = [ // galley image list
  require('./Image/gallery/1.png'),
  require('./Image/gallery/2.jpg'),
  require('./Image/gallery/3.jpg'),
  require('./Image/gallery/4.jpg'),
];

export default {
  global: {
    googleMapAPIKey: 'AIzaSyDM7_ueFLjxqHM5y3Jyw0rxE-RcD9BH4E0',
    comment: {
      livere: {
        enable: false, // if false, not rendering livere comment component
        service: 'city',
        uid: 'MTAyMC80Mzc5MS8yMDMzMA',
      },
      facebook: {
        enable: false, // if false, not rendering facebook comment component
        appId: '',
      },
    },
  },
  title: '1st BirthDay', // recomanded English
  wedding: {
    place: {
      name: '리베라컨벤션 8F 디아룸',
      address: '경남 창원시 성산구 중앙대로 100번길 9(상남동 78-4)',
      latitude: 35.223388,
      longitude: 128.680506,
    },
    at: '2019-08-10 18:00',
  },
  bridal: {
    daughter: '김지율',
    name: '김천용',
    image: require('./Image/bridal.jpeg'),
    phone: '+821087958062',
    facebook: false, // if false, not showing facebook icon
    father: '김지율 아빠',
    mother: '',
    position: '',
  },
  groom: {
    name: '김슬령',
    image: require('./Image/groom.jpeg'),
    phone: '+821032362032',
    facebook: false,
    father: '김지율 엄마',
    mother: '',
    position: '',
  },
  image: {
    header: require('./Image/header.jpg'),
    gallery: gallery.map(item => ({
      original: item,
      thumbnail: item,
    })),
  },
};
