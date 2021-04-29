const mongoose = require('mongoose')
const User = require('../models/user')
const Trip = require('../models/trip')
const tripData = require('../data/trip.json')
const dbpath = process.env.MONGODB_URI || 'mongodb://localhost/trip-planer'

mongoose.connect(dbpath, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('error:: failed to connect to mongodb.')
})

db.once('open', async () => {
  console.log('success:: connected to mongodb!')
  const result = await Trip.find({})
  if (result.length !== 0) {
    await Trip.collection.drop()
    console.log('Drop collection!')
  }
  try {
    console.log('successfully dropping trips collection')
    User.find({}).then(users => {
      const trips = tripData.data.map(trip => {
        const index1 = Math.floor(Math.random() * 10)
        const index2 = Math.floor(Math.random() * 10)
        const index3 = Math.floor(Math.random() * 10)
        const index4 = Math.floor(Math.random() * 10)
        return {
          ...trip,
          userId: users[index1]._id,
          comments: [
            {
              id: users[index2].id + new Date(trip.comments[0].date).getTime(),
              date: trip.comments[0].date,
              text: trip.comments[0].text,
              userId: users[index2]._id,
              username: users[index2].username,
              replies: [
                {
                  id: users[index3]._id + new Date(trip.comments[0].replies[0].date).getTime(),
                  date: trip.comments[0].replies[0].date,
                  text: trip.comments[0].replies[0].text,
                  userId: users[index3]._id,
                  username: users[index3].username
                }
              ]
            },
            {
              id: users[index4].id + new Date(trip.comments[1].date).getTime(),
              date: trip.comments[1].date,
              text: trip.comments[1].text,
              userId: users[index4].id,
              username: users[index4].username
            }
          ]
        }
      })
      Trip.insertMany(trips)
        .then(() => {
          console.log('successfully writing seed data')
          process.exit(0)
        })
        .catch(error => {
          console.log(error)
        })
    })
  } catch (error) {
    console.log(error)
    console.log('fail to drop trips collection')
  }
})
