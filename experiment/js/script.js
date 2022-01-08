var x;
console.log(x);

x = 5;

if (x == undefined) {
    console.log("X is undefined!");
}
else {
    console.log("X is defined!");
}

var string = "Hello";
string += " World";
console.log(string + "!");

function whatever (x, y) {
    console.log(x > y); 
}

whatever();

var x=5, y="5"
// Strict Equality
if (x === y) {
    console.log("Strict: x is equal to y!");
}
else {
    console.log("Strict: x is not equal to y");
}

// if statement (all false)
if (false || null || undefined || "" || 0 || NaN) {
    console.log("This line won't ever execute!");
}
else {
    console.log("All are false")
}

// if statement (all true)
if (true && "hello" && 1 && -1 && "false") {
    console.log("All are true!")
}

function a()
{
    return
    {
        name: "Yaakov"
    };
}

function b() {
    return {
        name: "Yaakov"
    };
}

//For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log("The sum of 0 through 9 is: " + sum)