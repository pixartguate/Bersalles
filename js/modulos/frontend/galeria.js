export class Galeria{
    headerDinamico($contenedor,datos,categoriaClick){
        $contenedor.innerHTML = "";

        const $header = document.createDocumentFragment();
        let $div = document.createElement("div");

        datos.forEach(data => {
            let $button = document.createElement("button");
            $button.textContent = data.categoria_nombre;
                        
            // Añadir evento de clic para cargar imágenes de la categoría
            $button.addEventListener('click', () => {
                categoriaClick(data.categoria_id);
            });
            $header.appendChild($button);
        });
        $div.appendChild($header);
        $contenedor.appendChild($div);
    }

    
    galeria($contenedor,datos){
        $contenedor.innerHTML = "";
        
        const $fragmento = document.createDocumentFragment();

        datos.forEach((data, index) => {
            let $figure = document.createElement("figure");
            let $figcaption = document.createElement("figcaption");
            // Alternar las clases según el índice
            let nivelClase;
            switch (index % 3) {
                case 0:
                    nivelClase = 'nivel-1';
                    break;
                case 1:
                    nivelClase = 'nivel-2';
                    break;
                case 2:
                    nivelClase = 'nivel-3';
                    break;
            }
            $figure.classList.add(nivelClase);

            let $img = document.createElement("img");
            $img.setAttribute("data-set-url", `uploads/barberia/${data.categoria_carpeta}/${data.imagen_url}`);
            // $img.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==");
            $img.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==");
            $img.setAttribute("data-set-alt", data.imagen_descripcion);
            
            $figcaption.textContent = "@bersalles";
            
            $figure.appendChild($img);
            $figure.appendChild($figcaption);
            $fragmento.appendChild($figure);
        });
        
        $contenedor.appendChild($fragmento);
    }


    // mainDinamico($contenedor,datos){
    //     $contenedor.innerHTML = "";

    //     const $header = document.createDocumentFragment();
    //     let $figure = document.createElement("figure");

    //     datos.forEach(data => {
    //         let $img = document.createElement("img");
    //         $img.setAttribute("src", data.imagen_url);
    //         $header.appendChild($img);
    //     });
    //     $figure.appendChild($header);
    //     $contenedor.appendChild($figure);
    // }
}