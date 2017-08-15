import mongoose from 'mongoose';

const env = process.env.NODE_ENV;

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bike-network-locations';
// if (env === 'test') {
//   mongoURI = 'bike-network-locations-test';
// }

mongoose.Promise = global.Promise;

mongoose.connect(mongoURI, {
  useMongoClient: true,
});

export default mongoose;
