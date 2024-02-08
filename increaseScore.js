const upgradeScore = function(array){
    let newScore = array.map((number) => number +5);
    return newScore;
}

module.exports = {upgradeScore};