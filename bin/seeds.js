// bin/seeds.js

const mongoose = require('mongoose')
const Album = require('../models/Album.model')

const MONGO_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/library-project'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //  useFindAndModify: false,
  //  useCreateIndex: true
})

// PASTE HERE THE LIST OF BOOKS PROVIDED IN THIS GIST: https://gist.github.com/ironhack-edu/2816267a015d4870f95275cb873d33b6

const albums = [
  {
    title: 'The Hunger Games',
    artist:
      'The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins. It is written in the voice of 16-year-old Katniss Everdeen, who lives in the future, post-apocalyptic nation of Panem in North America. The Capitol, a highly advanced metropolis, exercises political control over the rest of the nation. The Hunger Games is an annual event in which one boy and one girl aged 12–18 from each of the twelve districts surrounding the Capitol are selected by lottery to compete in a televised battle royale to the death.',
    genre: 'Suzanne Collins',
    price: 10,
    imageURL: 'HTMLOptionsCollection',
  },
  {
    title: 'The Hunger Games',
    artist:
      'The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins. It is written in the voice of 16-year-old Katniss Everdeen, who lives in the future, post-apocalyptic nation of Panem in North America. The Capitol, a highly advanced metropolis, exercises political control over the rest of the nation. The Hunger Games is an annual event in which one boy and one girl aged 12–18 from each of the twelve districts surrounding the Capitol are selected by lottery to compete in a televised battle royale to the death.',
    genre: 'Suzanne Collins',
    price: 10,
    imageURL: 'HTMLOptionsCollection',
  },
]

Album.create(albums)
  .then((allAlbums) => {
    console.log(`Created ${allAlbums.length} albums`)

    // Once created, close the DB connection
    mongoose.connection.close()
  })
  .catch((err) =>
    console.log(`An error occurred while creating albums from the DB: ${err}`),
  )
