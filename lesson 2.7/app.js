'use strict'

const heading = document.querySelector('.dom-text')

heading.addEventListener('click', () => {
    console.log('clicked');
    heading.classList.toggle('is--active')
})

