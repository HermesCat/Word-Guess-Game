//Making an array of words
const word = ["heavy metal", "math rock", "future funk", "shoe gazing", "noise rock"]
//Choose words randomly
let randNum = Math.floor(Math.random()* word.length);
let chosenWord = word[randNum];
console.log(chosenWord);
let underScore = [];
//Create underscores based on length of word
let generateUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push("_");

    }
    return underScore;
}

console.log(generateUnderscore());
//Get users guess
document.addEventListener("keypress", (event) => {
    let keycode = event.keyCode;
    let keyword = String.fromCharCode(keycode);
    console.log(keyword);
});
//check if guess is right 
//if right push to right array
//if wrong push to wrong array


