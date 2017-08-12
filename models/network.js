import mongoose, { Schema } from 'mongoose';

const NetworkSchema = new Schema({
  company: String,
  href: String,
  id: String,
  location: {
    city: String,
    country: String,
    latitude: {
      type: Number,
      isRequired: true,
    },
    longitude: {
      type: Number,
      isRequired: true,
    },
  },
  name: {
    type: String,
    required: true,
  },
  reviews: [Schema.Types.ObjectId],
});

const Network = mongoose.Model('Network', NetworkSchema);

export default Network;
