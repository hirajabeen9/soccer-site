// Set the event date
const eventDate = new Date("December 1, 2024 00:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Calculate weeks, days, hours, minutes, and seconds
    const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("weeks").querySelector("span").innerText = weeks;
    document.getElementById("days").querySelector("span").innerText = days;
    document.getElementById("hours").querySelector("span").innerText = hours;
    document.getElementById("minutes").querySelector("span").innerText = minutes;
    document.getElementById("seconds").querySelector("span").innerText = seconds;

    // If the countdown is over, clear the interval
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown").innerHTML = "<p>Event Started</p>";
    }
}, 1000);
