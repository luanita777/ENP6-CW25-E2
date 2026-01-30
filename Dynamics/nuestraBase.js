class Cancion{

    constructor(nombre, id, genero, artista, album, id_artista, id_genero, id_album, link){
        this.nombre = nombre;
        this.id = id;
        this.genero = genero;
        this.artista = artista;
        this.album = album;
        this.id_album = id_album;
        this.id_artista = id_artista;
        this.id_genero = id_genero;
        this.link = link
        this.reproduciendo = false; 
    }

    // setters y getters de cada atributo

    setNombre(nombre){
        this.nombre = nombre;
    }   
    getNombre(){
        return this.nombre;
    }

    setid_artista(id_artista){
        this.id_artista = id_artista;
    }   
    getid_artista(){
        return this.id_artista;
    }

    setid_album(id_album){
        this.id_album = id_album;
    }   
    getid_album(){
        return this.id_album;
    }

    setalbum(album){
        this.album = album;
    }   
    getalbum(){
        return this.album;
    }

    setid_genero(id_genero){
        this.id_genero = id_genero;
    }   
    getid_genero(){
        return this.id_genero;
    }

    setId(id){
        this.id = id;
    }   
    getId(){
        return this.id;
    }

    setGenero(genero){
        this.genero = genero;
    }   
    getGenero(){
        return this.genero;
    } 

    setArtista(artista){
        this.artista = artista;
    }   
    getArtista(){
        return this.artista;
    }

    setlink(link){
        this.link = link;
    }   
    getlink(){
        return this.link
    } 
    
    

    //Devuelve true si esta reproduciendo, false en otro caso
    estaReproduciendo(){
        if (this.reproduciendo == true)
            return true;
        else
            return false;
    }

    //Cambia de no reproduciendo a reproduciendo
    play(){
        this.reproduciendo = true;
    }

    //Cambia de reproduciendo a no reproduciendo
    stop(){
        this.reproduciendo = false;
    }
}

/*En este ciclo for creo un enlace entre el contenido de la base de datos predeterminada con un objeto llamado
cancion, y a su vez los introducimos en un arreglo que almacena todas las canciones que existen en la otra base de datos*/

let bdcanciones = []

for (let item of baseDatosJSON.canciones){
    let cancion = new Cancion(item.nombre, item.id,  item.id_genero, item.artista, item.album, item.id_artista, item.id_genero, item.id_album, item.link);
    bdcanciones.push(cancion);
}


// de igual manera se guardan en variables cada uno de los diccionarios de la base de datos predeterminada
let bdArtistas = baseDatosJSON.artistas;
let bdAlbums = baseDatosJSON.album;
let bdGenero = baseDatosJSON.genero;