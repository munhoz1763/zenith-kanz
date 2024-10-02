let btnMenuMob = document.querySelector('#btn-menu-mob')
let line1 = document.querySelector('.line-menumob-1')
let line2 = document.querySelector('.line-menumob-2')
let menuMobile = document.querySelector('#menu-mobile')

let body = document.querySelector('body')

btnMenuMob.addEventListener("click", () => {
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
    menuMobile.classList.toggle('abrir')

    body.classList.toggle('no-overflow')
})

let links = menuMobile.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        line1.classList.remove('ativo1');
        line2.classList.remove('ativo2');
        menuMobile.classList.remove('abrir');
        body.classList.remove('no-overflow');
    });
});