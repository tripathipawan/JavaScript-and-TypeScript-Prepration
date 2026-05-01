"use strict";
// ************* Day-9 | TypeScript | Arrays Basics ************* //
// ************* Task-1 ************* //
// Question: Same as JS Task 1 — add proper types to every variable.
// CONCEPT: Array type in TypeScript
// string[]  → array of strings
// number[]  → array of numbers
// boolean[] → array of booleans
// ❌ Your mistake 1: total: number = 67 — task asked for students.length, not 67
// ❌ Your mistake 2: isArray: boolean = [true, false] — boolean cannot hold an array
//    Array.isArray() returns a single boolean value — true or false
let students = ["Pawan", "Rahul", "Amit", "Priya", "Neha"];
let firstName = students[0]; // "Pawan"
let lastName = students[students.length - 1]; // "Neha"
let total = students.length; // 5
let isArray = Array.isArray(students); // true
let thirdStudent = students[2]; // "Amit"
console.log(firstName); // output: Pawan
console.log(lastName); // output: Neha
console.log(total); // output: 5
console.log(isArray); // output: true
console.log(thirdStudent); // output: Amit
// ************* Task-2 ************* //
// Question: Same as JS Task 2 — array must be typed as number[].
// CONCEPT: number[] means the array can ONLY hold numbers
// TypeScript will error if you try to push a string into a number[] array
// ❌ Your mistake: let nums: number = [10, 20, 30]
//    number means a single number — number[] means an array of numbers
let nums = [10, 20, 30]; // ✅ number[] not number
nums.push(40);
console.log(nums); // output: [10, 20, 30, 40]
nums.unshift(5);
console.log(nums); // output: [5, 10, 20, 30, 40]
nums.pop(); // no argument needed
console.log(nums); // output: [5, 10, 20, 30]
nums.shift(); // no argument needed
console.log(nums); // output: [10, 20, 30]
// ************* Task-3 ************* //
// Question: getArrayStats(scores): { highest, lowest, average } — for loop only.
// CONCEPT: Return type is an OBJECT with specific typed properties
// { highest: number; lowest: number; average: number }
// This is an inline object type — no need for a separate type alias
function getArrayStats(scores) {
    let highest = scores[0];
    let lowest = scores[0];
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > highest)
            highest = scores[i];
        if (scores[i] < lowest)
            lowest = scores[i];
        sum += scores[i];
    }
    let average = parseFloat((sum / scores.length).toFixed(2));
    return { highest, lowest, average }; // return as object
}
console.log(getArrayStats([45, 82, 90, 38, 76, 91, 55]));
// output: { highest: 91, lowest: 38, average: 68.14 }
// ************* Task-4 ************* //
// Question: removeDuplicates<T>(arr: T[]): T[] — works for any type.
// CONCEPT: <T> is a GENERIC — it means "whatever type you pass in, use that type"
// If you pass number[] → T becomes number, return type is number[]
// If you pass string[] → T becomes string, return type is string[]
// This makes the function reusable for any type
function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(["a", "b", "a", "c"])); // output: ["a", "b", "c"]
// ************* Task-5 ************* //
// Question: flattenArray(arr: number[][]): number[] — no .flat() allowed.
// CONCEPT: number[][] means array of number arrays
// [[1,2],[3,4]] — outer array holds inner arrays
// nested for loop — outer goes through sub-arrays, inner goes through elements
function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[i][j]);
        }
    }
    return result;
}
console.log(flattenArray([[1, 2], [3, 4], [5, 6]])); // output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([[10, 20], [30], [40, 50]])); // output: [10, 20, 30, 40, 50]
// ************* Task-6 (Extra) ************* //
// Question: chunkArray<T>(arr: T[], size: number): T[][] — split into chunks.
// CONCEPT: T[][] means array of arrays — each chunk is an array, result holds all chunks
// slice(i, i+size) extracts a portion of the array without modifying the original
// Generic <T> makes this work for number[], string[], or any other type
function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size)); // slice returns T[] — push into T[][]
    }
    return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6], 2)); // output: [[1,2],[3,4],[5,6]]
console.log(chunkArray([1, 2, 3, 4, 5], 3)); // output: [[1,2,3],[4,5]]
console.log(chunkArray(["a", "b", "c", "d"], 2)); // output: [["a","b"],["c","d"]]
