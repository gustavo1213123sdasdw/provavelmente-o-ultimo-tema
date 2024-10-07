const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeImage = document.getElementById('theme-image');

// Verifica o tema inicial e define a imagem correspondente
if (body.classList.contains('dark-theme')) {
    themeImage.src = 'imagem/dark-image.jpg'; // Imagem para o tema escuro
} else {
    themeImage.src = 'imagem/light-image.jpg'; // Imagem para o tema claro
}

// Evento de clique para mudar o tema
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    // Troca a imagem com base no tema atual
    if (body.classList.contains('dark-theme')) {
        themeImage.src = 'imagem/dark-image.jpg'; // Imagem para o tema escuro
    } else {
        themeImage.src = 'imagem/light-image.jpg'; // Imagem para o tema claro
    }
});
