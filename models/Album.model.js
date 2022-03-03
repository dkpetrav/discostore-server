const mongoose = require('mongoose')
const { Schema, model } = mongoose

const albumSchema = new Schema(
  {
    title: { type: String },
    artist: { type: String },
    genre: { type: String },
    price: { type: String },
    imageURL: { type: String },
  },
  {
    timestamps: true,
  },
)

module.exports = model('Album', albumSchema);
