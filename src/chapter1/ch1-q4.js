'use strict';

/**
 * Go through characters in string and set flag to indicate if there is an
 * odd number of that character. If there is more than one character with an
 * odd number of occurences then it cannot be a palindrome.
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string[]} str String to check as a character array
 * @return {boolean}      True if input string is a permutation of a palindrome (ignoring spaces), otherwise false
 */
export function isPalindromePermutationsSet(str) {
  if(!str) return false;
//  str = str.toLowerCase();
  let storage = {};
  let odds = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    }
    if (storage[str[i]]) {
      storage[str[i]]++;
    } else {
      storage[str[i]] = 1;
    }
  }

  for (var key in storage) {
    if (storage[key] % 2 === 1) {
      odds++;
    }
  }
   
  if (odds > 1) {
    return false;
  }

  return true;
}
