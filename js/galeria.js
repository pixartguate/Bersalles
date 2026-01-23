import { datosLeer as categoria, DatosGaleriaPorCategoria } from './modulos/api/galeria.js';
import { Galeria } from './modulos/frontend/galeria.js';
import { CargaLenta } from './modulos/cargaLenta/cargaLenta.js';

const $contenedorImagenes = document.querySelector("[data-get-contenedor-imagenes]");
const botones = document.querySelectorAll("[data-get-botones-galeria]");

// const mostrarCategorias = async ($contenedorCategoria,$contenedorImagenes) => {
//     try{
//         const datosCategorias = await categoria("api/api.fotografia.php");
//         const header = new Header();
//         header.headerDinamico($contenedorCategoria, datosCategorias, async (categoriaId) => {
//             const datosImagenes = await datosLeerConId('api/api.fotografia.php', categoriaId);
//             // console.table(datosImagenes);
//             header.galeria($contenedorImagenes,datosImagenes);

//             // Ahora que las imágenes han sido añadidas al DOM, busca e inicializa la carga lenta.
//             const $imagenes = document.querySelectorAll("img[data-set-cargalenta]");
//             CargaLenta($imagenes);
//         });
//     }catch(error){
//         console.error("Error cargando las categorías:", error);
//     }
// }


const mostrarUnaCategoria = async ($contenedorImagenes, categoria) => {
    try{
        const datosImagenes = await DatosGaleriaPorCategoria('api/data.json', `${categoria}`);
        const main = new Galeria();
        main.galeria($contenedorImagenes, datosImagenes);

        // Ahora que las imágenes han sido añadidas al DOM, busca e inicializa la carga lenta.
        const $imagenes = document.querySelectorAll("img[data-set-url]");
        CargaLenta($imagenes);
    }catch(error){
        console.error("Error cargando las categorías:", error);
    }
}


botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        // console.log(e.target.id);
        // console.log(e.target.dataset.getBotonesGaleria);
        if (e.target.dataset.getBotonesGaleria === 'maquina') {
            mostrarUnaCategoria($contenedorImagenes,e.target.dataset.getBotonesGaleria);
        } else if (e.target.dataset.getBotonesGaleria === 'capa') {
            mostrarUnaCategoria($contenedorImagenes,e.target.dataset.getBotonesGaleria);
        } else if (e.target.dataset.getBotonesGaleria === 'capa') {
            mostrarUnaCategoria($contenedorImagenes,e.target.dataset.getBotonesGaleria);
        }
    });
});


mostrarUnaCategoria($contenedorImagenes,'maquina');