const{bookDistribute} = require("./DistributeBooks");


test("distribute books to book club members: ",()=> {
    let members = ["Emily", "Jack", "Sophia","Daniel"];
    let books = ["book1", "book2", "book3", "book4"];
    let result = ["Emily was given book1", "Jack was given book2",
     "Sophia was given book3", "Daniel was given book4"];
     let expected = bookDistribute(members, books);
    expect(expected).toEqual(result);
})