const container = document.getElementById("container");
status = "black";

//setting a function to trigger different changes in color
function colorChanger(event) {
  //event is the parameter
  if (status === "black") {
    event.target.style.backgroundColor = "black"; //target is used to specify what the mouse is touching
  }

  if (status === "rainbow") {
    let hex = "#" + Math.floor(Math.random() * 16777215).toString(16); //generates random color
    event.target.style.backgroundColor = hex;
  }

  if(status === 'eraser'){
    event.target.style.backgroundColor = 'antiquewhite'
  }

}

//function for gridChange
function gridChange(){
    let prompt = prompt('Please enter a number from 2 to 100')
  
}

//This will create 256 new divs
for (i = 1; i <= 256; i++) {
  let newCell = document.createElement("div");
  newCell.classList.add("newCell");
  newCell.addEventListener("mouseenter", colorChanger); //mouseenter is like a hover effect
  container.appendChild(newCell);
}

//getting rainbow button
const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("click", () => {
  status = "rainbow";
});

//getting eraser button
const eraser = document.querySelector('.eraser')
eraser.addEventListener('click',() => {
    status = 'eraser'
})

//getting black button
const black = document.querySelector('.black')
black.addEventListener('click', () => {
    status = 'black'
})

//getting bigger button
const bigger = document.querySelector('.bigger')
bigger.addEventListener('click',(biggerFunction))

//function for the bigger button
function biggerFunction(){
  const container = document.getElementById('container')
  container.style.gridTemplateColumns = 'repeat(16, 4rem)'
  container.style.gridTemplateRows = 'repeat(16, 4rem)'
}


//getting smaller button
const smaller = document.querySelector('.smaller')
smaller.addEventListener('click',smallerFunction)

//function for smaller button
function smallerFunction(){
  const container = document.getElementById('container')
  container.style.gridTemplateRows = 'repeat(16, 1rem)'
  container.style.gridTemplateColumns = 'repeat(16, 1rem)'
}


//getting reset button
const reset = document.querySelector('.reset')
reset.addEventListener('click',(resetFunction))

function resetFunction(){
  const cells = document.querySelectorAll('.newCell')
  cells.forEach(cell => {
    cell.style.backgroundColor = 'antiquewhite'
  });
  status = 'black'
  const container = document.getElementById('container')
  container.style.gridTemplateRows = 'repeat(16,3rem)'
  container.style.gridTemplateColumns = 'repeat(16,3rem)'
}
