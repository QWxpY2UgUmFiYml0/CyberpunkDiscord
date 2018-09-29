const getFiles = (function(){
    const files = {
        "diceRoll" : './diceRoll.js',
        "detectionAlarm" : './deckPrograms/detectionAlarm.js',
        "antiIC" : './deckPrograms/antiIC.js',
        "antiSystem" : './deckPrograms/antiSystem.js',
        "antiPersonnel" : './deckPrograms/antiPersonnel.js'
    };

    return {
        files : files
    }
})();
module.exports = getFiles;