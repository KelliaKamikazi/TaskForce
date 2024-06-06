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

        if (relativePath.includes(imageSrc)) {
            image.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

function handleThumbnailClick(imageSrc) {
    scrollToImage(imageSrc);
    fullImageView(imageSrc);
}
