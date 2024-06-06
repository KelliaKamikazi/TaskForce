function fullImageView(Imglink) {
    document.getElementById("fullImage").src = Imglink;
    document.getElementById("fullImageView").style.display = "flex";
}

function closeFullImageView() {
    document.getElementById("fullImageView").style.display = "none";
}

window.onload = function() {
    document.getElementById("fullImageView").style.display = "none";
}

function scrollToImage(imageSrc) {
    const imageList = document.querySelector('.image-list');
    const images = imageList.querySelectorAll('.image-item');

    images.forEach(image => {
        const relativePath = image.src.split(window.location.origin)[1];

        console.log('Relative path:', relativePath);
        console.log('Provided imageSrc:', imageSrc);

        if (relativePath.includes(imageSrc)) {
            console.log('Scrolling to:', relativePath);
            image.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

// currentSum += arr[end];
// currentSum = currentSum + arr[end];