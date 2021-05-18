console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let foodArray = ['shrimp fettuccini alfredo', 'margherita pizza', 'angel hair pasta',
                  'chicken enchilada', 'barbacoa tacos with beer'];

// 1.b. TODO: Log your array of foods to the console with a message, similar
//      to the example above


console.log('Favorite foods are:', foodArray);

// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array?
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array

console.log('Number of Favorite Foods:', foodArray.length);
// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array
console.log('Second animal is', animalArray[1]);
//Confirmed that the console reads --- 3. Accessing items in an array ---
//Second animal is cat!!

// 3.b. TODO: Log the last animal in the array using it's array index
console.log('Last animal is', animalArray[3]);
//Confirmed that the console reads third, or last, animal in array index
// reads 'Last animal is Dog!!''

// 3.c. (STRETCH) TODO: Log the last animal by using the array length,
//      instead of the exact index number of the last item



// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array

foodArray.push('chicken teriyaki');
console.log('Added a favorite food to end,', foodArray);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array &
//      log both the food removed and the updated array
let removedfood = foodArray.pop();
console.log('Removed the last food', removedfood);
console.log('The Foods are now', foodArray);
// console now reads 'Removed the last food chicken teriyaki' then lists
//array of fav foods.

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
foodArray.unshift('breakfast burrito');
console.log(`Added a fav food to beginning: ${foodArray}`);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array &
//     log both the food removed and the updated array
