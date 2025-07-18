document.getElementById("btn").addEventListener("click", () => {

    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;
    let operator = document.getElementById("selectOp").value;
    let result = document.querySelector(".result");

    if(operator === "plus"){
        result.innerHTML = Number(num1) + Number(num2)
    }else if(operator === "min"){
        result.innerHTML = Number(num1) - Number(num2)
    }else if(operator === "dev"){
        result.innerHTML = Number(num1) / Number(num2)
    }else if(operator === "multi"){
        result.innerHTML = Number(num1) * Number(num2)
    }

})