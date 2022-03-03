const router = require('express').Router()
const mongoose = require('mongoose')

const Album = require('../models/Album.model')

router.get('/albums', (req, res, next) => {
  Album.find()
    .then((allAlbums) => res.json(allAlbums))
    .catch((err) => res.json(err))
})

router.get('/albums/:albumId', (req, res, next) => {
  const { albumId } = req.params
  if (!mongoose.Types.ObjectId.isValid(albumId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }
})

module.exports = router
