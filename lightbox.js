const imagenes = document.querySelectorAll(".img-galeria");
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLigth = document.querySelector(".imagen-light");
console.log(imagenes);
console.log(imagenesLight);
console.log(contenedorLigth);

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {

        aparecerImagen(imagen.getAttribute('src'));/*nos mostrara  la direcion de la imagen */
    });
})
contenedorLigth.addEventListener('click', (e) => {
    if (e.target !== imagenesLight) {
        contenedorLigth.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
    }
})


const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLigth.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    hamburguer.style.opacity='0';
}