const afternoonClasses = function(classTimesTable){
    let afternoonClass = classTimesTable.filter((times) => times === pm.ignoreCase());
    return afternoonClass;
}

module.exports = {afternoonClasses}