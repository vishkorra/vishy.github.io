const noButton = document.getElementById('noButton');
const messages = ["Think about it", "Are you sure?", "You're not thinking straight", "HMMMM R U SERIOUS??", "Fine", "Jk lol click yes", "Uggghhhh we're starting over"];
let clickCount = 0;

noButton.addEventListener('click', function() {
    clickCount++; // Increment the click counter

    // Calculate new sizes with limits
    let newPaddingVertical = Math.min(10 + clickCount * 5, 40); // Max vertical padding of 40px
    let newPaddingHorizontal = Math.min(20 + clickCount * 10, 100); // Max horizontal padding of 100px
    let newFontSize = Math.min(16 + clickCount, 24); // Max font size of 24px

    // Apply the new sizes
    this.style.padding = `${newPaddingVertical}px ${newPaddingHorizontal}px`;
    this.style.fontSize = `${newFontSize}px`;

    // Change the button text
    if (clickCount < messages.length) {
        this.textContent = messages[clickCount];
    } else {
        // Reset if it goes beyond the message array
        clickCount = 0; // Reset counter
        this.textContent = "No"; // Reset button text
        this.style.padding = "10px 20px"; // Reset to initial padding
        this.style.fontSize = "16px"; // Reset to initial font size
    }
});





const themessage = [
    "Hi dunapotha <3",
    "Well would you look at that, it's about to be the 14th",
    "You know what the 14th is...",
    "Soo....",
    "Will you be my valentine?"
];
let currentMessageIndex = 0;
let intervalId;

const transitioningTextElement = document.getElementById('transitioningText');

function changeText() {
    transitioningTextElement.classList.remove('visible');

    setTimeout(() => {
        currentMessageIndex++;
        if (currentMessageIndex >= themessage.length) {
            // Stop at the last message
            transitioningTextElement.textContent = themessage[themessage.length - 1];
            clearInterval(intervalId); // Stop the interval
            return;
        }

        transitioningTextElement.textContent = themessage[currentMessageIndex];
        transitioningTextElement.classList.add('visible');
    }, 1000); // Transition time
}

transitioningTextElement.classList.add('visible');
intervalId = setInterval(changeText, 2000); // Total cycle time

