/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length != str2.length) {
    return false;
  }

    let map = new Map();

    for (let i = 0; i < str1.length; i++)
      {
        if(map.has(str1[i]))
          {
            map.set(str1[i],
              map.get(str1[i]) + 1);
          }
          else
          {
            map.set(str1[i],1);
          }
      }
      for (let i = 0; i < str2.length; i++)
        {
          if(map.has(str2[i]))
            {
              map.set(str2[i],
                map.get(str2[i]) - 1);
            }
            else
            {
              return false;
            }
        }
        let mkey = map.keys();

        for(let key of mkey)
          {
            if(map.get(key) != 0)
              return false;
          }
    return true;
}


module.exports = isAnagram;
