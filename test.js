const files = require('./modules/files.js')
const { roll } = require(files.getDiceRoll())
const { detectionAlarm } = require(files.getDetectionAlarm())
const { findDefenses } = require(files.getDefenses())

console.log(findDefenses())