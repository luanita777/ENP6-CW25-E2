
let btninit = document.getElementById("butinit");
let btncuenta = document.getElementById("inicioses")

let enviar = document.getElementById("submitis");
let crear = document.getElementById("iniciemos");

let inicioses = document.getElementById("inicio-de-sesion");

let nomuser = document.getElementById("nomuser");
let contrasena = document.getElementById("pass");

//Boton de inicio

btninit.addEventListener("click", function(event){
    let conten = document.getElementById("center");
    let ocultos = document.getElementsByClassName("hide1");
    for(let i = 0 ; i < ocultos.length ; i++){
        ocultos[i].style.display = "flex"
    }
    btninit.style.display = "none";
    center.style.display = "none";
    
})

//Boton para abrir el inicio de sesion

btncuenta.addEventListener("click", function(event){
    inicioses.style.display = "flex";
    let ocultos = document.getElementsByClassName("hide1");
    for(let i = 0 ; i < ocultos.length ; i++){
        ocultos[i].style.display = "none"
    }
})


/*Evento de submit para el inicio de sesion, se buscan los campos completados por
el usuario y se comparan con las cookies existentes*/

inicioses.addEventListener("submit", function(event){

    event.preventDefault();

    //Validaciones

    let error = document.getElementById("err2");
    let error2 = document.getElementById("err2");

    if(nomuser.value == "" || nomuser.value == " "){
        error.textContent = "Nombre de usuario no encontrado";
    }

    if(contrasena.value == "" || contrasena.value == " "){
        error2.textContent = "Contraseña incorrecta";
    }

    const galletas = document.cookie.split(";");
    let info
    console.log(galletas);
    for(let cookie of galletas) {
        const [key, valor] = cookie.split("=");
        if(key.trim() === nomuser.value.trim()){
            info = decodeURIComponent(valor);
        }
        else{
            error.textContent = "El nombre de usuario no existe";
        }
    }

    /*Comprobacion de la contrasena del usuario, en caso de ser correcta se 
     envia al usuario al inicio de la pagina*/

    if(info){

        info = JSON.parse(info);

        let passcokie = info.pass

        if (contrasena.value.trim() == passcokie.trim()){
            let nombre = nomuser.value.trim();
            console.log("log in exitoso");
            document.cookie = `actual=${nombre}; path=/`;
            window.location.href="Templates/inicio.html" ;
        }
        else{
            error2.textContent = "La contraseña que agregaste es incorrecta";
        }
    }
})

