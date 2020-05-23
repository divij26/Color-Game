var num=6;
var colors = generateRandomColors(num);
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.querySelector("#colorDisplay")
var squares = document.querySelectorAll(".square");


console.log(colors);

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        clickedColor = this.style.backgroundColor;
        if(clickedColor===pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        }else{
            this.style.backgroundColor = "black";
            messageDisplay.textContent = "Try Again";
        }
    });

}

function changeColors(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var colors = []
    for(var i=0; i<num; i++){
        colors[i] = randomColor();
    }
    return colors;
}

function randomColor(){
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}