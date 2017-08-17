import { Review } from '../models';

// POST /api/reviews/:networkId/:stationId/
export async function postReview(ctx) {
  const { stationId, networkId } = ctx.params;
  const { stars, text, userName } = ctx.request.body;

  let review = new Review({
    network: networkId,
    station: stationId,
    text,
    stars,
    userName,
  });
  review = await review.save();
  ctx.body = review;
}
