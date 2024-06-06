// Function to display the full image view with the selected image
function fullImageView(Imglink) {
    document.getElementById("fullImage").src = Imglink; // Set the source of the full image to the clicked image
    document.getElementById("fullImageView").style.display = "flex"; // Show the full image view container
}

// Function to close the full image view
function closeFullImageView() {
    document.getElementById("fullImageView").style.display = "none"; // Hide the full image view container
}

// Function to hide the full image view when the page loads
window.onload = function() {
    document.getElementById("fullImageView").style.display = "none"; // Initially hide the full image view container
}

// Function to scroll to the specific image in the image list
function scrollToImage(imageSrc) {
    const imageList = document.querySelector('.image-list'); // Get the container of all images
    const images = imageList.querySelectorAll('.image-item'); // Get all images within the container

    // Loop through each image to find the one that matches the source
    images.forEach(image => {
        const relativePath = image.src.split(window.location.origin)[1]; // Get the relative path of the image

        // If the relative path includes the source, scroll to that image
        if (relativePath.includes(imageSrc)) {
            image.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Smoothly scroll to the image
        }
    });
}

// Function to handle thumbnail click event
function handleThumbnailClick(imageSrc) {
    scrollToImage(imageSrc); // Scroll to the selected image
    fullImageView(imageSrc); // Display the full view of the selected image
}
