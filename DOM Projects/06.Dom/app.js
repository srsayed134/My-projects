let form = document.querySelector("form")
let input = document.querySelector("input")
let todos = document.querySelector(".todos")

function getTodo (value) {
       //Creating nrw elements
       let todo = document.createElement("div")
       let textEl = document.createElement("span")

       textEl.innerHTML = value;
       todo.appendChild(textEl)

       //Create close button

       let closeEl = document.createElement("span");
       closeEl.innerHTML = "&times"
       closeEl.classList.add("delete")

       //Attach events
       closeEl.addEventListener("click", (e) => {
        todos.removeChild(todo)
       })

       todo.appendChild(closeEl)
       todo.classList.add("todo")
       return todo;
    }



//     let todo = document.createElement("div")
//     let textEl = document.createElement("span")

//     textEl.innerHTML = value
//     todo.appendChild(textEl)

//     let closeEl = document.createElement("span")
//     closeEl.innerHTML = "&times;"
//     closeEl.classList.add("delete")

//     closeEl.addEventListener("click", (e) => {
//         todos.removeChild(todo)
//     })

//     todo.appendChild(closeEl)
//     todo.classList.add("todo");
//     return todo
// }

form.addEventListener("submit", e => {
    e.preventDefault()
    let value = input.value
    if(!value.trim()) return;
    todos.appendChild(getTodo(value));
    input.value = "";
})