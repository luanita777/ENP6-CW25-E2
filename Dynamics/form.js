/* ========== VARIABLES DE CLASE ========== */
let result=document.getElementById("result");
let form = document.getElementById("bioform");
let aniform = document.getElementById("animalform");
let nxtbtn = document.getElementById("next");
let conte = document.getElementById("resultado");
let crearCuenta = document.getElementById("crearCuenta");
let bioForm = document.getElementById("bioForm");
let animalForm = document.getElementById("animalForm");
let animal ;
let bioma ;
let a = document.getElementById("a1");
let b = document.getElementById("a2");
a.style.display = "none"
b.style.display = "none"
let con = document.getElementById("conte");
let validacion;
let nombrereg;
let datosreg;
/* ====== FORMULARIO BIOMA ====== */

/* Con este primer cuestinario se busca que el usuario decida
   entre una de 4 opciones de cada una de las nueve preguntas
   para poder asignarle un bioma.
*/

/* === LÓGICA === */
form.addEventListener("submit", function(event){

    event.preventDefault();
    document.querySelectorAll(".errores").forEach(e=>{
	e.textContent = "";
    });


    // Respuestas a las preguntas //
    let val1 = document.getElementById("pre1");
    let val2 = document.getElementById("pre2");
    let val3 = document.getElementById("pre3");
    let val4 = document.getElementById("pre4");
    let val5 = document.getElementById("pre5");
    let val6 = document.getElementById("pre6");
    let val7 = document.getElementById("pre7");
    let val8 = document.getElementById("pre8");
    let val9 = document.getElementById("pre9");

    // Validaciones //

    let validacion = true;
    let valorespos =["1", "2", "3", "4"];

    if(valorespos.indexOf(val1.value) == -1){ 
        let error = document.getElementById("err6");
        error.textContent = "El valor \"" + val1.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }

    if(valorespos.indexOf(val2.value) == -1){ 
        let error = document.getElementById("err7");
        error.textContent = "El valor \"" + val2.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }

    if(valorespos.indexOf(val3.value) == -1){ 
        let error = document.getElementById("err8");
        error.textContent = "El valor \"" + val3.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }

    if(valorespos.indexOf(val4.value) == -1){ 
        let error = document.getElementById("err9");
        error.textContent = "El valor \"" + val4.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }

    if(valorespos.indexOf(val5.value) == -1){ 
        let error = document.getElementById("err10");
        error.textContent = "El valor \"" + val5.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }

    if(valorespos.indexOf(val6.value) == -1){ 
        let error = document.getElementById("err11");
        error.textContent = "El valor \"" + val6.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }

    if(valorespos.indexOf(val7.value) == -1){ 
        let error = document.getElementById("err12");
        error.textContent = "El valor \"" + val7.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }

    if(valorespos.indexOf(val8.value) == -1){ 
        let error = document.getElementById("err13");
        error.textContent = "El valor \"" + val8.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }

    if(valorespos.indexOf(val9.value) == -1){ 
        let error = document.getElementById("err14");
        error.textContent = "El valor \"" + val9.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }


    
    /* Si la validacion es correcta se suman los valores obtenidos
       en cada respuesta y posteriormente se comparan con valores
       establecidos para decidir el bioma que se le asigna a cada
       uno de los usuarios.
    */

    if(!validacion){
	return;
    }
    
    if(validacion == true){

        let total = Number(val1.value) + Number(val2.value) +
	    Number(val3.value) + Number(val4.value) +
	    Number(val5.value) + Number(val6.value) +
	    Number(val7.value) + Number(val8.value) +
	    Number(val9.value);
    
        console.log(total)

        if(total >= 9 && total < 16){
            let pregunta = document.getElementsByClassName("ply");
            for(let i = 0 ; i < pregunta.length ; i++){
                pregunta[i].style.display = 'flex';
            }
            bioma = "playa";
        }
        else{
            if(total >= 16 && total < 23 ){
                let pregunta = document.getElementsByClassName("bsq");
                for(let i = 0 ; i < pregunta.length ; i++){
                pregunta[i].style.display = 'flex';

                }
                bioma = "bosque";
            }
            else{
                if(total >= 23 && total < 29){
                    let pregunta = document.getElementsByClassName("slv");
                    for(let i = 0 ; i < pregunta.length ; i++){
                    pregunta[i].style.display = 'flex';
                    }
                    bioma = "selva";
                }
                else{
                    if(total >= 29 && total <= 36){
                        let pregunta = document.getElementsByClassName("cdd");
                        for(let i = 0 ; i < pregunta.length ; i++){
                        pregunta[i].style.display = 'flex';
                        }
                        bioma = "ciudad";
                    }
                }
            }
        }

       if(validacion){
	   con.style.display = "none";
	   a.style.display = "none";
	   b.style.display = "none";
	   bioForm.style.display = "none";
	   animalForm.style.display = "flex";
	   aniform.style.display = "flex";
       }
    }
});


/* ====== FORMULARIO ANIMAL ====== */

/* Con este segundo cuestinario se busca que el usuario decida
   entre una de 4 opciones que dependen del bioma asignado y
   dependiendo su respuesta se asigna uno de 4 psibles animales
   por bioma al usuario.
*/

aniform.addEventListener("submit", function(event){

    event.preventDefault();
    document.querySelectorAll(".errores").forEach(e=>{
	e.textContent = "";
    });

    
    // Preguntas de acuerdo al bioma //
    let playaAni = document.getElementById("ply");
    let preguntap = document.getElementsByClassName("ply");
    let bosqueAni = document.getElementById("bsq");
    let preguntab = document.getElementsByClassName("bsq");
    let selvaAni = document.getElementById("slv");
    let preguntase = document.getElementsByClassName("slv");
    let ciudadAni = document.getElementById("cdd");
    let preguntac = document.getElementsByClassName("cdd");
    let resulta = document.getElementById("resultani");
    let imagenres = document.getElementById("imganiml");
    let valido = true;

    // Validaciones //
    let playalist = ["Tiburon", "Tortuga", "Cangrejo","Pulpo"];
    let bosquelist = ["Nutria", "Mapache", "Ajolote","Zorro"];
    let selvalist = ["Rana", "Capibara", "Tigre","Murcielago"];
    let ciudadlist = ["Perro", "Gato", "Colibri","Hamster"];

    // Preguntas de la playa //
    if(playalist.indexOf(playaAni.value) == -1){
        let error = document.getElementById("err15");
        error.textContent = "No es posible validar la opcion " + playaAni.value;
        valido = false;
    }
    else{
        if(playaAni.value == "Tiburon" && preguntap[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un tiburon";
            result.textContent = " Felicidades perteneces a la playa";
            imagenres.src="../Statics/img/tiburon.png";
            conte.style.display="block";
            animal = "tiburon";
        }

        if(playaAni.value == "Tortuga" && preguntap[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres una tortuga";
            result.textContent = " Felicidades perteneces a la playa";
            imagenres.src="../Statics/img/tortuga.png";
            conte.style.display="block";
            animal = "tortuga";
        }

        if(playaAni.value == "Cangrejo" && preguntap[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un cangrejo";
            result.textContent = " Felicidades perteneces a la playa";
            imagenres.src="../Statics/img/cangrejo.png";
            conte.style.display="block";
            animal = "cangrejo";
        }

        if(playaAni.value == "Pulpo" && preguntap[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un pulpo";
            result.textContent = " Felicidades perteneces a la playa";
            imagenres.src="../Statics/img/pulpo.png";
            conte.style.display="block";
            animal = "pulpo";
        }

    
    }

    
    // Preguntas del bosque //
    if(bosquelist.indexOf(bosqueAni.value) == -1){
        let error = document.getElementById("err16");
        error.textContent = "No es posible validar la opcion " + bosqueAni.value;
        valido = false;
         
    }
    else{
        if(bosqueAni.value == "Ajolote" && preguntab[0].style.display == "flex"){
            result.textContent = " Felicidades perteneces a el bosque";
            resulta.textContent = "Felicidades eres un ajolote";
            imagenres.src="../Statics/img/ajolote.png";
            conte.style.display="block";
            animal = "ajolote";
        }

        if(bosqueAni.value == "Nutria" && preguntab[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un nutria";
            result.textContent = " Felicidades perteneces a el bosque";
            imagenres.src="../Statics/img/nutria.png";
            conte.style.display="block";
            animal = "nutria";
        }

        if(bosqueAni.value == "Mapache" && preguntab[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un mapache";
            result.textContent = " Felicidades perteneces a el bosque";
            imagenres.src="../Statics/img/mapache.png";
            conte.style.display="block";
            animal = "mapache";
        }

        if(bosqueAni.value == "Zorro" && preguntab[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un zorro";
            result.textContent = " Felicidades perteneces a el bosque";
            imagenres.src="../Statics/img/zorro.png";
            conte.style.display="block";
            animal = "zorro";
        }

    
    }

    
    // Preguntas de la selva //
    if(selvalist.indexOf(selvaAni.value) == -1){
        let error = document.getElementById("err17");
        error.textContent = "No es posible validar la opcion " + selvaAni.value;
        valido = false;
    }
    else{
        if(selvaAni.value == "Murcielago" && preguntase[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un murcielago";
            result.textContent = " Felicidades perteneces a la selva";
            imagenres.src="../Statics/img/murcielago.png";
            conte.style.display="block";
            animal = "murcielago";
        }

        if(selvaAni.value == "Tigre" && preguntase[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un tigre";
            result.textContent = " Felicidades perteneces a la selva";
            imagenres.src="../Statics/img/tigra.png";
            conte.style.display="block";
            animal = "tigre";
        }

        if(selvaAni.value == "Capibara" && preguntase[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un capibara";
            result.textContent = " Felicidades perteneces a la selva";
            imagenres.src="../Statics/img/capibara.png";
            conte.style.display="block";
            animal = "capibara";
        }

        if(selvaAni.value == "Rana" && preguntase[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres una rana";
            result.textContent = " Felicidades perteneces a la selva";
            imagenres.src="../Statics/img/rana.png";
            conte.style.display="block";
            animal = "rana";
        }

        
    }

    // Preguntas de la ciudad //
    if(ciudadlist.indexOf(ciudadAni.value) == -1){
        let error = document.getElementById("err18");
        error.textContent = "No es posible validar la opcion " + ciudadAni.value;
        valido = false; 
    }
    else{
        if(ciudadAni.value == "Perro" && preguntac[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un perro";
            result.textContent = "Feliciddades perteneces a la ciudad";
            imagenres.src="../Statics/img/perro.png";
            conte.style.display="block";
            animal = "perro";
        }
        
        if(ciudadAni.value == "Gato" && preguntac[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un gato";
            result.textContent = "Feliciddades perteneces a la ciudad";
            imagenres.src="../Statics/img/gato.png";
            conte.style.display="block";
            animal = "gato";
        }

        if(ciudadAni.value == "Colibri" && preguntac[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un colibri";
            result.textContent = "Feliciddades perteneces a la ciudad";
            imagenres.src="../Statics/img/colibri.png";
            conte.style.display="block";
            animal = "colibri";
        }

        if(ciudadAni.value == "Hamster" && preguntac[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un hamster";
            result.textContent = "Feliciddades perteneces a la ciudad";
            imagenres.src="../Statics/img/hamster.png";
            conte.style.display="block";
            animal = "hamster";
        }

        
    }

    if(!valido){
	return;
    }
    
    if(valido == true){
        animalForm.style.display = "none"
	result.style.display = "block";
    }
    
})



/* ======== CREACIÓN DE LA CUENTA ======== */

// Valores para la cuenta //
let crearcuenta = document.getElementById("Crear-una-cuenta");
let nomusereg = document.getElementById("nomusernew");
let contrasenareg = document.getElementById("password");
let banda = document.getElementById("fav1");
let cancion = document.getElementById("fav2");
let descripcion = document.getElementById("desc");

// Creación y validación de la cuenta //
crearcuenta.addEventListener("submit", function(event){

    event.preventDefault()
    validacion = true;
    document.querySelectorAll(".errores").forEach(e=>{
	e.textContent = "";
    });
    

    let datosTemp = {
        nombred: nomusereg.value.trim(),
        pass: contrasenareg.value.trim(),
        artistad: banda.value.trim(),
        canciond: cancion.value.trim(),
        descripciond: descripcion.value.trim(),
    };

    // Validacion //
    let nombreTemp = nomusereg.value.trim();
    let error = document.getElementById("err1");

    if(nomusereg.value == "" || nomusereg.value == " "){
        error.textContent = "Este nombre de usuario no es valido";
        validacion = false;
    }

    if(contrasenareg.value == "" || contrasenareg.value == " "){
        let error2 = document.getElementById("err2");
        error2.textContent = "Contraseña incorrecta";
        validacion = false;
    }

    if(!validacion){
	return;
    }

    if(validacion == true){
        const galletas = document.cookie.split(";");
        console.log(galletas);
        let existe = false;
        for(let cookie of galletas) {
	    const [key, valor] = cookie.split("=");
	    
	    if(key.trim() === nomusereg.value.trim()){
		existe = true;
		break; // ya lo encontró, sale
	    }
	}
	
	if(existe){
	    error.textContent = "Este usuario ya existe, por favor usa otro";
	    return;
	}
	
        if(existe == false){
	    nombrereg = nombreTemp;
	    datosreg = datosTemp;
            console.log("creada");
        }
    }

    if(validacion){
	con.style.display = "none";
	form.style.display = "flex";
	a.style.display = "flex"
	b.style.display = "flex"
    }


})

nxtbtn.addEventListener("click", ()=>{
    let con = document.getElementById("conte");
    a.style.display = "none"
    b.style.display = "none"
    con.style.display = "none";
    conte.style.display = "flex"
})


//Boton para indicarle al usuario que la cuenta ha sido creada y regresar al ininio

crearCuenta.addEventListener("click", ()=>{
    let con = document.getElementById("conte");
    a.style.display = "none"
    b.style.display = "none"
    con.style.display = "none";
    conte.style.display = "none"
    crearCookie();
    window.location.href = "../index.html";
})




/* En esta parte buscamos los datos que el usuario entrega al completar el formulario para transformarlos en un diccionario
y poder almacenar su informacion en cookies para guardar la cuenta del usuario*/

//Funcion que crea una Cookie con la informacion de la cuenta del usuario

function crearCookie(){
    let datosBA = {
	bio: bioma,
        ani: animal,
     }
    let date = new Date();
    date.setTime(date.getTime() + (30*24*60*60*1000));
    expiracion = date.toGMTString();
    let datosFinales = {
	...datosreg,
	...datosBA
    };
    datosFinales = encodeURIComponent(JSON.stringify(datosFinales));
    document.cookie = `${nombrereg}=${datosFinales}; expires=${expiracion}; path=/`;
}
