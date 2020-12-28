require('dotenv').config()
const path = require('path')

const favicon = async (req, res) => {

  try {
    res.sendFile(path.resolve('../../../frontend/build/favicon.ico'))
  } catch (err) {
    res.sendStatus(500)
  }
}

module.exports = {
  favicon
}
