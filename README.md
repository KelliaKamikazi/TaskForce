
# Project Title: Interactive Photo Gallery and Coding Challenges

## Table of Contents

1. [Introduction](#introduction)
2. [Setup Instructions](#setup-instructions)
3. [Interactive Photo Gallery](#interactive-photo-gallery)
4. [Coding Challenges](#coding-challenges)
    1. [Contiguous Subarray Sum](#contiguous-subarray-sum)
    2. [String Transformation](#string-transformation)
5. [Usage](#usage)

## Introduction

This repository contains an interactive photo gallery and solutions to two coding challenges. The photo gallery is designed to be responsive, displaying images in a grid format and supporting full-screen viewing. The coding challenges involve algorithms for finding contiguous subarrays with a given sum and transforming strings based on specific rules.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KelliaKamikazi/Task-Force-Work.git
2.Open the project in your preferred code editor.
3.To run the interactive photo gallery:

    Open index.html in your web browser.
4.To test the coding challenges:

    Open the console in your web browser or run the provided JavaScript code in a Node.js environment.    

## Interactive Photo Gallery

### Description

This project is an interactive photo gallery built using HTML, CSS, and JavaScript. The gallery features a grid of images that display an overlay with additional information when hovered over. Clicking on an image opens a full-screen view. The gallery is responsive, adapting seamlessly for both mobile and desktop views, and includes thumbnail navigation for easy browsing.

### Files

- `gallery/index.html`: The main HTML file.
- `gallery/style.css`: The CSS file for styling the gallery.
- `gallery/script.js`: The JavaScript file for handling interactions.
- `gallery/images/`: Directory containing image files.

### Code Overview

- **HTML**: Defines the structure of the gallery.
- **CSS**: Provides styling for different screen sizes using media queries.
- **JavaScript**: Handles interactive features like full-screen viewing and scrolling to specific images.

### Key Features

- **Hover Effect**: Displays an overlay with image information.
- **Full-Screen View**: Click an image to view it in full-screen mode.
- **Responsive Design**: Adjusts layout for different screen sizes, including mobile and desktop.
- **Thumbnail Navigation**: Provides easy browsing through thumbnails of the images.

## Coding Challenges

### 1. Contiguous Subarray Sum

#### Problem Statement

Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

#### Example

- **Input**: `arr = [4, 2, 7, 1, 9, 5]`, `target = 17`
- **Output**: `true`
- **Explanation**: The subarray `[7, 1, 9]` sums up to 17, which is equal to the target.

#### Constraints

- The array will contain between 1 and 100,000 elements.
- The elements in the array and the target sum will be between -1,000,000,000 and 1,000,000,000.

#### Approach

- We maintain a variable `totalSum` to keep track of the cumulative sum of elements in the array.
- We initialize an array `sumsSeen` with one element, zero, to keep track of all the prefix sums we've encountered so far.
- We iterate through each element in the array:
  - For each element, we add it to the `totalSum`.
  - We iterate through all the prefix sums stored in the `sumsSeen` array.
  - For each prefix sum, we check if the difference between the current `totalSum` and the prefix sum equals the `targetSum`.
  - If such a difference exists, it indicates that there is a contiguous subarray with the target sum.
- If we finish iterating through all elements without finding such a subarray, we return false, indicating that no contiguous subarray with the target sum exists in the array.

#### Implementation

The implementation is found in the `challenges/arrayMap.js` file.

```javascript
function isTargetSumPresent(numbers, targetSum) {
    let totalSum = 0;
    const sumsSeen = [0];

    for (let i = 0; i < numbers.length; i++) {
        totalSum += numbers[i];

        for (let j = 0; j < sumsSeen.length; j++) {
            if (totalSum - sumsSeen[j] === targetSum) {
                return true;
            }
        }

        sumsSeen.push(totalSum);
    }

    return false;
}

// Example usage
const numbers = [9, 2, 8, 7, 3, 1];
const targetSum = 11;
console.log(isTargetSumPresent(numbers, targetSum)); // Output: true

### 2. String Transformation

#### Problem Statement

Given a string, transform it based on the following rules:

- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.

#### Examples

- **Input**: "Hamburger"
  - **Output**: "regrubmaH"
  - **Explanation**: The length of the string is 9, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed, resulting in "regrubmaH".

- **Input**: "Pizza"
  - **Output**: "80 105 122 122 97"
  - **Explanation**: The length of the string is 5, which is divisible by 5 but not by 3 or 15. Therefore, each character is replaced by its ASCII code, resulting in "80 105 122 122 97".

- **Input**: "Chocolate Chip Cookie"
  - **Output**: "eikooCpihCetalocohC"
  - **Explanation**: The length of the string is 21, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed, resulting in "eikooCpihCetalocohC".

#### Approach

1. Determine the length of the input string.
2. Check if the length is divisible by 3, 5, or both.
3. Apply the corresponding transformation rules based on the divisibility:
   - If divisible by 3, reverse the string.
   - If divisible by 5, replace each character with its ASCII code.
   - If divisible by both 3 and 5, perform both operations in the specified order.
4. Return the transformed string or the original string if no transformation is needed.

#### Implementation

The implementation is found in the `challenges/stringTransform.js` file.

```javascript
function modifyStringBasedOnLength(inputString) {
    const stringLength = inputString.length;

    if (stringLength % 15 === 0) {
        return inputString.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } 
    
    if (stringLength % 3 === 0) {
        return inputString.split('').reverse().join('');
    }
    
    if (stringLength % 5 === 0) {
        return inputString.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    
    return inputString;
}


## Usage

- To view the interactive photo gallery, open `Gallery/index.html` in a web browser.
- To test the coding challenges, run the provided JavaScript code in a browser console or a Node.js environment.

This repository combines a functional and visually appealing photo gallery with algorithmic solutions to common coding challenges, demonstrating both front-end development and problem-solving skills.
