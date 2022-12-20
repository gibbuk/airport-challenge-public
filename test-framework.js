/*
    Test framework copied from Ed's demonstration.
    Added an assertTrue and assertFalse as think these may be useful to include based on the tests identified.

    Added comments to document understanding/desired behaviour

*/

const test = {
    //Takes two values to compare and assumes they will be equal value and type.
    assertEquals(val1, val2) {
        if (val1 !== val2) { throw new Error; } //although no return value for when the two values pass by throwing an error failures are identified and can be caught elsewhere
    },
    // Takes a value and assumes it will be a true of type boolean. If not then should throw an error.
    assertTrue(val) {
        if (val !== true) { throw new Error; }
    },
    // Takes a value and assumes it will be a false of type boolean. If not then should throw an error.
    assertFalse(val) {
        if (val !== false) { throw new Error; }
    },


    // Will carry out the test that is input input into it. Str acts as the test name for reporting processes.
    // testFunc is a function that can be passed into it. We can therefore write our arrange, act and assert within a function that will be passed into this.
    it(str, testFunc) {
        try {
            testFunc(); //We will 'try' to execute the test function. Assuming that testFunc uses the assert functions above and the value(s) pass no error is thrown and we proceed to the next line.
            console.log("\x1b[32m%s\x1b[0m", `\t${str}: PASS`); //We only reach this line if we pass the test. The pass will be logged to the console.
        } catch (err) { //in the event that the assert function used does not pass an error is thrown and this catches the error
            console.log("\x1b[31m%s\x1b[0m", `\t${str}: FAIL`); //we log the failure to the console.
            console.log(err.stack); //the Error's stack trace is logged to console.
        }
    }
}

module.exports = test;