const squareNumbers = function(array){
    let numbersSquared = array.map((number) => number * number);
    return numbersSquared;
}

module.exports = {squareNumbers}