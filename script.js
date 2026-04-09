
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
        <div class="Chapter1">
            <div class="Iota-image">
                <img src="images/Iota_Paint.png" alt="Iota standing on the beach" />
            </div> 
                   
            <div class="story-text">
                <h2>Chapter 1: The Calm before the Storm</h2>
                <p>It was a calm morning at Mushroom Village and the sun was shining bring upon the land. The vilagers were going about their daily tasks. Some were farming other gardening. Kids were studying hard at the Vilage's school. One girl, named Iota, had just finished her assignments for that day and was walking home.</p>
                <p>As she was walking, she thought about her day of school and reflected upon what she had learned. "Pride is destructive," she thought to herself. "The Teachers story of pride consuming a person the inside out is really hard to imagine though." She hasented to Grace's house, one of her best friends, to see what she was doing.</p>
                <button id="continueButton">Continue</button>
            </div>



        </div>
    `;

    // Example of moving to the next part of the story
    const continueButton = document.getElementById("continueButton");

    continueButton.addEventListener("click", () => {
        playContent.innerHTML = `
            <h2>Chapter 1: The Calm before the Storm Continued</h2>
            <p>To be continued.</p>
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
