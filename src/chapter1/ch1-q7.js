'use strict';

/**
 * Go through the matrix diagonally from 0,0 until half way through (one less
 * where odd N). For each diagonal starting point move through matrix along row
 * until length - starting index. For each index in the matrix go through all 4
 * sides moving items along one place.
 *
 * N = dimension of matrix
 * Time: O(N^2)
 * Additional space: O(1)
 *
 * @param  {array} matrix NxN matrix to rotate in place
 * @return {array}        Rotated matrix, same object as input
 */
export function rotateMatrix(matrix) {
  if(!matrix || matrix.length === 0) {
    throw new Error('invalid matrix');
  }
  let n = matrix.length - 1;
  for (let i = 0; i < Math.floor((n + 1)/2); i++) {
    for (let j = i; j <= n - 1 - i; j++) {
      // top
      let temp = matrix[i][j];

      // left to top
      matrix[i][j] = matrix[n - j][i];

      // bottom to left
      matrix[n - j][i] = matrix[n - i][n - j];

      // right to bottom
      matrix[n - i][n - j] = matrix[j][n - i];

      // top to right
      matrix[j][n - i] = temp;

    }
  }

  return matrix;
}

