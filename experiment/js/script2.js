//DOM Manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello() {
    var name = document.getElementById("name").value
    var message = "<h2>Hello " + name + "!</h2>";

    // document.getElementById("content").textContent = message;
    document.getElementById("content").innerHTML = message;

    if (name === "Blommis") {
        var title = document.querySelector("#title").textContent;
        title = "Flora är Cringe";
        message = "<h2>Retard " + name + "!</h2>"
        document.querySelector("#title").textContent = title;
        document.getElementById("content").innerHTML = message;
    }
    else {
        document.querySelector("#title").textContent = "Lecture 53";
    }
}