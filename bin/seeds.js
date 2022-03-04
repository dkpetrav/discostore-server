// bin/seeds.js

const mongoose = require('mongoose')
const Album = require('../models/Album.model')

const MONGO_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/discostore-server'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //  useFindAndModify: false,
  //  useCreateIndex: true
})

// PASTE HERE THE LIST OF BOOKS PROVIDED IN THIS GIST: https://gist.github.com/ironhack-edu/2816267a015d4870f95275cb873d33b6

const albums = [
  {
    title: 'Zenyatta Mondatta',
    artist: 'The Police',
    genre: 'Rock',
    price: 10,
    imageURL: 'https://res.cloudinary.com/dvivdztwv/image/upload/v1646308503/discostore/IMG_0729_brqvgo.jpg',
  },
  {
    title: 'October',
    artist:'U2',
    genre: 'Rock',
    price: 10,
    imageURL: 'https://res.cloudinary.com/dvivdztwv/image/upload/v1646308496/discostore/IMG_0721_xq4kl5.jpg',
  },
  {
    title: 'New York',
    artist:'Lou Reed',
    genre: 'Rock',
    price: 10,
    imageURL: 'https://res.cloudinary.com/dvivdztwv/image/upload/v1646308956/discostore/IMG_0736_lct4gl.jpg',
  },
  {
    title: 'The Geto Boys',
    artist:'The Geto Boys',
    genre: 'Hip Hop',
    price: 10,
    imageURL: 'https://res.cloudinary.com/dvivdztwv/image/upload/v1646308982/discostore/IMG_0790_c983hx.jpg',
  },
  {
    title: 'Black Rose',
    artist:'Thin Lizzy',
    genre: 'Rock',
    price: 10,
    imageURL: 'https://res.cloudinary.com/dvivdztwv/image/upload/v1646309014/discostore/IMG_0765_bf9c3h.jpg',
  },
  {
    title: "Steamin' hot",
    artist:'Kenn Lending Blues Band',
    genre: 'Blues',
    price: 10,
    imageURL: 'https://res.cloudinary.com/dvivdztwv/image/upload/v1646309283/discostore/IMG_0798_ce94cj.jpg',
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
