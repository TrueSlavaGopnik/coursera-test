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