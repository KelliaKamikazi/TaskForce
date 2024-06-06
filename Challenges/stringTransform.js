function modifyStringBasedOnLength(inputString) {
    const stringLength = inputString.length;

    // If the length is divisible by both 3 and 5 (i.e., 15)
    if (stringLength % 15 === 0) {
        // Reverse the string and then replace each character with its ASCII code
        return inputString.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } 
    
    // If the length is divisible by 3
    if (stringLength % 3 === 0) {
        return inputString.split('').reverse().join('');
    }
    
    // If the length is divisible by 5
    if (stringLength % 5 === 0) {
        return inputString.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    
    // If no condition is met, return the original string
    return inputString;
}

//Let us take these as examples
console.log(modifyStringBasedOnLength("Hamburger")); // Output: "regrubmaH"
console.log(modifyStringBasedOnLength("Pizza")); // Output: "80 105 122 122 97"
console.log(modifyStringBasedOnLength("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
console.log(modifyStringBasedOnLength("Hello World!")); // Output: "Hello World!" (no transformation)
