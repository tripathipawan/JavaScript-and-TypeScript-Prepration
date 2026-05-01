// ************* Day-9 | JavaScript | Arrays Basics ************* //


// ************* Task-1 ************* //

// Question: Create students array. Print first, last, total, isArray check, third student.

// CONCEPT: Array index starts from 0
// First element = arr[0]
// Last element  = arr[arr.length - 1]  — always works no matter how long the array is
// Third element = arr[2]               — index 2 = third position

let students = ["Pawan", "Rahul", "Amit", "Priya", "Neha"];

console.log(students[0]);                    // output: Pawan  — first
console.log(students[students.length - 1]); // output: Neha   — last (always safe)
console.log(students.length);               // output: 5      — total count
console.log(Array.isArray(students));        // output: true
console.log(students[2]);                    // output: Amit   — third (index 2)


// ************* Task-2 ************* //

// Question: Start with [10, 20, 30]. Add/remove step by step. Log after each.

// CONCEPT:
// push(val)    → adds to END,   returns new length
// unshift(val) → adds to START, returns new length
// pop()        → removes from END,   returns removed element — takes NO argument
// shift()      → removes from START, returns removed element — takes NO argument

// ❌ Your mistake: nums.pop(5) and nums.shift(5) — pop and shift take NO arguments
// The number inside is ignored but it is bad practice — just write pop() and shift()

let nums = [10, 20, 30];

nums.push(40);
console.log(nums); // output: [10, 20, 30, 40]

nums.unshift(5);
console.log(nums); // output: [5, 10, 20, 30, 40]

nums.pop();
console.log(nums); // output: [5, 10, 20, 30]

nums.shift();
console.log(nums); // output: [10, 20, 30]


// ************* Task-3 ************* //

// Question: Find highest, lowest, average of scores using only for loop.

// CONCEPT: Track max and min using a variable
// Start with first element as both highest and lowest
// Loop through — if current > highest, update highest
//              — if current < lowest, update lowest
// Average = total sum / number of elements

// ❌ Your mistake: comparing adjacent elements — wrong approach
//    scores[i] < scores[i+1] just compares neighbors, not the global max/min

let scores = [45, 82, 90, 38, 76, 91, 55];

let highest = scores[0]; // assume first is highest
let lowest  = scores[0]; // assume first is lowest
let sum     = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > highest) highest = scores[i]; // found a bigger one — update
  if (scores[i] < lowest)  lowest  = scores[i]; // found a smaller one — update
  sum += scores[i];                              // keep adding to sum
}

let average = parseFloat((sum / scores.length).toFixed(2));

console.log("Highest:", highest); // output: 91
console.log("Lowest:",  lowest);  // output: 38
console.log("Average:", average); // output: 68.14


// ************* Task-4 ************* //

// Question: removeDuplicates(arr) — return array with no repeated values.

// CONCEPT: includes() checks if a value already exists in an array
// Loop through original array
// Only push to result if that value is NOT already in result

// arr.includes(value) → returns true if value exists in arr

function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) { // only add if not already there
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(["a", "b", "a", "c"]));   // output: ["a", "b", "c"]


// ************* Task-5 ************* //

// Question: flattenArray(arr) — turn nested array into flat array. No .flat() allowed.

// CONCEPT: nested array = array inside an array [[1,2],[3,4]]
// Outer loop goes through each inner array
// Inner loop goes through each element of that inner array
// Push each element individually to result

function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {       // outer: each sub-array
    for (let j = 0; j < arr[i].length; j++) {  // inner: each element in sub-array
      result.push(arr[i][j]);                   // push individual element
    }
  }

  return result;
}

console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));    // output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([[10, 20], [30], [40, 50]]));   // output: [10, 20, 30, 40, 50]


// ************* Task-6 (Extra) ************* //

// Question: chunkArray(arr, size) — split array into chunks of given size.

// CONCEPT: slice(start, end) cuts out a portion of an array
// slice(0, 2) → elements from index 0 to 1 (end is excluded)
// Loop with step = size — jump by size each iteration
// Each iteration: slice from i to i+size

function chunkArray(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) { // jump by size each time
    result.push(arr.slice(i, i + size));        // cut chunk and push
  }

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6], 2)); // output: [[1,2],[3,4],[5,6]]
console.log(chunkArray([1, 2, 3, 4, 5], 3));     // output: [[1,2,3],[4,5]]