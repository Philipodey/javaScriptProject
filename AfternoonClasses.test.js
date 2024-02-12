const{afternoonClasses} = require("./AfternoonClass");

test("classesto have in the afternoon ", ()=>{
    let classTimimg = ["9:00 PM", "1:00 PM", "11:00 AM", "5:00 PM", "3:00 PM"];
    let result = ["9:00 PM", "1:00 PM", "5:00 PM", "3:00 PM"];
    let expected = afternoonClasses(classTimimg);
    expect(expected).toEqual(result);

})
