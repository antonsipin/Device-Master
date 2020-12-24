const express = require('express')
const router = express.Router()
const deviceController = require('../controllers/device-controller')

router
  .route('/')
  .get(deviceController.getDevicesList)

module.exports = router
