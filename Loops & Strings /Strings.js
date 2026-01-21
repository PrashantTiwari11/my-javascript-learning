// Strings in JS
//Create Strings 
let str11="Hello, World!";

//String length
str11.length

//String Indices
// str[0], str[7]

let str1 = "Hello, World!";
console.log("String:",str1);
console.log("Length:",str1.length);
console.log("First Character:",str1[0]);
console.log("Eighth Character:",str1[7]);
// //Template Literals - A way  to create strings using backticks `` 
let specialString =`This is a template literal.`
console.log(specialString);

let obj ={
    item:"Book",
    price:20
};
//console.log("The cost of " , obj.item , "is" , obj.price,"ruppees");
let output = `The cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);

// Strings Methods in JS
// 1) str.toUpperCase() - Converts string to uppercase
// 2) str.toLowerCase() - Converts string to lowercase
// 3) str.indexOf(substring) - Returns the index of the first occurrence of substring
// 4) str.slice(start, end) - Extracts a section of the string and returns it as a new string
// 5) str.replace(oldSubstring, newSubstring) - Replaces occurrences of oldSubstring with newSubstring
// 6) str.trim() - Removes whitespace from both ends of the string
// 7) str.split(separator) - Splits the string into an array of substrings based on the separator
// 8) str.includes(substring) - Checks if the string contains the specified substring
// 9) str.charAt(index) - Returns the character at the specified index
// 10) str.startsWith(substring) - Checks if the string starts with the specified substring
// 11) str.endsWith(substring) - Checks if the string ends with the specified substring
// 12) str.repeat(count) - Returns a new string with the specified number of copies of the string
// 13) str.concat(anotherString) - Joins two or more strings and returns a new string
// 14) str.substr(start, length) - Returns a portion of the string starting at the specified index and of the specified length
// 15) str.search(substring) - Searches for a substring and returns the index of the first match
// 16) str.match(regex) - Retrieves the matches of a string against a regular expression
// 17) str.localeCompare(anotherString) - Compares two strings in the current locale
// 18) str.padStart(targetLength, padString) - Pads the current string with another string at the start until the resulting string reaches the given length
// 19) str.padEnd(targetLength, padString) - Pads the current string with another string at the end until the resulting string reaches the given length

let str = "PRASHANT TIWARI";
let str2 = "@rtCamp"

let result = str.concat(str2);
console.log(result);

let upper = str2.toUpperCase();
console.log(upper);

