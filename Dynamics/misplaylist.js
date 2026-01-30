const galletas = document.cookie.split(";");
let nombreAnterior;
for (let cookie of galletas) {  //Obtiene el usuario actual que incio sesión
    const [key, valor] = cookie.trim().split("=");
    if (key === "actual") {
        nombreAnterior = valor;
    }
}
let albumUsuario = document.getElementById("mainSection");  //Obtiene la mainSecction donde se pondrán las playlists

let identificador=`${nombreAnterior}_MISPLAYLISTS`;
let datosCookies=[];
for (let cookie of galletas) {  //Añade un identificador al nombre de las cookies en el arreglo que hace referencia a las playlists
    const [key, valor] = cookie.split('=');
    if(key.includes(identificador)){ 
        datosCookies.push(cookie);
    } 
}

for(let i=0; i<datosCookies.length;i++){    //Crea en mainSection una division por cada cookie, estas hacen referencia a las playlists
    const [key,valor]= datosCookies[i].split("=");
    let nombrePlaylist=key.slice(identificador.length+2);
    albumUsuario.innerHTML+=`<div class="playlist"> 
        <span class="playlistTexto">${nombrePlaylist}</span>
    <button id="${key}" class="portada" ></button></div>`;
}

let botones=document.querySelectorAll('.portada');

botones.forEach(boton => {  //Te lleva a crearPlaylit y añade una cookie que hace referencia a la playlist que hiciste click
    boton.addEventListener("click",()=>{
        document.cookie=`cancionActual=${boton.id};expires=fecha; path=/`;
        window.location.href="./crearPlaylist.html";
    });
});