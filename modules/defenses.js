const { privates } = require('./privates.js')
const defenses = (function(){
    const _defenses = [privates.detectionAlarm, privates.detectionAlarm,
        privates.detectionAlarm, privates.detectionAlarm, privates.antiIC,
        privates.antiIC, privates.antiSystem, privates.antiSystem, 
        privates.antiPersonnel, privates.antiPersonnel]

    const findDefenses = (function () {
        var temp = [];
        var defCount = privates.roll(1, 6) + privates.cpuCount;
    
        for (var i = 0; i < defCount; i++) {
            var rand = privates.roll(0, 9);
            temp.push(_defenses[rand][privates.roll(0, 5)]);
    
        }
        return temp;
    })

    return {
        findDefenses : findDefenses
    }
})();
module.exports = defenses;