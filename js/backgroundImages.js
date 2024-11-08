document.addEventListener('DOMContentLoaded', () => {
    const backgroundImages = [
        './images/bg_1.jpg',
        './images/bg_2.jpg',
        './images/bg_3.jpg',
        './images/shoes.jpg',
        './images/player.jpg'
    ];

    let currentImageIndex = 0;
    const heroSection = document.querySelector('.hero-bg');

    // Function to change the background image
    function changeBackgroundImage() {
        heroSection.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    }

    // Set the interval to change the background image every 5 seconds
    setInterval(changeBackgroundImage, 5000); // Change every 5 seconds

    // Initialize with the first image
    changeBackgroundImage();
});
