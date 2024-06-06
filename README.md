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

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. Open the project in your preferred code editor.

3. To run the interactive photo gallery:
    - Open `index.html` in your web browser.

4. To test the coding challenges:
    - Open the console in your web browser or run the provided JavaScript code in a Node.js environment.

## Interactive Photo Gallery

### Description

The interactive photo gallery displays images in a grid format. On mobile devices, the images are resized equally without any text overlay. Users can click on thumbnails to view images in full-screen mode.

### Files

- `index.html`: The main HTML file.
- `style.css`: The CSS file for styling the gallery.
- `script.js`: The JavaScript file containing the logic for the gallery.

### Code Overview

- **HTML**: Defines the structure of the gallery.
- **CSS**: Provides styling for different screen sizes using media queries.
- **JavaScript**: Handles interactive features like full-screen viewing and scrolling to specific images.

### Key Features

- Responsive design: Images resize equally on mobile devices.
- Full-screen viewing: Click on an image to view it in full-screen mode.
- Smooth scrolling: Scroll to specific images using thumbnail navigation.

## Coding Challenges

### Contiguous Subarray Sum

#### Problem Statement

Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

#### Example

- Input: `arr = [4, 2, 7, 1, 9, 5]`, `target = 17`
- Output: `true`
- Explanation: The subarray `[7, 1, 9]` sums up to 17, which is equal to the target.

#### Approach

- **Sliding Window Technique**: Use two pointers to dynamically adjust the size of a window representing a subarray.
- **Prefix Sum with Hash Map**: Store prefix sums in a set to check if a subarray with the desired sum exists.

#### Implementation

```javascript
function hasContiguousSubarrayWithSum(arr, target) {
    const prefixSumSet = new Set();
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum === target) {
            return true;
        }

        if (prefixSumSet.has(currentSum - target)) {
            return true;
        }

        prefixSumSet.add(currentSum);
    }

    return false;
}
# TaskForce
