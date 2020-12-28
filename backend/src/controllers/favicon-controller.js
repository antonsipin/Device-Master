require('dotenv').config()

const favicon = async (req, res) => {

  try {
    res.sendFile(resolve('../../../frontend/build/favicon.ico'))
  } catch (err) {
    res.sendStatus(500)
  }
}

module.exports = {
  favicon
}
