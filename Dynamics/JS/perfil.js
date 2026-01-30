//VISTA PRINCIPAL: PERFIL DE USUARIO

//Obtiene elementos del HTML (botones) que despliegan las funciones de editar, regresar y cerrar sesión
let editarBtn = document.getElementById('editar');
let regresarBtn = document.getElementById('regresar');

//Obtiene elementos del HTML (clases) para crear las funciones de desplegar y ocultar elementos según el botón clickeado
let contPrinc = document.getElementsByClassName('contenidoPrincipal');
let contEdit = document.getElementsByClassName('contenidoEditar');

//Al clickear en "Editar perfil" oculta el contenido que se muestra inicialmente y despliega el de la edición de datos
editarBtn.addEventListener("click", function()
{
    //Ciclo for para que se realice el 'display: none' en todos los elementos de la misma clase
    for (let i = 0; i < contPrinc.length; i++) 
        contPrinc[i].style.display = "none";
    for (let i = 0; i < contEdit.length; i++) 
        contEdit[i].style.display = "flex";
});

//Al clickear en "Regresar" regresa al contenido del perfil de usuario y oculta la edición de datos
regresarBtn.addEventListener("click", function()
{
    for (let i = 0; i < contPrinc.length; i++) 
        contPrinc[i].style.display = "block";
    for (let i = 0; i < contPrinc.length; i++) 
        contEdit[i].style.display = "none";
});


//VISTA SECUNDARIA: EDICIÓN DE PERFIL.
//creación de datos y cookies provisionales para probar el funcionamiento del programa
//duración provisional de las cookies
let duracion = 60 * 60 * 24;

//divide la cookie obtenida en subcadenas
const galletas = document.cookie.split(";")
let nombreAnterior
for (let cookie of galletas) {
    const [key, valor] = cookie.trim().split('=');
    if(key === "actual")
        nombreAnterior = valor;
}

//decodifica la cadena obtenida y obtiene el valor
let datosCookies
for (let cookie of galletas) {
    const [key, valor] = cookie.split('=');
    if(key.trim() === nombreAnterior.trim())
        datosCookies = decodeURIComponent(valor);    
}

console.log(datosCookies);

datosCookies = JSON.parse(datosCookies);
let nombreAnt = datosCookies.nombred;
let contraseña = datosCookies.pass;
let artistaAnt = datosCookies.artistad;
let cancionAnt = datosCookies.canciond;
let descripciond = datosCookies.descripciond;
let bioma = datosCookies.bio;
let animal = datosCookies.ani;

//imprime los datos del usuario en la pestaña de perfil.
let nombreTexto = document.getElementById('nombreTexto');
nombreTexto.textContent = `${nombreAnt}`;

let artistaTexto = document.getElementById('artistaTexto');
artistaTexto.textContent = `Artista favorito: ${artistaAnt}`;

let cancionTexto = document.getElementById('cancionTexto');
cancionTexto.textContent = `Canción favorita: ${cancionAnt}}`;

let descTexto = document.getElementById('descTexto');
descTexto.textContent = `${descripciond}`;


//Obtiene los datos introducidos por el usuario en el formulario HTML de edición de perfil
let formulario = document.getElementById('editarPerfil');
let nombreUsuario = document.getElementById('nombreUsuario');
let password = document.getElementById('contraseña');
let artista = document.getElementById('artista');
let cancion = document.getElementById('canción');
let descripcion = document.getElementById('descripción');

//Al confirmar la edición de datos, estos se actualizan en la pantalla de perfil
formulario.addEventListener("submit", function(event)
{
    event.preventDefault();

    const datos = {
        nombred: `${nombreUsuario.value}`,
        pass: `${password.value}`,
        artistad: `${artista.value}`,
        canciond: `${cancion.value}`,
        descripciond: `${descripcion.value}`,
        bio: `${bioma.value}`,
        ani: `${animal.value}`
    };

    //actualiza (elimina y crea) cookies
    document.cookie = `${nombreAnterior}=; max-age=0; path=/`;
    let valor = encodeURIComponent(JSON.stringify(datos));
    document.cookie = `${nombreUsuario.value}=${valor}; max-age=${duracion}; path=/`;
    document.cookie = `actual=${nombreUsuario.value}; path=/`;
    console.log("Los datos actuales son" + document.cookie);

    window.location.reload();
});

console.log("Los datos actuales son" + document.cookie);


//FUNCIÓN CERRAR SESIÓN
let sesionBtn = document.getElementById('sesion');

sesionBtn.addEventListener("click", function() 
{
    document.cookie = `actual=; max-age=0; path=/`;
    window.location.href = "../index.html";
    console.log(document.cookie);
})


let home = document.getElementById('iconoHome');

home.addEventListener('click', () =>{
    window.location.href = "../inicio.html";
})