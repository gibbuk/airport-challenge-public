const Airport = require("./airport.js");
const Plane = require("./plane.js");

console.log("=================PROGRAM START=================");
console.log();

let outcomeMessage = "";

const heathrow = new Airport(1);

console.log("One airport:");
console.log(`Heathrow - capacity: ${heathrow.getCapacity()} planes`);

const plane1 = new Plane("Plane-1");
plane1.takeOff();
const plane2 = new Plane("Plane-2");
plane2.takeOff();
const plane3 = new Plane("Plane-3");
plane3.takeOff();

console.log("Planes and their status:");
printPlaneIdAndState([plane1, plane2, plane3]);

console.log("===============REQUIREMENT 1=======================");
console.log("Requirement 1: 'I want to instruct the airport to land a plane'.");
console.log(
  "Scenario - Heathrow instructs Plane-1 to land. There is capacity so the plane lands safely."
);

heathrow.instructToLand(plane1);

console.log("Airport and Plane-1 after successful landing instruction:");
printAirportContents(heathrow);
printPlaneIdAndState([plane1]);

console.log("===============REQUIREMENT 2=======================");
console.log(
  "Requirement 2: 'I would like a default airport capacity that can be overridden as appropriate'."
);
console.log(
  "Scenario - Heathrow has opened an additional runway and its capacity is increased from 1 to 2."
);

console.log(`Heathrow starting capacity: ${heathrow.getCapacity()}`);

heathrow.setCapacity(2);
console.log(
  `Heathrow capacity after capacity updated: ${heathrow.getCapacity()}`
);

console.log("===============REQUIREMENT 3=======================");
console.log(
  "Requirement 3: 'I want to prevent landing when the airport is full'."
);
console.log(
  "Scenario - Heathrow lands Plane - 2 successfully using its additional capacity from the Requirement 2 scenario."
);

heathrow.instructToLand(plane2);
console.log(
  "Heathrow, Plane-1 and Plane-2 after successful landing instruction:"
);
printAirportContents(heathrow);
printPlaneIdAndState([plane1, plane2]);

console.log(
  "Scenario continues - However Heathrow then accidentally tries to land Plane-3 even though there is no capacity. The safety features kick in, no landing instruction is given and Plane-3 remains flying."
);

outcomeMessage = heathrow.instructToLand(plane3);
printOutcomeMessage(outcomeMessage);

console.log(
  "Heathrow, Plane-1, Plane-2 and Plane-3 after successful landing instruction:"
);
printAirportContents(heathrow);
printPlaneIdAndState([plane1, plane2, plane3]);

console.log("===============REQUIREMENT 4=======================");
console.log(
  "Requirement 4: 'I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport'."
);
console.log(
  "Scenario - Heathrow instructs Plane - 1 to take off.The success message is received and printed."
);

outcomeMessage = heathrow.instructToTakeOff(plane1);
printOutcomeMessage(outcomeMessage);

console.log("Airport and Plane-1 after successful take off instruction:");
printAirportContents(heathrow);
printPlaneIdAndState([plane1]);

console.log("===============REQUIREMENT 5=======================");
console.log(
  "Requirement 5: 'I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed."
);

console.log(
  "Heathrow, Plane-1 and Plane-2 prior to attempted take off and landing instructions:"
);
printAirportContents(heathrow);
printPlaneIdAndState([plane1, plane2]);

console.log(
  "Scenario - Heathrow instructs Plane-1 to take off even though it already has."
);
outcomeMessage = heathrow.instructToTakeOff(plane1);
printOutcomeMessage(outcomeMessage);

console.log(
  "Scenario - Heathrow instructs Plane-2 to land even though it already has."
);
outcomeMessage = heathrow.instructToLand(plane2);
printOutcomeMessage(outcomeMessage);

console.log(
  "Heathrow, Plane-1 and Plane-2 after attempted take off and landing instructions:"
);
printAirportContents(heathrow);
printPlaneIdAndState([plane1, plane2]);

console.log("============PROGRAM END========================");

function printPlaneIdAndState(arrayOfPlanes) {
  for (let i = 0; i < arrayOfPlanes.length; i++) {
    console.log(
      `${arrayOfPlanes[i].getPlaneId()} state is now: ${arrayOfPlanes[
        i
      ].getState()}`
    );
  }
}

function printAirportContents(airport) {
  console.log("Planes in airport:");
  for (let i = 0; i < airport.getInAirport().length; i++) {
    console.log(airport.getInAirport()[i].getPlaneId().padStart(10));
  }
}

function printOutcomeMessage(message) {
  console.log(
    `The outcome message from the attempted action was: ***${outcomeMessage}***`
  );
}
