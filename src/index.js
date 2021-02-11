
exports.min = function min (array) {
    if(array === undefined || array == 0){
        return 0;
    }
    let min = array[0];
    for(let i of array){
        if(min > i){
            min = i;
        }
    }
    return min;
}

exports.max = function max (array) {
    if(array === undefined || array == 0){
        return 0;
    }
    let max = 0;
    for(let i of array){
        if(max < i){
            max = i;
        }
    }
    return max;
}

exports.avg = function avg (array) {
    if(array === undefined || array == 0){
        return 0;
    }
    let avg = 0;
    for(let i of array){
        avg += i;
    }
    return avg / array.length;
}
