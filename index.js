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
    document.getElementById(`q${i + 1}`).innerHTML = `<h4>${userInputs[i].living} Living / ${userInputs[i].dead} Dead </h4>`;
  }
  document.getElementById("results").innerHTML = `<h2>Yeast Count: ${yeastCount}</h2> <h2>Yeast Viability: ${yeastViability}</h2>`;
}

function buttonChanger() {
  document.querySelector(".btn").textContent = "Go Back";
}