//Creacion de una galleta para probar la playlist

let portada = document.getElementById("portada");
let lista = document.getElementById("lista");
let addSong = document.getElementById("addSong");
let sear = document.getElementById("bsq");
let date = new Date();
date.setTime(date.getTime() + (24*60*60*1000));
let maxAge = date.toUTCString;
const galletas = document.cookie.split(";");
let playlistActual;
for (let cookie of galletas) {
    const [key, valor] = cookie.trim().split("=");
    if (key === "cancionActual") {
        playlistActual = valor;
    }
}

let nombreAnterior;
for (let cookie of galletas) {
    const [key, valor] = cookie.trim().split("=");
    if (key === "actual") {
        nombreAnterior = valor;
    }
}
/*document.cookie = `${nombreAnterior}_MISPLAYLISTS_${nombrePlaylist}=${playlist}; expires=${maxAge}; path=/`;
document.cookie  += `cancionActual=${nombreAnterior}_MISPLAYLISTS_${nombrePlaylist}; expires=${maxAge}; path=/`;*/

// Obtenemos las galletas
let arrayCookies = document.cookie.split(";");
let songName;
let songLink;
let playlist = new Array();

console.log(nombreAnterior);
console.log(playlistActual);

let cookieName = `${playlistActual}=`;

//Comprobacion para encontrar la cookie que almacena la playlist

console.log(cookieName);
for (let i = 0; i<arrayCookies.length; i++){
    let cookies = arrayCookies[i];
    cookies = cookies.trim();
    if(cookies.indexOf(cookieName) === 0){
        if(cookies.slice(cookieName.length, cookies.length).split(",") != ""){
            playlist = cookies.slice(cookieName.length, cookies.length).split(",");
            console.log(playlist);
        } else{
            playlist = [];
            console.log(playlist);
        }
    }
}

let imagenportada;
 for (let cookie of galletas) {
    const [key, valor] = cookie.trim().split("=");
    if (key === "portada") {
        imagenportada = valor;
    }
}

portada.innerHTML += `<img src="${imagenportada}">`

/* Con esta funcion actualizamos la barra de la playlist que contiene todas las canciones de la misma, ademas de 
asignarle un estilo o una clase segun sea el caso para mejorar la presentacion de las playlist*, esta funcion se
llama cada vez que uno de los botones del buscado agrega una de las canciones al arreglo "playlist"*/



function actualizarbarra(){
    if(playlist.length <= 0){
        document.cookie = `${playlistActual}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
        document.cookie = `cancionActual=${playlistActual}; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
        //window.location.href = "./inicio.html";
    }
    lista.innerHTML = "";
    for (let i = 0; i < playlist.length; i++) {
        let section = document.createElement("section");
        section.className = "secSongs";
        section.id = `${playlist[i]}`;
        songName = bdcanciones[playlist[i]-1].nombre;
        let item = document.createElement("a");
        item.className = "song";
        item.href = ``;
        item.innerHTML = `${songName}`
        let delBtn = document.createElement("button");
        delBtn.className = "delete";
        delBtn.innerHTML = "X";
        section.innerHTML = item.outerHTML;
        section.innerHTML += delBtn.outerHTML;
        lista.appendChild(section);
    }
    /*En esta parte de la funcion creamos un boton para poder eliminar las canciones que ya no queremos
    que permanezcan en la playlist*/
    let delBtns = document.querySelectorAll(".delete");
        delBtns.forEach(button =>{
            button.addEventListener("click", (e)=>{
            e.stopPropagation();
            let parentID = button.parentElement.id;
            let locOfElmnt = playlist.indexOf(parentID);
            if(locOfElmnt != -1){
                playlist.splice(locOfElmnt, 1);
            }
            document.cookie = `${playlistActual}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
            document.cookie = `${playlistActual}=${playlist}; max-age=${maxAge}; path=/`;
            actualizarbarra();
        });
    });
}


actualizarbarra();
console.log(playlist);

addSong.addEventListener("click", ()=>{
    sear.focus();
});