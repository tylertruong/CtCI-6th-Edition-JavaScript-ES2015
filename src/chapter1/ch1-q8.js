'use strict';

/**
 * Do a first pass through the matrix to find which cells have 0's. When a 0 is
 * found then mark that row and column as needing to be zeroed out. On the second
 * pass zero out any cells that need to be zeroed out based on the row or column
 * indicators.
 *
 * N = matrix Y dimension
 * M = matrix X dimension
 * Time: O(N * M)
 * Additional space: O(N + M)
 *
 * @param  {array} matrix Matrix to be zeroed in-place
 * @return {array}        Matrix that has been zeroed, same object as input
 */
export function zeroMatrix(matrix) {
  if (!matrix) {
    throw new Error('invalid matrix');
  }
  
  let rows = {};
  let columns = {};

  for (let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        columns[j] = true;
      }
    }
  }


  for (let key in rows) {
    for(let i = 0; i < matrix[key].length; i++) {
      matrix[key][i] = 0;
    }
  }

  for (let key in columns) {
    for(let i = 0; i < matrix.length; i++) {
      matrix[i][key] = 0;
    }
  }  
  return matrix;
  
}
