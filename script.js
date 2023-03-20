// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let selectedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectedPlanet.name,selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
   });
        let list = document.getElementById("faultyItems");
        list.style.visibility = "hidden";
        let form = document.querySelector("form");
        form.addEventListener("submit",(event) => {
           event.preventDefault();
           let pilotInput = document.querySelector("input[name=pilotName]");
           let pilot = pilotInput.value;
           let copilotInput = document.querySelector("input[name=copilotName]");
           let copilot = copilotInput.value;
           let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
           let fuelLevel = Number(fuelLevelInput.value);
           let cargoLevelInput = document.querySelector("input[name=cargoMass]");
           let cargoLevel = Number(cargoLevelInput.value);
           formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        })
});