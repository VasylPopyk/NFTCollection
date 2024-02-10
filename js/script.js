const headerMenu = document.querySelector('.header_menu')
const headerBurger = document.querySelector('.header_burger')

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active')
    headerMenu.classList.toggle('active')
})