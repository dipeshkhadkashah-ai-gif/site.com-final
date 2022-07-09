const mongoose = require("mongoose"); //module for reservation route

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: { type: String, required: true },
  proffession: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  achievement: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);
