var numbers = [];
var n = 0;
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

    }    
});

function generateIndex() {
    index = Math.floor(Math.random() * data["ologies"].length);

    while(numbers.indexOf(index) > -1) {
        index = Math.floor(Math.random() * data["ologies"].length);
        console.log("spicy")
    }
    
    numbers[n++] = index;
    console.log(numbers)
}