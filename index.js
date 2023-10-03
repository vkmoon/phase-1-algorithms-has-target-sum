function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const firstNum = array[i];
    for (let secondNum = i + 1; secondNum < array.length; secondNum++) {
      if ((firstNum + array[secondNum]) === target) {
        return true;
      }
    } 
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O[n²]
*/

/* 
  Add your pseudocode here
  Write for loop that searches through array a first time
  Declare const to add found integer from the loop
  Write second loop to search through array again using the const + 1
  Write if statement that compares const to second variable to see if the sum adds up to target
  Return true if they do add up to target
  Return false if they don't
*/

/*
  Add written explanation of your solution here
  Write function that contains two for loops that course through the array two times in order to find
  integers that add up to target value. First for loop value declared with const variable and then
  second for loop declares a let variable that equals first const plus one. Both variables are then
  compared with a strict comparison to target value. Return true if it adds up, return false if it doesn't.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 4, 6, 8, 10, 12], 14));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 3, 5, 7, 9, 11], 2));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
