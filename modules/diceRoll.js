const diceRoll = (function() {
    const roll = function(min, max) { //Tested
        var rand = Math.floor(Math.random() * (max - min + 1) + min);
        return rand;
    };

    return{
        roll : roll
    };

})();
module.exports = diceRoll;