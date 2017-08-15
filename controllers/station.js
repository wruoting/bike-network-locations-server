import _ from 'lodash';
import { Station } from '../models';

// GET /api/station/:stationId
export const getStation = async (ctx) => {
  const { stationId } = ctx.params;
  const station = await Station.findById(stationId);
  ctx.body = station;
};

// PUT /api/station/:stationId/slots
// PUT body = {
// emptySlots: Number,
// closed: Boolean,
// safe: Boolean
// }
// may change this route signature
export const updateStation = async (ctx) => {
  const { stationId } = ctx.params;
  const { emptySlots, closed, safe } = ctx.request.body;
  if (_.isEmpty(ctx.request.body)) ctx.body = 'No valid request body found';
  let station = await Station.findById(stationId);
  if (typeof emptySlots === 'number') {
    station.empty_slots = emptySlots;
    station = await station.save();
  }
  if (typeof closed === 'boolean') {
    station.closed = closed;
    station = await station.save();
  }
  if (typeof safe === 'boolean') {
    station.safeForUse = safe;
    station = await station.save();
  }
  ctx.body = station;
};
