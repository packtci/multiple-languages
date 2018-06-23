function average(numbers) {
    return numbers.reduce(function(prev, curr) {
        return prev + curr
    }, 0) / numbers.length;
}

module.exports = average;