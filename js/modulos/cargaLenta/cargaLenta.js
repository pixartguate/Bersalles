function detalles(entradas, observador){
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            // console.log("Si");
            // console.log(entrada.target);
            let $img = entrada.target;
            // console.log($img);
            let $url = $img.dataset.setUrl;
            let $alt = $img.dataset.setAlt;
            $img.src = $url;
            $img.alt = $alt;
            // Dejar de observar
            observador.unobserve($img);
        }
    });
}


export function CargaLenta($imagenes){
    let miObservador = new IntersectionObserver(detalles);
    $imagenes.forEach(function(elemento){
        miObservador.observe(elemento);
    });
}