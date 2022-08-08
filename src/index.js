
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix) {
    let arr = matrix.reduce((acc, cur, i) => {
      return acc.concat((!(i % 2) ? cur : cur.reverse()));
    }, [])
    return arr;
  }
  return[];
}

// const matrix = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ] ];
// console.log(towelSort(matrix));