import mongoose, { Schema } from 'mongoose';

const reviewSchema = new Schema({
  network: {
    // this field will make it easy to show cool analytics about networks
    type: Schema.Types.ObjectId,
    required: true,
  },
  station: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  owner: Schema.Types.ObjectId,
  userName: {
    type: String,
    default: 'anonymous',
  },
  stars: {
    // defaults to 5 start rating, is required. Validated on save.
    type: Number,
    required: true,
    default: 5,
    min: [1, '1 stars is the lowest possible rating'],
    max: [5, '5 stars is the highest possible rating'],
  },
  text: String,
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
