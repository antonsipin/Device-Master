const express = require('express')
const router = express.Router()
const faviconController = require('../controllers/favicon-controller')

router
  .route('/')
  .get(faviconController.favicon)

module.exports = router
