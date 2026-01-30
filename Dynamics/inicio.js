window.onload = () => {
    console.log("Toda la página, incluyendo imágenes, ha cargado");
    
    
    /* ========== VARIABLES DE CLASE ========== */
    let avatar = document.getElementById("avatar");
    let avatarGrande = document.getElementById("avatarGrande");
    let nombreUsuario = getCookie("actual");
    let datosUsuario = getCookie(nombreUsuario);
    let datos = JSON.parse(decodeURIComponent(datosUsuario));

    /* ========== FUNCION PRINCIPAL  ========== */
    cargarPerfil();
    function cargarPerfil(){
	console.log(nombreUsuario);
	switch(datos.bio){
        case "playa":
            cargaPlaya();
            break;
        case "bosque":
            cargaBosque();
            break;
        case "selva":
            cargaSelva();
            break;
        default:
            cargaCiudad();
            break;
	}
    }
    
    /* === FUNCIONES AUXILIARES === */
    
    /* Funcion que busca una cookie dada un nombre
       y devuelve el valor de esta. */
    function getCookie(nombre){
	let cookies = document.cookie.split(";");
	for(let cookie of cookies){
            let [key, valor] = cookie.split("=");
            if(key.trim() === nombre)
		return decodeURIComponent(valor);
	}
	return null;
    }

    /* Funcion que se encarga de cargar el fondo de playa,
       los colores y sus animalitos de ser necesario. */
    function cargaPlaya(){
	document.body.style.backgroundImage = "url('../Statics/img/fondoPlaya.png')";
	switch(datos.ani){
	case "tiburon":
            avatar.src = "../Statics/img/tiburon.png";
	    avatarGrande.src = "../Statics/img/tiburon.png";
            break;
	case "tortuga":
            avatar.src = "../Statics/img/tortuga.png";
	    avatarGrande.src = "../Statics/img/tortuga.png";
            break;
	case "cangrejo":
            avatar.src = "../Statics/img/cangrejo.png";
	    avatarGrande.src = "../Statics/img/cangrejo.png";
            break;
	case "pulpo":
	    avatar.src = "../Statics/img/pulpo.png";
	    avatarGrande.src = "../Statics/img/pulpo.png";
	    break;
	default:
            avatar.src = "../Statics/img/ranita.png";
	    avatarGrande.src = "../Statics/img/ranita.png";
            break;
	}
	colorDivs("#2b7c5f", "#30af8b");
    }
    

     /* Funcion que se encarga de cargar el fondo de bosque,
       los colores y sus animalitos de ser necesario. */
    function cargaBosque(){
	document.body.style.backgroundImage = "url('../Statics/img/fondoBosque.png')";
	switch(datos.ani){
	case "ajolote":
            avatar.src = "../Statics/img/ajolote.png";
	    avatarGrande.src = "../Statics/img/ajolote.png";
            break;
	case "nutria":
            avatar.src = "../Statics/img/nutria.png";
	avatarGrande.src = "../Statics/img/nutria.png";
            break;
	case "mapache":
            avatar.src = "../Statics/img/mapache.png";
	    avatarGrande.src = "../Statics/img/mapache.png";
            break;
	case "zorro":
	    avatar.src = "../Statics/img/zorro.png";
	    avatarGrande.src = "../Statics/img/zorro.png";
	    break;
	default:
            avatar.src = "../Statics/img/ranita.png";
	    avatarGrande.src = "../Statics/img/ranita.png";
            break;
	}
	colorDivs("#625f70", "#85618b");
    }

     /* Funcion que se encarga de cargar el fondo de selva,
       los colores y sus animalitos de ser necesario. */
    function cargaSelva(){
	document.body.style.backgroundImage = "url('../Statics/img/fondoSelva.png')";
	switch(datos.ani){
	case "murcielago":
            avatar.src = "../Statics/img/murcielago.png";
	    avatarGrande.src = "../Statics/img/murcielago.png";
            break;
	case "tigre":
            avatar.src = "../Statics/img/tigre.png";
	    avatarGrande.src = "../Statics/img/tigre.png";
            break;
	case "capibara":
            avatar.src = "../Statics/img/capibara.png";
	    avatarGrande.src = "../Statics/img/capibara.png";
            break;
	case "rana":
	    avatar.src = "../Statics/img/rana.png";
	    avatarGrande.src = "../Statics/img/rana.png";
	    break;
	default:
            avatar.src = "../Statics/img/ranita.png";
	    avatarGrande.src = "../Statics/img/ranita.png";
            break;
	}
	colorDivs("#697f0b", "#5d3408");
    }

     /* Funcion que se encarga de cargar el fondo de ciudad,
       los colores y sus animalitos de ser necesario. */
    function cargaCiudad(){
	document.body.style.backgroundImage = "url('../Statics/img/fondoCiudad.png')";
	switch(datos.ani){
	case "perro":
            avatar.src = "../Statics/img/perro.png";
	    avatarGrande.src = "../Statics/img/perro.png";
            break;
	case "gato":
            avatar.src = "../Statics/img/gato.png";
	    avatarGrande.src = "../Statics/img/gato.png";
            break;
	case "colibri":
            avatar.src = "../Statics/img/colibri.png";
	    avatarGrande.src = "../Statics/img/colibri.png";
            break;
	case "hamster":
	    avatar.src = "../Statics/img/hamster.png";
	    avatarGrande.src = "../Statics/img/hamster.png";
	    break;
	default:
            avatar.src = "../Statics/img/ranita.png";
	    avatarGrande.src = "../Statics/img/ranita.png";
            break;
	}
	colorDivs("#e13b96", "#b18ccf");
    }

    /* Función que dados dos colores, se encarga de colorear
       los contenederos que así lo requieran, además de
       darle estilo a la pagina de acuerdo al bioma. */
    function colorDivs(cDivs, cDespliegues){
	let divs = document.querySelectorAll(".mainT");
	divs.forEach(div => {
            div.style.backgroundColor = cDivs;
            div.style.color = "white";
	});
	
	let despliegues = document.querySelectorAll(".despliegues");
	despliegues.forEach(despliegue => {
            despliegue.style.backgroundColor = cDespliegues;
            despliegue.style.color = "white";
	});
	
	let topMenu = document.getElementById("grad");
	topMenu.style.backgroundImage = `linear-gradient(${cDivs}, #8f757534)`;

	let btnNuevaPlaylist = document-getElementById("btnNuevaplaylist");
	btnNuevaPlaylist.style

    }
    
    
};



