const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    introduction: {
      type: String
    },
    ownedTrips: {
      type: [Schema.Types.ObjectId],
      default: []
    },
    collectedTrips: {
      type: [Schema.Types.ObjectId],
      default: []
    },
    collectedSites: {
      type: [Schema.Types.ObjectId],
      default: []
    }
  },
  { minimize: false }
)

module.exports = mongoose.model('User', userSchema)