const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index-controller')

router
  .route('/')
  .get(deviceController.index)

module.exports = router
