# Airport Challenge

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#problem-statements">Problem Statements</a></li>
    <li><a href="#project-review-and-roadmap">Project Review and Roadmap</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

---

## About The Project

This project was the first challenge of the Digital Futures Academy programme and was undertaken 10th to 19th June 2022.

The project was to produce a simple airport control program.

The challenge was to practice Object Orientated Design skills, Test Driven Development and Domain Modelling to map the problem space.

---

## Built With

Built in `javascript` using `node` for running.

## Getting Started

1. Clone the repo.

2. `npm install` to install dependencies.

3. `npm test` or `node specrunner.js` to run the tests.

4. `node node ./src/index.js` to run a small program that demonstrates meeting the requirements.

---

## Problem Statements

This project was the first challenge of the Digital Futures Academy programme. The project was to produce a simple air traffic control program. The challenge was to practice Object Orientated Design skills, Test Driven Development and Domain Modelling to map the problem space.

- The original user stories and acceptance criteria can be found in the file [./ChallengeNotes.md](./ChallengeNotes.md). All core requirements were completed. Extended Acceptance Criteria were not attempted.

- I used a Domain Modelling approach to map the user requirements into an object/message model prior to undertaken coding. A test strategy for TDD was also created. These are documented in [./ImplementationNotes.md](./ImplementationNotes.md).

- A TDD approach was used for all code.

---

## Project Review and Roadmap

My key overall learnings from project:

- First time using domain modelling to map and contextualise requirements into Object, Properties, Methods, Outputs.
- Implementation and use of encapsulation Object Orientated Design principles.
- Implementing a testing framework and using a test first design approach.

My technical learnings from the project:

- Creation of `js` classes including private variables to ensure encapsulation. using `getter` and `setter` functions to interface with class instances.
- Implementing test using a test first approach.
- Implementing and extending a simple `test-framework` provided by instructor.

Improvements/additional features that could be included:

- The `mockPlane` implemented in `airport.spec.js` is overly complex and could have been simplified. It only needs to expose the properties that the test assesses.
- I could remove some `if-else` statements to reduce code complexity. For example `Airport.instructToLand()` method could have been simplified to increase readability by removing redundant use of `else`.

---

## Acknowledgments

- `test-framework.js` was reproduced from Academy trainer's demonstration, I extended it with `assertTrue` and `assertFalse` methods.
- Advice and guidance was provided by Digital Futures Academy Trainers Ed Wright and Lucas Chagas at various points throughout the project.
