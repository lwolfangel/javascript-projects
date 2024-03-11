const isPalindrome = require('../palindrome.js');

describe("isPalindrome", function(){

   test("should return true for a single letter", function() {
      expect(isPalindrome("launchcode")).toBe(false);
   });

   test("should return true for a single letter repeated", function() {
      expect(isPalindrome("ab")).toBe(false);
   });

   test("should return true for a simple palindrome", function() {
      expect(isPalindrome("abA")).toBe(false);
   });

   test("should return true for a longer palindrome", function() {
      expect(isPalindrome("so many dynamos")).toBe(false);
   });
   
   test("should consider the empty string a palindrome", function() {
    expect(isPalindrome("")).toBe(true);
 });

});