const hamburguer = document.querySelector(".hamburguesa");
const menu = document.querySelector(".menu-navegacion");
hamburguer.addEventListener('click', () => {
    /*esto es para que cuando le di click en la hamburguesa se pueda ocultar y mostrar la barra de navegacion */
    menu.classList.toggle("spread")/*cada vez que toques quiero que le agregues o quites la clase spread s */
    /*nota: tengo que darle un z index: para que se puedea mostrar el simbolo del hamburguer , lo cambio eso en Css */
});

/*este evento sirve que cuando le demos clik a cualquier elemento html
,   e.target: el elemento que le damos click en nuestro navegador: ejemplo: imprimi asi <p>hoal<p>*/
window.addEventListener('click', e => {
    console.log(e.target);/*me mostrara en consola su contenido, por que lo guardamos en la variable e y con target sabemos a que cosa le damos click */

    if (menu.classList.contains('spread')/*si el menu tiene la clase spread */
        && e.target != menu && e.target != hamburguer) /*si el elemento al que le damos click es diferente al menu osea algo fuera del menu que se ejecute se abra o cierre */ {/*si no pongo el ultimo cada vez que le damos click al icono de hamburguer se va a cerrar instanteamente , por que se ejecuta 2 veces el spreead*/
        menu.classList.toggle("spread")
        /*e.target !=hamburguer: si no pongo esto , se ejecuta 2 veces esto   menu.classList.toggle("spread") osea se habre y cierra*/
    }
});