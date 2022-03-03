const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String },
    password: String,
    street: { type: String, required: true },
    streetNumber: { type: Number, required: true },
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String },
  },
  {
    timestamps: true,
  },
)

module.exports = model("User", userSchema);
