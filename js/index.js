function cargarNoticias() {
    // Función para cargar el archivo JSON
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'json/noticias.json', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const noticias = JSON.parse(xhr.responseText);
            mostrarNoticias(noticias);
            console.log(noticias);
        }
    };
    xhr.send();
}

// Función para mostrar las noticias en el HTML
function mostrarNoticias(noticias) {
const noticiasContainer = document.getElementById('noticias-container');
noticiasContainer.innerHTML = ''; // Limpiar el contenido del contenedor

noticias.forEach(noticia => {
const noticiaElement = document.createElement('div');
noticiaElement.classList.add('noticia');

const tituloElement = document.createElement('h3');
tituloElement.textContent = noticia.titulo;

const descripcionElement = document.createElement('p');
descripcionElement.textContent = noticia.descripcion;

noticiaElement.appendChild(tituloElement);
noticiaElement.appendChild(descripcionElement);

noticiasContainer.appendChild(noticiaElement);
});
}



// Cargar las noticias al cargar la página
window.onload = cargarNoticias;