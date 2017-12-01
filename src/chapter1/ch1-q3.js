'use strict';

/**
 * Count the number of spaces in the string to calculate the new length of the
 * string and move characters back where required replacing spaces with %20.
 *
 * N = |url|
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {string[]} url URL string as a character arra which will be updated in place
 * @return {string[]}     Updated URL character array
 */
export function encodeSpaces(url) {
  if(!url) {
    return url;
  }
  let spaces = 0;

  for (let i = 0; i < url.length; i++) {
    if (url[i] === ' ') {
      spaces++;
    }
  }

  for (let i = url.length - 1; i >= 0; i--) {
    if (url[i] === ' ') {
      url[i + spaces * 2] = '0';
      url[i + spaces * 2 - 1] = '2';
      url[i + spaces * 2 - 2] = '%';
      spaces--;
    } else {
      url[i + spaces * 2] = url[i];
    }
  }
  
  return url;
}