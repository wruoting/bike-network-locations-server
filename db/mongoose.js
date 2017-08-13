import mongoose from 'mongoose';

console.log(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true,
});
const db = mongoose.connection;

function connectMongoose() {
  return new Promise((resolve, reject) => {
    db.on('error', () => {
      reject(Error('connection error'));
    });
    db.once('open', () => {
      resolve(`we're connected to ${process.env.MONGODB_URI}!`);
    });
  });
}

export default connectMongoose;
