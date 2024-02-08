let greaterScore = function TestScores(array){
    const scoresGreaterThanOrEqualTo70 = array.filter((number)=>
     number >= 70  )
     return scoresGreaterThanOrEqualTo70;
}

module.exports = {greaterScore}