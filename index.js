
function findMatching(drivers, string){
    return drivers.filter(function(driver) {
        return driver.toLowerCase().indexOf(string.toLowerCase()) !== -1
    });
};

function fuzzyMatch(drivers, string){
    return drivers.filter(function(driver) {
        return driver.toLowerCase().indexOf(string.toLowerCase()) === 0
    });
};

function matchName(drivers, string){
    return drivers.filter( driver => driver.name === string)
}
