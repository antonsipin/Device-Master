require('dotenv').config()
const Device = require('../models/device.model')

const isBeingEdited = async (req, res) => {

  const { id, isBeingEdited } = req.body

  try {
    await Device.updateOne({ _id: id }, { $set: { isBeingEdited: !isBeingEdited } })
    const devicesList = await Device.find()
    res.send(devicesList)
  } catch (err) {
    res.sendStatus(500)
  }
}

const setDeviceWarning = async (req, res) => {

  const { id, warning } = req.body

  try {
    await Device.updateOne({ _id: id }, { $set: { warning: !warning } })
    const devicesList = await Device.find()
    res.send(devicesList)
  } catch (err) {
    res.sendStatus(500)
  }
}

const updateDevice = async (req, res) => {

  const { id, name } = req.body

  try {
    await Device.updateOne({ _id: id }, { $set: { name: name } })
    const devicesList = await Device.find()
    res.send(devicesList)
  } catch (err) {
    res.sendStatus(500)
  }
}

const deleteDevice = async (req, res) => {

  const { id } = req.body

  try {
    await Device.deleteOne({ _id: id })
    const devicesList = await Device.find()
    res.send(devicesList)
  } catch (err) {
    res.sendStatus(500)
  }
}

const changeStatus = async (req, res) => {

  const { id, status } = req.body

  try {
    await Device.updateOne({ _id: id }, { $set: { status: !status } })
    const devicesList = await Device.find()
    res.send(devicesList)
  } catch (err) {
    res.sendStatus(500)
  }
}

const addDevice = async (req, res) => {

  const { device } = req.body

  try {

    const devicesList = await Device.find()
    const names = devicesList.filter((el) => el.name)

    if (names.includes(device)) {
      res.sendStatus(500)
    } else {
      
      let newDevice = new Device({
        name: device,
        status: false,
        warning: false,
        isBeingEdited: false
      })

      await newDevice.save()
      res.send(newDevice)
    }
  } catch (err) {
    res.sendStatus(500)
  }
}

const getDevicesList = async (req, res) => {

  try {
    const devicesList = await Device.find()
    console.log(devicesList);
    res.send(devicesList)
  } catch (err) {
    res.sendStatus(500)
  }
}

module.exports = {
  addDevice,
  getDevicesList,
  changeStatus,
  deleteDevice,
  updateDevice,
  setDeviceWarning,
  isBeingEdited
}
