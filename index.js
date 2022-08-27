

function isPalindrome(word) {
  for (let i = 0; i< word.length /2; i++){
    const j = word.length - 1 -i  // when i= 0 j = -1 and thats y (1- i)
    const firstLetter = word[i]
    const lastLatter = word[j]
    if (firstLetter !== lastLatter)
    return false
  }
  return true
}
console.log(isPalindrome('aaaa'))

/* 
  by checking on letter
   r a c e c a r  = letters of racecar
   1 2 3 4 5 6 7  = numbers representing the letters of racecar
   i              = represents the numbers moving forward(+)
               j  = represents the numbers moving backward (-)
  r a c e c a r
  1 2 3 4 5 6 7
    i       j
  r a c e c a r
  1 2 3 4 5 6 7
      i   j
  r a c e c a r
  1 2 3 4 5 6 7
        ij
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;