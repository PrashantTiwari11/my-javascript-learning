//ARRAYS IS THE COLLECTION OF ITEMS 
// ITS LOOK LIKE LINEAR LIST OF ITEMS
// ARRAYS HAS NO KEY VALUE PAIR
// ARRAYS ARE ORDERED COLLECTION OF ITEMS
// ARRAYS ARE MUTABLE (CAN BE CHANGED)
// ARRAYS ALLOW DUPLICATE ITEMS

// HOW TO CREATE ARRAY
let fruits = ['apple', 'banana', 'mango'];
console.log(fruits); // ['apple', 'banana', 'mango']
console.log(typeof fruits); 
// object (in JavaScript, arrays are a type of object)

//ARRAY INDICES
// ARRAYS USE ZERO-BASED INDEXING
// FIRST ITEM IS AT INDEX 0
// SECOND ITEM IS AT INDEX 1
// THIRD ITEM IS AT INDEX 2...... SO ON

// ACCESSING ARRAY ITEMS
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // mango

// MODIFYING ARRAY ITEMS
fruits[1] = 'orange';
console.log(fruits); // ['apple', 'orange', 'mango']

// LOOPING IN ARRAYS
// USING FOR LOOP
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// USING FOR...OF LOOP
for (let fruit of fruits) {
    console.log(fruit);
}
// USING FOR...IN LOOP
for (let index in fruits) {
    console.log(fruits[index]);
}

// ARRAYS METHODS
// PUSH METHOD - ADDS ITEM TO THE END OF THE ARRAY AT LAST
// POP METHOD - REMOVES ITEM FROM THE END OF THE ARRAY
// SHIFT METHOD - REMOVES ITEM FROM THE BEGINNING OF THE ARRAY
// UNSHIFT METHOD - ADDS ITEM TO THE BEGINNING OF THE ARRAY
// SPLICE METHOD - ADDS/REMOVES ITEMS FROM SPECIFIC INDEX
// SLICE METHOD - EXTRACTS A SECTION OF THE ARRAY AND RETURNS A NEW ARRAY
// INDEXOF METHOD - RETURNS THE FIRST INDEX OF A SPECIFIC ITEM
// LENGTH PROPERTY - RETURNS THE NUMBER OF ITEMS IN THE ARRAY
// TOSTRING METHOD - CONVERTS THE ARRAY TO A STRING
// CONCAT METHOD - JOINS TWO OR MORE ARRAYS AND RETURNS A NEW ARRAY

let colors = ["red" , "green" , "blue"];
colors.push("yellow");
console.log(colors);
colors.pop();
console.log(colors);
console.log(colors.toString());

let newColors = ["purple" , "orange"];
let allColors = colors.concat(newColors);
console.log(allColors);
console.log("Length of colors array: " + colors.length);

// SPLICE METHOD EXAMPLE
let animals = ["cat", "dog", "rabbit", "elephant"];
animals.splice(2, 1, "tiger"); // removes "rabbit" and adds "tiger" at index 2
console.log(animals); // ["cat", "dog", "tiger", "elephant"]

// SLICE METHOD EXAMPLE
let someAnimals = animals.slice(1, 3); // extracts items from index 1 to 2
console.log(someAnimals); // ["dog", "tiger"]



