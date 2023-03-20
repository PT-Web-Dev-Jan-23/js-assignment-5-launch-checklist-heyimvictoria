// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
            <h2>Mission Destination</h2> 
                    <ol>
                    <li>Name: ${name}  </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                    </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {
    //let userInput = Number(testInput);
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (isNaN(testInput) === false) {
        return "Is a number";
    }
  };



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelLevelStatus = document.getElementById("fuelStatus");
   let cargoLevelStatus = document.getElementById("cargoStatus")

   if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("Please complete all fields!");
   } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a number" || validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number") {
    alert("Please enter valid information for each field!");
   } else {
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
    let launchStatus = document.getElementById("launchStatus");
    if (fuelLevel < 10000 && cargoLevel <= 10000) {
        fuelLevelStatus.innerHTML = "not enough fuel";
        cargoLevelStatus.innerHTML =  "enough mass for take off"; 
        launchStatus.innerHTML = "shuttle not ready for launch"
        launchStatus.style.color = "red";
    } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
        fuelLevelStatus.innerHTML =  "enough fuel for launch";
        cargoLevelStatus.innerHTML =  "too much mass for launch"; 
        launchStatus.innerHTML = "shuttle not ready for launch"
        launchStatus.style.color = "red";
    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
        fuelLevelStatus.innerHTML = "not enough fuel";
        cargoLevelStatus.innerHTML =  "too much mass for launch"; 
        launchStatus.innerHTML = "shuttle not ready for launch"
        launchStatus.style.color = "red";
    } else {
        fuelLevel.innerHTML = "enough fuel";
        cargoLevel.innerHTML =  "enough mass for take off"; 
        launchStatus.innerHTML = "shuttle is ready for launch"
        launchStatus.style.color = "green";
    }
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
       return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planetIndex = Math.floor(Math.random() * planets.length);
    return planets[planetIndex];
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
