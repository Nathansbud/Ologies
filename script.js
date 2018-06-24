var numbers = [];
var currentName = '';
var currentField = '';
var index;

document.addEventListener('keypress', function(){ 
    if(event.which == 32 || event.keyCode == 32) { 
        document.getElementById('intro').style.display = "none";
        document.getElementById('main').style.display = "block";
        generateIndex()
        currentName = data["ologies"][index]["name"];
        currentField = data["ologies"][index]["field"];
        document.getElementById('name').innerHTML = currentName;
        document.getElementById('field').innerHTML = currentField;
        document.getElementById('link').innerHTML = `Want to learn more? <a href='http://en.wikipedia.org/wiki/${currentName}'>Click here!</a>`

    }    
});

function generateIndex() {
    index = Math.floor(Math.random() * data["ologies"].length);

    while(numbers.indexOf(index) > -1) {
        index = Math.floor(Math.random() * data["ologies"].length);
        console.log("spicy")
    }
    
    numbers[numbers.length++] = index;
    localStorage.setItem("ologies", JSON.stringify(numbers));
}

function init() {
    if(!localStorage.getItem("ologies")) {
        localStorage.setItem("ologies", JSON.stringify(numbers));
    } else {
        parsedNumbers = JSON.parse(localStorage.getItem("ologies"));
        for(let i = 0; i < parsedNumbers.length; i++) {
            numbers[i] = parsedNumbers[i];
        }
    }
}

window.onload = function() {
    init();
}