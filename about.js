document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageScroll");

    // Clone the images to create a seamless loop
    const images = document.querySelectorAll(".image-scroll img");
    const cloneImages = [...images].map(img => img.cloneNode(true));

    // Append cloned images to the end of the container
    cloneImages.forEach(clone => imageContainer.appendChild(clone));

    // Scroll functionality
    const scrollSpeed = 2; // Adjust the scroll speed as needed
    let scrollPosition = 0;

    function scrollImages() {
        scrollPosition -= scrollSpeed;
        imageContainer.style.transform = `translateX(${scrollPosition}px)`;

        // Reset scroll position when original images are out of view
        if (scrollPosition <= -imageContainer.clientWidth) {
            scrollPosition = 0;
        }

        requestAnimationFrame(scrollImages);
    }

    // Start the scrolling animation
    scrollImages();
});
