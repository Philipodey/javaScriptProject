const{upgradeScore} = require("./increaseScore")

test("increase studenbt score ",() =>{
    let score = [5, 2, 4, 8, 5];
    let expected = upgradeScore(score);
    expect(expected).toEqual([10, 7, 9, 13, 10]);
})