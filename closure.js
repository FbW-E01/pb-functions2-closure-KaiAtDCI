// 1.  A closure is an kind of an "inner function", meaning that is defined in a wrapping function. It has access to
//     the variables that are defined in the wrapping function
// 2a. The closure is the anonymous function that defined in and that is returned from personalDice(name)-function
//     It uses the parameter name of the wrapping function
// 2b. name' stays the same, output to console can change due to result of random function
// 2c. Lexical scope is the scope of the wrapping (outer or parent) function
// 3. Write a function that would allow you to do this using a closure.

function createBase (number) {
    return function (add) {
        console.log(number + add);
    }
}

let addSix = createBase(6);     // Assigns inner closure function to 'addSix'
addSix(10); // logs 16
addSix(21); // logs 21
// alternatively:
createBase(6)(10);
createBase(6)(21);