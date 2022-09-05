const botaoMenu = document.querySelector('.cabeçalho__menu')
const menu = document.querySelector('.menu__lateral')


botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__lateral--ativo')
})