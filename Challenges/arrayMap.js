function isTargetSumPresent(numbers, targetSum) {
    // We start with the total sum being zero
    let totalSum = 0;
    
    // We keep a list of all sums we've seen so far, starting with just zero
    const sumsSeen = [0];

    // Go through each number in the list
    for (let i = 0; i < numbers.length; i++) {
        // Add the current number to the total sum
        totalSum += numbers[i];

        // Check if subtracting any of the previous sums from the total sum equals the target sum
        for (let j = 0; j < sumsSeen.length; j++) {
            if (totalSum - sumsSeen[j] === targetSum) {
                return true;  // We found a part that adds up to the target sum, so return true
            }
        }

        // Add the current total sum to the list of sums we've seen
        sumsSeen.push(totalSum);
    }

    // If we finish checking all numbers and didn't find any part that adds up to the target sum, return false
    return false;
}

// Let us use this example 
// We have a list of numbers
const numbers = [9, 2, 8, 7, 3, 1];
// We want to check if any continuous part of the list adds up to 11
const targetSum = 11;
// Print out whether such a part exists
console.log(isTargetSumPresent(numbers, targetSum)); // Output: true (because the part [9, 2] adds up to 11)

