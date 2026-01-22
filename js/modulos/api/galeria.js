const Leer = async (apiUrl) => {
    try{
        const respuesta = await fetch(apiUrl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'Leer'
            })
        });
        // console.table(respuesta);
        if(respuesta.status !== 200){
            throw new Error(`Error en la solicitud: La respuesta del servidor no fue satisfactoria. Estado: ${respuesta.status}`);
        }else{
            const datos = await respuesta.json();
            return datos;
        }
    }catch(error){
        console.error(error.message);
    }
}


export const datosLeer = async (apiUrl) => {
    try{
        // Obtenemos los datos
        const datos = await Leer(`${apiUrl}`);
        
        console.table(datos);
        return datos;
    }catch(error){
        console.error(error);
    }
}


const GaleriaPorCategoria = async (apiUrl, categoria) => {
    try{
        const respuesta = await fetch(apiUrl);
        // console.table(respuesta);
        if(respuesta.status !== 200){
            throw new Error(`Error en la solicitud: La respuesta del servidor no fue satisfactoria. Estado: ${respuesta.status}`);
        }else{
            const datos = await respuesta.json();
            return datos[categoria];
        }
    }catch(error){
        console.error(error.message);
    }
}


export const DatosGaleriaPorCategoria = async (apiUrl, categoria) => {
    try{
        // Obtenemos los datos
        const datos = await GaleriaPorCategoria(`${apiUrl}`, categoria);
        // console.table(datos);
        return datos;
    }catch(error){
        console.error(error);
    }
}