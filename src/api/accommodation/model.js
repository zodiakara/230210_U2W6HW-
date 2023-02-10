import mongoose from "mongoose";

const { Schema, model } = mongoose;

const AccommodationSchema = new Schema({
  name: { type: String, required: true },
});

export default model("Accommodation", AccommodationSchema);
