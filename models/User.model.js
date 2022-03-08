const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
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

module.exports = model('User', userSchema)
