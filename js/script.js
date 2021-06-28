const menuButton = document.querySelector('.header__menu-mobile')
const links = document.querySelectorAll('.links')

menuButton.addEventListener('click', () => {    
    menuButton.classList.toggle('header__menu-mobile--active')
    document.querySelector('.header__ul').classList.toggle('header__ul--active')
})

links.forEach(link => {
    link.addEventListener('click', () => {
        menuButton.classList.toggle('header__menu-mobile--active')
        document.querySelector('.header__ul').classList.toggle('header__ul--active')
    })
})