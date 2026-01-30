//Variables de entrada y salida 

let result = document.getElementById("result");
let barra = document.getElementById("bsq");

// Esta Variable se obtiene de la base de datos "nuestraBase.js"
let canciones = bdcanciones;
let albums = bdAlbums;
let artistas = bdArtistas;

let coincidenciasb = [];
let coinsidencias = [];
let coincidenciasc = [];

console.log(bdAlbums);


/*Evento de entrada para el buscador, se usa la variable texto para almacenar el contendio de la barra de busqueda,
de igual manera hacemos referencia a resultado que es una lista desordenada dentro de nuestro html, lo usamos para 
desplegar los resultados de la busqueda que*/
barra.addEventListener("input", function() {
    let texto = barra.value.trim().toLowerCase();

    result.innerHTML = "";

    /*En esta parte usamos la linea "let coinsidencias = bdcanciones.filter(canciones =>", que nos permite crear
    un arreglo que contenga los elementos que contienen nuestra variable texto dentro de el arreglo bdcanciones.
    De este modo podemos buscar con el metodo input cada vez que se actualice la variable texto dentro de bdcanciones*/


    if(texto !== ""){

        result.style.display = "block";

        let coinsidencias = bdcanciones.filter(canciones => 
            canciones.nombre.toLowerCase().includes(texto)
        );

        /*Cuando encuentra una coinsidencia las envia a un objeto tipo button como su atributo de textContent, y a su vez
        se colocan en la lista "result" dentro de una etiqueta "li". Por otro lado creamos un event de onClick para cada
        uno de los botones que se crean cuando se encuentra una coinsidencia, este metodo lo utilizamos para comunicarnos 
        con las playlis y nos permiten agregar una cncion gracias a el arreglo playlist en el que almacenamos cada uno de los 
        id de las canciones que usuario guard en la laylist*/


        coinsidencias.forEach(bdcanciones => {

            let item = document.createElement("li");

            let butitem = document.createElement("button");
            butitem.textContent = `${bdcanciones.nombre} - ${bdcanciones.artista}`;

            butitem.onclick = () => {
                let cancionid = `${bdcanciones.id}`;
                playlist.push(cancionid);
                console.log(playlist);

                //Se llama a la funcion actualizar barra procedente de el java scrip 'playlisView.js
                actualizarbarra();
                texto.value = "";
                document.cookie = `MISPLAYLISTS_playlist1=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
                document.cookie = `MISPLAYLISTS_playlist1=${playlist}; max-age=${maxAge}; path=/`;
            }

            item.appendChild(butitem);
            result.appendChild(item);
        })
    }
    else{
        result.style.display = "none";
    }
});