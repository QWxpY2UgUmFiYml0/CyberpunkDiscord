const privates = (function (){
    const { files } = require('./files.js')
    const { roll } = require(files.diceRoll)
    const { detectionAlarm } = require(files.detectionAlarm)
    const { antiIC } = require(files.antiIC)
    const { antiSystem } = require(files.antiSystem)
    const { antiPersonnel } = require(files.antiPersonnel)
    const cpuCount = roll(1, 6)
    const _privates = {
        cpuCount : cpuCount,
        roll : roll,
        detectionAlarm : detectionAlarm,
        antiIC : antiIC,
        antiSystem : antiSystem,
        antiPersonnel : antiPersonnel
    }
    return {
        privates : _privates
    }
})();
module.exports = privates;