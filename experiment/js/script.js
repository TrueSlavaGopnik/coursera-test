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

//*****Objects and Function in JavaScript*****

function orderChickenWith (sideDish) {
    // if (sideDish === undefined) {
    //     sideDish = "french fries";
    // }
    sideDish = sideDish || "french fires";
    console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

var c = 10
if ( (null) || console.log("First Hello") || c > 5) {
    console.log("Second Hello");
}

var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "Blue";
console.log(company);
console.log(company.name);
console.log("First name of Facebooks CEO is: " + company.ceo.firstName);
console.log(company["name"]);
company["stock of company"] = 110;

var shareAmount = "Amount of shares";
company[shareAmount] = 1000000;

console.log("The amount of shares that Facebook has released is " + company[shareAmount])
console.log(company);

//Better way: Object literal

var facebook = {
    name: "facebook",
    ceo: {
        firstName: "Mark",
        favColor: "Blue"
    },
    "stock of company": 110
};

console.log(facebook);

//Functions are First-Class Data Types
//Functions are objects
function multiply(x,y){
    return x*y
}

console.log(multiply(5, 3));

multiply.version = "v.1.0.0";
console.log(multiply.version);

//Function factory
function makeMultiplier(multiplier){
    var myFunc = function (x){
        return multiplier * x
    };
    return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));

function doOperationOn(x, operation){
    return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);

result = doOperationOn(100, doubleAll);
console.log(result);

//Copy by Reference vs by Value
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);

b = 5;
console.log("after b update:");
console.log("a: " + a);
console.log("b: " + b);

console.log("-----------------------------------");

var a = { x: 7 };
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log("after b.x update:");
console.log(a);
console.log(b);

//Pass by reference vs by value
function changePrimitive(primValue){
    console.log("in changePrimitive...");
    console.log("before:"),
    console.log(primValue);

    primValue = 5;
    console.log("after:");
    console.log(primValue);
}

var value = 7;
changePrimitive(value);
console.log("after changePrimitive, original value:"),
console.log(value);

function changeObject(objValue){
    console.log("in changeObject...");
    console.log("before:");
    console.log(objValue);

    objValue.x = 5;
    console.log("after:");
    console.log(objValue);
}

value = { x: 7};
changeObject(value);
console.log("after changeObject, original value");
console.log(value);

function test(){
    console.log("Hello Coursera!");
    this.myName = "Pasha";
}

test();
console.log(window.myName);

//Function constructors
function Circle(radius){
    this.radius = radius;
}
Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
}

var myCircle = new Circle(10);
console.log(myCircle.getArea());

//Object literals and "this"
var literalCircle = {
    radius: 10,
    getArea: function() {
        var self = this;
        console.log(this);

        var increaseRadius = function() {
            self.radius = 20;
        };
        increaseRadius();
        console.log(this.radius);
        return Math.PI * Math.pow(this.radius, 2);
    }
};

literalCircle.getArea();
console.log(literalCircle.getArea());

//*****Arrays*****
var array = new Array();
array[0] = "Pasha";
array[1] = 2;
array[2] = function (name) {
    console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JAVASCRIPT "};

console.log(array);
console.log(array[1]);
array[2](array[0]);
console.log(array[3].course);

//Short hand array creation
var names = ["Pasha", "John", "Marcus"];
console.log(names);

for (var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}

var namesTwo = ["Josefin", "Lana", "Amanda"];

var myObject = {
    name: "Pasha",
    course: "Webdevelopment",
    platfrom: "Coursera"
};
for (var prop in myObject) {
    console.log(prop + ": " + myObject[prop]);
}

for (var name in namesTwo) {
    console.log("Hello " + namesTwo[name]);
}

//Closures
function makeMultiplier2(multiplier) {
    return (
        function(x) {
            return multiplier * x;
        }
    );
}

doubleAll2 = makeMultiplier2(2);
console.log(doubleAll2(10));

//Immediatly Invoked Function Expression
//IIFE
(function() {
    console.log("Hello everyone!");
})();