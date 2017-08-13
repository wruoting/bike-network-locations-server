import { Network, Station } from '../models';

export default () => {
  const network = new Network({
    company: ['Bike U Sp. z o.o.'],
    href: '/v2/networks/bbbike',
    id: 'bbbike',
    location: {
      city: 'Bielsko-Biała',
      country: 'PL',
      latitude: 49.8225,
      longitude: 19.044444,
    },
    name: 'BBBike',
    reviews: [],
  });

  return network.save();
};
