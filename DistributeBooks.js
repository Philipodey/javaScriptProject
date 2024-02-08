let bookDistribute = function(array1, array2){
    let counter = 0;
    let distribute = [];
    for (const iterator of array1) {
        distribute.push(iterator+" was given "+array2[counter]);
        counter += 1;
    }
    return distribute;
}

module.exports = {bookDistribute};