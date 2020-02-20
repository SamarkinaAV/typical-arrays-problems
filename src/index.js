exports.min = function min(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        array.sort((a, b) => a - b);
        return array[0];
    } else {
        return 0;
    }
}

exports.max = function max(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        array.sort((a, b) => b - a);
        return array[0];
    } else {
        return 0;
    }
}

exports.avg = function avg(array) {
    var sum = 0;
    if (typeof array !== 'undefined' && array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        return (sum / array.length);
    } else {
        return 0;
    }
}
