'use strict';

/**
 * Takes an input string and counts contiguous sequences of the same character
 * and replaces them with XC (X = count, C = character).
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string} str [description]
 * @return {[type]}     [description]
 */
export function compressString(str) {
  if(!str) {
    return str;
  }
  let cString = '';
  let currentChar = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (currentChar === '') {
      currentChar = str[i];
      count++;
    } else if(str[i] === currentChar) {
      count++;
    } else {
      cString += count + currentChar;
      currentChar = str[i];
      count = 1;
    }
  }
  cString += count + currentChar;
  

  if (cString.length >= str.length) {
    return str;
  }

  return cString;

}
