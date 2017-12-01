'use strict';

/**
 * Keep track of characters counts with a Map data structure, fail when
 * str2 has a character different to str2 or if any characters are left over
 * at the end.
 *
 * N = |str1| && M = |str2|
 * Time: O(N + M)
 * Additional space: O(N)
 *
 * @param  {string[]} str2 First string, passed in as a character array
 * @param  {string[]} str1 Second string, passed in as a character array
 * @return {boolean}       True if first and second strings are permutations otherwise false
 */
export function isPermutationMap(str1, str2) {
  const obj = {};
  
  for (let i = 0; i < str1.length; i++) {
    if (obj[str1[i]]) {
      obj[str1[i]]++;
    } else {
      obj[str1[i]] = 1;
    }
  }
  for (let j = 0; j < str2.length; j++) {
    if (!obj[str2[j]]) {
      return false;
    }
   
    obj[str2[j]]--;
  }

  for (var key in obj) {
    if (obj[key] !== 0) {
      return false;
    }
  }

  return true;
}
