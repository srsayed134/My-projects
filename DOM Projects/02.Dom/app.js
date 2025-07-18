const btns = document.querySelectorAll(".btn");
const nav = document.querySelector(".nav");

btns.forEach((btn) => {
   btn.addEventListener("click", () => {
    color = btn.value;
    changeNavBackground(color)
   })
})

function changeNavBackground(color){
    nav.style.backgroundColor = "black";

    if(color === "purple"){
       nav.style.backgroundColor= "purple"
    }
    if(color === "blue"){
       nav.style.backgroundColor = "blue"
    }
    if(color === "green"){
       nav.style.backgroundColor = "green"
    }
    if(color === "red"){
       nav.style.backgroundColor = "red"
    }
    if(color === "yellow"){
       nav.style.backgroundColor = "yellow"
    }
    if(color === "teal"){
       nav.style.backgroundColor = "teal"
    }
}
