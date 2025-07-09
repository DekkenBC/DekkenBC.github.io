const guess = document.getElementById("input");
const words = [
  "apple", "grape", "peach", "berry", "melon", "mango", "lemon", "pearl",
  "charm", "blaze", "crisp", "flock", "glove", "honey", "jolly", "knock",
  "latch", "noble", "ocean", "piano", "quilt", "raven", "sheep", "crash",
  "tiger", "ultra", "vivid", "waltz", "xenon", "yacht", "zebra", "adobe",
  "bison", "cider", "daisy", "eagle", "fable", "gazer", "haste", "ivory",
  "jewel", "karma", "liver", "mossy", "nifty", "orbit", "plush", "quack",
  "risky", "sable", "tempo", "unity", "vapor", "woven", "xerox", "yodel",
  "zesty", "angel", "brave", "clerk", "drown", "ember", "frost", "gleam",
  "hoist", "inbox", "jumpy", "kneel", "lodge", "mimic", "nurse", "oxide",
  "pride", "quash", "rider", "spike", "truce", "udder", "vigor", "whale",
  "xylem", "youth", "zonal", "align", "bloom", "creek", "drift", "evoke",
  "flute", "grind", "hound", "inlet", "joust", "kiosk", "lunar", "mirth",
  "nudge", "opine", "plume", "quell", "rouse", "shiny", "trawl", "unzip",
  "about", "above", "actor", "admit", "adopt", "after", "again", "agree", 
  "ahead", "alarm", "album", "alien", "allow", "alone", "along", "alter",
  "apart", "apply", "arena", "argue", "arise", "array", "aside", "cream",
  "avoid", "award", "aware", "badly", "baker", "basic", "beach", "began", 
  "below", "bench", "birth", "black", "blame", "blind", "block", "blood", 
  "bound", "brain", "brand", "bread", "break", "bring", "broad", "brown", 
  "cable", "carry", "catch", "cause", "chain", "chair", "chart", "chase", 
  "chest", "chief", "child", "china", "claim", "class", "clean", "clear", 
  "close", "coach", "coast", "could", "count", "court", "cover", "craft", 
  "crime", "cross", "crowd", "crown", "curve", "cycle", "dance", "death",
  "debut", "delay", "among", "anger", "angle", "angry", "asset", "audio",
  "begin", "being", "board", "boost", "build", "buyer", "cheap", "check",
  "click", "clock"]; 

const randomWord = words[Math.floor(Math.random() * words.length)];
const letters = document.querySelectorAll('.letter');
let round = 0;
let status = true;
lettercontainer = document.getElementById("guessedwords");
const alphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
lettercontainer.textContent = "Unused letters: " + alphabet.join(", ");


if (round <= 5) { 
input.addEventListener("keyup", (event) => {
    if (!status) return;
    if (event.key === "Enter") {
        const word = guess.value.trim().toLowerCase();
        if (word.length === 5) {
            checkWord(word);
            guess.value = ""; 
            round++;
        } else {
            alert("Please enter a 5-letter word.");
        }
    }
});
};

function checkWord(word) {
    for (let i = 0; i < randomWord.length; i++) {
        const letter = word[i];
        if (alphabet.includes(letter)) {
            const index = alphabet.indexOf(letter);
            if (index !== -1) {
                alphabet.splice(index, 1);
    } 
        }
        const letterElement = letters[round * 5 + i];
        letterElement.textContent = letter;
        if (letter === randomWord[i]) {
            letterElement.classList.add("correct");
        }   
        else if (randomWord.includes(letter)) {
            letterElement.classList.add("present");
        } else {
            letterElement.classList.add("absent");
        }
    }
    lettercontainer.textContent = "Unused letters: " + alphabet.join(", ");
    if (word === randomWord) {
        status = false;
        alert("Congratulations! You found the word!");
    }
    // If last round and word not found
    else if (round === 5) {
        status = false;
        alert("Game over! The word was: " + randomWord);
    }
};
