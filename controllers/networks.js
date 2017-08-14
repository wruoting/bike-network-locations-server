import { Network, Station } from '../models';

// GET /api/networks
export const getNetworkList = async (ctx) => {
  const networks = await Network.find();
  ctx.body = networks;
};

// GET /api/networks/:parentNetwork
export const getStationList = async (ctx) => {
  const { parentNetwork } = ctx.params;
  const stations = await Station.find({ parentNetwork });
  ctx.body = stations;
};
