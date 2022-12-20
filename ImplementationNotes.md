# Challenge implementation notes

Requirements broken down into accompanying Domain Models and TDD test strategy are included below.

## Core Acceptance Criteria

## Requirement 1

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

### Noun and verbs from the user story requirements

| Nouns                    | verbs    |
| ------------------------ | -------- |
| Air traffic controller\* | Get\*    |
| Passengers\*             |          |
| Destination\*            |          |
| Airport                  | Instruct |
| Plane                    | Land     |

For the purposes of domain modelling will ignore those marked with \* as these appear to describe context, objects and actions outside the scope of the specific requirement.

### Domain model (Objects, Properties, Messages, Outputs)

| Objects | Properties        | Messages               | Outputs            |
| ------- | ----------------- | ---------------------- | ------------------ |
| Airport | inAirport[@Plane] | intructToLand(@Plane)  | @string            |
|         |                   | addToInAirport(@Plane) | @void              |
|         |                   | getInAirport()         | inAirport[@Planes] |
| Plane   | state @string     | land()                 | @string            |
|         | planeId @string   | getState()             | @state @string     |
|         |                   | getPlaneId()           | @planeId @string   |

- Outputs for `instructToLand()` is `@void` as the requirement does not specify any form of output messaging (e.g. success or failure messages). `instructToLand()` will call `addToInAirport()` after landing the plane.
- Although a property to hold the planes in the airport is not explicitly required by the requirement I am considering it implicit to what an Airport needs to do. It is also required by later requirements.
- Although the requirement does not specify a `state` property I am inferring it is needed to capture that `land()` has done something to the plane e.g. the `Plane` has landed.
- Although the requirement does not specify a `getState()` orto return the `state` string I am inferring it is needed as I intend the `state` to be a private variable to a `Plane` class instances and therefore inaccessible without a getter.

### TDD the user story

#### Plane:

1. The `state` of newly created instance of a Plane is a **_blank string_**.
2. On calling `land()` the plane's state changes to **_'landed'_**.
3. The `planeId` of a newly created plane without an argument is **_'noID'_**.
4. The `planeId` of a newly created plane with a planeId is the **_planeId_**.

#### Airport:

1. The length of `inAiport[]` for a newly created Airport is **_0_**.
2. `getInAirport()` returns an **_array_**.
3. After calling `addToInAirport(mockPlane)`, inAirport.length has **_increased by 1_**.
4. After calling `addToInAirport(mockPlane)`, the array inAirport[] contains an object with **_planeId_**.
5. On calling `instructToLand(mockPLane)` with a mock plane changes the mock plane's state changes to **_'landed'_**.
6. On calling `instructToLand(mockPlane)`, inAirport.length has **_increased by 1_**.
7. After calling `instructToLand()` it returns 'plane landed'.

## Requirement 2

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

### Noun and verbs from the user story requirements

| Nouns                    | Verbs             |
| ------------------------ | ----------------- |
| System designer\*        |                   |
| Software\*               |                   |
| Airports\*               |                   |
| Airport                  | Capacity override |
| default airport capacity |                   |

For the purposes of domain modelling will ignore those marked with \* as these appear to describe context, objects and actions outside the scope of the specific requirement.

### Domain model (Objects, Properties, Messages, Outputs)

| Objects | Properties       | Messages             | Outputs   |
| ------- | ---------------- | -------------------- | --------- |
| Airport | capacity @number | setCapacity(@number) | @void     |
|         |                  | getCapacity()        | @capacity |

- `Capacity` will include a default value that can be overridden when constructing the `Airport`. The requirement states the capacity can be overridden 'as appropriate' so also assuming a `setCapacity()` message is needed to update post-creation.
- `setCapacity()` returns `@void` as no return requirements such as confirmation message are included in the requirment.
- It's assumed that using OOP encapsulation that `capacity` will be a private property and therefore `getCapacity()` is included as a message to allow the capacity value to be checked.

### TDD the user story

#### Airport

1. On calling the `Airport` constructor without an argument, getCapacity() returns the **_default_** capacity.
2. On calling the `Airport` constructor with a capacity, getCapacity() returns the **_capacity_**.
3. After calling `setCapacity(number)`, getCapacity() returns **_number_**.

## Requirement 3

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

### Noun and verbs from the user story requirements

| Nouns                    | Verbs    |
| ------------------------ | -------- |
| Air traffic controller\* | Ensure\* |
| Safety\*                 |          |
| Airport                  | Prevent  |
| Full                     | Landing  |

For the purposes of domain modelling will ignore those marked with \* as these appear to describe context, objects and actions outside the scope of the specific requirement.

### Domain model (Objects, Properties, Messages, Outputs)

| Objects | Properties         | Messages               | Outputs  |
| ------- | ------------------ | ---------------------- | -------- |
| Airport | Capacity @number   | instructToLand(@Plane) | @string  |
|         | inAirport[@planes] | isFull()               | @boolean |

### TDD the user story

#### Airport

1. `isFull()` returns **_false_** if inAirport[].length is less than capacity.
2. `isFull()` returns **_true_** if inAirport[].length is equal to capacity.
3. Calling `instructToLand(mock Plane)` when the airport is under capacity results in the mock Plane state changing to **_'landed'_**.
4. Calling `instructToLand(mock Plane)` when the airport is full results in **_no change_** to the mock Plane's state.
5. Calling `instructToLand(mock Plane)` when the airport is full results in **_no change_** to inAirport[].length.
6. Calling `instructToLand()` when the airport is full returns **_'airport full - cannot land'_**.

## Requirement 4

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

### Noun and verbs from the user story requirements

| Nouns                    | verbs    |
| ------------------------ | -------- |
| Air traffic controller\* | get\*    |
| Passengers\*             |          |
| Airport                  | Instruct |
| Plane                    | Take off |
|                          | Confirm  |

- For the purposes of domain modelling will ignore those marked with \* as these appear to describe context, objects and actions outside the scope of the specific requirement.

### Domain model (Objects, Properties, Messages, Outputs)

| Objects | Properties         | Messages                    | Outputs  |
| ------- | ------------------ | --------------------------- | -------- |
| Airport | inAirport[@Planes] | instructToTakeOff(@Plane)   | @string  |
|         |                    | removeFromInAirport(@Plane) | @boolean |
| Plane   | state @string      | takeOff()                   | @void    |
|         | planeId @ string   | getPlaneId()                | @planeId |

- The requirement asks for confirmation that the plane has left the `airport`. The `instructToTakeOff()` will return a string to act as the confirmation. `remonveFromInAirport()` will return a boolean to confirm that it has removed the plane from `inAirport[]`.
- Changing `Plane.state` is not explicitly referenced in the requirement but given the assumptions made regarding updating `Plane.state` for requirement #1 I am considering it implicit in this requirement.

### TDD the user story

#### Plane

1. On calling `takeOff()` the planes state changes to **_'flying'_**.

#### Airport

1. `removeFromInAirport()` changes inAirport[].length by **_minus 1_** when the mockPlane is in inAirport[].
2. `removeFromInAirport()` returns **_true_** if it removes a mockPlane from inAirport[].
3. `removeFromInAirport()` **_does not change_** the inAirport[].length if the mockplane is not in the airport.
4. `removeFromInAirport()` returns **_false_** if the mockPlane is not inAirport[].
5. On calling `instructToTakeOff()` with a mock Plane object that is in inAirport[] changes the mock objects state to **_'flying'_**.
6. After calling `instructToTakeOff()` for a plane in the airport **_reduces inAirport[].length by 1_**.
7. For a plane in the airport, `instructToTakeOff()` returns the string **_'plane left airport'_** after completing.

## Requirement 5

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

### Noun and verbs from the user story requirements

| Nouns                    | verbs    |
| ------------------------ | -------- |
| Air traffic controller\* | Avoid\*  |
| Confusion?\*             |          |
| Airport                  | Prevent  |
| Planes                   | Asking   |
| Plane                    | Take-off |
| 'not at airport'         | Land     |
| 'already landed'         |          |

- 'not at airport' and 'already landed' are not really nouns or verbs but I have included as they seemed important aspects of the requirement.

- For the purposes of domain modelling will ignore those marked with \* as these appear to describe context, objects and actions outside the scope of the specific requirement.

### Domain model (Objects, Properties, Messages, Outputs)

| Objects | Properties         | Messages                  | Outputs  |
| ------- | ------------------ | ------------------------- | -------- |
| Airport | inAirport[@Planes] | isInAirport(@plane)       | @boolean |
|         |                    | instructToTakeOff(@plane) | @string  |
|         |                    | instructToLand(@plane)    | @string  |
| Plane   | state @string      | takeOff()                 | @string  |
|         | planeId @string    | isLanded()                | @boolean |
|         |                    | land()                    | @void    |

### TDD the user story

#### Plane

1. Calling `isLanded()` immediately after land() returns **_true_**.
2. Calling `isLanded()` after calling land() followed by takeOff() returns **_false_**.

#### Airport

1. `isInAirport(plane)` returns **_false_** if the plane is NOT in inAirport[].
2. `isInAirport(plane)` returns **_true_** if the plane is in inAirport[].
3. On calling `instructToTakeOff()` on a plane that is not in the airport results in **_no call to the plane's takeOff()_** function.
4. On calling `instructToLand()` on a plane that is already landed results in **_no call of the plane's land()_** function.
5. On calling `instructToLand()` on a plane that is already landed results in **_no change to inAirport[].length_**.
6. On calling `instructToTakeOff()` on a plane that is not in the airport returns **_'plane not in airport'_**.
7. On calling `instructToLand()` on a plane that is landed returns **_'plane not flying - cannot be landed'_**.
