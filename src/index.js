// You should implement your task here.
module.exports = function towelSort (matrix) {
   if (!Array.isArray(matrix) || matrix.length == 0) return [];

   return matrix.reduce((prev, curr, index) => prev.concat(
            index % 2 == 0 ? curr.sort((a, b) => a - b ) : curr.sort((a, b) => b - a)
          ));
}
