import mongoose, { Schema } from 'mongoose';

const StationSchema = new Schema({
  empty_slots: {
    default: 0,
    type: Number,
    isRequired: true,
  },
  free_bikes: Number,
  latitude: {
    type: Number,
    isRequired: true,
  },
  longitude: {
    type: Number,
    isRequired: true,
  },
  name: String,
  timestamp: Date,
  parentNetwork: Schema.Types.ObjectId,
  reviews: [Schema.Types.ObjectId],
});

const Station = mongoose.model('Station', StationSchema);

export default Station;
