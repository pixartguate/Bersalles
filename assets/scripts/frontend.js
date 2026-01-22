function nav(){
    let $boton = document.querySelector('#nav .nav_caja div button');
    $boton.addEventListener('click', function(e) {
        let $ul = document.querySelector('#nav .nav_caja .nav_caja_lista');
        $ul.classList.toggle('active');
        $boton.classList.toggle('active');
    });
}
nav();