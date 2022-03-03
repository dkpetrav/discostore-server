// routes/album.routes.js

const router = require('express').Router()

const mongoose = require('mongoose')

const Project = require('../models/Album.model')

//  POST /api/orders  -  Creates a new order
router.post('/orders', (req, res, next) => {
  const {
    customerId,
    username,
    street,
    streetNumber,
    city,
    zipCode,
    country,
    albumId,
    quantity,
  } = req.body

  Album.create({
    customerId,
    username,
    street,
    streetNumber,
    city,
    zipCode,
    country,
    albumId,
    quantity,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err))
})

//  GET /api/albums/:albumId -  Retrieves a specific album by id
router.get('/albums/:albumId', (req, res, next) => {
  const { albumId } = req.params

  if (!mongoose.Types.ObjectId.isValid(albumId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }
})

// PUT  /api/albums/:albumId  -  Updates a specific album by id
router.put('/albums/:albumId', (req, res, next) => {
  const { albumId } = req.params

  if (!mongoose.Types.ObjectId.isValid(albumId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  Album.findByIdAndUpdate(albumId, req.body, { new: true })
    .then((updatedAlbum) => res.json(updatedAlbum))
    .catch((error) => res.json(error))
})

// DELETE  /api/albums/:albumId  -  Deletes a specific album by id
router.delete('/albums/:albumId', (req, res, next) => {
  const { albumId } = req.params

  if (!mongoose.Types.ObjectId.isValid(albumId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  Album.findByIdAndRemove(albumId)
    .then(() =>
      res.json({
        message: `Album with ${albumId} is removed successfully.`,
      }),
    )
    .catch((error) => res.json(error))
})

module.exports = router
