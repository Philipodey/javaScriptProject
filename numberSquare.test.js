const{squareNumbers} = require("./numberSquare");

test("square of each number in a list",() =>{
    let list =  [2, 4, 6, 8, 10];
    let result = squareNumbers(list);
    expect(result).toEqual([4, 16, 36, 64, 100]);
})