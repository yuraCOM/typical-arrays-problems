
exports.min = function min (array) {
    let minNumber
    array === undefined ? minNumber = 0 : array.length === 0 ? minNumber = 0 :
        minNumber = Math.min.apply(null, array)
    return minNumber;
}

exports.max = function max (array) {
    let maxNumber
    array === undefined ? maxNumber = 0 : array.length === 0 ? maxNumber = 0 :
        maxNumber = Math.max.apply(null, array)
    return maxNumber;
}

exports.avg = function avg (array) {
    let avgNumber
    array === undefined ? avgNumber = 0 : array.length === 0 ? avgNumber = 0 :
        avgNumber = array.reduce( (sum, a) => sum + a  )/array.length
    return avgNumber;
}
