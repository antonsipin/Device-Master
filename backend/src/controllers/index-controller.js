require('dotenv').config()

const index = async (req, res) => {

  try {
    res.sendFile(path.resolve('../../frontend/build/index.html'))
  } catch (err) {
    res.sendStatus(500)
  }
}

module.exports = {
  index
}
