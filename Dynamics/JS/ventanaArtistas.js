let contenedorBotones = document.getElementById("botonesArtistas");
let contenedorDescript = document.getElementById("descripciones");

for (let i = 0; i <= 9; i ++) 
{
    console.log(baseDatosJSON.artistas[i].nombre);

    let botonArtista = document.createElement("button");
    botonArtista.textContent = `${baseDatosJSON.artistas[i].nombre}`;
    botonArtista.classList.add("botones");
    contenedorBotones.appendChild(botonArtista);

    let imagenArtista = document.createElement("img");
    botonArtista.innerHTML =  `<img src = "${baseDatosJSON.artistas[i].url_img}"></img>`
    console.log(imagenArtista.src)
    imagenArtista.classList.add("imagenes");

    let descripcion = baseDatosJSON.artistas[i].descripcion;

    botonArtista.addEventListener("click", function(event)
    {
        event.preventDefault();

        let vista = false;
        if(vista == true) 
        {
            contenedorDescript.innerHTML = "";
            vista = false;
        }
        else
        {
            contenedorDescript.innerHTML = "";
            let htmlDescript = document.createElement("h2");
            htmlDescript.textContent = descripcion;
            contenedorDescript.appendChild(htmlDescript);
        }
        console.log(descripcion);
    });
}
