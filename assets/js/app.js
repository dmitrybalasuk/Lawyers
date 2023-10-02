const seo = document.querySelector('.seo__text--active')
const button = document.querySelector('.seo__button')
const buttonOff = document.querySelector('.button--off')
const burger = document.querySelector('.burger__menu')
const burgerActive = document.querySelector('.header__second')

burger.addEventListener('click', () =>{
    burgerActive.classList.toggle('header__second--avtive')
})

button.addEventListener('click', () =>{
    seo.classList.toggle('seo__text--active--on');;
    button.classList.add('button--none')
    buttonOff.classList.add('button--on')
})
buttonOff.addEventListener('click', () =>{
    button.classList.remove('button--none')
    buttonOff.classList.remove('button--on')
    seo.classList.toggle('seo__text--active--on');
})

