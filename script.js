const container = document.querySelector(".container");
const button = document.querySelector("#nro");

function createSquares() {
    let num = parseInt(prompt("How many squares do you want to create per row and column?"));
    if(Number.isInteger(num) && num <= 100 && num > 0){
        container.innerHTML = "";
        for (let i = 0; i < num; i++) {
            for(let j = 0; j < num; j++) {
                let square = document.createElement("div");
                square.classList.add('square');
                square.style.flexBasis = `${100 / num}%`;
                container.appendChild(square);
            }
          }
    } else {
        alert("Please enter a positive integer less than 100.");
    }
  }

button.addEventListener("click", createSquares);
container.addEventListener("mouseover", (e)=>{
    let hoverTarget = e.target 
    if (hoverTarget.className === "square") {
        hoverTarget.style.backgroundColor = "purple"}                                                  
});

