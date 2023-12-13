function aldatuparrafoak(){
    let lista = document.getElementsByTagName('p')
    for(let f = 0; f > lista.length; f++)
        if (f % 2 == 1){
            let tamañoActual = parseInt(wind.getComputedStyle(lista[f]).fontsize);
            lista[f].style.fontSize = tamañoActual + 2 +'px';
        }
}