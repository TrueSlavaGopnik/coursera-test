//DOM Manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello() {
    var name = document.getElementById("name").value
    var message = "<h2>Hello " + name + "!</h2>";

    // document.getElementById("content").textContent = message;
    document.getElementById("content").innerHTML = message;

    if (name === "Dilbar") {
        var title = document.querySelector("#title").textContent;
        title = "När är Pizzan klar?";
        message = "<h2>Go " + name + " go!</h2>"
        document.querySelector("#title").textContent = title;
        document.getElementById("content").innerHTML = message;
    }
    else {
        document.querySelector("#title").textContent = "Lecture 53";
    }
}