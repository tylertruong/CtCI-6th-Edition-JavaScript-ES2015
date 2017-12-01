'use strict';

/**
 * Scan through both strings's at the same time, when a difference is
 * encountered:
 *   * if this is the first edit:
 *     * if strings are the same length then consider it a replacement
 *     * if strings are different lengths then consider it a delete from the longer string
 *   * if this is the second edit then return false
 *
 * N = max(|str1|, |str2|)
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {string}  str1 The first string
 * @param  {string}  str2 The second string
 * @return {boolean}      True if strings are 0 or 1 edit apart, otherwise false
 */
export function isOneOrLessAway(str1, str2) {
  // if lengths differ by more than 1 then can't be true
  let track1 = 0;
  let track2 = 0;
  let edits = 0;

  while (track1 <= str1.length && track2 <= str2.length) {
    if (str1[track1] === str2[track2]) {
      track1++;
      track2++;
    } else {
      if (str1.length > str2.length) {
        edits++;
        track1++;
      } else if(str2.length > str1.length) {
        edits++;
        track2++;
      } else {
        edits++;
        track1++;
        track2++;
      }
    }
  }

  if (edits > 1) {
    return false;
  }
  return true;
  

}
