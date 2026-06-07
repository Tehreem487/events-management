import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    location: String,
    date: String,
    image: String,
    price: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);