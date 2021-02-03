
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) return [];

    const compareFunc = row => {
        return row % 2 === 0
        ? (a, b) => a - b 
        : (a, b) => b - a;
    };

    return matrix
        .map((arr, index) => arr.sort(compareFunc(index)))
        .flat();
}
