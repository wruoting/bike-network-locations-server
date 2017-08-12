import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  surname: String,
  email: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', UserSchema);

export default User;
