let form = document.getElementById("nameplay");
let portada;
let text = document.getElementById("noplay");
let net = document.getElementById("net");
let rad1 = document.getElementById("playa");
let rad2 = document.getElementById("bosque");
let rad3 = document.getElementById("selva");
let rad4 = document.getElementById("ciudad");
const galletas = document.cookie.split(";");
let nombreAnterior;
let cookeprefijo = [];
let playlist = [];


document.cookie = "actual=EmilioFraudeDeLasCasasDeLaFuente";
document.cookie = "EmilioFraudeDeLasCasasDeLaFuente_MISPLAYLISTS_Playlist1=1";

for (let cookie of galletas) {
    const [key, valor] = cookie.trim().split("=");
    if (key === "actual") {
        nombreAnterior = valor;
        console.log(nombreAnterior);
    }
}
let prefijo = `${nombreAnterior}_MISPLAYLISTS_`

for (let cookie of galletas) {
    const [key, valor] = cookie.trim().split("=");
    if (key.includes(`${nombreAnterior}_MISPLAYLISTS_`)) {
        cookeprefijo = key.slice(prefijo.length);
        console.log(prefijo);
    }
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(cookeprefijo);
    if(rad1.checked){
        portada =  "../Statics/img/Tiburon_perfil.webp"
    }
    else if(rad2.checked){
        portada =  "../Statics/img/zorro_perfil.webp"
    }
    else if(rad3.checked){
        portada =  "../Statics/img/Capibara_perfil.webp"
    }
    else if(rad4.checked){
        portada =  "../Statics/img/hamster_perfil.webp"
    }
    
    if(cookeprefijo.indexOf(text.value)== -1){
        let busc = document.getElementById("bsq");
        let sub = document.getElementById("submmit");
        console.log("gg")
        busc.style.display = "block";
        net.style.display = "flex"
        sub.style.display = "none"

    }
    else{
        console.log("Ya existe esa play list")
    }     
})
console.log("abuelita");
console.log(playlist);

net.addEventListener("click", ()=>{
    if(playlist.length >= 3){
        console.log("si");
        document.cookie = `${nombreAnterior}_MISPLAYLISTS_${text.value}=${playlist};max-age=${60*60*24}; path=/`;
        document.cookie = `cancionActual=${nombreAnterior}_MISPLAYLISTS_${text.value}; path=/`;
        document.cookie = `portada=${portada}; path=/`;
        window.location.href = "./crearPlaylist.html";
    }
})

function actualizarbarra(){
    console.log("=)")
}