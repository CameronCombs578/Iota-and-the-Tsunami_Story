// DOM Element References
const menuScreen = document.getElementById("menuScreen");
const playContent = document.getElementById("playContent");
const instructionsContent = document.getElementById("instructionsContent");

const startButton = document.getElementById("startButton");
const instructionsButton = document.getElementById("instructionsButton");
const homeButton = document.getElementById("homeButton");
const backToMenuButton = document.getElementById("backToMenuButton");

// Event Listeners - Menu Navigation
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

// Chapter 1: The Calm before the Storm
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
            <p>It was a calm morning at Mushroom Village and the sun was shining brightly upon the land. The villagers were going about their daily tasks. Some were farming, others gardening. Kids were studying hard at the village school. One girl, named Iota, had just finished her assignments for that day and was walking home.</p>
            <p>As she was walking, she thought about her day of school and reflected upon what she had learned. "Pride is destructive," she thought to herself. "The teacher's story of pride consuming a person from the inside out is really hard to imagine though." She hesitated at Grace's house, one of her best friends, to see what she was doing.</p>
            <button id="chat1continueButton1">Continue</button>
        </div>
    `;

    const chat1continueButton1 = document.getElementById("chat1continueButton1");
    chat1continueButton1.addEventListener("click", showScene2);
}

// Scene Functions - Chapter 1 Introduction
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
                <div class="Jerry_Paint">
                    <img src="images/Jerry_Paint.png" alt="Jerry standing" />
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
            <p>"Okay. Let's help with gardening," Grace said as she hurried off. "Where are you going?" Iota asked. "I know a neighbor who needs help in the garden," Grace replied. They worked together planting seeds and watering flowers for a nearby neighbor. When they finished, the neighbor gave them the money they needed for the new scope.</p>
            <button id="chat1continueButton4">Chapter 2</button>
        </div>
    `;

    document.getElementById("chat1continueButton4").addEventListener("click", showScene5);
}

// Chapter 2: Sitting by the Shore
function showScene5() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 2: Sitting by the Shore</h2>
            <div class="Chapter2">
                <div class="Iota-image">
                    <img src="images/IotaAndText_Paint.png" alt="Iota standing" />
                </div>
                <div class="shore_Paint">
                    <img src="images/Shore_Paint.png" alt="Shore" />
                </div>
                <div class="Grace-image">
                    <img src="images/GraceAndText_Paint.png" alt="Grace standing" />
                </div>
            </div>
            <p>As Iota and Grace relaxed by the shore they talked about their views on their teacher's story. "I don't know," Grace said. "Is having a little pride that big of a deal?" "Well...that is what the teacher said," Iota said with a shrug. "Anyway, let's have some fun before we head home." Grace said with wide eyes as she brought out the scope.</p>
            <p>"This is amazing," Grace said as she looked through the scope. "Hey! I can't see. Let me see please!" Iota said as she fought over the scope with Grace. After some time running and tugging, Iota gave up her thoughts on looking through the scope. "Oh don't give up that quickly, here," Grace said as she handed the scope over to Iota. "I am too tired anyway, I need a minute." "Okay, but we need to head home now."</p>
            <p>They began to walk back to the village when Iota realized that she had not tried to use the scope. "Maybe we should look through the scope towards the sea," Iota thought.</p>
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
                <div class="shore_Paint">
                    <img src="images/Shore_Paint.png" alt="Shore" />
                </div>
                <div class="Grace-image">
                    <img src="images/GraceAndText_Paint.png" alt="Grace standing" />
                </div>
            </div>
            <p>As Grace left, Iota decided to stay and look at the shore with their newly bought scope. As she did, she noticed something strange. At first it seemed as if part of the sky had a darker blue color, but as she looked harder she realized that she was looking at a wall of water. "What is that?!" she said breathlessly.</p>
            <button id="chat2continueButton6">Chapter 3</button>
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
            <p>Grace and Iota were walking down the path when they heard two men talking. "Did you see that wall of water? It could destroy the whole village." One said. "Don't be concerned about it. If we tell, we would need to relocate. Think about our business," the other replied. "Right, of course," the first replied as they both walked down the path.</p>
            <p>"Did you hear that?" Grace said, shocked. "I did," Iota replied. "But is it true?" Iota and Grace ran to the shore and looked through the scope. "It's true!" Iota said. "We need to warn our village!" Grace said. "Should we go through the woods or the road?" Grace said.</p>
            <button id="chat3continueButton2woods">Route 1: woods</button>
            <button id="chat3continueButton2road">Route 2: road</button>
        </div>
    `;

    document.getElementById("chat3continueButton2woods").addEventListener("click", showScene8Route1Path1);
    document.getElementById("chat3continueButton2road").addEventListener("click", showScene8Route2Path1);
}

// Chapter 3: The Wall of Water
function showScene7Path1() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 3: The Wall of Water</h2>
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
            <p>Grace was walking slowly when she heard Iota shouting her name. "Iota! Are you okay?" Grace yelled back. Iota ran towards her. "Grace!" Iota said out of breath. "What is it, is there a problem?" "A tsunami is heading our way." Iota said as she was catching her breath with wide eyes. "A tsunami, are you sure?" "Absolutely," Iota said, slightly hurt by the fact that her friend doubted her. "I used the scope by the shore and saw a wall of water at least 50 feet high." Iota tried to convince Grace as she gave her the scope. Grace's mouth opened as she saw the incoming wave. "Oh no," she said quietly. "We need to warn the village now!" Iota said as she ran on the road back to the village. "Wait!" Grace said, "let's cut through the woods, we will be there quicker." "Should we?" Iota thought.</p>
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
            <p>It took Iota and Grace a while to get to Mushroom Village, but they were able to warn the villagers about the tsunami. Many of the villagers relocated their homes to a location out of the way of the tsunami. They all watched together as the wall of water reached land and destroyed all the trees in the way. "Thankfully we did not experience that," a villager said. "I am so glad that we were warned about the tsunami, but there were a few villagers that did not relocate at first. When they saw the tsunami reach land, then they ran. They almost gave their lives for their own wealth." "Wow, people would do that," Iota thought to herself. "Well, I am grateful that many of the villagers listened to our warning." "This is just like the story we heard for school today, pride consuming from the inside out." Grace said as she looked at the tsunami. "Yeah, good thing," Iota said quietly.</p>
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
            <p>"Alright." Iota said as she and Grace ran into the nearby woods. "We have to hurry!" Grace said as they ran through the woods. As they were running, Grace tripped on a root and ran into one of the trees. "Grace! I'm coming!" Iota screamed as she ran to Grace. Grace was surprisingly okay, but she could not move her legs very well. "I am okay, but my legs won't work," Grace said. "You need a doctor." Iota said as she thought of options. "There is no time for this. You need to hurry and warn the villagers of the tsunami. I will stay here until you warn them." "But...what about wild animals or strangers? You still need help."</p>
            <p>Iota began to shout for help hoping that someone nearby would hear her. "There is no use Iota," Grace said as she reached for a limb on the tree. "If you won't leave without me, then I will have to come along." "Oh no you don't, not on my watch," Iota said. As Iota was attempting to stop Grace without hurting her, a boy came walking through the woods. "Hi, what are you two doing?" the stranger said with a puzzled look on his face. "What?" Iota said, surprisingly. "Who are you? Never mind, we need your help please."</p>
            <button id="chat3continueButton3woods">Chapter 4</button>
        </div>
    `;

    document.getElementById("chat3continueButton3woods").addEventListener("click", showScene9Route1Path1);
}

function showScene9Route1Path1() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 4: Get to Safety</h2>
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
            <p>"Seems to be." The stranger began to say. "Here I was walking and minding my own business when I heard someone shouting for help. When I got here I saw you two. I would help, but my parents taught me to not talk to strangers." "But we are not strangers, you are a part of Mushroom Village right?" Iota said. "Well, I guess, but you could have guessed. How can I really know if you are a part of the village?" The boy said suspiciously. "I don't know, but we obviously need help and I am telling the truth. Please help us." "How?" said the boy. "You can warn the village that there is an incoming tsunami." "A what!!!" The boy shouted, shocked. "Yeah, a tsunami. Look out towards the sea with this scope."</p>
            <p>The boy cautiously took the scope from Iota and looked through it to see the wall of water. "Oh my goodness, you two are telling the truth. What can we do?" the boy said. "Warn the villagers before it is too late," Grace said. Immediately, the boy ran towards the village. "Thank you very much... uh what is your name?" Iota yelled. "Mark!" the boy said as he ran full speed through the woods. "Thank you Mark!" Grace and Iota yelled as he disappeared into the trees.</p>
            <button id="Chapter4continued">Continue</button>
        </div>
    `;

    document.getElementById("Chapter4continued").addEventListener("click", showScene10Route1Path1);
}

function showScene10Route1Path1() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 4 Continued: Get to Safety</h2>
            <div class="Chapter4">
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
            <p>"Wait a second." Iota said. "What about us!" Iota began to yell for Mark, but he was out of sight. "Oh no oh no," Iota began to say. "It's okay Iota, we can try to get to the mountains where it is safe." "How!?" Iota said. "I..uh..don't know." "We can't stay here. How is your leg feeling?" "Okay I guess," Grace said as she moved it an inch from the ground. "I think I can make it with your help now." "Then we should go." Iota said. The two of them began to walk towards the mountains where they would be safe from the tsunami.</p>
            <button id="Chapter4option1">Return to the village</button>
        </div>
    `;

    document.getElementById("Chapter4option1").addEventListener("click", showScene11Route1Path1);
}

function showScene11Route1Path1() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 4 Continued: Get to safety</h2>
            <div class="Chapter4">
                <div class="Mark-image">
                    <img src="images/MarkAndText_Paint.png" alt="Mark standing" />
                </div>
                <div class="village-image">
                    <img src="images/Vilage.png" alt="Mushroom Village" />
                </div>
                <div class="Crowd-image">
                    <img src="images/CrowdAndText_Paint.png" alt="Crowd standing" />
                </div>
                <div class="Jerry-image">
                    <img src="images/Jerry_Paint.png" alt="Crowd standing" />
                </div>
            </div>
            <p>Mark ran into the village and yelled from the top of his lungs, "TSUNAMI!" "What about a tsunami?" a villager said. "One is heading our way, we need to evacuate!" Mark replied. The crowd began to patiently wait for more. "What?" Mark said. "Enough with the game boy, don't you have homework to do." "What? No! I am serious. Go to the shore and look with a scope towards the sea!" Mark said as he motioned the actions. "Hmmm..." "Please trust me... wait, not don't trust me, look for yourself!" Mark said as he raced to the shore. Only a few villagers walked after him and were astonished when they saw the wall of water. "You were right after all," they said. Each villager that witnessed the tsunami warned one of their friends, which warned their friend. This process continued until half of the villagers were ready to move to the mountains while the other half were not.</p>
            <p>"You all are trusting in a boy's game while we are basing our action on evidence. 'There is evidence, just look...'" "We have heard the story but we still do not believe." "Why are they so resistant?" Mark said to one of the adults. "The half of villagers that are staying are the rich ones, they have businesses here and are not willing to leave." "Friends," Mr. Jerry said as he stood up on a box. "Do not listen to this boy and his games. If a real tsunami is coming we can stand it." The crowd yelled with support. "It is no use," Mark said, "you're right. You cannot trick us." "He is not tricking you," "Who said that?" Jerry said as he looked at Grace and Iota entering the village. "After buying a scope, we sat by the shore and saw the tsunami coming. Please believe us." "Well... uh... you... you are probably making up this joke with him." Jerry thought aloud to support his case. "Maybe they are right," one of Jerry's supporters said as he joined the other half of villagers. "Well, you can go, but we are going to stay," Jerry and his supporters said together. Iota, Grace, Mark, and half of the villagers walked towards the mountain.</p>
            <button id="Chapter4option1">Chapter 5</button>
        </div>
    `;

    document.getElementById("Chapter4option1").addEventListener("click", showScene12Route1Path1);
}

function showScene12Route1Path1() {
    playContent.innerHTML = `
        <div class="story-text">
            <h2>Chapter 5: Journey to the Top</h2>
            <div class="Chapter4">
                <div class="Mark-image">
                    <img src="images/MarkAndText_Paint.png" alt="Mark standing" />
                </div>
                <div class="Crowd-image">
                    <img src="images/CrowdAndText_Paint.png" alt="Crowd standing" />
                </div>
                <div class="Iota-image">
                    <img src="images/IotaAndText_Paint.png" alt="Iota standing" />
                </div>
                <div class="Grace-image">
                    <img src="images/GraceAndText_Paint.png" alt="Grace standing" />
                </div>
            </div>
            <p>The journey to the nearby mountains was not as difficult as it could have been with few in number. The many crowds helped one another when one was in need. "We made it!" The villagers said. As the villagers were celebrating, Mark noticed something behind them. "Look!" Mark yelled. Everyone turned to the sight of the tsunami reaching land. They watched the other half of villagers panic and run out from the village just before it was destroyed. "Wow, look how destructive it was," Grace said with awe.</p>
            <p>All the villagers reunited at the mountain and reflected upon their choices. "We made a mistake," one said with embarrassment. "If only... never mind, I just wished that you all trusted me," Mark said. "We definitely do now, we are sorry for our actions. We were blinded by our own pride and were not willing to join you." "Pride?" Iota thought as she was reminded of her teacher's story of pride. "I guess she was right about its destructiveness." "Time to start over," one of the members of the village said as the villagers walked back to what once was their village. "Yep, I guess we can still start over." Iota said to herself.</p>
            <button id="menuButton">End</button>
        </div>
    `;

    document.getElementById("menuButton").addEventListener("click", showMenu);
}

// Utility Functions
function showMenu() {
    menuScreen.classList.remove("hidden");
    playContent.classList.add("hidden");
    instructionsContent.classList.add("hidden");
}
