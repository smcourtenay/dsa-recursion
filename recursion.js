/** product: calculate the product of an array of numbers. */

function product(nums) {

  if(nums.length === 0) return 1;
  
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {

  if (words.length === 0) return 0;
  
  // return words[0].length, longest(words.slice(1))

  return (words[0].length > longest(words.slice(1)) ? words[0].length : longest(words.slice(1)))

}

/** everyOther: return a string with every other letter. */

function everyOther(str) {

  if (str.length === 0) return "";

  return str[0].concat(everyOther(str.slice(2)));
}

/** isPalindrome: checks whether a string is a palindrome or not. */


function isPalindrome(str) {
    if(str.length === 0 || str.length === 1) return true;

    const left = str[0];
    const right = str[str.length - 1];

    return left === right ? isPalindrome(str.slice(1, str.length - 1)) : false; 

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
[4, 1, 2, 3, 4]
[4, 1, 2, 3] 4
[4, 1, 2] 3, 4
[4, 1] 2 3 4
[4] 1 2 3 4
[] 4 1 2 3 4
 function findIndex(arr, val, at=0) {
    if(arr.length === 0) return -1;
    // const idx = (arr[arr.length - 1] === val) ? arr.length - 1 : -1;
    return (arr[arr.length - 1] === val) ? idx : findIndex(arr.slice(arr.length - 1, val));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
