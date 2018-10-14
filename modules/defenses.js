const files = require('./files.js')
const { roll } = require(files.getDiceRoll())
const { detectionAlarm } = require(files.getDetectionAlarm())
const { antiIC } = require(files.getAntiIC())
const { antiSystem } = require(files.getAntiSystem())
const { antiPersonnel } = require(files.getAntiPersonnel())
var cpuCount = roll(1, 6)

const defenses = (function(){
    const _defenses = [detectionAlarm, detectionAlarm,
        detectionAlarm, detectionAlarm, antiIC,
        antiIC, antiSystem, antiSystem, 
        antiPersonnel, antiPersonnel]
    const findDefenses = (function () {
        var temp = [];
        var defCount = roll(1, 6) + cpuCount;
    
        for (var i = 0; i < defCount; i++) {
            var rand = roll(0, 9);
            temp.push(_defenses[rand][roll(0, 5)]);
        }
        return temp;
    })

    return {
        findDefenses : findDefenses
    }
})();
module.exports = defenses;