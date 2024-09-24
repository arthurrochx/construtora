function openMenu() {
    document.querySelector('.ul').classList.add('open');
    document.querySelector('.close-item').style.display = 'block'; // Mostra o ícone de fechar
    document.querySelector('.menu-item').style.display = 'none'; // Esconde o ícone do menu
}

function closeMenu() {
    document.querySelector('.ul').classList.remove('open');
    document.querySelector('.close-menu').style.display = 'none'; // Esconde o ícone de fechar
    document.querySelector('.menu-item').style.display = 'block'; // Mostra o ícone do menu novamente
}