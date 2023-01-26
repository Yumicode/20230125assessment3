let colorBtn = document.getElementById('color')
let placeBtn = document.getElementById('place')
let ritualBtn = document.getElementById('ritual')

function colorClick() {
    alert('My favorite color is Green')
}

function placeClick() {
    alert('My favorite place is where my family is')
}

function ritualClick() {
    alert('My favorite ritual is.....still in searching')
}



colorBtn.addEventListener('click', colorClick)
placeBtn.addEventListener('click', placeClick)
ritualBtn.addEventListener('click', ritualClick)

