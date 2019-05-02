/*************************
For Yeast Count Page 
****************************/

// Object to store user inputs
let userInputs = [
  quadrant1 = {
    living: Number,
    dead: Number
  },
  quadrant2 = {
    living: Number,
    dead: Number
  },
  quadrant3 = {
    living: Number,
    dead: Number
  },
  quadrant4 = {
    living: Number,
    dead: Number
  },
  quadrant5 = {
    living: Number,
    dead: Number
  },
];

// Results Variables
let totalYeastCells = 0,
  yeastCount,
  totalDeadCells = 0,
  totalLivingCells = 0,
  yeastViability;

// Get User Inputs and add to user inputs array and calculate useful data
function getInputs() {
  // Store Data from Each Quadrant
  for (var i = 0; i <= userInputs.length - 1; i++) {
    userInputs[i] = {
      living: document.getElementById(`q${i + 1}Living`).value,
      dead: document.getElementById(`q${i + 1}Dead`).value
    }
    totalYeastCells += Number(document.getElementById(`q${i + 1}Living`).value) + Number(document.getElementById(`q${i + 1}Dead`).value);
    totalDeadCells += Number(document.getElementById(`q${i + 1}Dead`).value);
    totalLivingCells += Number(document.getElementById(`q${i + 1}Living`).value);
  }
  yeastCount = totalYeastCells / 2;
  yeastViability = ((totalLivingCells / totalYeastCells) * 100).toFixed() + "%";
  results();
  buttonChanger();
}

function results() {
  for (var i = 0; i <= userInputs.length - 1; i++) {
    document.getElementById(`q${i + 1}`).innerHTML = `<h4> <span class="text-success">${userInputs[i].living} Living</span> / <span class="text-danger">${userInputs[i].dead} Dead <span></h4>`;
  }
  document.getElementById("results").innerHTML = `<h2>Yeast Count: ${yeastCount}</h2> <h2>Yeast Viability: ${yeastViability}</h2>`;
}

function buttonChanger() {
  document.querySelector(".btn").textContent = "Go Back";
}

/*************************
For Sensory Page
****************************/

let buttons = document.querySelectorAll(".wordButtons");

buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    // Generate words with count corresponding to button clicked
    if (this.getAttribute("data-letter-count") === "3") {
      addThreeLetterWords();
    }
    else {
      addFourLetterWords();
    }
  });
});

//Adds words to the word spans
function addThreeLetterWords() {
  let wordSpans = document.querySelectorAll(".words");
  wordSpans.forEach(function (span, index) {
    span.textContent = wordGenerator(3);
  });
}

//Adds words to the word spans
function addFourLetterWords() {
  let wordSpans = document.querySelectorAll(".words");
  wordSpans.forEach(function (span, index) {
    span.textContent = wordGenerator(4);
  });
}

// Choses a Random Word from the word.js arrays depending on the button clicked
function wordGenerator(letterCount) {
  if (letterCount === 3) {
    return threeLetterWords[randomNumberGenerator(letterCount)];
  }
  else {
    return fourLetterWords[randomNumberGenerator(letterCount)];
  }
}

//Generates a random number to be used as the index for the word arrays in word.js
function randomNumberGenerator(letterCount) {
  if (letterCount === 3) {
    // generate a number which ranges from 0 to the index of the last word in the respective array
    return Math.floor(Math.random() * ((threeLetterWords.length - 1) + 1));
  } else {
    return Math.floor(Math.random() * ((fourLetterWords.length - 1) + 1));
  }
}

/*********************************
Numbers for Direct Determinations 
***********************************/

let numbersList = document.querySelector(".numbersList");

function generateCodes() {
  //Get number of samples as given by user in input form
  let sampleCount = Number(document.querySelector("#numberInput").value);
  //Clear the list of sample codes each time Generate Codes Button is Clicked
  numbersList.innerHTML = "";
  // Generate code for the hidden reference
  document.querySelector(".hiddenRef").innerHTML = `Hidden Ref: ${randomNum(0, 9)}${randomNum(0, 9)}${randomNum(0, 9)}`;
  // Generate codes for each sample as given by the user in the number input field
  for (var i = 0; i <= sampleCount - 1; i++) {
    numbersList.innerHTML += `<p class="results"> Sample ${i + 1}: ${randomNum(0, 9)}${randomNum(0, 9)}${randomNum(0, 9)}</p>`;
  }
}

//Generate random number between the given max and min values
function randomNum(maxNum, minNum) {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

/*********************************
Alcohol Dilution Calcultor
***********************************/

function ABVDilutionCalc() {
  let ABVFactor;
  let alcVol;

  // Get Data from Form Fields
  let currentABV = Number(document.querySelector("#currentABV").value);
  let desiredABV = Number(document.querySelector("#desiredABV").value);
  let desiredVol = Number(document.querySelector("#desiredVol").value);

  //Calculate values
  ABVFactor = currentABV / desiredABV;
  alcVol = (desiredVol / ABVFactor).toFixed(2);
  waterVol = (desiredVol - alcVol).toFixed(2);

  document.querySelector("#alcVol").textContent = `${alcVol} ml`;
  document.querySelector("#waterVol").textContent = `${waterVol} ml`;
}