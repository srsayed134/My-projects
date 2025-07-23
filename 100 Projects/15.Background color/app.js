const btn = document.querySelector(".btn");
const hexcode =document.querySelector(".hexcode");

//made a function that can chosse 6 times by loop from letter 
function randomColor() {
    let letter = "0123456789ABCDEF";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors += letter[Math.floor(Math.random() * 16)]    
    }
    return colors
}

//when user click background will change 
btn.addEventListener("click", () => {
    document.body.style.backgroundColor = randomColor();
    hexcode.innerHTML = randomColor();
})