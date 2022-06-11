const favColor=document.querySelector('#color')
const favPlace=document.querySelector('#place')
const favRit=document.getElementById('ritual')

function giveColor(evt){
    evt.preventDefault();
    alert('Blue')
}
favColor.addEventListener('click',giveColor)

function givePlace(evt){
    evt.preventDefault();
    alert('Bridal Veil')
}
favPlace.addEventListener('click',givePlace)

function giveRitual(evt){
    evt.preventDefault();
    alert('Have Enough Sleep')
}
favRit.addEventListener('click',giveRitual)