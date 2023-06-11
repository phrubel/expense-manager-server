const mongoose = require('mongoose');

// schema/model
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'first name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'last name is required'],
    },
    email: {
      type: String,
      required: [true, 'email is required and unique'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'must have password'],
    },
    profilePic: {
      type: String,
    },
  },
  { timestamps: true }
);

// export model
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
