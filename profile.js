const favColor=document.querySelector('#color')
const favPlace=document.querySelector('#place')
const favRit=document.getElementById('ritual')

function giveColor(evt){
    evt.preventDefault();
    alert('Blue')
}

function givePlace(evt){
    evt.preventDefault();
    alert('Bridal Veil')
}

function giveRitual(evt){
    evt.preventDefault();
    alert('Have Enough Sleep')
}
favColor.addEventListener('click',giveColor)
favPlace.addEventListener('click',givePlace)
favRit.addEventListener('click',giveRitual)