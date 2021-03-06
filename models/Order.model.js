const mongoose = require('mongoose')
const { Schema, model } = mongoose

const orderSchema = new Schema(
  {
    //customerId: { type: Number },
    username: { type: String },
    street: { type: String, required: true },
    streetNumber: { type: Number, required: true },
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String },
    //orderItem(s):
    albumId: Schema.Types.ObjectId,
    quantity: { type: Number },
  },
  {
    timestamps: true,
  },
)

module.exports = model('Order', orderSchema)
