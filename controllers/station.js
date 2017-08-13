import { Network, Station } from '../models';

export const getStation = async (ctx, next) => {
  const { stationId } = ctx.params;
  const station = await Station.findById(stationId);
  ctx.body = station;
};

export const updateStationSlots = async (ctx, next) => {
  const { stationId } = ctx.params;
  const station = findOneAndUpdate({});
};
