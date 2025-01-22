// Your code here
const reverse = (string) => {
    const reversed = string.split("").reverse().join("");
    return reversed;
}
  
 export function isPalindrome(word) {
    const lowerCase = word.toLowerCase();
    const reversed = reverse(lowerCase); 
    return lowerCase === reversed && word !== ""
  }

  console.log(isPalindrome(""))
