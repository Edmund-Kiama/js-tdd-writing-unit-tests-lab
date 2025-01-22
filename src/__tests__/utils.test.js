// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("return true for words with both uppercase letters and lowercase letters", () => {
        const word = "RaCecar";
        const result = isPalindrome(word);
        expect(result).toBe(true);
  });
 
  it("returns false if the input is an empty string", () => {
        const word = "";
        const result = isPalindrome(word);
        expect(result).toBe(false);
  });

  it("returns true when the word forward is same as itself backwards", () => {
        const word = "racecar";
        const result = isPalindrome(word);
        expect(result).toBe(true);
  });

  it("returns false when the word is not the same forwards as it is backwards", () => {
        const word = "car";
        const result = isPalindrome(word);
        expect(result).toBe(false);
  });

});