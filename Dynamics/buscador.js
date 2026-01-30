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
        con la API de iframe para que cada vez que el usuario presione uno de los botones este envie el id de la cacnion al
        iframe y reproduzaca el video solicitado*/


        coinsidencias.forEach(bdcanciones => {

            let item = document.createElement("div");

            let butitem = document.createElement("button");
            butitem.textContent = `${bdcanciones.nombre} - ${bdcanciones.artista}`;

            butitem.classList.add("resbut");

            butitem.onclick = () => {
                var cancionid = `${bdcanciones.link}`;

                /*sin embargo para hacer esto necesitamos la funcion loadVideoById que nos permite cargar el video 
                con el id unico de youtube, sin embargo al hacer esto tambien necesitamos actualizar la duracion del video,
                ya que esta se setea al iniciar el reproductor pero no cada vez que se cambie el video, para esto vamos a usar
                un intervalo que se repite cada medio segundo y comprueba si la nueva cancion esta cargada*/
          
                if(player && player.loadVideoById){
                    player.loadVideoById(cancionid);

                    const esperarYActualizar = setInterval(() => {
                        const dur = player.getDuration();
                        if (dur > 0) {
                            duration = dur;
                            seekBar.max = duration;
                            clearInterval(esperarYActualizar);
                        }
                    }, 500);
                }

                /*Si el video se carga se asigna a la seekBar la nueva duracion del video para darnos el 
                control de la duracion del video, poder adelantar y atrasar el video a gusto de nuestro usuario*/
        
            }

            item.appendChild(butitem);
            result.appendChild(item);
        })
    }
    else{
        result.style.display = "none";
    }

    // Repetimos el proceso anterior, sin embargo en este caso no necesitamos revisar si esta vacio ya que la funcion de arriba ya lo hace

    coincidenciasb = bdAlbums.filter(albums => 
        albums.nombre.toLowerCase().includes(texto)
    );

    // Recorremos el arreglo "Coincidenciasb" para buscar el nombre denro del diccionario que sacamos de nuestra base de datos"
    coincidenciasb.forEach(bdAlbums => {

        let item = document.createElement("div");

        let butitem = document.createElement("button");
        butitem.textContent = `Album - ${bdAlbums.nombre} - ${bdAlbums.artista}`;

        butitem.classList.add("resbut");

        //En este caso creamos una cookie para guardar la informacion del Album que seleccionamos
        butitem.onclick = () => {
            var albumid = `${bdAlbums.id}`;
            `albumselec=${albumid}; path=/`;
        }
        item.appendChild(butitem);
        result.appendChild(item);
    });


    coincidenciasc = bdArtistas.filter(artistas => 
        artistas.nombre.toLowerCase().includes(texto)
    );

    /*Esta funcion tiene la misma funcionalidad que la aneterior con la diferencia que esta nos ayudara
    a guardar la informacion de un artista*/
    coincidenciasc.forEach(bdArtistas => {

        let item = document.createElement("div");

        let butitem = document.createElement("button");
        butitem.textContent = `Artista - ${bdArtistas.nombre}`;

        butitem.classList.add("resbut");

        butitem.onclick = () => {
            var artistaid = `${bdArtistas.id}`;
            document.cookie = `asrtistaselec=${artistaid}; path=/`;
        }
        item.appendChild(butitem);
        result.appendChild(item);
    });

    
    /*En caso de que los 3 arreglos coinsidencias esten vacios, y enviamos un mensaje al usuario 
    que le confirme que no encontramos coinsidencias en nuestra base de datos*/
    
    if(coinsidencias.length == 0 && coincidenciasb.length == 0 && coincidenciasc.length == 0){
        let item = document.createElement("div");
        item.textContent = "No hay coinsidencias";
        result.appendChild(item);
    }


})