// routes/user.routes.js

const router = require('express').Router()

const mongoose = require('mongoose')

const User = require('../models/User.model')
const Order = require('../models/Order.model')

//  POST /api/user  -  Creates a new user
router.post('/user', (req, res, next) => {
  const {
    username,
    email,
    street,
    streetNumber,
    city,
    zipCode,
    country,
  } = req.body

  User.create({
    username,
    email,
    street,
    streetNumber,
    city,
    zipCode,
    country,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err))
})

//  GET /api/user/:userId -  Retrieves a specific order by id
router.get('/user/:userId', (req, res, next) => {
  const { userId } = req.params

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }
  User.findById(userId)
    .then(user => res.status(200).json(user))
    .catch(error => res.json(error));

})

// PUT  /api/user/:userId  -  Updates a specific user by id
router.put('/user/:userId', (req, res, next) => {
  const { userId } = req.params

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  User.findByIdAndUpdate(userId, req.body, { new: true })
    .then((updatedUser) => res.json(updatedUser))
    .catch((error) => res.json(error))
})

// DELETE  /api/user/:userId  -  Deletes a specific user by id
router.delete('/user/:userId', (req, res, next) => {
  const { userId } = req.params

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  User.findByIdAndRemove(userId)
    .then(() =>
      res.json({
        message: `Order with ${userId} is removed successfully.`,
      }),
    )
    .catch((error) => res.json(error))
})

module.exports = router