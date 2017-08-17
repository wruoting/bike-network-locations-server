import _ from 'lodash';
import { Station, Review } from '../models';

// GET /api/station/:stationId
export async function getStation(ctx) {
  const { stationId } = ctx.params;
  const station = await Station.findById(stationId);
  ctx.body = station;
}

// PUT /api/station/:stationId/slots
// PUT body = {
// emptySlots: Number,
// closed: Boolean,
// safe: Boolean
// }
// may change this route signature
export async function updateStation(ctx) {
  const { stationId } = ctx.params;
  const { emptySlots, closed, safe } = ctx.request.body;
  if (_.isEmpty(ctx.request.body)) return (ctx.body = 'No valid request body found');
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
}

export async function getStationReviews(ctx) {
  const { stationId } = ctx.params;
  const stationReviews = await Review.find({ station: stationId });
  ctx.body = stationReviews;
}
