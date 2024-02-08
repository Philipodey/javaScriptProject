const{greaterScore} = require("./TestScores");

test("maximum score gtrater than 70 ", ()=>{
    let score = [23,45,78,98,12,78,67,83,23,98,99]
    // let result = [78,98,78,83,98,99];
    let expected = greaterScore(score)
    expect(expected).toEqual([78,98,78,83,98,99]);
})