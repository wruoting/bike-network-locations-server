import { Network, Station } from '../models';

export const getNetworkList = async (ctx, next) => {
  const networks = await Network.find();
  ctx.body = networks;
};

export const getStationList = async (ctx, next) => {
  const { parentNetwork } = ctx.params;
  const stations = await Station.find({ parentNetwork });
  ctx.body = stations;
};
