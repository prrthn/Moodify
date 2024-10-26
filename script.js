// Array of cheering messages
const cheers = [
    "You're Awesome!",
    "Keep Going, You're Doing Great!",
    "You Can Do It!",
    "Amazing Effort!",
    "You're a Superstar!",
    "Believe in Yourself!",
    "Today is Your Day!",
    "You're Crushing It!"
];

// Get references to the button and message display
const cheerButton = document.getElementById('cheerButton');
const cheerMessage = document.getElementById('cheerMessage');

// Function to handle button click
cheerButton.addEventListener('click', function() {
    // Pick a random cheer from the array
    const randomCheer = cheers[Math.floor(Math.random() * cheers.length)];
    
    // Display the cheer
    cheerMessage.textContent = randomCheer;

    // Optional: Add some fun animations
    animateCheer();
});

// Optional: Add some animation like confetti
function animateCheer() {
    cheerMessage.style.opacity = 0;
    cheerMessage.style.transform = "scale(0.5)";
    setTimeout(() => {
        cheerMessage.style.opacity = 1;
        cheerMessage.style.transform = "scale(1)";
    }, 100);
}
