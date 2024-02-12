
const wordFrequency = function(word){
    letterFrequency = {}
    for (const index of word) {
        if(index in letterFrequency){
            letterFrequency[index] ++;
        }
        else{
            letterFrequency[index] = 1;
        }
    }
    return letterFrequency;
}

module.exports = {wordFrequency}