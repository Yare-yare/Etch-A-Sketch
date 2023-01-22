const container = document.getElementById('container');

//This will create 256 new divs
for(i = 1; i <= 256; i++){
    let newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    container.appendChild(newDiv);
}