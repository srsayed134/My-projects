const cursor = document.querySelector(".cursor");

function moveCursor(textX, textY){
    document.style.body = textX + "px"
    document.style.body = textY + "px"
}

cursor.addEventListener("movecursor", (e) => {
    moveCursor(e.pageX, e.pageY);
    
})













// const moveCursor = function(pageX, pageY) {
//     cursor.style.left = pageX + "px";
//     cursor.style.top = pageY + "px";
// };

// document.addEventListener("mousemove", function(e) {
//     moveCursor(e.pageX, e.pageY);
//     console.log("mousemove")
//     console.log(e.pageX)
//     console.log(e.pageY)
//     console.log(e)
// });
