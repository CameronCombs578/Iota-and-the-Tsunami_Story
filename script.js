
const menuScreen = document.getElementById("menuScreen");
const playContent = document.getElementById("playContent");
const instructionsContent = document.getElementById("instructionsContent");

const startButton = document.getElementById("startButton");
const instructionsButton = document.getElementById("instructionsButton");
const homeButton = document.getElementById("homeButton");
const backToMenuButton = document.getElementById("backToMenuButton");

// Start the story
startButton.addEventListener("click", () => {
    menuScreen.classList.add("hidden");
    instructionsContent.classList.add("hidden");
    playContent.classList.remove("hidden");

    // Replace the placeholder text with the first scene
    playContent.innerHTML = `
        <h2>Iota's Journey</h2>
        <p>Iota stood on the beach and noticed the ocean pulling away from the shore.</p>
        <button id="continueButton">Continue</button>
    `;

    // Example of moving to the next part of the story
    const continueButton = document.getElementById("continueButton");

    continueButton.addEventListener("click", () => {
        playContent.innerHTML = `
            <h2>The Warning</h2>
            <p>Iota remembered what her grandfather said: when the ocean retreats, a tsunami may be coming.</p>
            <button id="menuReturnButton">Return to Menu</button>
        `;

        document
            .getElementById("menuReturnButton")
            .addEventListener("click", showMenu);
    });
});

// Show instructions screen
instructionsButton.addEventListener("click", () => {
    menuScreen.classList.add("hidden");
    playContent.classList.add("hidden");
    instructionsContent.classList.remove("hidden");
});

// Return from instructions to menu
backToMenuButton.addEventListener("click", showMenu);

// Return to home page
homeButton.addEventListener("click", () => {
    window.location.href = "index.html";
});

// Function to show the main menu again
function showMenu() {
    menuScreen.classList.remove("hidden");
    playContent.classList.add("hidden");
    instructionsContent.classList.add("hidden");
}
