const hamburger = document.querySelector('.hamburger')
const logo = document.querySelector('.logo')
const menu = document.querySelector('.menu')

hamburger.addEventListener('click',function () {
    this.classList.toggle('is-active');
    logo.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    
})

const changeButton = document.querySelectorAll('.change-button')
const changeButtonTwo = document.querySelectorAll('.change-button-two')
const card = document.querySelectorAll('.patent-card-one')
const cardTwo = document.querySelectorAll('.patent-card-two')
console.log(card,card)

for (let i = 0; i < changeButton.length; i++) {
    changeButton[i].addEventListener('click',function(){
        card[i].classList.toggle('move')
        cardTwo[i].classList.toggle('move')
    });
}

for (let i = 0; i < changeButtonTwo.length; i++) {
    changeButtonTwo[i].addEventListener('click',function(){
        cardTwo[i].classList.toggle('move')
        card[i].classList.toggle('move')
    });
}

// card.addEventListener('click',function () {
//     this.classList.toggle('move');
//     cardTwo.classList.toggle('move');
// })
// cardTwo.addEventListener('click',function ($this) {
//     this.classList.toggle('move');
//     card.classList.toggle('move');
// })
