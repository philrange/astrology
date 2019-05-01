


var astronomia = require('astronomia')

function getBirthChart() {

var earth = new astronomia.planetposition.Planet(astronomia.data.earth)
var jupiterP = new astronomia.planetposition.Planet(astronomia.data.jupiter)
    // Example 43.a, p. 295
var result = astronomia.jupiter.physical(2458605.434028, earth, jupiterP)

console.log(result)
console.log(result[0])
console.log(result[1])
console.log(result[2])
console.log(result[3])
console.log(result[4])
 
    return result
}


module.exports.getBirthChart = getBirthChart