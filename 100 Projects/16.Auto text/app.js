const typedTextSpan = document.querySelector(".typed-text")
const cursor = document.querySelector(".cursor");

const words = ["Herd", "Not heards", "Good"];

const typingDelay = 200;
const erasingDelay = 200;
//Delay between current and next word
const newLetterDelay = 2000;

let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    if(words.length){
        setTimeout(type, newLetterDelay) //newLetterDelay is for only one time each when page is loading
    }
})

function type (){
    if(charIndex < words[index].length){
        typedTextSpan.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else{
        setTimeout(erease, newLetterDelay);
    }
}

function erease(){
    if(charIndex > 0){
        typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erease, erasingDelay);
    }else{
        index++;
        console.log(index)
        console.log(words.length)
        if(index >= words.length){
            index = 0;
        }
        setTimeout(type, typingDelay + 1100)
    }
}




























// function type(){
//     if (charIndex < words[index].length){
//         typedTextSpan.textContent += words[index].charAt(charIndex);
//         charIndex++;
//         setTimeout(type, typingDelay);
//     }else{
//         setTimeout(erase, newLetterDelay)
//     }
// }

// function erase() {
//     if (charIndex > 0){
//         typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
//         charIndex--;
//         setTimeout(erase, erasingDelay);
//     } else{

//         //this is for next word
//         index++;
//         if(index >= words.length){ 
//             index = 0; //if i make it 1 instade of 0 type will statr index[1] means "Not heards"
//         } 
//         setTimeout(type, typingDelay + 1100) //this set each word delay
//     }
// }

