const colorHex = document.getElementById('hex-color');
const btn = document.getElementById('btn');
const bgColor = document.getElementById('bag');
let colors = ["red","green","blue","orange"]

function colorChanger(prop){
 btn.addEventListener("click",function () {
     let usedColor = prop[numberGenerator()];
     bgColor.style.background = usedColor;
     colorHex.innerText = usedColor;
 })
}
function numberGenerator() {
    return(
        Math.floor(Math.random()*colors.length)
    )
}

colorChanger(colors);