// Initialize Variables below
let date = "Monday 2019-03-18"
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = 'ready'
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31 
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000
let fuelTempCelsius = -225
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = '100%'
let weatherStatus = 'clear'
let preparedForLiftOff = true 


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log ("Shuttle has appropriate amount of astronauts");
} else {
    console.log("Over the maximum astronauts allowed, mission aborted");
    preparedForLiftOff = false;
}

// add logic below to verify all astronauts are ready 
if (astronautStatus === 'ready') {
    console.log ("Astronauts are prepared for liftoff");
} else {
    console.log("Astronauts are not prepared for liftoff");
    preparedForLiftOff = false;
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (maximumMassLimit <= 850000) {
    console.log("Shuttle mass is approved for liftoff");
} else {
    console.log("Maximum mass exceeds limit, not prepared for liftoff");
    preparedForLiftOff = false;
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius <= maximumFuelTemp && fuelTempCelsius >= minimumFuelTemp) {
    console.log("Fuel Temperature is within range");
}  else {
    console.log("Fuel temperature is not within range");
    preparedForLiftOff = false;
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel === ('100%')) {
    console.log("Fuel is at 100%");
} else {
    console.log("Not at 100%");
    preparedForLiftOff = false;
} 

// add logic below to verify the weather status is clear
if (weatherStatus === 'clear') {
    console.log("weather is clear");
} else {
    console.log("weather is notclear");
    preparedForLiftOff = false;
}

// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff) {
    console.log("All conditions met, prepared for liftoff");
    console.log("-----------------------------------------------------");
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log("Astronaut Count: " + astronautCount);
    console.log("Crew Mass: " + crewMassKg);
    console.log("Fuel Mass: " + fuelMassKg);
    console.log("Shuttle Mass: " + shuttleMassKg);
    console.log("Total Mass: " + totalMassKg);
    console.log("Fuel Temperature: " + fuelTempCelsius);
    console.log("Weather Status: " + weatherStatus);
    console.log("-----------------------------------------------------");   
    console.log("Have a safe trip astronauts!") 
} else {
    console.log("Conditions not met, abort mission");
}



