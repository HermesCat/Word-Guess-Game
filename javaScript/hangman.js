//Making an array of words
const word = ["heavy metal", "math rock", "future funk", "shoe gazing", "noise rock"]
//Choose words randomly
let randNum = Math.floor(Math.random()* word.length);
let rightWord = [];
let wrongWord = [];
let chosenWord = word[randNum];
console.log(chosenWord);
let underScore = [];
let docUnderscore = document.getElementsByClassName("underscore");
let docRightGuess = document.getElementsByClassName("rightGuess");
let docWrongGuess = document.getElementsByClassName("wrongGuess");



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
    let keyword = String.fromCharCode(event.keyCode);
//if guess is correct
    if (chosenWord.indexOf(keyword) > -1) {
// add right words to array
        rightWord.push(keyword);
        
//replace underscores with letters
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderscore[0].innerHTML = underScore.join("");
        docRightGuess[0].innerHTML = rightWord;

       if(underScore.join("") == chosenWord) {
        alert("You Win!");
        }
    }
    else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
    }

});

docUnderscore[0].innerHTML = generateUnderScore().join("");
//check if guess is right f
//if right push to right array 
//if wrong push to wrong array


