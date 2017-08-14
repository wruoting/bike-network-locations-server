import { Network, Station } from '../models';

// GET /api/station/:stationId
export const getStation = async (ctx) => {
  const { stationId } = ctx.params;
  const station = await Station.findById(stationId);
  ctx.body = station;
};

// PUT /api/station/:stationId/slots
// PUT body = { emptySlots: Number }
// may change this route signature
export const updateStation = async (ctx) => {
  const { stationId } = ctx.params;
  const { emptySlots } = ctx.request.body;
  let station = await Station.findById(stationId);
  if (emptySlots) {
    station.empty_slots = emptySlots;
    station = await station.save();
  }
  ctx.body = station;
};
