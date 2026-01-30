let contenedorBotones = document.getElementById("botonesGeneros");
let contenedorDescript = document.getElementById("descripciones");

for (let i = 0; i <= 7; i ++) 
{
    console.log(baseDatosJSON.genero[i].nombre);

    let botonGenero = document.createElement("button");
    botonGenero.textContent = `${baseDatosJSON.genero[i].nombre}`;
    botonGenero.classList.add("botones");
    contenedorBotones.appendChild(botonGenero);

    let imagenGenero = document.createElement("img");
    botonGenero.innerHTML =  `<img src = "${baseDatosJSON.genero[i].url_img}"></img>`
    console.log(imagenGenero.src)
    imagenGenero.classList.add("imagenes");

    let descripcion = baseDatosJSON.genero[i].descripcion;

    botonGenero.addEventListener("click", function(event)
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
