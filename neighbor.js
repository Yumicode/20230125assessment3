let restaurantBtn = document.getElementById('restaurant')
let parksBtn = document.getElementById('parks')
let schoolsBtn = document.getElementById('schools')
let churchBtn = document.getElementById('church')

function restaurantClick() {
    alert('The Salad Bar Place')
}

function parksClick() {
    alert('Aloha to Jurassic Park')
}

function schoolsClick() {
    alert('let me show you around of the school of Tesla')
}

function churchClick() {
    alert('LDS church is behind my house')
}

restaurantBtn.addEventListener('click', restaurantClick)
parksBtn.addEventListener('click', parksClick)
schoolsBtn.addEventListener('click', schoolsClick)
churchBtn.addEventListener('click', churchClick)
