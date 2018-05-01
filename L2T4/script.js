//(*) Implement a function with two string arguments, which returns true if the given strings are anagrams,
//and  false otherwise. Anagrams are the strings, which consist of the same symbols, but perhaps in a different
//order. For example ‘melon’ and ‘lemon’ are anagrams, but ‘ball’ and ‘lab’ - no, because they have different
//amounts of letter ‘l’.

//var string1 = "test"
//var string2 = "estr"

var res = function checkAnagram(string1, string2) {
 if(string1.length != string2.length) {
  return false;
 }
 var newString1 = string1.toUpperCase().split("").sort().join("");
 var newString2 = string2.toUpperCase().split("").sort().join("");
 console.log(newString1);
 console.log(newString2);
 if (newString1 === newString2){
   return true;
}
   return false;
}


console.log(res("melon", "lemmon"));
