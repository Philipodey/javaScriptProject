const{wordFrequency} = require("./WordFrequency")

test("count relements in the object", ()=>{
    let word = 'semicolon.africa';
    let result = {'s':1,'e':1,'m':1,'i':2,'c':2, 'o':2,'l':1,'n':1,'.':1,'a':2,'f':1,'r':1};
    let expected = wordFrequency(word);
    expect(expected).toEqual(result);
})
