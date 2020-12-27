require('dotenv').config()
const mongoose = require('mongoose')
// const dbConnectionURL = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
const dbConnectionURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3wzbj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

function dbConnect() {
  mongoose.connect(dbConnectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) return console.log(err)
    return console.log(`Success connected to ${process.env.DB_NAME} database`)
  })
}

module.exports = dbConnect
