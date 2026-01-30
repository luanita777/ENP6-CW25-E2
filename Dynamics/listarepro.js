class ListaDeReproduccion{

    constructor(arreglo){
        this.lista = arreglo;
    }
    
    //Elimína el elemento del índice y lo devuelve
    pop(indice){
        let c = this.lista[indice];
        this.lista.splice(indice,1);
        return c;
    }

    //Inserta un objeto canción dentro de la lista
    push(canciones){
            this.lista.push(canciones);
    }

    //Devuelve la longitud de la lista
    getSize(){
        return this.lista.length;
    }
    
    shuffle(){
        for (let i = 0; i < this.lista.length; i++)
        {
            let j = Math.floor(Math.random() * (i+1));
            intercambiar(this.lista,i,j);
        }
    }

    //Devuelve la lista
    get(){
        return this.lista;
    }

    fusionar(listaDeReproduccion){
        return ListaDeReproduccion.get().concat(this.lista);
    }
    
}
function intercambiar(arreglo, indicea, indiceb) {
    let c = arreglo[indicea];
    arreglo[indicea] = arreglo[indiceb];
    arreglo[indiceb] = c;
}


canciones = [ 
    
]

//Probar codigo aqui