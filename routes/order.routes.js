// routes/order.routes.js

const router = require('express').Router()

const mongoose = require('mongoose')

const Album = require('../models/Album.model')
const Order = require('../models/Order.model')

//  POST /api/orders  -  Creates a new order
router.post('/orders', (req, res, next) => {
  const {
    username,
    street,
    streetNumber,
    city,
    zipCode,
    country,
    albumId,
    quantity,
  } = req.body

  Order.create({
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

//  GET /api/orders/:orderId -  Retrieves a specific order by id
router.get('/orders/:orderId', (req, res, next) => {
  const { orderId } = req.params

  if (!mongoose.Types.ObjectId.isValid(orderId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }
  Order.findById(orderId)
    .then(order => res.status(200).json(order))
    .catch(error => res.json(error));

})

// PUT  /api/orders/:orderId  -  Updates a specific order by id
router.put('/orders/:orderId', (req, res, next) => {
  const { orderId } = req.params

  if (!mongoose.Types.ObjectId.isValid(orderId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  Order.findByIdAndUpdate(orderId, req.body, { new: true })
    .then((updatedOrder) => res.json(updatedOrder))
    .catch((error) => res.json(error))
})

// DELETE  /api/orders/:orderId  -  Deletes a specific order by id
router.delete('/orders/:orderId', (req, res, next) => {
  const { orderId } = req.params

  if (!mongoose.Types.ObjectId.isValid(orderId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  Order.findByIdAndRemove(orderId)
    .then(() =>
      res.json({
        message: `Order with ${orderId} is removed successfully.`,
      }),
    )
    .catch((error) => res.json(error))
})


// GET /api/orders  -  Get all orders
router.get("/orders", (req, res, next) => {
  Order.find()
    .then((allOrders) => res.json(allOrders))
    .catch((err) => res.json(err));
});


module.exports = router
