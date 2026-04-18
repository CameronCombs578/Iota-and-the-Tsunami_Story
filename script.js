const menuScreen = document.getElementById("menuScreen");
const playContent = document.getElementById("playContent");
const instructionsContent = document.getElementById("instructionsContent");

const startButton = document.getElementById("startButton");
const instructionsButton = document.getElementById("instructionsButton");
const homeButton = document.getElementById("homeButton");
const backToMenuButton = document.getElementById("backToMenuButton");

/* Event Listeners - Menu Navigation */
startButton.addEventListener("click", () => {
    menuScreen.classList.add("hidden");
    instructionsContent.classList.add("hidden");
    playContent.classList.remove("hidden");
    showScene1();
});

instructionsButton.addEventListener("click", () => {
    menuScreen.classList.add("hidden");
    playContent.classList.add("hidden");
    instructionsContent.classList.remove("hidden");
});

backToMenuButton.addEventListener("click", showMenu);

homeButton.addEventListener("click", () => {
    window.location.href = "index.html";
});

/* Chapter 1: The Calm before the Storm */
function showScene1() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 1: The Calm before the Storm</h2>
            <div class="Chapter1">
                <div class="Iota-image">
                    <img src="images/IotaAndText_Paint.png" alt="Iota standing" />
                </div>
                <div class="village-image">
                    <img src="images/Vilage.png" alt="Mushroom Village" />
                </div>
                <div class="Grace-image">
                    <img src="images/GraceAndText_Paint.png" alt="Grace standing" />
                </div>
            </div>
            <p>It was a calm morning at Mushroom Village and the sun was shining bright upon the land. The villagers were going about their daily tasks. Some were farming, others gardening. Kids were studying hard at the village school. One girl, named Iota, had just finished her assignments for that day and was walking home.</p>
            <p>As she was walking, she thought about her day of school and reflected upon what she had learned. "Pride is destructive," she thought to herself. "The teacher's story of pride consuming a person from the inside out is really hard to imagine though." She hesitated at Grace's house, one of her best friends, to see what she was doing.</p>
            <button id="chat1continueButton1">Continue</button>
        </div>
    `;

    const chat1continueButton1 = document.getElementById("chat1continueButton1");
    chat1continueButton1.addEventListener("click", showScene2);
}

/* Scene Functions - Chapter 1 Introduction */
function showScene2() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 1 Continued: The Calm before the Storm</h2>
            <div class="Chapter1">
                <div class="Iota-image">
                    <img src="images/IotaAndText_Paint.png" alt="Iota standing" />
                </div>
                <div class="village-image">
                    <img src="images/Vilage.png" alt="Mushroom Village" />
                </div>
                <div class="Grace-image">
                    <img src="images/GraceAndText_Paint.png" alt="Grace standing" />
                </div>
            </div>
            <p>"Hi Iota!" Grace said as she waved.</p>
            <button id="chat1continueButton2">Hi Grace!</button>
        </div>
    `;

    const chat1continueButton2 = document.getElementById("chat1continueButton2");
    chat1continueButton2.addEventListener("click", showScene3);
}

function showScene3() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 1 Continued: The Calm before the Storm</h2>
            <div class="Chapter1">
                <div class="Iota-image">
                    <img src="images/IotaAndText_Paint.png" alt="Iota standing" />
                </div>
                <div class="village-image">
                    <img src="images/Vilage.png" alt="Mushroom Village" />
                </div>
                <div class="Grace-image">
                    <img src="images/GraceAndText_Paint.png" alt="Grace standing" />
                </div>
            </div>
            <p>Grace ran to her and gave her a hug. "I was wondering where you were," she said. "Well, I was just walking here from school." "You sure did walk, didn't you? I was waiting for you," Grace said with a laugh. "Never mind that, did you get the money?" Iota asked. "Sort of. My parents gave me my allowance, but it does not meet the cost of that new scope we want," Grace replied. "I was thinking that we could earn the rest of the money by helping one of our neighbors. What do you think?"</p>
            <button id="chat1continueButton3_Cleaning">Sounds great. Let's help with cleaning</button>
            <button id="chat1continueButton3_Gardening">Sounds great. Let's help with gardening</button>
        </div>
    `;

    document.getElementById("chat1continueButton3_Cleaning").addEventListener("click", showCleaningScene);
    document.getElementById("chat1continueButton3_Gardening").addEventListener("click", showGardeningScene);
}

function showCleaningScene() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 1 Continued: Helping with Cleaning</h2>
            <div class="Chapter1">
                <div class="Iota-image">
                    <img src="images/IotaAndText_Paint.png" alt="Iota standing" />
                </div>
                <div class="village-image">
                    <img src="images/Vilage.png" alt="Mushroom Village" />
                </div>
                <div class="Grace-image">
                    <img src="images/GraceAndText_Paint.png" alt="Grace standing" />
                </div>
            </div>
            <p>"Sounds great. Let's help with cleaning," Grace said as she hurried off. "Where are you going?" Iota asked. "I know a neighbor who needs help cleaning," Grace replied. They stopped by Mr. Jerry's house. "You can help mop the bathroom floor," he said, holding out a dollar bill. "I can give you three of these for your work." Iota and Grace grabbed mops and began mopping the floor with smiles on their faces.</p>
            <p>After they finished mopping, Mr. Jerry gave them the money he had promised. The girls ran to the general store and bought the new scope. "This is perfect," Iota thought as she handed the money to the cashier.</p>
            <button id="chat1continueButton4">Chapter 2</button>
        </div>
    `;

    document.getElementById("chat1continueButton4").addEventListener("click", showScene5);
}

function showGardeningScene() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 1 Continued: Helping with Gardening</h2>
            <div class="Chapter1">
                <div class="Iota-image">
                    <img src="images/IotaAndText_Paint.png" alt="Iota standing" />
                </div>
                <div class="village-image">
                    <img src="images/Vilage.png" alt="Mushroom Village" />
                </div>
                <div class="Grace-image">
                    <img src="images/GraceAndText_Paint.png" alt="Grace standing" />
                </div>
            </div>
            <p>"Okay. Let's help with gardening," Grace said as she hurried off. "Where are you going?" Iota asked. "I know a neighbor who needs help in the garden," Grace replied. They worked together planting seeds and watering flowers for a nearby neighbor. When they finished, the neighbor gave them the money they needed for the new scope.</p>
            <button id="chat1continueButton4">Chapter 2</button>
        </div>
    `;
    
    document.getElementById("chat1continueButton4").addEventListener("click", showScene5);
}

/* Chapter 2: Sitting by the Shore */
function showScene5() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 2: Sitting by the Shore</h2>
            <div class="Chapter2">
                <div class="Iota-image">
                    <img src="images/IotaAndText_Paint.png" alt="Iota standing" />
                </div>
                <div class="village-image">
                    <img src="images/Vilage.png" alt="Mushroom Village" />
                </div>
                <div class="Grace-image">
                    <img src="images/GraceAndText_Paint.png" alt="Grace standing" />
                </div>
            </div>
            <p>As Iota and Grace relaxed by the shore they talked about their view on their Teacher's story. "I don't know," Grace said. "Is having a little pride that big of a deal?" "Well...that is what the Teacher said," Iota said with a shrug. "Anyways, we should be going home." </p>
            <p>They began to walk back to the village when Iota realized that they had not tried to use the scope. "Maybe we should look through the scope towards the sea," Iota thought.</p>
            <button id="chat2continueButton5Path1">Look at the sea with the scope</button>
            <button id="chat2continueButton5Path2">Head home with Grace.</button>
        </div>
    `;
    
    document.getElementById("chat2continueButton5Path1").addEventListener("click", showScene6Path1);
    document.getElementById("chat2continueButton5Path2").addEventListener("click", showScene6Path2);
}

function showScene6Path1() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 2 Continued: Sitting by the Shore</h2>
            <div class="Chapter2">
                <div class="Iota-image">
                    <img src="images/IotaAndText_Paint.png" alt="Iota standing" />
                </div>
                <div class="village-image">
                    <img src="images/Vilage.png" alt="Mushroom Village" />
                </div>
                <div class="Grace-image">
                    <img src="images/GraceAndText_Paint.png" alt="Grace standing" />
                </div>
            </div>
            <p>As Grace left, Iota decided to stay and look at the shore with their newly bought scope. As she did, she noticed something strange. At first it seemed as if part of the sky had a darker blue color, but as she look harder she relalized that she was looking at a wall of water. "What is that?!" she said with little breath.</p>
            <button id="chat2continueButton6">Chapter3</button>
        </div>
    `;
    
    document.getElementById("chat2continueButton6").addEventListener("click", showScene7Path1);
}

function showScene6Path2() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 2 Continued: Sitting by the Shore</h2>
            <div class="Chapter2">
                <div class="Iota-image">
                    <img src="images/IotaAndText_Paint.png" alt="Iota standing" />
                </div>
                <div class="village-image">
                    <img src="images/Vilage.png" alt="Mushroom Village" />
                </div>
                <div class="Grace-image">
                    <img src="images/GraceAndText_Paint.png" alt="Grace standing" />
                </div>
            </div>
            <p>Grace and Iota were walking down the path when they heard two men talking. "Did you see that wall of water? It could detroy the whole village." One said "Don't be concerned about it. If we tell, we would need to relocate think about our business," the other replied. "Right, of course," the first relplied as they both walked down the path. </p>
            <p>"Did you hear that," Grace said in shocked. "I did," Iota replied. "But is it true?" Iota and Grace ran to the shore and looked through the scope. "Its true!" Iota said. "We need to warn our village!" Grace said. "Should we go through the woods or the road?" Grace said.
            <button id="chat3continueButton2woods">Route 1: woods</button>
            <button id="chat3continueButton2road">Route 2: road</button>
        </div>
    `;
    
    document.getElementById("chat3continueButton2woods").addEventListener("click", showScene8Route1Path1);
    document.getElementById("chat3continueButton2road").addEventListener("click", showScene8Route2Path1);
}

/* Chapter 3: The Wall of Water */
function showScene7Path1() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 3 Continued: The Wall of Water</h2>
            <div class="Chapter3">
                <div class="Iota-image">
                    <img src="images/IotaAndText_Paint.png" alt="Iota standing" />
                </div>
                <div class="village-image">
                    <img src="images/Vilage.png" alt="Mushroom Village" />
                </div>
                <div class="Grace-image">
                    <img src="images/GraceAndText_Paint.png" alt="Grace standing" />
                </div>
            </div>
            <p>Grace was walking slowly when she heard Iota shoating here name. "Iota! Are you okay?" Grace yelled back. Iota ran towards here. "Grace!" Iota said out of breath. "What is it, is there a problem?" "A tusnami is heading our way." Iota said as she was catching her breath with wide eyes. "A tsunami, are you sure?" "Absolutley" Iota said slittly hurt by the fact that her friend doubted. "I used the scope by the shore and saw a wall of watter at least 50 feet high." Iota tryed to convence Grace as she gave her the scope. Grace's mouth opened as she saw the incomming wave. "Oh no," she said quietly. "We need to warn the vilage now!" Iota saide as she ran on the road back to the village. "Wait!" Grace said, "let's cut through the woods, we will be their quicker. "Should we?" Iota thought.</p>
            <button id="chat3continueButton2woods">Route 1: woods</button>
            <button id="chat3continueButton2road">Route 2: road</button>
        </div>
    `;
    document.getElementById("chat3continueButton2woods").addEventListener("click", showScene8Route1Path1);
    document.getElementById("chat3continueButton2road").addEventListener("click", showScene8Route2Path1);
}

function showScene8Route2Path1() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 3 Continued: The Wall of Water</h2>
            <div class="Chapter3">
                <div class="Iota-image">
                    <img src="images/IotaAndText_Paint.png" alt="Iota standing" />
                </div>
                <div class="village-image">
                    <img src="images/Vilage.png" alt="Mushroom Village" />
                </div>
                <div class="Grace-image">
                    <img src="images/GraceAndText_Paint.png" alt="Grace standing" />
                </div>
            </div>
            <p>It took Iota and Grace a while to get to Mushroom village, but they were able to warn the vilagers about the tsunami. Many of the villagers relocated their homes to a location out of the way of the tsunami. They all watch together as the wall of water reached land and detroyed all the trees in the way. "Thankfully we did not experience that" a vilager said. "I am so glad that we were warned abotu the tsunami, but thir were a few villagers that did not relocate because of their businesse. They gave their life for thier own wealth." "Wow, people would do that," Iota thought to herself. "Well, I am grateful that many of the villagers herad our warning." "This is just like the story we heard for school today, pride consuming from the inside out." Grace said as she looked at the tsunami. "Yeah, good thing" Iota said quietly.</p>
            <button id="chat3continueButton2woods">End</button>
        </div>
    `;
    document.getElementById("chat3continueButton2woods").addEventListener("click", showMenu);
}

function showScene8Route1Path1() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 3 Continued: The Wall of Water</h2>
            <div class="Chapter3">
                <div class="Iota-image">
                    <img src="images/IotaAndText_Paint.png" alt="Iota standing" />
                </div>
                <div class="village-image">
                    <img src="images/Vilage.png" alt="Mushroom Village" />
                </div>
                <div class="Grace-image">
                    <img src="images/GraceAndText_Paint.png" alt="Grace standing" />
                </div>
                <div class="Mark-image">
                    <img src="images/MarkAndText_Paint.png" alt="Mark standing" />
                </div>
            </div>
            <p>"Alright." Iota said as she and Grace ran into the nearby woods. "We have to hurry!" Grace saide as they ran through the woods." As they were running, Grace tripped on a root and ran into one of the trees. "Grace! I'm comming!" Iota screamed as she ran to Grace. Grace was suprizingly okay, but she could not move her legs very well. "I am  okay, but my legs won't work," Grace said. "You need a doctor." Iota said as she thought of options. "There is no time for this you need to hurry and warn the villagers of the tsunami. I will stay here until you warn the." "But...what about wild animals or strangers. You still need help."</p>
            <p>Iota began to shout for help hoping that somone nearby would her her. "There is no use Iota," Grace said as she reached for a limb on the tree. If you won't leave without me, then I will have to come along." "Oh no you don't, not on my watch," Iota said. As Iota was attempting to stop Grace without hurting her, a boy came walking through the woods. "Hi, what are you two doing." the stranger said with a puzzled look on his face. "What?" Iota saide supprizinglly. "Who are you? Nevermind, we need your help please."
            <button id="chat3continueButton3woods">Chapter 4</button>
        </div>
    `;
    document.getElementById("chat3continueButton3woods").addEventListener("click", showScene9Route1Path1);
}

function showScene9Route1Path1() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 3 Continued: The Wall of Water</h2>
            <div class="Chapter3">
                <div class="Iota-image">
                    <img src="images/IotaAndText_Paint.png" alt="Iota standing" />
                </div>
                <div class="village-image">
                    <img src="images/Vilage.png" alt="Mushroom Village" />
                </div>
                <div class="Grace-image">
                    <img src="images/GraceAndText_Paint.png" alt="Grace standing" />
                </div>
                <div class="Mark-image">
                    <img src="images/MarkAndText_Paint.png" alt="Mark standing" />
                </div>
            </div>
            <p>"Seems to be." the stranger began to say. "Here I was walking and minding my own business when I here someone shouting for help. When I got here I see you two. I would help, but my parents taught me to not talk to strangers." "But we are not strangers, you are a part of Mushroom Village right?" Iota said. "Well, I guess, but you could have guessed. How can I realy know if you are apart of the vilage?" The boy said suspiciously. "I don't know, but we abviousely need help and I am telling the truth. Please help us." "How?" said the boy. "You can warn the village that there is an incomming tsunami." "A what!!!" The boy shouted shocked." "Yeah, a tsunami. Look out towards the sea with this scope."</p>
            <p>The boy cautiously took the scope from Iota and looked through it to see the wall of water. "Oh my goddness, you two are telling the truth. I can go warn the villagers and get someone to help you two" the boy said as he ran off. "Thank you very much... uh what is your name?" Iota yelled. "Mark!" the boy said as he ran full speed throug the woods. "Thank you Mark!" Grace and Iota yelled as he disappeared into the trees.
            <p>It took Mark a while to get to Mushroom village, but he was able to warn the villagers about the tsunami and get help for Grace. The villagers relocated their homes to a location out of the way of the tsunami. They all watch together as the wall of water reached land and detroyed all the trees in the way. "Thankfully we did not experience that" a vilager said. "I am so glad that we were warned abotu the tsunami, but there were a few villagers that did not relocate because of their businesses. They gave their life for thier own wealth." "Wow, people would do that," Iota thought to herself. "Well, I am grateful that many of the villagers herad our warning." "This is just like the story we heard for school today, pride consuming from the inside out." Grace said as she looked at the tsunami. "Thankfully we were able to work together to get alot of people to saftey," Mark said. "Yeah, good thing" Iota said quietly.</p>
            <button id="menuButton">End</button>
        </div>
    `;
    document.getElementById("menuButton").addEventListener("click", showMenu);
}

/* Utility Functions */
function showMenu() {
    menuScreen.classList.remove("hidden");
    playContent.classList.add("hidden");
    instructionsContent.classList.add("hidden");
}
