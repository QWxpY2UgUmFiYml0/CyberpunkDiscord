const getFiles = (function(){
    const path = require('path')

    const _projectRoot = path.dirname(__dirname)
    const _modules = path.join(_projectRoot, 'modules')
    const _deckPrograms = path.join(_modules, 'deckPrograms')
    
    const _diceRoll = path.join(_modules, 'diceRoll.js')
    const _detectionAlarm = path.join(_deckPrograms, 'detectionAlarm.js')
    const _antiIC = path.join(_deckPrograms, 'antiIC.js')
    const _antiSystem = path.join(_deckPrograms, 'antiSystem.js')
    const _antiPersonnel = path.join(_deckPrograms, 'antiPersonnel.js')
    const _getDefenses = path.join(_modules, 'defenses.js')

    const getProjectRoot = function () {
        return _projectRoot
    }

    const getModules = function () {
        return _modules
    }

    const getDiceRoll = function () {
        return _diceRoll
    }

    const getDetectionAlarm = function () {
        return _detectionAlarm
    }

    const getAntiIC = function () {
        return _antiIC
    }

    const getAntiSystem = function () {
        return _antiSystem
    }

    const getAntiPersonnel = function () {
        return _antiPersonnel
    }

    const getDefenses = function () {
        return _getDefenses
    }

    return {
        getDiceRoll : getDiceRoll,
        getDetectionAlarm : getDetectionAlarm,
        getAntiIC : getAntiIC,
        getAntiSystem : getAntiSystem,
        getAntiPersonnel : getAntiPersonnel,
        getProjectRoot : getProjectRoot,
        getModules : getModules,
        getDefenses : getDefenses
    }
})();
module.exports = getFiles;