let contenedorBotones = document.getElementById("botonesAlbumes");

for (i = 0; i <= 17; i ++) 
{
    console.log(baseDatosJSON.album[i].nombre);
    let botonAlbum = document.createElement("button");
    botonAlbum.textContent = `${baseDatosJSON.album[i].nombre}`;
    console.log(botonAlbum.value)
    botonAlbum.classList.add("botones");
    contenedorBotones.appendChild(botonAlbum);

    let imagenAlbum = document.createElement("img");
    botonAlbum.innerHTML =  `<img src = "${baseDatosJSON.album[i].url_img}"></img>`
    console.log(imagenAlbum.src)
    imagenAlbum.classList.add("imagenes");
}
