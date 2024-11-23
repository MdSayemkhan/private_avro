const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true }, // Google account ID
  name: { type: String, required: true }, // User's name from Google
  email: { type: String, required: true, unique: true }, // Email address
  profileImage: { type: String }, // Profile picture URL from Google
  bio: { type: String, default: '' }, // User-provided bio
  preferences: { type: Object, default: {} }, // Optional user-specific settings
});

module.exports = mongoose.model('User', userSchema);
