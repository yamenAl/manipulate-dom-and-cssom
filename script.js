// Variable Declarations
const generateEmojiButton = document.getElementById("generate-emoji-btn");
const clearEmojiBtn = document.getElementById("clear-emoji-btn");
const shuffleListBtn = document.getElementById("shuffle-list-btn");
const saveListBtn = document.getElementById("save-list-btn");
const surpriseBtn = document.getElementById("surprise-btn");
const emojiList = document.getElementById("emoji-list");

const emojiPool = [
  "😀", "😂", "😎", "😍", "🎉", "🌈", "🚀", "🎨", "✨", "🔥",
  "🌟", "💡", "🍕", "🎶", "🎈", "🍩", "🍎", "🍔", "🏖️", "🌍",
  "🦄", "🐱", "🐶", "🐼", "🐸", "🐵", "🦋", "🍓", "🍉", "🥑", "🎃"
]; // this is an array

// Code Logic
document.addEventListener("mousemove", changeBackgroundColorOnMouseMove);

generateEmojiButton.addEventListener("click", generateRandomEmoji);
clearEmojiBtn.addEventListener("click", clearEmojis);
surpriseBtn.addEventListener("click", surpriseMe);
shuffleListBtn.addEventListener("click", shuffleList);
saveListBtn.addEventListener("click", saveEmojiList);

emojiList.addEventListener("mouseover", highlightItem);
emojiList.addEventListener("mouseout", unhighlightItem);
emojiList.addEventListener("click", removeEmoji);

// Function Declarations
function changeBackgroundColorOnMouseMove(event) {
  const x = event.clientX;
  const y = event.clientY;

  // Calculate HSL values based on mouse position
  const hue = Math.floor((x / window.innerWidth) * 360); // Range: 0-360
  const saturation = Math.floor((y / window.innerHeight) * 100); // Range: 0-100
  const lightness = 50; // Fixed at 50% lightness for a balanced color

  // Set the HSL values using CSS custom properties
  document.body.style.setProperty("--hue", `${hue}`);
  document.body.style.setProperty("--saturation", `${saturation}%`);
  document.body.style.setProperty("--lightness", `${lightness}%`);
}

function generateRandomEmoji() {
  // select an emijo from the emojipool randomly
  const randomEmoji = emojiPool[Math.floor(Math.random() * emojiPool.length)];
  // create new element
  const newEmojiItem = document.createElement("li");
  // todo: alos create button element inside the new li element
  newEmojiItem.textContent = randomEmoji;
  emojiList.appendChild(newEmojiItem);
}

function clearEmojis() {
  emojiList.innerHTML = "";
}

function shuffleList() {
  // Convert the emojiList's child nodes (HTMLCollection) to an array
  const emojis = Array.from(emojiList.children);

  // Use the Fisher-Yates shuffle algorithm to shuffle the array: https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
  for (let i = emojis.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Pick a random index
    [emojis[i], emojis[j]] = [emojis[j], emojis[i]];  // Swap elements
  }

  emojiList.innerHTML = "";
  emojis.forEach(emoji => emojiList.appendChild(emoji));
}

function saveEmojiList() {
  // use localstorage to save the emojilist
}

function surpriseMe() {
  console.log('Surpise me 🎉')
  console.log(emojiPool)
  //const allEmoji = emojiPool;
  // create new element
 
  // todo: alos create button element inside the new li element
  //listOfAllIteam.textContent = emojiPool;
  emojiPool.forEach(function(emoji){
    const li = document.createElement("li");
    li.textContent = emoji
    emojiList.appendChild(li);
  })


}

function highlightItem(event) {
  if (event.target.tagName === "LI") {
    event.target.style.setProperty("font-weight", "var(--item-font-weight-bold)");
    event.target.style.setProperty("cursor", "var(--item-cursor)");
    event.target.style.transform = "scale(1.2)";
  }
}

function unhighlightItem(event) {
  if (event.target.tagName === "LI") {
    event.target.style.setProperty("font-weight", "var(--item-font-weight-normal)");
    event.target.style.transform = "scale(1)";
  }
}

function removeEmoji(event) {
  if (event.target.tagName === "LI") {
    const emoji = event.target;

    // Add an animation class
    emoji.style.animation = "pop-out 0.6s forwards ease-in-out";

    // Remove the emoji after animation ends
    emoji.addEventListener("animationend", () => {
      emoji.remove();
    });
  }
}


