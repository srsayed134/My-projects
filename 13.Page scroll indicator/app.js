let indicator = document.querySelector(".scroll-indicator .progress");

//Full page scrollable height
let totalscrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
console.log(`Total Height -` + totalscrollableHeight);


window.addEventListener("scroll", function (){
    //How far i scrolled now
    let scrollingPosition = document.documentElement.scrollTop;
    console.log(`My present height -` + scrollingPosition); 
    
    //the percentage we have scrolled
    let scrollPercentage = (scrollingPosition / totalscrollableHeight) * 100;
    console.log(`Scolling percentage -` + scrollPercentage);
    
    
    //give width percentage to (.scroll-indicator .progress)
    indicator.style.width = `${scrollPercentage}%`;
});


// For batter understand follow this - https://youtu.be/lwZTJ0TJTN8?si=aDsONFpaP_DyMJij 












