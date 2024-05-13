/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');

  let j = lowRegStr.length - 1;
  for(let i = 0 ; i < lowRegStr.length/ 2; i++)
  {
    if(lowRegStr[i] != lowRegStr[j])
    {
      return false;
    }
    j--;
  }
  return true;
}

module.exports = isPalindrome;
