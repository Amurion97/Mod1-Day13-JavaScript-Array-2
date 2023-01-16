let preText = "What are you trying to do? You can't type anything here! You idiot!";
let input = document.getElementById("input");
let index = -1;
input.addEventListener("input", function () {
    index ++;
    if (index === preText.length){
        index = 0;
    }
    input.value = preText.slice(0,index);
})